import { createSlice } from "@reduxjs/toolkit";

export interface ScreensState {}

export const initialState: ScreensState = {};

/*********************
REDUCERS
**********************/
export const screensSlice = createSlice({
  name: "screens",
  initialState: initialState,
  reducers: {},
});

/*********************
ACTIONS
**********************/
export const {} = screensSlice.actions;

/*********************
THUNK
**********************/
// export const funcName = () => (dispatch: any, getState: () => RootState) => {};

/*********************
SELECTORS
**********************/
// export const selectProject = (state: RootState) =>
//   state[fieldSlice.name].project;
