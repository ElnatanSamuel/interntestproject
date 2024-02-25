import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSongs: [],
  isLoading: false,
};

export const songSlice = createSlice({
  name: "allsongs",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccses: (state, action) => {
      state.allSongs = action.payload;
      state.isLoading = false;
    },
    deleteSong: (state, action) => {
      state.allSongs = state.allSongs.filter(
        (song) => song.id !== action.payload
      );
    },
  },
});

export const { getSongsFetch, getSongsSuccses, deleteSong } = songSlice.actions;
export default songSlice.reducer;
