import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';
import productQueries from './queries/product';
import orderQueries from './queries/order';
import imageQueries from './queries/image';
import contentQueries from './queries/content';
import translationQueries from './queries/translation';
import { BACKEND_URL, BACKEND_GRAPHQL } from '../env';

const resourseMap = {
    product: productQueries,
    order: orderQueries,
    image: imageQueries,
    content: contentQueries,
    translation: translationQueries,
}

const client = require('graphql-client')({
    url: BACKEND_GRAPHQL,
    headers: {
        Authorization: localStorage.getItem('token'),
    }
});

/**
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const upload = (file) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        const options = {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": localStorage.getItem('token'),
            },
        };
        
        fetch(`${BACKEND_URL}/fileUpload`, options)
            .then((response) => {
                return response
            }).then((success) => {
                console.log(success);
                const result = { data: { id: `/images/${file.name}`, url: `${BACKEND_URL}/images/${file.name}`, title: file.name } };
                resolve(result);
            }).catch(
            error => console.log(error) // Handle the error response object
            );
          
    })
  };

function imageQueryResolver(type, resource, params) {
    return new Promise(async (resolve, reject) => {
        if (type === 'GET_LIST' || type === 'DELETE' || type === 'DELETE_MANY') {
            const { query, variables } = resourseMap[resource][type](params);
            client.query(query, variables, (req, res) => {
                if(res.status === 401) {
                    throw new Error('Not authorized')
                }
            })
            .then((response) => {
                const data = response.data['images']
                const result = { data: data.map((shortUrl) => ({ id: shortUrl, url: `${BACKEND_URL}${shortUrl}`, title: shortUrl })) };
                if (type === 'GET_LIST') {
                    result.total = data.length;
                }
                resolve(result);
            });
        } else if (type === 'CREATE') {
            const result = await upload(params.data.image.rawFile);
            resolve(result);
        }
    })
};

export default (type, resource, params) => {
    if (resource === 'image') {
        return imageQueryResolver(type, resource, params);
    }
    return new Promise((resolve, reject) => {
        const { query, variables } = resourseMap[resource][type](params);
        client.query(query, variables, (req, res) => {
            if(res.status === 401) {
                throw new Error('Not authorized')
            }
        })
        .then((response) => {
            const data = 
                type === 'GET_LIST' ? response.data[resource + 's'] :
                type === 'UPDATE' ? response.data['edit' + capitalize(resource)][resource] :
                type === 'CREATE' ? response.data['add' + capitalize(resource)][resource] :
                type === 'DELETE' ? response.data['delete' + capitalize(resource)][resource] :
                response.data[resource]
            const result = { data };
            if (type === 'GET_LIST') {
                result.total = data.length;
            }
            resolve(result);
        });
    })
    // return fetchJson(url, options)
    //     .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};
