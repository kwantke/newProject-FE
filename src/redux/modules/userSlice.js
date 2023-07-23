
import { createSlice } from '@reduxjs/toolkit'
import {deleteCookie} from "../../shared/config/cookie";

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

  }
})

export const {
  logOut
} = userSlice.actions;
