
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addUser
  ,logIn
} from '../../shared/api/userApi'
import {setCommonModalOn} from "../modules/commonSlice";
// 회원등록
export const addUserDB = createAsyncThunk(
  'user/addUser'
  ,async (data, thunkAPI) => {
    try {
      const response = await addUser(data);
      if(response) {
        const modalParams = {
          title: '회원가입에 성공하셨습니다'
          ,goPage: '/'
        };
        thunkAPI.dispatch(setCommonModalOn(modalParams));
      }
    } catch (err) {
      const modalParams = {
        title: `${err.response.data.errMsg}`
      };
      thunkAPI.dispatch(setCommonModalOn(modalParams));
      return thunkAPI.rejectWithValue('<<',err);

    }
  }
);
// 로그인
export const loginDB = createAsyncThunk(
  'user/login'
  ,async (data, thunkAPI) => {
    try {
      //const response = await logIn(data);
      const response = await logIn(data);
      if(response) {
        const accessToken = response.data.accessToken;

      }
    } catch (err) {
      console.log('error ::::::', err.response);
      const modalParams = {
        title: `${err.response.data.errMsg}`,
      }
      thunkAPI.dispatch(setCommonModalOn(modalParams));
      return thunkAPI.rejectWithValue('<<',err);
    }
  }
);