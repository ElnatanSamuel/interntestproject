import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./index";
import rootSaga from "./saga/songSaga";
import songReducer from "./songSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    allsongs: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
