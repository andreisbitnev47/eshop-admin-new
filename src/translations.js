import React from 'react';
import { 
    List,
    Datagrid,
    TextField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    DisabledInput,
} from 'react-admin';

export const TranslationsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="key" />
            <TextField source="en" />
            <TextField source="est" />
            <TextField source="rus" />
        </Datagrid>
    </List>
);

export const TranslationEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="key" />
            <TextInput source="en" />
            <TextInput source="est" />
            <TextInput source="rus" />
        </SimpleForm>
    </Edit>
);

export const TranslationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="key" />
            <TextInput source="en" />
            <TextInput source="est" />
            <TextInput source="rus" />
        </SimpleForm>
    </Create>
);
