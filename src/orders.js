import React from 'react';
import { 
    List,
    Datagrid,
    TextField,
    ReferenceField,
    NumberField,
    BooleanField,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    SelectInput,
    LongTextInput,
    NumberInput,
    BooleanInput,
    DisabledInput,
} from 'react-admin';
import ObjectField from './components/ObjectField';
import OrderShipping from './components/OrderShipping';

import ImageSelect from './components/ImageSelect';

export const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="total" />
            <NumberField source="totalWithShipping" />
            <TextField source="status" />
            <TextField source="phone" />
            <ObjectField source="user" label="email" keyName="email" />
            <ObjectField source="shippingProvider" label="Shipping cost" keyName="price"/>
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="total" />
            <DisabledInput source="totalWithShipping" />
            <SelectInput source="status" choices={[
                { id: 'NEW', name: 'NEW' },
                { id: 'PAID', name: 'PAID' },
                { id: 'SENT', name: 'SENT' },
            ]} />
            <DisabledInput source="phone" />
            <OrderShipping source="shippingProvider" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="titleEn" />
            <TextInput source="titleEst" />
            <TextInput source="titleRus" />
            <LongTextInput source="descriptionShortEn" />
            <LongTextInput source="descriptionShortEst" />
            <LongTextInput source="descriptionShortRus" />
            <LongTextInput source="descriptionLongEn" />
            <LongTextInput source="descriptionLongEst" />
            <LongTextInput source="descriptionLongRus" />
            <NumberInput source="amount" />
            <BooleanInput source="available"/>
            <ImageSelect source="imgSmall"/>
            <ImageSelect source="imgBig"/>
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);