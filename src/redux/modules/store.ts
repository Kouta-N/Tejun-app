import { configureStore } from "@reduxjs/toolkit";
import counterIndex from "./counterIndex";
import loadedReducer from "./loadedReducer";
import loggingInReducer from "./loggingInReducer";
import errorReducer from "./errorReducer";

export default configureStore({
  reducer: {
    index: counterIndex,
    loggingIn: loggingInReducer,
    loaded: loadedReducer,
    error: errorReducer,
  },
});
