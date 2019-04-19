import React from 'react';
import FormControl from '@material-ui/core/FormControl';

const OrderShipping = ({ source, record }) => {
    const value = `${record[source].name} - €${record[source].price} (${record[source].address})`;
    return (<FormControl>
        <h4 style={{ marginBottom: '0' }}>Shipping</h4>
        <p>{value}</p>
    </FormControl>);
};

export default OrderShipping;
