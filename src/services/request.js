import axios from 'axios';
import { getToken } from '../utils/auth';

const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://103.107.182.194:1331',
  timeout: 10000, // Request timeout
});

service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (getToken()) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = `Bearer ${getToken()}`;
      config.headers['Accept-Lanugage'] = 'vi-VN'
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default service;