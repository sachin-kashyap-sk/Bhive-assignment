import { configureStore } from "@reduxjs/toolkit";
import MiddleSlice from "../redux/middleSection/MiddleSlice";
export const store = configureStore({
  reducer: {
    MiddleSlice: MiddleSlice,
  },
});

export default store;
