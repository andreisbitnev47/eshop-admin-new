import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});
const OrderShipping = ({ classes, handleClick, open }) => (
    <List
          component="nav"
          className={classes.root}
        >
        <ListItem onClick={handleClick}>
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
            </ListItem>
        </List>
        </Collapse>
    </List>
);

OrderShipping.propTypes = {
    classes: PropTypes.object.isRequired,
};

  
export default compose(
    withStyles(styles, { withTheme: true }),
    withState('open', 'toggleOpen', false),
    withHandlers({
        handleClick: ({ toggleOpen, open }) => () => {
            toggleOpen(!open);
        }
    }),
)(OrderShipping);