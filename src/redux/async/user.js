
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addUser
  ,login
} from '../../shared/api/userApi'
//히원등록
export const addUserDB = createAsyncThunk(
  'user/addUser'
  ,async (data, thunkAPI) => {
    try {
      const response = await addUser(data);
      if(response) {
        const modalParams = {
          title: '회원가입에 성공하셨습니다'
          ,goPage: '/login'
        };
        thunkAPI.dispatch();
      }
    } catch (err) {
      const modalParams = {
        title: `${err.response.data.errMsg}`
      };
      thunkAPI.dispatch();
      return thunkAPI.rejectWithValue('<<',err)

    }
  }
);

export const loginDB = createAsyncThunk(

)