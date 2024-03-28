import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfoFragment } from "../../builder/graphql/Operations";
import { RootState } from "../Store";

export interface SharedState {
  user: UserInfoFragment | undefined;
}

export const initialState: SharedState = {
  user: undefined,
};

/*********************
REDUCERS
**********************/
export const sharedSlice = createSlice({
  name: "builderShared",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfoFragment | undefined>) => {
      state.user = action.payload;
    },
  },
});

/*********************
ACTIONS
**********************/
export const { setUser } = sharedSlice.actions;

/*********************
THUNK
**********************/
// export const funcName = () => (dispatch: any, getState: () => RootState) => {};

/*********************
SELECTORS
**********************/
export const selectUser = (state: RootState) => state[sharedSlice.name].user;
