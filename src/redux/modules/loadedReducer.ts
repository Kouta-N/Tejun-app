// ref: https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/App.js
// https://stackoverflow.com/questions/72185233/is-is-possible-to-use-an-typescript-union-type-for-the-state-of-a-redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

export const loadedReducer = createSlice({
  name: "loaded",
  initialState: {
    value: false,
  },
  reducers: {
    loading: (state) => {
      state.value = false;
    },
    loadSuccess: (state) => {
      state.value = true;
    },
    loadFailed: (state) => {
      state.value = false;
    },
  },
});

export const { loading, loadSuccess, loadFailed } = loadedReducer.actions;

export default loadedReducer.reducer;
