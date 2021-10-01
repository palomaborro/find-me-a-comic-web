import { create } from './BaseService';

const http = create();

export const getComics = () => {
    return http.get('/new')
}

export const getComic = (id) => {
    return http.get(`/new/${id}`)
}