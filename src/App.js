import React from 'react';
import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin';
import { ProductList, ProductEdit, ProductCreate } from './products';
import { TranslationsList, TranslationEdit, TranslationCreate } from './translations';
import { OrderList, OrderEdit} from './orders';
import { ImageList, ImageCreate } from './image';
import { ContentList, ContentEdit } from './content';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="product" list={ProductList} edit={ProductEdit} create={ProductCreate} />
    <Resource name="order" list={OrderList} edit={OrderEdit}/>
    <Resource name="image" list={ImageList} create={ImageCreate}/>
    <Resource name="content" list={ContentList} edit={ContentEdit}/>
    <Resource name="translation" list={TranslationsList} edit={TranslationEdit} create={TranslationCreate} />
  </Admin>
);

export default App;