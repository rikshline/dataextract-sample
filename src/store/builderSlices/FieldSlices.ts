import { createSlice } from "@reduxjs/toolkit";

export interface FieldState {}

export const initialState: FieldState = {};

/*********************
REDUCERS
**********************/
export const fieldSlice = createSlice({
  name: "field",
  initialState: initialState,
  reducers: {},
});

/*********************
ACTIONS
**********************/
export const {} = fieldSlice.actions;

/*********************
THUNK
**********************/
// export const funcName = () => (dispatch: any, getState: () => RootState) => {

// };

/*********************
SELECTORS
**********************/
// export const selectProject = (state: RootState) =>
//   state[fieldSlice.name].project;
