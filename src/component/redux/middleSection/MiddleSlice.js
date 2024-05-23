import { createSlice } from "@reduxjs/toolkit";
import {
  chooseUsData,
  data,
} from "../../../Data/middleSection/MiddleSectionData";

const initialState = {
  chooseUsData: chooseUsData,
  data: data,
};

const MiddleSlice = createSlice({
  name: "MiddleSlice",
  initialState,
});

export const selectedValue = (state) => state.MiddleSlice.chooseUsData;
export const selectedMain = (state) => state.MiddleSlice.data;
export default MiddleSlice.reducer;
