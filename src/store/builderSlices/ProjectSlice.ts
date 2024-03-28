import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectInfoFragment } from "../../builder/graphql/Operations";
import { RootState } from "../Store";

export interface ProjectState {
  project: ProjectInfoFragment | undefined;
}

export const initialState: ProjectState = {
  project: undefined,
};

/*********************
REDUCERS
**********************/
export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    setProject: (
      state,
      action: PayloadAction<ProjectInfoFragment | undefined>
    ) => {
      state.project = action.payload;
    },
  },
});

/*********************
ACTIONS
**********************/
export const { setProject } = projectSlice.actions;

/*********************
THUNK
**********************/
// export const funcName = () => (dispatch: any, getState: () => RootState) => {};

/*********************
SELECTORS
**********************/
export const selectProject = (state: RootState) =>
  state[projectSlice.name].project;
