import React from 'react';
import { 
    ImageField,
} from 'react-admin';

const TextField = ({ source, record = {} }) => (
    <ImageField source="url" title="title" />
);

export default TextField;