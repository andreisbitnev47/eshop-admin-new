import React from 'react';
import PropTypes, { any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { Field } from 'redux-form';
import { BACKEND_URL, BACKEND_GRAPHQL } from '../env';

const client = require('graphql-client')({
    url: BACKEND_GRAPHQL,
    headers: {
        Authorization: localStorage.getItem('token'),
    }
});

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    menuItem: {

    }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const InnerComponent = ({
    classes,
    selectedImage,
    setSelectedImage,
    altEn,
    setAltEn,
    altEst,
    setAltEst,
    altRus,
    setAltRus,
    images,
    source,
    saveImage,
    deleteImage,
    imageObjs,
    setSelectedImageObj,
    }) => (

    <div className={classes.root}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex' }}>
                {imageObjs.map((imageObj, index) => (
                    <Chip
                        avatar={<Avatar alt="image" src={`${BACKEND_URL}${imageObj.url}`} />}
                        label={imageObj.alt.en}
                        onDelete={() => { deleteImage(index) }}
                        onClick={() => { setSelectedImageObj(index) }}
                    />
                ))}
                <Chip
                        label="+"
                        onClick={() => { setSelectedImageObj(imageObjs.length) }}
                    />
            </div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="url">Image</InputLabel>
                <Select
                    value={selectedImage}
                    onChange={(event) => {
                        setSelectedImage(event.target.value);
                    }}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {images.map(({short, full}) => (
                    <MenuItem key={short} value={short} 
                    style={{
                        backgroundImage: `url('${full}')`,
                        height: '40px',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left top',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        {/* <div style={{height: '40px', width: '40px', backgroundImage: `url('${full}')`}}></div> */}
                        {short}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="altEn">Image description en</InputLabel>
                <Input name="altEn" value={altEn} onChange={(event) => { setAltEn(event.target.value )}}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="altEn">Image description est</InputLabel>
                <Input name="altEst" value={altEst} onChange={(event) => { setAltEst(event.target.value )}}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="altEn">Image description rus</InputLabel>
                <Input name="altRus" value={altRus} onChange={(event) => { setAltRus(event.target.value )}}/>
            </FormControl>
        </div>
        <Field name={source} component={({ input }) => (
            <Button style={{ width: '150px' }} variant="contained" color="primary" onClick={() => { saveImage(input.onChange); }}>
                Save Image
            </Button>
        )}/>
    </div>
);

InnerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles, { withTheme: true }),
    withState('images', 'setImages', []),
    withState('selectedImage', 'setSelectedImage', ''),
    withState('altEn', 'setAltEn', ''),
    withState('altEst', 'setAltEst', ''),
    withState('altRus', 'setAltRus', ''),
    withState('selected', 'setSelected', 0),
    withState('imageObjs', 'setImageObjs', []),
    withHandlers({
        setSelectedImageObj: ({ setSelectedImage, setAltEn, setAltEst, setAltRus, setSelected, imageObjs }) => (index) => {
            const selectedImageObj = imageObjs[index] || {
                url: '',
                alt: {
                    en: '', est: '', rus: ''
                },
            };
            setSelected(index);
            setSelectedImage(selectedImageObj.url || '');
            setAltEn(selectedImageObj.alt.en || '');
            setAltEst(selectedImageObj.alt.est || '');
            setAltRus(selectedImageObj.alt.rus || '');
        },
    }),
    withHandlers({
        saveImage: ({ selected, selectedImage, altEn, altEst, altRus, imageObjs, setImageObjs }) => (handler) => {
            const imageObj = {
                url: selectedImage,
                alt: {
                    en: altEn || '', est: altEst || '', rus: altRus || ''
                }
            }
            const newImageObjs = [...imageObjs];
            newImageObjs[selected] = imageObj;
            setImageObjs(newImageObjs);
            handler(newImageObjs);
        },
        deleteImage: ({ imageObjs, setImageObjs, setSelectedImageObj }) => (index) => {
            const newImageObjs = [...imageObjs];
            newImageObjs.splice(index, 1);
            setImageObjs(newImageObjs);
            setSelectedImageObj(0);
        },
    }),
    lifecycle({
        componentDidMount() {
            const { source, record } = this.props;
            this.props.setImageObjs(record[source] || []);
            const setSelectedImageObj = this.props.setSelectedImageObj;
            setTimeout(() => { setSelectedImageObj(0); }, 500);
            const query = `
                {
                    images
                }
            `;
            const { setImages } = this.props;
            client.query(query, {})
            .then((result) => {
                const images = result.data.images.map(url => ({
                    short: url,
                    full: `${BACKEND_URL}${url}`
                }));
                setImages(images);
            });
        }
    })

)(InnerComponent);
