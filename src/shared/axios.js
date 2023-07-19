import axios from 'axios';
import {cookies, deleteCookie} from "./cookie";

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

apis.interceptors.response.use(
  (response)=>{
    return response;
  },
  (error) => {
    if(error.response.status === 401) {
      deleteCookie("token");
      alert("로그인이 만료되었습니다.")
      window.location.href = "localhost:3000"
    }

    return Promise.reject(error);
  }
);

