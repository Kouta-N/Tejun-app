// ref: https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/App.js
// https://stackoverflow.com/questions/72185233/is-is-possible-to-use-an-typescript-union-type-for-the-state-of-a-redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

type errorState = { error: string | undefined };
const initialErrorState: errorState = { error: '' };

export const errorReducer = createSlice({
  name: "error",
  initialState: initialErrorState as errorState,
  reducers: {
    errorProcessing: () => {
      return { error: undefined };
    },
    errorSuccess: () => {
      return { error: '' };
    },
    errorFailed: (state: any) => {
      return { error: state };
    },
  },
});


export const { errorProcessing,errorSuccess,errorFailed, } = errorReducer.actions;

export default errorReducer.reducer;
