import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} from "../songSlice";

// Function to fetch songs from the server
function* fetchSongs() {
  try {
    const response = yield call(axios.get, "http://localhost:5000/api/songs");
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

// Function to add a song to the server
function* addSong(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:5000/api/songs",
      action.payload
    );

    yield put(addSongSuccess(response.data));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

// Function to update a song on the server
function* updateSong(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:5000/api/songs/editsong",
      action.payload
    );
    console.log(response.data, "server response");
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

// Function to delete a song from the server
function* deleteSong(action) {
  try {
    yield call(
      axios.post,
      "http://localhost:5000/api/songs/deletesong",
      action.payload
    );
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

// Watcher Sagas: Watch for respective actions dispatched
export function* watchFetchSongs() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
}

export function* watchAddSong() {
  yield takeLatest(addSongRequest.type, addSong);
}

export function* watchUpdateSong() {
  yield takeLatest(updateSongRequest.type, updateSong);
}

export function* watchDeleteSong() {
  yield takeLatest(deleteSongRequest.type, deleteSong);
}

// Root Saga: Combines all sagas
export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchAddSong(),
    watchUpdateSong(),
    watchDeleteSong(),
  ]);
}
