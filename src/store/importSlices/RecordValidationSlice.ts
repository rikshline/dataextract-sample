import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  CalcRecordConflictsResponse,
  CalculateRecordConflictsConflictTypeEnum,
  CleaningApi,
  RecordConflictTypeEnum as ConflictEnum,
  GetRecordConflictsConflictTypeEnum,
  IdentifierWithConflict,
  RawAjaxResponse,
} from "../../api";
import { Config } from "../../common/config/Config";
import { RootState } from "../Store";
import {
  DuplicateRecordConflicts,
  InconsistentFieldConflicts,
} from "./ImportRTK/generated-hooks";

/*********************
STATE INTERFACE
**********************/
export interface RecordConflictsState {
  saveInProgress: boolean;
  loadingMsg: string | undefined;

  reviewModeEnabled: boolean;
  calculateConflictsLoading: boolean;
  calculateInconsistentComplete: boolean;
  calculateDuplicatesComplete: boolean;
  inconsistentConflictsResolveComplete: boolean;
  duplicateConflictsResolveComplete: boolean;
  getConflictsLoading: boolean;
  getConflictsSuccess: boolean | undefined;
  getConflictsFailure: string | undefined;

  conflictType: ConflictEnum;
  remainingIdentifiers: string[] | undefined;
  completionProgress: number | undefined;
  searchTerm: string | undefined;
  showConflictsOnly: boolean;
  disabledTableRow: number | undefined;
  sheetIdentifiers: any | undefined;

  identifiersWithConflicts: IdentifierWithConflict[] | undefined;
  workingSheet: string | undefined;
  workingIdentifier: string | undefined;
  workingInconsistentConflict: InconsistentFieldConflicts | undefined;
  workingDuplicateConflict: DuplicateRecordConflicts | undefined;

  nextSheetIdentifier: {
    workingIdentifierDict: any | undefined;
    nextSheetName: string | undefined;
    nextIdentifier: string | undefined;
    nextIdentifierDict: any | undefined;
  };
  //   inconsistentFieldConflicts: InconsistentFieldConflicts | undefined;
  //   duplicateConflicts: DuplicateRecordConflicts | undefined;

  recordValidationError:
    | { key: string; message: string; description: string }
    | undefined;
}

/*********************
INITIAL STATE 
**********************/
export const initialState: RecordConflictsState = {
  saveInProgress: false,
  loadingMsg: undefined,
  getConflictsLoading: false,
  getConflictsSuccess: undefined,
  getConflictsFailure: undefined,
  conflictType: ConflictEnum.Inconsistent,
  reviewModeEnabled: false,
  calculateConflictsLoading: false,
  calculateDuplicatesComplete: false,
  calculateInconsistentComplete: false,
  remainingIdentifiers: undefined,
  completionProgress: undefined,
  inconsistentConflictsResolveComplete: false,
  duplicateConflictsResolveComplete: false,
  searchTerm: undefined,
  showConflictsOnly: false,
  disabledTableRow: undefined,
  sheetIdentifiers: undefined,

  identifiersWithConflicts: undefined,
  workingSheet: undefined,
  workingIdentifier: undefined,
  workingInconsistentConflict: undefined,
  workingDuplicateConflict: undefined,

  nextSheetIdentifier: {
    workingIdentifierDict: undefined,
    nextSheetName: undefined,
    nextIdentifier: undefined,
    nextIdentifierDict: undefined,
  },
  recordValidationError: undefined,
  //   inconsistentFieldConflicts: undefined,
  //   duplicateConflicts: undefined,
};

/*********************
REDUCERS
**********************/
export const recordConflictsSlice = createSlice({
  name: "recordConflicts",
  initialState: initialState,
  reducers: {
    setSaveInProgress: (state, action: PayloadAction<boolean>) => {
      state.saveInProgress = action.payload;
    },
    setConflictType: (state, action: PayloadAction<ConflictEnum>) => {
      state.conflictType = action.payload;
    },
    setShowConflictsOnly: (state, action: PayloadAction<boolean>) => {
      state.showConflictsOnly = action.payload;
    },
    setReviewModeEnabled: (state, action: PayloadAction<boolean>) => {
      state.reviewModeEnabled = action.payload;
    },
    setDisabledTableRow: (state, action: PayloadAction<number | undefined>) => {
      state.disabledTableRow = action.payload;
    },
    setCalculatingConflictsLoading: (state, action: PayloadAction<boolean>) => {
      state.calculateConflictsLoading = action.payload;
    },
    setCalculateDuplicatesComplete: (state, action: PayloadAction<boolean>) => {
      state.calculateDuplicatesComplete = action.payload;
    },
    setCalculateInconsistentComplete: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.calculateInconsistentComplete = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string | undefined>) => {
      state.searchTerm = action.payload;
    },
    setRemainingIdentifiers: (
      state,
      action: PayloadAction<string[] | undefined>
    ) => {
      state.remainingIdentifiers = action.payload;
    },
    setCompletionProgress: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.completionProgress = action.payload;
    },
    setSheetIdentifiers: (state, action: PayloadAction<any | undefined>) => {
      state.sheetIdentifiers = action.payload;
    },
    setInconsistentConflictsComplete: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.inconsistentConflictsResolveComplete = action.payload;
    },
    setDuplicateConflictsComplete: (state, action: PayloadAction<boolean>) => {
      state.duplicateConflictsResolveComplete = action.payload;
    },
    setIdentifiersWithConflicts: (
      state,
      action: PayloadAction<IdentifierWithConflict[] | undefined>
    ) => {
      state.identifiersWithConflicts = action.payload;
    },
    setWorkingSheet: (state, action: PayloadAction<string | undefined>) => {
      state.workingSheet = action.payload;
    },
    setWorkingIdentifier: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.workingIdentifier = action.payload;
    },
    setWorkingInconsistentConflict: (
      state,
      action: PayloadAction<InconsistentFieldConflicts | undefined>
    ) => {
      state.workingInconsistentConflict = action.payload;
    },
    setWorkingDuplicateConflict: (
      state,
      action: PayloadAction<DuplicateRecordConflicts | undefined>
    ) => {
      state.workingDuplicateConflict = action.payload;
    },
    setLoadingMsg: (state, action: PayloadAction<string | undefined>) => {
      state.loadingMsg = action.payload;
    },
    setGetConflictsLoading: (state, action: PayloadAction<boolean>) => {
      state.getConflictsLoading = action.payload;
    },
    setGetConflictsSuccess: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.getConflictsSuccess = action.payload;
    },
    setGetConflictsFailure: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.getConflictsFailure = action.payload;
    },
    setNextSheetIdentifier: (
      state,
      action: PayloadAction<{
        workingIdentifierDict: any | undefined;
        nextSheetName: string | undefined;
        nextIdentifier: string | undefined;
        nextIdentifierDict: any | undefined;
      }>
    ) => {
      state.nextSheetIdentifier = action.payload;
    },
    setRecordValidationError: (
      state,
      action: PayloadAction<
        { key: string; message: string; description: string } | undefined
      >
    ) => {
      state.recordValidationError = action.payload;
    },
    resetWorkingItems: (state) => {
      state.loadingMsg = undefined;
      state.conflictType = ConflictEnum.Inconsistent;
      state.workingSheet = undefined;
      state.workingIdentifier = undefined;
      state.searchTerm = undefined;
      state.workingInconsistentConflict = undefined;
      state.workingDuplicateConflict = undefined;
      state.remainingIdentifiers = undefined;
      state.completionProgress = undefined;
      state.calculateConflictsLoading = false;
      state.remainingIdentifiers = undefined;
      state.showConflictsOnly = false;
      state.sheetIdentifiers = undefined;
      state.reviewModeEnabled = false;
      state.saveInProgress = false;
      state.disabledTableRow = undefined;
      state.identifiersWithConflicts = undefined;
      state.recordValidationError = undefined;

      // calculateDuplicatesComplete: false,
      // calculateInconsistentComplete: false,
      // inconsistentConflictsResolveComplete: false,
      // duplicateConflictsResolveComplete: false,
    },
    resetRecordValidationState: (state) => {
      return initialState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setLoadingMsg,
  setSaveInProgress,
  setSearchTerm,
  setShowConflictsOnly,
  setConflictType,
  setReviewModeEnabled,
  setCalculatingConflictsLoading,
  setCompletionProgress,
  setRemainingIdentifiers,
  setDuplicateConflictsComplete,
  setInconsistentConflictsComplete,
  setIdentifiersWithConflicts,
  setWorkingSheet,
  setWorkingIdentifier,
  setWorkingInconsistentConflict,
  setWorkingDuplicateConflict,
  setDisabledTableRow,
  setSheetIdentifiers,
  setCalculateDuplicatesComplete,
  setCalculateInconsistentComplete,
  resetWorkingItems,
  setGetConflictsLoading,
  setGetConflictsSuccess,
  setGetConflictsFailure,
  resetRecordValidationState,
  setNextSheetIdentifier,
  setRecordValidationError,
} = recordConflictsSlice.actions;

/*********************
THUNKS
**********************/
export const calculateRecordConflicts =
  (projectUid: string, sessionUid: string, conflictType: ConflictEnum) =>
  (dispatch: any) => {
    dispatch(setCalculatingConflictsLoading(true));

    const cleaningApi = new CleaningApi(Config.API_CONFIG);
    const conflict =
      conflictType === ConflictEnum.Duplicate
        ? CalculateRecordConflictsConflictTypeEnum.Duplicate
        : CalculateRecordConflictsConflictTypeEnum.Inconsistent;

    cleaningApi
      .calculateRecordConflicts({
        projectUid: projectUid,
        sessionUid: sessionUid,
        conflictType: conflict,
      })
      .subscribe(
        (response: CalcRecordConflictsResponse) => {
          const res = response.result;
          dispatch(setConflictType(res.conflictType));
          dispatch(setIdentifiersWithConflicts(res.identifiersWithConflict));

          // Mark Resolution Complete for Type
          if (res.identifiersWithConflict.length === 0) {
            dispatch(setWorkingSheet(undefined));
            dispatch(setWorkingIdentifier(undefined));
            dispatch(setWorkingDuplicateConflict(undefined));
            dispatch(setWorkingInconsistentConflict(undefined));

            if (res.conflictType === ConflictEnum.Inconsistent) {
              dispatch(setInconsistentConflictsComplete(true));
              dispatch(setConflictType(ConflictEnum.Duplicate));
            } else {
              dispatch(setDuplicateConflictsComplete(true));
            }
          }

          // Mark Calculate Complete for Type
          if (res.conflictType === ConflictEnum.Inconsistent) {
            dispatch(setCalculateInconsistentComplete(true));
            dispatch(setCalculateDuplicatesComplete(false));
          } else {
            dispatch(setCalculateDuplicatesComplete(true));
          }

          dispatch(setCalculatingConflictsLoading(false));
          dispatch(setLoadingMsg(undefined));
        },
        (error: RawAjaxResponse<CalcRecordConflictsResponse>) => {
          const errMsg = error.response.message;
        }
      );
  };

export const getConflicts =
  (projectUid: string, sessionUid: string, conflictType: ConflictEnum) =>
  (dispatch: any) => {
    const cleaningApi = new CleaningApi(Config.API_CONFIG);
    const conflict =
      conflictType === ConflictEnum.Duplicate
        ? GetRecordConflictsConflictTypeEnum.Duplicate
        : GetRecordConflictsConflictTypeEnum.Inconsistent;

    cleaningApi;
    cleaningApi
      .getRecordConflicts({
        projectUid: projectUid,
        sessionUid: sessionUid,
        conflictType: conflict,
      })
      .subscribe(
        (response: CalcRecordConflictsResponse) => {
          if (response.result) {
            const res = response.result;
            dispatch(setConflictType(res.conflictType as any));
            dispatch(setIdentifiersWithConflicts(res.identifiersWithConflict));
            dispatch(setGetConflictsSuccess(true));

            if (
              !res.identifiersWithConflict ||
              res.identifiersWithConflict.length === 0
            ) {
              if ((res.conflictType as any) === ConflictEnum.Inconsistent) {
                dispatch(setConflictType(ConflictEnum.Duplicate));
              }
            }
            dispatch(setGetConflictsLoading(false));
            dispatch(setLoadingMsg(undefined));
          }
        },
        (error: RawAjaxResponse<CalcRecordConflictsResponse>) => {
          const errMsg = error.response.message;
          // dispatch(setGetConflictsFailure(error));
          // dispatch(setGetConflictsLoading(false));
        }
      );
  };
/*********************
SELECTORS
**********************/
export const selectSaveInProgress = (state: RootState) =>
  state[recordConflictsSlice.name].saveInProgress;

export const selectSearchTerm = (state: RootState) =>
  state[recordConflictsSlice.name].searchTerm;

export const selectShowConflictsOnly = (state: RootState) =>
  state[recordConflictsSlice.name].showConflictsOnly;

export const selectConflictType = (state: RootState) =>
  state[recordConflictsSlice.name].conflictType;

export const selectCalculatingConflictsLoading = (state: RootState) =>
  state[recordConflictsSlice.name].calculateConflictsLoading;

export const selectReviewModeEnabled = (state: RootState) =>
  state[recordConflictsSlice.name].reviewModeEnabled;

export const selectCompletionProgress = (state: RootState) =>
  state[recordConflictsSlice.name].completionProgress;

export const selectRemainingIdentifiers = (state: RootState) =>
  state[recordConflictsSlice.name].remainingIdentifiers;

export const selectDuplicateConflictsComplete = (state: RootState) =>
  state[recordConflictsSlice.name].duplicateConflictsResolveComplete;

export const selectInconsistentConflictsComplete = (state: RootState) =>
  state[recordConflictsSlice.name].inconsistentConflictsResolveComplete;

export const selectIdentifiersWithConflicts = (state: RootState) =>
  state[recordConflictsSlice.name].identifiersWithConflicts;

export const selectWorkingSheet = (state: RootState) =>
  state[recordConflictsSlice.name].workingSheet;

export const selectWorkingIdentifier = (state: RootState) =>
  state[recordConflictsSlice.name].workingIdentifier;

export const selectWorkingInconsistentConflict = (state: RootState) =>
  state[recordConflictsSlice.name].workingInconsistentConflict;

export const selectWorkingDuplicateConflict = (state: RootState) =>
  state[recordConflictsSlice.name].workingDuplicateConflict;

export const selectDisabledTableRow = (state: RootState) =>
  state[recordConflictsSlice.name].disabledTableRow;

export const selectSheetIdentifiers = (state: RootState) =>
  state[recordConflictsSlice.name].sheetIdentifiers;

export const selectCalculateInconsistentComplete = (state: RootState) =>
  state[recordConflictsSlice.name].calculateInconsistentComplete;

export const selectCalculateDuplicatesComplete = (state: RootState) =>
  state[recordConflictsSlice.name].calculateDuplicatesComplete;

export const selectLoadingMsg = (state: RootState) =>
  state[recordConflictsSlice.name].loadingMsg;

export const selectGetConflictsLoading = (state: RootState) =>
  state[recordConflictsSlice.name].getConflictsLoading;

export const selectGetConflictsSuccess = (state: RootState) =>
  state[recordConflictsSlice.name].getConflictsSuccess;

export const selectGetConflictsFailure = (state: RootState) =>
  state[recordConflictsSlice.name].getConflictsFailure;

export const selectnextSheetIdentifier = (state: RootState) =>
  state[recordConflictsSlice.name].nextSheetIdentifier;

export const selectRecordValidationError = (state: RootState) =>
  state[recordConflictsSlice.name].recordValidationError;

// export const selectInconsistentFieldConflicts = (state: RootState) =>
//   state[sheetConflictsSlice.name].inconsistentFieldConflicts;

// export const selectDuplicateConflicts = (state: RootState) =>
//   state[sheetConflictsSlice.name].duplicateConflicts;
