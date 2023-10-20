// ref: https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/App.js
import { createSlice } from "@reduxjs/toolkit";

export const counterIndex = createSlice({
  name: "index",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    resetIndex: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetIndex } = counterIndex.actions;

export default counterIndex.reducer;
