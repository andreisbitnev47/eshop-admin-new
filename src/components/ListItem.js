import React from 'react';
import PropTypes, { any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { Field } from 'redux-form';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: '15px',
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
    source,
    list,
    deleteListItem,
    setSelectedListItem,
    listItem,
    setListItem,
    saveListItem,
    }) => (

    <div className={classes.root}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {list.map((listItem, index) => (
                    <Chip
                        label={listItem}
                        onDelete={() => { deleteListItem(index) }}
                        onClick={() => { setSelectedListItem(index) }}
                    />
                ))}
                <Chip
                        label="+"
                        onClick={() => { setSelectedListItem(list.length) }}
                    />
            </div>
            <div style={{ maxWidth: '90vw', width: '90vw', position: 'relative' }}>
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor={source}>{source}</InputLabel>
                    <Input name={source} value={listItem} onChange={(event) => { setListItem(event.target.value )}} multiline={true} rowsMax={Infinity} style={{ maxWidth: '100%' }}/>
                </FormControl>
            </div>
        </div>
        <Field name={source} component={({ input }) => (
            <Button style={{ width: '150px', marginTop: '5px' }} variant="contained" color="primary" onClick={() => { saveListItem(input.onChange); }}>
                {`Save ${source}`}
            </Button>
        )}/>
    </div>
);

InnerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles, { withTheme: true }),
    withState('list', 'setList', []),
    withState('selected', 'setSelected', 0),
    withState('listItem', 'setListItem', ''),
    withHandlers({
        setSelectedListItem: ({ list, setListItem, setSelected }) => (index) => {
            const selectedListItem = list[index] || '';
            setSelected(index);
            setListItem(selectedListItem);
        },
    }),
    withHandlers({
        saveListItem: ({ selected, listItem, list, setList }) => (handler) => {
            const newList = [...list];
            newList[selected] = listItem;
            setList(newList);
            handler(newList);
        },
        deleteListItem: ({ list, setList, setSelectedListItem }) => (index) => {
            const newList = [...list];
            newList.splice(index, 1);
            setList(newList);
            setTimeout(() => { setSelectedListItem(0); }, 500);
        },
    }),
    lifecycle({
        componentDidMount() {
            const { source, record } = this.props;
            this.props.setList(record[source] || []);
            const setSelectedListItem = this.props.setSelectedListItem;
            setTimeout(() => { setSelectedListItem(0); }, 500);
        }
    })
)(InnerComponent);
