
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  modalStaus: false
  ,modalInfo: null
  ,goPage: null
  ,moreModalStatus: false
}

const commonSlice = createSlice({
  name: 'commonModal'
  ,initialState
  ,reducers: {
    setCommonModalOn: (state, { payload }) => {
      state.modalStatus = true;
      state.modalInfo = payload;
      state.goPage = payload.goPage;
    }
  }
});

export const {
  setCommonModalOn
} = commonSlice.reducer;

export default commonSlice;