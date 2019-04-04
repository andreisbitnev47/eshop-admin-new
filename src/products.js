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
    SelectArrayInput
} from 'react-admin';

import ImageSelect from './components/ImageSelect';

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="titleEn" />
            <TextField source="handle" />
            <NumberField source="amount" />
            <BooleanField source="available" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="titleEn" />
            <TextInput source="titleEst" />
            <TextInput source="titleRus" />
            <LongTextInput source="descriptionShortEn" />
            <LongTextInput source="descriptionShortEst" />
            <LongTextInput source="descriptionShortRus" />
            <LongTextInput source="descriptionLongEn" />
            <LongTextInput source="descriptionLongEst" />
            <LongTextInput source="descriptionLongRus" />
            <DisabledInput source="handle" />
            <NumberInput source="amount" />
            <BooleanInput source="available"/>
            <ImageSelect source="imgSmall"/>
            <ImageSelect source="imgBig"/>
            <NumberInput source="price" />
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