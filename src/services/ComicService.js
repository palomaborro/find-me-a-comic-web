import { create } from './BaseService';

const http = create();

export const getNewComics = () => {
    return http.get('/new')
}

export const searchNewComics = (search) => {
    return http.get('/new', {params: {search: search}})
}

export const getComic = (id) => {
    return http.get(`/new/${id}`)
}

export const getComics = () => {
    return http.get('/comics')
}

export const searchComics = (search) => {
    return http.get('/comics', {params: {search: search}})
}