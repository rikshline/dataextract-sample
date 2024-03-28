import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  PvOrderingEnum,
  RawAjaxResponse,
  ValidateDataResponse,
  ValidateSourceDataRequest,
  ValidationApi,
} from "../../api";
import { Config } from "../../common/config/Config";
import { RootState } from "../Store";
import {
  FieldValidationError,
  FieldsWithValidationErrors,
  RowsWithValidationErrors,
  ValidationSettings,
} from "./ImportRTK/generated-hooks";
import { setFieldValidationStatus } from "./SharedSlice";

/*********************
STATE INTERFACE
**********************/
export interface ValidationState {
  reviewModeEnabled: boolean;
  validationSettings: ValidationSettings;
  fieldsWithError: FieldsWithValidationErrors[] | undefined;
  rowsWithError: RowsWithValidationErrors[] | undefined;
  ignoreRequiredFields: string[];
  workingValidationError: FieldValidationError | undefined;
  searchTerm: string | undefined;
  showValidationSettings: boolean;
  remaining: string[] | undefined;
  completionProgress: number | undefined;
  storeCorrections: boolean;
  validationResolveComplete: boolean;

  workingField: string | undefined;
  workingSheet: string | undefined;
  validationInProgress: boolean;
  validationSuccess: boolean;
  validationFailure: string | undefined;
  forceDataRefetch: boolean;

  getValidationErrorFieldsLoading: boolean;
  getValidationErrorFieldsSuccess: boolean | undefined;
  getValidationErrorFieldsFailure: string | undefined;

  validationMessage: { title: string; message: string } | undefined;
  validationError:
    | { key: string; message: string; description: string }
    | undefined;
  preventNavigation: boolean;
}

/*********************
INITIAL STATE 
**********************/
export const initialState: ValidationState = {
  reviewModeEnabled: false,
  validationSettings: {
    pvOrdering: PvOrderingEnum.Word,
    populateSuggestions: true,
    showPrevCorrections: true,
  } as ValidationSettings,
  fieldsWithError: undefined,
  rowsWithError: undefined,
  ignoreRequiredFields: [],
  workingValidationError: undefined,
  searchTerm: undefined,
  showValidationSettings: false,
  remaining: undefined,
  completionProgress: undefined,
  storeCorrections: true,
  validationResolveComplete: false,

  workingSheet: undefined,
  workingField: undefined,
  validationInProgress: false,
  validationSuccess: false,
  validationFailure: undefined,
  getValidationErrorFieldsLoading: false,
  getValidationErrorFieldsSuccess: undefined,
  getValidationErrorFieldsFailure: undefined,

  forceDataRefetch: false,
  validationMessage: undefined,
  validationError: undefined,
  preventNavigation: false,
};

/*********************
REDUCERS
**********************/
export const validationSlice = createSlice({
  name: "validation",
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string | undefined>) => {
      state.searchTerm = action.payload;
    },
    setValidationSettings: (
      state,
      action: PayloadAction<ValidationSettings>
    ) => {
      state.validationSettings = action.payload;
    },
    setShowValidationSettings: (state, action: PayloadAction<boolean>) => {
      state.showValidationSettings = action.payload;
    },
    setValidationResolveComplete: (state, action: PayloadAction<boolean>) => {
      state.validationResolveComplete = action.payload;
    },
    setFieldsWithErrors: (
      state,
      action: PayloadAction<FieldsWithValidationErrors[] | undefined>
    ) => {
      let errors = undefined;
      if (action.payload) {
        errors = action.payload.some(
          (f: FieldsWithValidationErrors) => !!f.fields && f.fields.length > 0
        )
          ? action.payload
          : undefined;
      }
      state.fieldsWithError = errors;
    },
    setRowsWithErrors: (
      state,
      action: PayloadAction<RowsWithValidationErrors[] | undefined>
    ) => {
      state.rowsWithError = action.payload;
    },
    setIgnoreRequiredFields: (state, action: PayloadAction<string[]>) => {
      state.ignoreRequiredFields = action.payload;
    },
    setWorkingSheet: (state, action: PayloadAction<string | undefined>) => {
      state.workingSheet = action.payload;
    },
    setWorkingField: (state, action: PayloadAction<string | undefined>) => {
      state.workingField = action.payload;
    },
    setValidationInProgress: (state, action: PayloadAction<boolean>) => {
      state.validationInProgress = action.payload;
    },
    setValidationSuccess: (state, action: PayloadAction<boolean>) => {
      state.validationSuccess = action.payload;
    },
    setValidationFailure: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.validationFailure = action.payload;
    },
    setGetValidationFieldsSuccess: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.getValidationErrorFieldsSuccess = action.payload;
    },
    setGetValidationFieldsLoading: (state, action: PayloadAction<boolean>) => {
      state.getValidationErrorFieldsLoading = action.payload;
    },
    setGetValidationFieldsFailure: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.getValidationErrorFieldsFailure = action.payload;
    },
    setWorkingValidationError: (
      state,
      action: PayloadAction<FieldValidationError | undefined>
    ) => {
      state.workingValidationError = action.payload;
    },
    setRemaining: (state, action: PayloadAction<string[] | undefined>) => {
      state.remaining = action.payload;
    },
    setCompletionProgress: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.completionProgress = action.payload;
    },
    setReviewModeEnabled: (state, action: PayloadAction<boolean>) => {
      state.reviewModeEnabled = action.payload;
    },
    setStoreCorrections: (state, action: PayloadAction<boolean>) => {
      state.storeCorrections = action.payload;
    },
    setForceDataRefetch: (state, action: PayloadAction<boolean>) => {
      state.forceDataRefetch = action.payload;
    },
    setValidationMessage: (
      state,
      action: PayloadAction<{ title: string; message: string } | undefined>
    ) => {
      state.validationMessage = action.payload;
    },
    setValidationError: (
      state,
      action: PayloadAction<
        | { key: string; message: string; description: string }
        | undefined
        | undefined
      >
    ) => {
      state.validationError = action.payload;
    },
    setPreventNaviation: (state, action: PayloadAction<boolean>) => {
      state.preventNavigation = action.payload;
    },
    resetWorkingItems: (state) => {
      state.workingSheet = undefined;
      state.workingField = undefined;
      state.searchTerm = undefined;
      state.workingValidationError = undefined;
      state.remaining = undefined;
      state.completionProgress = undefined;
      state.validationInProgress = false;
      state.validationSuccess = false;
      state.validationFailure = undefined;
      state.reviewModeEnabled = false;
      state.forceDataRefetch = false;
    },
    resetFieldValidationState: (state) => {
      return initialState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setValidationResolveComplete,
  setSearchTerm,
  setValidationSettings,
  setShowValidationSettings,
  setFieldsWithErrors,
  setRowsWithErrors,
  setIgnoreRequiredFields,
  setWorkingSheet,
  setWorkingField,
  setWorkingValidationError,
  setValidationInProgress,
  setValidationSuccess,
  setValidationFailure,
  setRemaining,
  setCompletionProgress,
  setReviewModeEnabled,
  setStoreCorrections,
  setForceDataRefetch,
  resetWorkingItems,
  resetFieldValidationState,
  setGetValidationFieldsFailure,
  setGetValidationFieldsLoading,
  setGetValidationFieldsSuccess,
  setValidationMessage,
  setValidationError,
  setPreventNaviation,
} = validationSlice.actions;

/*********************
THUNKS
**********************/
export const validateSourceData =
  (
    sessionUid: string,
    projectUid: string,
    ignoreSheets: string[],
    ignoreRequiredFields: string[]
  ) =>
  (dispatch: any) => {
    dispatch(setValidationInProgress(true));
    const validationApi = new ValidationApi(Config.API_CONFIG);

    const req: ValidateSourceDataRequest = {
      projectUid: projectUid,
      sessionUid: sessionUid,
      body: {
        payload: {
          ignoreSheets: ignoreSheets,
          ignoreRequiredFields: ignoreRequiredFields,
          // linkedFields
        },
      },
    };

    validationApi.validateSourceData(req).subscribe(
      (response: ValidateDataResponse) => {
        if (response) {
          const res = response.result;
          dispatch(setFieldsWithErrors(res.fieldsWithErrors));
          dispatch(setRowsWithErrors(res.rowsWithErrors));
          if (res.messages) {
            dispatch(
              setValidationMessage({
                title: "Previous Corrections Applied",
                message: res.messages,
              })
            );
          }
          dispatch(setFieldValidationStatus(res.validationStatus));
          dispatch(setValidationSuccess(true));
          dispatch(setValidationInProgress(false));
          dispatch(setValidationFailure(undefined));

          if (res.validationStatus?.resolveComplete) {
            dispatch(setValidationResolveComplete(true));
          }
        }
      },
      (error: RawAjaxResponse<ValidateDataResponse>) => {
        const errMsg = error.response.message;
        dispatch(setValidationSuccess(false));
        dispatch(setValidationInProgress(false));
        dispatch(
          setValidationError({
            key: "source-validation-error",
            message: "Source Data Validation Failed",
            description: errMsg,
          })
        );
      }
    );
  };

export const getValidationErrorFields =
  (projectUid: string, sessionUid: string) => (dispatch: any) => {
    dispatch(setGetValidationFieldsLoading(true));
    const validationApi = new ValidationApi(Config.API_CONFIG);

    validationApi.getValidationErrors({ projectUid, sessionUid }).subscribe(
      (response: ValidateDataResponse) => {
        if (response.result) {
          const res = response.result;
          dispatch(setFieldsWithErrors(res.fieldsWithErrors));
          dispatch(setRowsWithErrors(res.rowsWithErrors));
          dispatch(setGetValidationFieldsSuccess(true));
          if (!!res.messages) {
            dispatch(
              setValidationMessage({
                title: "No Field Validation Errors",
                message: res.messages,
              })
            );
          }
        }
        dispatch(setGetValidationFieldsLoading(false));
      },
      (error: RawAjaxResponse<ValidateDataResponse>) => {
        const errMsg = error.response.message;
        dispatch(setGetValidationFieldsLoading(false));
        dispatch(
          setValidationError({
            key: "source-validation-fields-error",
            message: "Fetching Fields with Validation Errors Failed",
            description: errMsg,
          })
        );
      }
    );
  };

/*********************
SELECTORS
**********************/
export const selectShowValidationSettings = (state: RootState) =>
  state[validationSlice.name].showValidationSettings;

export const selectValidationSettings = (state: RootState) =>
  state[validationSlice.name].validationSettings;

export const selectSearchTerm = (state: RootState) =>
  state[validationSlice.name].searchTerm;

export const selectFieldsWithErrors = (state: RootState) =>
  state[validationSlice.name].fieldsWithError;

export const selectRowsWithErrors = (state: RootState) =>
  state[validationSlice.name].rowsWithError;

export const selectIgnoredRequiredFields = (state: RootState) =>
  state[validationSlice.name].ignoreRequiredFields;

export const selectWorkingSheet = (state: RootState) =>
  state[validationSlice.name].workingSheet;

export const selectWorkingField = (state: RootState) =>
  state[validationSlice.name].workingField;

export const selectValidationInProgress = (state: RootState) =>
  state[validationSlice.name].validationInProgress;

export const selectValidationSuccess = (state: RootState) =>
  state[validationSlice.name].validationSuccess;

export const selectValidationFailure = (state: RootState) =>
  state[validationSlice.name].validationFailure;

export const selectWorkingValidationError = (state: RootState) =>
  state[validationSlice.name].workingValidationError;

export const selectCompletionProgress = (state: RootState) =>
  state[validationSlice.name].completionProgress;

export const selectRemaining = (state: RootState) =>
  state[validationSlice.name].remaining;

export const selectReviewModeEnabled = (state: RootState) =>
  state[validationSlice.name].reviewModeEnabled;

export const selectStoreCorrections = (state: RootState) =>
  state[validationSlice.name].storeCorrections;

export const selectValidationResolveComplete = (state: RootState) =>
  state[validationSlice.name].validationResolveComplete;

export const selectForceDataRefetch = (state: RootState) =>
  state[validationSlice.name].forceDataRefetch;

export const selectGetValidationFieldsSuccess = (state: RootState) =>
  state[validationSlice.name].getValidationErrorFieldsSuccess;

export const selectGetValidationFieldsFailure = (state: RootState) =>
  state[validationSlice.name].getValidationErrorFieldsFailure;

export const selectGetValidationFieldsLoading = (state: RootState) =>
  state[validationSlice.name].getValidationErrorFieldsLoading;

export const selectValidationMessage = (state: RootState) =>
  state[validationSlice.name].validationMessage;

export const selectValidationError = (state: RootState) =>
  state[validationSlice.name].validationError;

export const selectPreventNavigation = (state: RootState) =>
  state[validationSlice.name].preventNavigation;
