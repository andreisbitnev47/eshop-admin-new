import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import get from 'lodash/get';
import { BACKEND_GRAPHQL } from './env';

const client = require('graphql-client')({
    url: BACKEND_GRAPHQL,
});

const loginMutation = `
    mutation LoginMutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
        }
    }
`;

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return new Promise((resolve, reject) => {
            client.query(loginMutation, { username, password }, (req, res) => {
                if(res.status === 401) {
                    throw new Error('Not authorized')
                }
            })
            .then((response) => {
                const token = get(response, 'data.login.token', '');
                localStorage.setItem('token', token);
                resolve();
            });
        });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};