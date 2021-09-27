import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3001'
})

http.interceptors.response.use(
    (response) => response.data,
    (err) => console.error(err)
)

export default http;