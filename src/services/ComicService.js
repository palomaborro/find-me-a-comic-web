import { create } from './BaseService';

const http = create();

export const getNewComics = () => {
    return http.get('/new')
}

export const searchNewComics = (search) => {
    return http.get('/new', {params: {search: search}})
}

export const getNewComic = (id) => {
    return http.get(`/new/${id}`)
}

export const getComics = () => {
    return http.get('/comics')
}

export const getComic = (id) => {
    return http.get(`/comics/${id}`)
}

export const searchComics = (search) => {
    return http.get('/comics', {params: {search: search}})
}

export const createComment = (comment, comicId) => {
    return http.post(`/comics/${comicId}/comments`, comment);
}

// export const deleteComment = (comment, comicId) => {
//     return http.post(`/comics/${comicId}/comments`, comment);
// }

export const createList = (list) => {
    return http.post('/mycollection/lists', list);
}

export const getLists = () => {
    return http.get('/lists');
}

export const addComicToList = (listId, comicId) => {
    return http.put(`/lists/${comicId}`, {listId});
}

export const createFav = (fav, comicId) => {
    return http.post(`/comics/${comicId}/fav`, fav);
}