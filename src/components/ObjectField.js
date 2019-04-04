import React from 'react';

const ObjectField = ({ source, record = {}, keyName }) => <span>{record[source][keyName]}</span>;

export default ObjectField;