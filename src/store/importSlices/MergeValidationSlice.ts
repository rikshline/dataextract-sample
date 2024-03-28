import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CalcMergeConflictsResponse,
  IdentifierWithMergeConflict,
  MergeApi,
  MergeModeEnum,
  RawAjaxResponse,
  RepeatingFormIdentifiers,
} from "../../api";
import { Config } from "../../common/config/Config";
import { RootState } from "../Store";
import {
  IdentifierMergeConflict,
  MergeSettings,
} from "./ImportRTK/generated-hooks";

/*********************
STATE INTERFACE
**********************/
export interface MergeConflictsState {
  saveInProgress: boolean;
  loadingMsg: string | undefined;
  mergeConflictErr: string | undefined;

  mergeMode: MergeModeEnum;
  mergeSetupComplete: boolean;
  reviewModeEnabled: boolean;
  calculateConflictsLoading: boolean;
  resolveConflictsComplete: boolean;

  remainingIdentifiers: [string, string, string][] | undefined;
  completionProgress: number | undefined;
  searchTerm: string | undefined;
  showConflictsOnly: boolean;
  totalForms: number;
  disabledTableRow: number | undefined;

  mergeSettings: MergeSettings;
  repeatFormIdentifiers: RepeatingFormIdentifiers[];
  identifiersWithConflicts: IdentifierWithMergeConflict[] | undefined;
  workingSheet: string | undefined;
  workingIdentifier: [string, number] | undefined;
  workingConflict: IdentifierMergeConflict | undefined;

  nextSheetIdentifier: {
    workingIdentifierDict: any | undefined;
    nextSheetName: string | undefined;
    nextIdentifier: [string, number] | undefined;
    nextIdentifierDict: any | undefined;
  };
}

/*********************
INITIAL STATE 
**********************/
export const initialState: MergeConflictsState = {
  saveInProgress: false,
  loadingMsg: undefined,

  mergeMode: MergeModeEnum.FormIdentifiers,
  mergeSetupComplete: false,
  reviewModeEnabled: false,
  calculateConflictsLoading: false,
  mergeConflictErr: undefined,
  resolveConflictsComplete: false,

  remainingIdentifiers: undefined,
  completionProgress: undefined,
  searchTerm: undefined,
  showConflictsOnly: false,
  totalForms: 0,
  disabledTableRow: -1,

  mergeSettings: {
    replaceBlankRc: true,
    reconciliationFields: [],
    overrideFields: [],
    overrideValues: [],
  } as MergeSettings,
  repeatFormIdentifiers: [],
  identifiersWithConflicts: undefined,
  workingSheet: undefined,
  workingIdentifier: undefined,
  workingConflict: undefined,

  nextSheetIdentifier: {
    workingIdentifierDict: undefined,
    nextSheetName: undefined,
    nextIdentifier: undefined,
    nextIdentifierDict: undefined,
  },
};

/*********************
REDUCERS
**********************/
export const mergeConflictsSlice = createSlice({
  name: "mergeConflicts",
  initialState: initialState,
  reducers: {
    setSaveInProgress: (state, action: PayloadAction<boolean>) => {
      state.saveInProgress = action.payload;
    },
    setLoadingMsg: (state, action: PayloadAction<string | undefined>) => {
      state.loadingMsg = action.payload;
    },
    setMergeMode: (state, action: PayloadAction<MergeModeEnum>) => {
      state.mergeMode = action.payload;
    },
    setMergeSetupComplete: (state, action: PayloadAction<boolean>) => {
      state.mergeSetupComplete = action.payload;
    },
    setReviewModeEnabled: (state, action: PayloadAction<boolean>) => {
      state.reviewModeEnabled = action.payload;
    },
    setCalculateConflictsLoading: (state, action: PayloadAction<boolean>) => {
      state.calculateConflictsLoading = action.payload;
    },
    setMergeConflictErr: (state, action: PayloadAction<string | undefined>) => {
      state.mergeConflictErr = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string | undefined>) => {
      state.searchTerm = action.payload;
    },
    setShowConflictsOnly: (state, action: PayloadAction<boolean>) => {
      state.showConflictsOnly = action.payload;
    },
    setDisabledTableRow: (state, action: PayloadAction<number | undefined>) => {
      state.disabledTableRow = action.payload;
    },
    setRepeatFormIdentifiers: (
      state,
      action: PayloadAction<RepeatingFormIdentifiers[]>
    ) => {
      state.repeatFormIdentifiers = action.payload;
    },
    setMergeSettings: (state, action: PayloadAction<MergeSettings>) => {
      state.mergeSettings = action.payload;
    },
    setTotalForms: (state, action: PayloadAction<number>) => {
      state.totalForms = action.payload;
    },
    setIdentifiersWithConflicts: (
      state,
      action: PayloadAction<IdentifierWithMergeConflict[] | undefined>
    ) => {
      state.identifiersWithConflicts = action.payload;
    },
    setWorkingSheet: (state, action: PayloadAction<string | undefined>) => {
      state.workingSheet = action.payload;
    },
    setWorkingIdentifier: (
      state,
      action: PayloadAction<[string, number] | undefined>
    ) => {
      state.workingIdentifier = action.payload;
    },
    setWorkingConflict: (
      state,
      action: PayloadAction<IdentifierMergeConflict | undefined>
    ) => {
      state.workingConflict = action.payload;
    },
    setResolveConflictsComplete: (state, action: PayloadAction<boolean>) => {
      state.resolveConflictsComplete = action.payload;
    },
    setCompletionProgress: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.completionProgress = action.payload;
    },
    setRemainingIdentifiers: (
      state,
      action: PayloadAction<[string, string, string][] | undefined>
    ) => {
      state.remainingIdentifiers = action.payload;
    },
    setNextSheetIdentifier: (
      state,
      action: PayloadAction<{
        workingIdentifierDict: any | undefined;
        nextSheetName: string | undefined;
        nextIdentifier: [string, number] | undefined;
        nextIdentifierDict: any | undefined;
      }>
    ) => {
      state.nextSheetIdentifier = action.payload;
    },
    resetWorkingItems: (state) => {
      state.saveInProgress = false;
      state.mergeMode = MergeModeEnum.FormIdentifiers;
      state.reviewModeEnabled = false;
      state.calculateConflictsLoading = false;
      state.remainingIdentifiers = undefined;
      state.completionProgress = undefined;
      state.searchTerm = undefined;
      state.showConflictsOnly = false;
      state.disabledTableRow = undefined;
      state.workingSheet = undefined;
      state.workingIdentifier = undefined;
      state.workingConflict = undefined;
      // mergeSetupComplete: false,
      // calculateConflictsError: undefined,
      // calculateConflictsComplete: false,
      // resolveConflictsComplete: false,
      // repeatFormIdentifiers: [],
      // identifiersWithConflicts: undefined,
    },
    resetMergeState: (state) => {
      return initialState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setSaveInProgress,
  setLoadingMsg,
  setMergeMode,
  setMergeSetupComplete,
  setReviewModeEnabled,
  setCalculateConflictsLoading,

  setRepeatFormIdentifiers,
  setMergeSettings,
  setTotalForms,
  setSearchTerm,
  setShowConflictsOnly,
  setIdentifiersWithConflicts,
  setWorkingSheet,
  setWorkingIdentifier,
  setWorkingConflict,
  setResolveConflictsComplete,
  setMergeConflictErr,
  setDisabledTableRow,
  setCompletionProgress,
  setRemainingIdentifiers,
  resetWorkingItems,
  setNextSheetIdentifier,
  resetMergeState,
} = mergeConflictsSlice.actions;

/*********************
THUNKS
**********************/
export const calculateMergeConflicts =
  (projectUid: string, sessionUid: string) => (dispatch: any) => {
    dispatch(setCalculateConflictsLoading(true));

    const mergeApi = new MergeApi(Config.API_CONFIG);
    mergeApi
      .calculateMergeConflicts({
        projectUid: projectUid,
        sessionUid: sessionUid,
      })
      .subscribe(
        (response: CalcMergeConflictsResponse) => {
          const res = response.result;
          dispatch(setIdentifiersWithConflicts(res.conflicts));
          dispatch(
            setResolveConflictsComplete(
              res.validationStatus?.resolveComplete || false
            )
          );
          if (res.conflicts && res.conflicts.length > 0) {
            dispatch(setMergeMode(MergeModeEnum.Resolve));
          }
          dispatch(setCalculateConflictsLoading(false));
        },
        (error: RawAjaxResponse<CalcMergeConflictsResponse>) => {
          const errMsg = error.response.message;
          dispatch(setMergeMode(MergeModeEnum.FormIdentifiers));
          dispatch(setMergeConflictErr(errMsg));
          dispatch(setCalculateConflictsLoading(false));
          dispatch(setLoadingMsg(undefined));
        }
      );
  };

/*********************
SELECTORS
**********************/
export const selectSaveInProgress = (state: RootState) =>
  state[mergeConflictsSlice.name].saveInProgress;

export const selectMergeMode = (state: RootState) =>
  state[mergeConflictsSlice.name].mergeMode;

export const selectMergeSetupComplete = (state: RootState) =>
  state[mergeConflictsSlice.name].mergeSetupComplete;

export const selectMergeResolveComplete = (state: RootState) =>
  state[mergeConflictsSlice.name].resolveConflictsComplete;

export const selectMergeSettings = (state: RootState) =>
  state[mergeConflictsSlice.name].mergeSettings;

export const selectReviewModeEnabled = (state: RootState) =>
  state[mergeConflictsSlice.name].reviewModeEnabled;

export const selectCalculateConflictsLoading = (state: RootState) =>
  state[mergeConflictsSlice.name].calculateConflictsLoading;

export const selectRepeatingFormIdentifiers = (state: RootState) =>
  state[mergeConflictsSlice.name].repeatFormIdentifiers;

export const selectTotalForms = (state: RootState) =>
  state[mergeConflictsSlice.name].totalForms;

export const selectSearchTerm = (state: RootState) =>
  state[mergeConflictsSlice.name].searchTerm;

export const selectShowConflictsOnly = (state: RootState) =>
  state[mergeConflictsSlice.name].showConflictsOnly;

export const selectIdentifiersWithConflicts = (state: RootState) =>
  state[mergeConflictsSlice.name].identifiersWithConflicts;

export const selectWorkingSheet = (state: RootState) =>
  state[mergeConflictsSlice.name].workingSheet;

export const selectWorkingIdentifier = (state: RootState) =>
  state[mergeConflictsSlice.name].workingIdentifier;

export const selectWorkingConflict = (state: RootState) =>
  state[mergeConflictsSlice.name].workingConflict;

export const selectMergeConflictErr = (state: RootState) =>
  state[mergeConflictsSlice.name].mergeConflictErr;

export const selectDisabledTableRow = (state: RootState) =>
  state[mergeConflictsSlice.name].disabledTableRow;

export const selectCompletionProgress = (state: RootState) =>
  state[mergeConflictsSlice.name].completionProgress;

export const selectRemainingIdentifiers = (state: RootState) =>
  state[mergeConflictsSlice.name].remainingIdentifiers;

export const selectLoadingMsg = (state: RootState) =>
  state[mergeConflictsSlice.name].loadingMsg;

export const selectNextSheetIdentifier = (state: RootState) =>
  state[mergeConflictsSlice.name].nextSheetIdentifier;
