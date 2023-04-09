import * as request from './requester';

const baseUrl = `http://localhost:3030/users`;

export const user = (userData) => {
    return request.post(`${baseUrl}/login`, userData);
}