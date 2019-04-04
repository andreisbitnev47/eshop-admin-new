import React from 'react';
import PropTypes, { any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { Field } from 'redux-form';
import { BACKEND_URL, BACKEND_GRAPHQL } from '../env';

const client = require('graphql-client')({
    url: BACKEND_GRAPHQL,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
});

const styles = theme => ({
    root: {
        display: 'flex',
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

const MultipleSelect = ({ classes, selectedImages, handleChange, images, source, hover }) => (

    <div className={classes.root}>
        <Field name={source} component={({ input }) => {
            return (
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor={source}>{source}</InputLabel>
                        <Select
                            multiple
                            value={selectedImages}
                            onChange={(event) => {
                                handleChange(event);
                                input.onChange(event.target.value);
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
                </div>
            )
        }}/>
        {
            hover ?
            <img style={{ height: '250px', width: 'auto'}} src={hover}/> : null
        }
    </div>
);

MultipleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles, { withTheme: true }),
    withState('images', 'setImages', []),
    withState('selectedImages', 'setSelectedImages', []),
    withState('hover', 'sethover', ''),
    withHandlers({
        handleChange: ({ setSelectedImages }) => event => {
            setSelectedImages(event.target.value);
        },
        handleChangeMultiple: ({ setSelectedImages }) => event => {
            const { options } = event.target;
            const value = [];
            for (let i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            setSelectedImages(value)
        },
    }),
    lifecycle({
        componentDidMount() {
            const { source, record } = this.props;
            this.props.setSelectedImages(record[source] || []);
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

)(MultipleSelect);
