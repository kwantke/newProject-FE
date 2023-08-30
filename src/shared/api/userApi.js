import {api} from "./index";


//회원가입
const addUser = userInfo => api.post('/users/signup', userInfo);
// 로그인
const logIn = userInfo => api.post('/users/login', userInfo);
//const logIn = () => api.get('/oauth2/authorization/google');

/* 유저 닉네임 중복체크 */
const checkEmail = email => api.post('/users/checkId', email);

export {
  addUser,
  logIn,
  checkEmail

};
