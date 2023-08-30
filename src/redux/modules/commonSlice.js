/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalStatus: false
  ,modalInfo: null
  ,goPage: null
  ,moreModalStatus: false
}

const commonSlice = createSlice({
  name: 'commonModal'
  ,initialState
  ,reducers: {
    setCommonModalOff: (state, { payload }) => {
      state.modalStatus = false;
      state.modalInfo = null;
      state.goPage = null
    },
    setCommonModalOn: (state, { payload }) => {
      state.modalStatus = true;
      state.modalInfo = payload;
      state.goPage = payload.goPage;
    },

  }
});

export const {
  setCommonModalOff,
  setCommonModalOn
} = commonSlice.actions;

export default commonSlice;