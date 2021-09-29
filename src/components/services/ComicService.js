import http from './BaseService';

export const getComics = () => {
    return http.get('/new')
}

export const getComic = (id) => {
    return http.get(`/new/${id}`)
}