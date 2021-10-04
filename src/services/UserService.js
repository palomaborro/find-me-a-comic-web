import { create } from './BaseService';

const http = create();

export const getCurrentUser = () => {
    return http.get('/mycollection')
}

export const createUser = (user) => {
    return http.post('users', user)
}