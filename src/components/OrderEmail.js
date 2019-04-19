import React from 'react';
import FormControl from '@material-ui/core/FormControl';

const OrderEmail = ({ source, record }) => {
    return (<FormControl>
        <h4 style={{ marginBottom: '0' }}>Email</h4>
        <p>{record[source].email}</p>
    </FormControl>);
};

export default OrderEmail;
