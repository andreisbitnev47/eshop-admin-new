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
import OrderEmail from './components/OrderEmail';
import OrderProducts from './components/OrderProducts';

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
            <TextField source="phone" />
            <OrderEmail source="user" />
            <OrderShipping source="shippingProvider" />
            <OrderProducts source="products" />
        </SimpleForm>
    </Edit>
);

