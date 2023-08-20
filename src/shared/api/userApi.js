import {api} from "./index";


//회원가입
const addUser = userInfo => api.post('/users/register', userInfo);
// 로그인
const logIn = userInfo => api.post('/users/login', userInfo);
//const logIn = () => api.get('/oauth2/authorization/google');

/* 유저 닉네임 중복체크 */
const nicknameCheck = nickname => api.post('/users/check/nickname', nickname);
export {
  addUser,
  logIn,
  nicknameCheck

};
