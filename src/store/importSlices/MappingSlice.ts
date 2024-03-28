import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  FieldMappingSettingsResponse,
  MappingApi,
  MappingDisplayEnum,
  PvOrderingEnum,
  RawAjaxResponse,
} from "../../api";
import { Config } from "../../common/config/Config";
import { RootState } from "../Store";
import {
  MappingSettings,
  SourceDataHeader,
  SourceFieldCandidate,
  UnmatchedSourceField,
} from "./ImportRTK/generated-hooks";
import { setMappingStatus } from "./SharedSlice";

/*********************
STATE INTERFACE
**********************/
export interface MappingState {
  metaHoverTooltipShown: boolean;
  fetchingSettings: boolean;
  tableLoading: boolean;
  mappingSettings: MappingSettings;
  sourceDataFields: SourceDataHeader[] | undefined;
  mappingCandidates: SourceFieldCandidate[] | undefined;
  unmatchedSourceFields: UnmatchedSourceField[] | undefined;
  page: number;
  pageSize: number;
  searchTerm: string;
  showUnmatchedOnly: boolean;
  showMatchedOnly: boolean;
  currentSheet: string | undefined;
  disabledTableRow: number | undefined;
  removeMappingLoading: boolean;
  removeMappingSuccess: boolean;
  showUnmappedModal: boolean;
  mappingError:
    | { key: string; message: string; description: string }
    | undefined;
}

/*********************
INITIAL STATE 
**********************/
export const initialState: MappingState = {
  metaHoverTooltipShown: false,
  fetchingSettings: false,
  tableLoading: false,
  mappingSettings: {
    mappingDisplay: MappingDisplayEnum.Name,
    pvOrdering: PvOrderingEnum.Word,
    linkedFieldSelection: false,
    repeatInstanceColumns: [],
  } as MappingSettings,
  sourceDataFields: undefined,
  mappingCandidates: undefined,
  unmatchedSourceFields: undefined,
  page: 1,
  pageSize: 50,
  searchTerm: "",
  showUnmatchedOnly: false,
  showMatchedOnly: false,
  currentSheet: undefined,
  disabledTableRow: -1,
  removeMappingLoading: false,
  removeMappingSuccess: false,
  showUnmappedModal: false,
  mappingError: undefined,
};

/*********************
REDUCERS
**********************/
export const mappingSlice = createSlice({
  name: "mapping",
  initialState: initialState,
  reducers: {
    setMetaHoverTooltipShown: (state, action: PayloadAction<boolean>) => {
      state.metaHoverTooltipShown = action.payload;
    },
    setFetchingSettings: (state, action: PayloadAction<boolean>) => {
      state.fetchingSettings = action.payload;
    },
    setTableLoading: (state, action: PayloadAction<boolean>) => {
      state.tableLoading = action.payload;
    },
    setMappingSettings: (state, action: PayloadAction<MappingSettings>) => {
      state.mappingSettings = action.payload;
    },
    setSourceDataFields: (
      state,
      action: PayloadAction<SourceDataHeader[] | undefined>
    ) => {
      state.sourceDataFields = action.payload;
    },
    setMappingCandidates: (
      state,
      action: PayloadAction<SourceFieldCandidate[] | undefined>
    ) => {
      state.mappingCandidates = action.payload;
    },
    setUnmatchedSourceFields: (
      state,
      action: PayloadAction<UnmatchedSourceField[] | undefined>
    ) => {
      state.unmatchedSourceFields = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setShowUnmatchedOnly: (state, action: PayloadAction<boolean>) => {
      state.showUnmatchedOnly = action.payload;
    },
    setShowMatchedOnly: (state, action: PayloadAction<boolean>) => {
      state.showMatchedOnly = action.payload;
    },
    setCurrentSheet: (state, action: PayloadAction<string | undefined>) => {
      state.currentSheet = action.payload;
    },
    setDisabledTableRow: (state, action: PayloadAction<number | undefined>) => {
      state.disabledTableRow = action.payload;
    },
    setRemoveMappingLoading: (state, action: PayloadAction<boolean>) => {
      state.removeMappingLoading = action.payload;
    },
    setRemoveMappingSuccess: (state, action: PayloadAction<boolean>) => {
      state.removeMappingSuccess = action.payload;
    },
    setShowUnmappedModal: (state, action: PayloadAction<boolean>) => {
      state.showUnmappedModal = action.payload;
    },
    setMappingError: (
      state,
      action: PayloadAction<
        { key: string; message: string; description: string } | undefined
      >
    ) => {
      state.mappingError = action.payload;
    },
    resetMappingState: () => {
      return initialState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setMetaHoverTooltipShown,
  setFetchingSettings,
  setTableLoading,
  setMappingSettings,
  setSourceDataFields,
  setMappingCandidates,
  setUnmatchedSourceFields,
  resetMappingState,
  setPage,
  setPageSize,
  setSearchTerm,
  setShowUnmatchedOnly,
  setShowMatchedOnly,
  setCurrentSheet,
  setDisabledTableRow,
  setRemoveMappingLoading,
  setRemoveMappingSuccess,
  setShowUnmappedModal,
  setMappingError,
} = mappingSlice.actions;

/*********************
THUNKS
**********************/
export const fetchMappingSettings = (sessionUid: string) => (dispatch: any) => {
  const mappingApi = new MappingApi(Config.API_CONFIG);

  dispatch(setFetchingSettings(true));
  mappingApi.getMappingSettings({ sessionUid }).subscribe(
    (response: FieldMappingSettingsResponse) => {
      if (response.result) {
        const res = response.result;
        dispatch(setMappingStatus(res.status));
        dispatch(setMappingSettings(res.settings));
      }
    },
    (error: RawAjaxResponse<FieldMappingSettingsResponse>) => {
      dispatch(
        setMappingError({
          key: "mapping-settings-error",
          description: "Failed to Fetch Mapping Settings",
          message: error.response.message,
        })
      );
    }
  );
  dispatch(setFetchingSettings(false));
};

/*********************
SELECTORS
**********************/
export const selectMetaHoverTooltipShown = (state: RootState) =>
  state[mappingSlice.name].metaHoverTooltipShown;

export const selectFetchingSettings = (state: RootState) =>
  state[mappingSlice.name].fetchingSettings;

export const selectTableLoading = (state: RootState) =>
  state[mappingSlice.name].tableLoading;

export const selectMappingSettings = (state: RootState) =>
  state[mappingSlice.name].mappingSettings;

export const selectSourceDataFields = (state: RootState) =>
  state[mappingSlice.name].sourceDataFields;

export const selectMappingCandidates = (state: RootState) =>
  state[mappingSlice.name].mappingCandidates;

export const selectUnmatchedSourceFields = (state: RootState) =>
  state[mappingSlice.name].unmatchedSourceFields;

export const selectPage = (state: RootState) => state[mappingSlice.name].page;

export const selectPageSize = (state: RootState) =>
  state[mappingSlice.name].pageSize;

export const selectSearchTerm = (state: RootState) =>
  state[mappingSlice.name].searchTerm;

export const selectShowUnmatchedOnly = (state: RootState) =>
  state[mappingSlice.name].showUnmatchedOnly;

export const selectShowMatchedOnly = (state: RootState) =>
  state[mappingSlice.name].showMatchedOnly;

export const selectCurrentSheet = (state: RootState) =>
  state[mappingSlice.name].currentSheet;

export const selectDisabledTableRow = (state: RootState) =>
  state[mappingSlice.name].disabledTableRow;

export const selectRemoveMappingLoading = (state: RootState) =>
  state[mappingSlice.name].removeMappingLoading;

export const selectRemoveMappingSuccess = (state: RootState) =>
  state[mappingSlice.name].removeMappingSuccess;

export const selectShowUnmappedModal = (state: RootState) =>
  state[mappingSlice.name].showUnmappedModal;

export const selectMappingError = (state: RootState) =>
  state[mappingSlice.name].mappingError;
