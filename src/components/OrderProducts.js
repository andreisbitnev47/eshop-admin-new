import React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const OrderProducts = ({ source, record }) => {
    const products = record[source];
    return (
        <div>
            <h3>Products</h3>
            {products.map(product => (
                <>
                    <p>Id - <a href={`/#/product/${product.productId}`}>{product.productId}</a></p>
                    <p>Title - {product.title}</p>
                    <p>Price - {product.price}</p>
                    <p>Amount - {product.amount}</p>
                    <p>Total - {product.total}</p>
                    <hr/>
                </>
            ))}
            
        </div>
    )
};

export default OrderProducts;
