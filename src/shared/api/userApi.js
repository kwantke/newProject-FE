import {api} from "./index";


//회원가입
const addUser = userInfo => api.post('/users/register', userInfo);
// 로그인
const logIn = userInfo => api.post('/user/auth', userInfo);