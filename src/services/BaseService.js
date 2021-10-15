import axios from 'axios';
import { getAccessToken } from "../store/AccessTokenStore";


export const create = (useAccessToken = true) => {
    const http = axios.create({
        baseURL: `${process.env.REACT_APP_API_HOST}` 
    })
  
    http.interceptors.request.use((request) => {
      if (useAccessToken && getAccessToken()) {
        request.headers.common.Authorization = `Bearer ${getAccessToken()}`;
      }
      return request;
    });
  
    http.interceptors.response.use((response) => response.data);
  
    return http;
  };