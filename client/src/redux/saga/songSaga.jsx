import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsFetch, getSongsSuccses } from "../songSlice";
import axios from "axios";

function* workGetSongsFetch() {
  //   const allSongs = yield axios.get("http://localhost:5000/api/allsongs");

  const allSongs = yield call(() =>
    fetch(
      "http://elnatansamueldev.internaddis.com.elnatansamueldev.com/api/allsongs"
    )
  );

  const songsData = yield allSongs.json();
  yield put(getSongsSuccses(songsData));
}

function* songSaga() {
  yield takeEvery(getSongsFetch, workGetSongsFetch);
}

export default songSaga;
