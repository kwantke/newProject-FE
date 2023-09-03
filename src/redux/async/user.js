
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addUser
  ,logIn
} from '../../shared/api/userApi'
import {setCommonModalOn} from "../modules/commonSlice";
import {setCookie} from "../../shared/config/cookie";
import {useNavigate} from "react-router-dom";


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
    } catch (error) {
      if(error.response.data.errorCode) {
        const modalParams = {
          title: `${error.response.data.errorMessage}`,
        }
        thunkAPI.dispatch(setCommonModalOn(modalParams));
      }
      return thunkAPI.rejectWithValue('<<',error);

    }
  }
);
// 로그인
export const loginDB = createAsyncThunk(
  'user/login'
  ,async (data, thunkAPI) => {

    try {

      const response = await logIn(data.userInfo);
      if(response) {

        const {
          accessToken,
          refreshToken,
          nickname,
          myImgUrl
        } = response.data.data

        setCookie("accessToken",accessToken);
        setCookie("refreshToken",refreshToken);

        const userInfo = {
          nickname: nickname,
          myImgUrl: myImgUrl
        }
        data.navigate("/test")
        //window.location.pathname = "/"
        return userInfo;
      }
    } catch (error) {
      if(error.response.data.errorCode) {
        const modalParams = {
          title: `${error.response.data.errorMessage}`,
        }
        thunkAPI.dispatch(setCommonModalOn(modalParams));
      }

      return thunkAPI.rejectWithValue('<<',error);
    }
  }
);