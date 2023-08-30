import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
/* eslint-disable */
/* slice module */
import userSlice from "./modules/userSlice";
import commonSlice from "./modules/commonSlice";

/* Reducer combine */
const reducer = combineReducers({
  user: userSlice.reducer,
  commonModal: commonSlice.reducer
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false}),
  devTools: true,
});

export default store;