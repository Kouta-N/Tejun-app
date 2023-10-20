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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterIndex.actions;

export default counterIndex.reducer;
