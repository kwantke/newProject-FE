
import { createSlice } from '@reduxjs/toolkit'
import {deleteCookie} from "../../shared/config/cookie";
import {
  addUserDB,
  loginDB} from "../async/user";
import commonSlice from "./commonSlice";

const initialState = {
  userInfo: {}
  ,isLogin: false
  ,modalStatus: false
}

const userSlice = createSlice({
  name: 'user'
  ,initialState
  ,reducers: {
    setModalOff: (state,{ payload }) => {
      state.modalStatus = false;
    },
    setModalNo: (state, { payload }) => {
      state.modalStatus = true;
    },
    logOut: (state, { payload }) => {
      deleteCookie('accessToken');
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
        title: `${action.meta.response.data.errorMessage}`
      };
      setCommonModalOn(modalParams);
    },
    // 로그인 성공시
    [loginDB.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLogin = true;
    },
    // 로그인 실패시
    [loginDB.rejected]: (state, action) => {
      /*const modalParams = {
        title: `${action.meta.response.data.errorMessage}`,
      }
      setCommonModalOn(modalParams);
      if(action.meta.response.data.errorCode) {

      }*/
    }
  }
})

export const {
  setModalOff,
  setModalNo,
  logOut
} = userSlice.actions;
export const { setCommonModalOn } =commonSlice.actions;
export default userSlice;