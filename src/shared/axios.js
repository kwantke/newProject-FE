import axios from 'axios';
import {cookies} from "./cookie";

/* Axios 인스턴스 설정*/
export const apis = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER,
});


apis.interceptors.request.use(async config =>{
  config.headers['content-type'] = 'application/jso; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers.Accept = '*/*';

  config.headers.Authorization = cookies.get("accessToken");
  return config;
});

