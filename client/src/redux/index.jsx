import { combineReducers } from "@reduxjs/toolkit";
import songReducer from "./songSlice";

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;
