// ref: https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/App.js
// https://stackoverflow.com/questions/72185233/is-is-possible-to-use-an-typescript-union-type-for-the-state-of-a-redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

export const loggingInReducer = createSlice({
  name: "loggingIn",
  initialState: {
    value: false,
  },
  reducers: {
    loggingIn: (state) => {
      state.value = true;
    },
    loginSuccess: (state) => {
      state.value = false;
    },
    loginFailed: (state) => {
      state.value = false;
    },
  },
});

export const { loggingIn, loginSuccess, loginFailed } = loggingInReducer.actions;

export default loggingInReducer.reducer;
