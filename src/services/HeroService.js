import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/create-hero';

export const getAll = async () => {
    const result =  await request.get(baseUrl);
    const heroes = Object.values(result);

    return heroes;
};

export const getOne = async (heroId) => {
    const result = await request.get(`${baseUrl}/${heroId}`);
    
    return result
}

export const create = async (heroData) => {
    const result = await request.post(baseUrl, heroData);

    return result;
}

export const addComment = async (gameId, data) => {
    const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
    return result
}