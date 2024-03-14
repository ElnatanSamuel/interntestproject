import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: "allsongs",
  initialState,
  reducers: {
    fetchSongsRequest(state) {
      state.loading = true;
    },
    fetchSongsSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.songs = action.payload;
    },
    fetchSongsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSongRequest(state) {
      state.loading = true;
    },
    addSongSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.songs.push(action.payload);
    },
    addSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongRequest(state) {
      state.loading = true;
    },
    updateSongSuccess(state, action) {
      state.loading = false;
      state.error = null;
      const updatedSong = action.payload;
      state.songs = state.songs.map((song) =>
        song._id === updatedSong._id ? updatedSong : song
      );
    },
    updateSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongRequest(state) {
      state.loading = true;
    },
    deleteSongSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
    deleteSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = songSlice.actions;

export default songSlice.reducer;
