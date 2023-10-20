import { configureStore } from "@reduxjs/toolkit";
import counterIndex from "./counterIndex";

export default configureStore({
  reducer: {
    index: counterIndex,
  },
});
