import { mainRequest } from './requester';

const baseUrl = `http://localhost:3030/users`;

export const userServiceFactory = (token) => {
    const request = mainRequest(token);
    
    return {
        user: (userData) => request.post(`${baseUrl}/login`, userData),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};