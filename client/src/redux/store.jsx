import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songSlice";
import createSagaMiddleware from "redux-saga";
import songSaga from "./saga/songSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    addsong: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});

saga.run(songSaga);
