import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      // return { ...state, fetchDone: true };
      state.fetchDone = true
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true
    },
    markFetchingFinsished: (state) => {
      state.currentlyFetching = false
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
