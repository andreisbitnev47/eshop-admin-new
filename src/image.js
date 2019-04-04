import React from 'react';
import { 
    List,
    Datagrid,
    ImageField,
    ImageInput,
    Create,
    SimpleForm
} from 'react-admin';

export const ImageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ImageField source="url" title="title" />
        </Datagrid>
    </List>
);

export const ImageCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <ImageInput source="image" label="Images" accept="image/jpeg, image/png">
            <ImageField source="src" title="title" />
        </ImageInput>
        </SimpleForm>
    </Create>
);