import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SessionStatusEnum } from "../../api";
import { RootState } from "../Store";

export interface DashboardState {
  searchTerm: string | undefined;
  showFilters: boolean;
  filterStartDate: string | undefined;
  filterEndDate: string | undefined;
  filterStatus: SessionStatusEnum | undefined;
}

export const initialState: DashboardState = {
  searchTerm: undefined,
  showFilters: false,
  filterStartDate: undefined,
  filterEndDate: undefined,
  filterStatus: undefined,
};

/*********************
REDUCERS
**********************/
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string | undefined>) => {
      state.searchTerm = action.payload;
    },
    setShowFilters: (state, action: PayloadAction<boolean>) => {
      state.showFilters = action.payload;
    },
    setFilterStartDate: (state, action: PayloadAction<string | undefined>) => {
      state.filterStartDate = action.payload;
    },
    setFilterEndDate: (state, action: PayloadAction<string | undefined>) => {
      state.filterEndDate = action.payload;
    },
    setFilterStatus: (
      state,
      action: PayloadAction<SessionStatusEnum | undefined>
    ) => {
      state.filterStatus = action.payload;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setSearchFilter,
  setShowFilters,
  setFilterStartDate,
  setFilterEndDate,
  setFilterStatus,
} = dashboardSlice.actions;

/*********************
SELECTORS
**********************/
export const selectSearchTerm = (state: RootState) =>
  state[dashboardSlice.name].searchTerm;

export const selectShowFilters = (state: RootState) =>
  state[dashboardSlice.name].showFilters;

export const selectFilterStartDate = (state: RootState) =>
  state[dashboardSlice.name].filterStartDate;

export const selectFilterEndDate = (state: RootState) =>
  state[dashboardSlice.name].filterEndDate;

export const selectFilterStatus = (state: RootState) =>
  state[dashboardSlice.name].filterStatus;
