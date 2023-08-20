import axios from 'axios';
import {cookies, deleteCookie} from "../config/cookie";

/* Axios 인스턴스 설정*/
export const api = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER,
});


api.interceptors.request.use(async config =>{
  config.headers['content-type'] = 'application/jso; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers.Accept = '*/*';

  config.headers.Authorization = cookies.get("USER_TOKEN");
  return config;
});

api.interceptors.response.use(
  (response)=>{
    return response;
  },
  (error) => {
    if(error.response.status === 401) {
      deleteCookie("USER_TOKEN");
      alert("로그인이 만료되었습니다.")
      window.location.href = "localhost:3000"
    }

    return Promise.reject(error);
  }
);

