
import { createSlice } from '@reduxjs/toolkit'
import {deleteCookie} from "../../shared/config/cookie";
import {addUserDB, loginDB} from "../async/user";
import commonSlice from "./commonSlice";

const initialState = {
  userInfo: {}
  ,isLogin: false
}

const userSlice = createSlice({
  name: 'user'
  ,initialState
  ,reducers: {
    logOut: (state, { payload }) => {
      deleteCookie('USER_TOKEN');
      state.userInfo = {};
      state.isLogin = false;
    }
  }
  ,extraReducers: {
    //회원가입 성공시
    [addUserDB.fulfilled]: (state, { payload }) => {

    },
    [addUserDB.rejected]: (state, action) => {
      const modalParams = {
        title: `${action.meta.response.data.errdMsg}`
      };
    },
    // 로그인 성공시
    [loginDB.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLogin = true;
    },
    // 로그인 실패시
    [loginDB.rejected]: (state, action) => {
      const modalParams = {
        title: `${action.meta.response.data.errMsg}`,
      };
      setCommonModalOn(modalParams);
    }
  }
})

export const {
  logOut
} = userSlice.actions;
export const { setCommonModalOn } =commonSlice.actions;
export default userSlice;