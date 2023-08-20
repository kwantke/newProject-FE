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

  config.headers.access_token = cookies.get("accessToken");
  config.headers.refresh_token = cookies.get("refreshToken");
  return config;
});

api.interceptors.response.use(
  (response)=>{
    return response;
  },
  (error) => {
    if(error.response.status === 401) {
      deleteCookie("accessToken");
      alert("로그인이 만료되었습니다.")
      window.location.href = "localhost:3000"
    }

    return Promise.reject(error);
  }
);

