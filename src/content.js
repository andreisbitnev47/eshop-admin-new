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

import ImageAltUrlSelect from './components/ImageAltUrlSelect';
import ListItem from './components/ListItem';

export const ContentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="handle" />
            <TextField source="group" />
        </Datagrid>
    </List>
);

export const ContentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="titleEn" />
            <TextInput source="titleEst" />
            <TextInput source="titleRus" />
            <TextInput source="subTitleEn" />
            <TextInput source="subTitleEst" />
            <TextInput source="subTitleRus" />
            <LongTextInput source="paragraphEn" />
            <LongTextInput source="paragraphEst" />
            <LongTextInput source="paragraphRus" />
            <ImageAltUrlSelect source="imgAll"/>
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
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);