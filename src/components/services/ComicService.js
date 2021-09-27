import http from './BaseService';

export const getComics = () => {
    return http.get('/new')
}