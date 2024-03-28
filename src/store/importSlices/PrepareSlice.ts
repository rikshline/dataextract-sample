import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AsyncTaskTypeEnum,
  ImportApi,
  InitImportResponse,
  RawAjaxResponse,
} from "../../api";
import { ProjectInfoFragment } from "../../builder/graphql/Operations";
import { Config } from "../../common/config/Config";
import { InstanceType } from "../../common/constants/LinterConstants";
import { RootState } from "../Store";
import { ExtractUser } from "./ImportRTK/generated-hooks";
import {
  selectIsMultiSheet,
  selectPendingTasks,
  setInsertingSourceData,
  setIsMultiSheet,
  setPendingTasks,
  setProjectUid,
  setSessionUid,
} from "./SharedSlice";

export interface DestinationProjectSelection {
  extractId: number | undefined;
  redcapId: number | undefined;
  redcapToken: string | undefined;
  redcapEnv: InstanceType;
}

export interface PrepareState {
  extractProjectExists: boolean | undefined;
  createProjectFormComplete: boolean | undefined;
  projectCreateTrigger: boolean;
  projectCreationInProgress: boolean;
  projectCreationSuccess: boolean | undefined;
  projectBuilt: boolean | undefined;
  selectedProject: DestinationProjectSelection;
  extractProject: ProjectInfoFragment | undefined;
  autoNumberingEnabled: boolean | undefined;
  autoNumberingDetected: boolean;
  nonNumericRecordId: boolean | undefined;
  recordPrefix: string;
  multiSheetUpload: boolean | undefined;
  checkboxData: boolean | undefined;
  checkboxDelimiter: string;
  specialCharAck: boolean | undefined;
  uploadInProgress: boolean | undefined;
  uploadSuccessful: boolean | undefined;
  uploadError: string | undefined;
  showMultiSheetDrawer: boolean;
}

export const initialState: PrepareState = {
  extractProjectExists: undefined,
  createProjectFormComplete: undefined,
  projectCreateTrigger: false,
  projectCreationInProgress: false,
  projectCreationSuccess: undefined,
  projectBuilt: undefined,
  extractProject: undefined,
  selectedProject: {
    extractId: undefined,
    redcapId: undefined,
    redcapToken: undefined,
    redcapEnv: InstanceType.Production,
  },
  autoNumberingEnabled: undefined,
  autoNumberingDetected: false,
  nonNumericRecordId: undefined,
  recordPrefix: "",
  multiSheetUpload: undefined,
  checkboxData: undefined,
  checkboxDelimiter: ",",
  specialCharAck: undefined,
  uploadInProgress: undefined,
  uploadSuccessful: undefined,
  uploadError: undefined,
  showMultiSheetDrawer: false,
};

/*********************
REDUCERS
**********************/
export const prepareSlice = createSlice({
  name: "prepare",
  initialState: initialState,
  reducers: {
    setExtractProjectExists: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.extractProjectExists = action.payload;
    },
    setCreateProjectFormComplete: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.createProjectFormComplete = action.payload;
    },
    setProjectCreateTrigger: (state, action: PayloadAction<boolean>) => {
      state.projectCreateTrigger = action.payload;
    },
    setProjectCreationInProgress: (state, action: PayloadAction<boolean>) => {
      state.projectCreationInProgress = action.payload;
    },
    setProjectBuilt: (state, action: PayloadAction<boolean | undefined>) => {
      state.projectBuilt = action.payload;
    },
    setExtractProject: (
      state,
      action: PayloadAction<ProjectInfoFragment | undefined>
    ) => {
      state.extractProject = action.payload;
    },
    setProjectCreationSuccess: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.projectCreationSuccess = action.payload;
    },
    setSelectedProject: (
      state,
      action: PayloadAction<DestinationProjectSelection>
    ) => {
      state.selectedProject = action.payload;
    },
    setAutonumberingEnabled: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.autoNumberingEnabled = action.payload;
    },
    setAutoNumberingDetected: (state, action: PayloadAction<boolean>) => {
      state.autoNumberingDetected = action.payload;
    },
    setNonNumericRecordId: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.nonNumericRecordId = action.payload;
    },
    setRecordPrefix: (state, action: PayloadAction<string>) => {
      state.recordPrefix = action.payload;
    },
    setMultiSheetUpload: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.multiSheetUpload = action.payload;
    },
    setCheckboxData: (state, action: PayloadAction<boolean | undefined>) => {
      state.checkboxData = action.payload;
    },
    setCheckboxDelimiter: (state, action: PayloadAction<string>) => {
      state.checkboxDelimiter = action.payload;
    },
    setSpecialCharAck: (state, action: PayloadAction<boolean | undefined>) => {
      state.specialCharAck = action.payload;
    },
    setUploadInProgress: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.uploadInProgress = action.payload;
    },
    setUploadSuccessful: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.uploadSuccessful = action.payload;
    },
    setUploadError: (state, action: PayloadAction<string | undefined>) => {
      state.uploadError = action.payload;
    },
    setShowMultiSheetDrawer: (state, action: PayloadAction<boolean>) => {
      state.showMultiSheetDrawer = action.payload;
    },
    resetPrepareState: () => {
      return initialState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setExtractProjectExists,
  setCreateProjectFormComplete,
  setProjectCreateTrigger,
  setProjectCreationInProgress,
  setProjectCreationSuccess,
  setProjectBuilt,
  setSelectedProject,
  setExtractProject,
  setAutonumberingEnabled,
  setAutoNumberingDetected,
  setNonNumericRecordId,
  setRecordPrefix,
  setMultiSheetUpload,
  setCheckboxData,
  setCheckboxDelimiter,
  setSpecialCharAck,
  setUploadInProgress,
  setUploadSuccessful,
  setUploadError,
  setShowMultiSheetDrawer,
  resetPrepareState,
} = prepareSlice.actions;

/*********************
THUNK
**********************/
export const initBuildImport =
  (extractUser: ExtractUser, sourceDataFile: any) =>
  (dispatch: any, getState: () => RootState) => {
    if (extractUser) {
      const selectedProject = selectSelectedProject(getState());
      const redcapPending =
        !selectedProject.redcapToken || selectProjectBuilt(getState());
      const autoNumberingEnabled = selectAutoNumberingEnabled(getState());
      const recordIdPrefix = selectRecordPrefix(getState());
      const isMultiSheetUpload = selectIsMultiSheet(getState());
      const checkboxDelimiter = selectCheckboxDelimiter(getState()) || ",";
      const pendingTasks = selectPendingTasks(getState());

      dispatch(setUploadInProgress(true));
      const importApi = new ImportApi(Config.API_CONFIG);
      importApi
        .initBuildAndImport({
          redcapEnv: selectedProject.redcapEnv,
          sourceFile: sourceDataFile,
          destinationProjectId: selectedProject.extractId,
          destinationRedcapToken: selectedProject.redcapToken,
          applyMappings: "true",
          applyCorrections: "true",
          mappingsFile: undefined,
          redcapPending: redcapPending ? "true" : "false",
          autoNumberingEnabled: autoNumberingEnabled ? "true" : "false",
          recordIdPrefix: recordIdPrefix,
          isMultiSheetUpload: isMultiSheetUpload ? "true" : "false",
          checkboxDelimiter: checkboxDelimiter,
        })
        .subscribe(
          (response: InitImportResponse) => {
            if (response.result.sessionUid && response.result.projectUid) {
              dispatch(setSessionUid(response.result.sessionUid));
              dispatch(setProjectUid(response.result.projectUid));
              dispatch(
                setShowMultiSheetDrawer(response.result.isMultiSheet || false)
              );
              dispatch(setIsMultiSheet(response.result.isMultiSheet || false));
              if (!!response.result.sourceDataTaskId) {
                dispatch(setInsertingSourceData(true));
                dispatch(
                  setPendingTasks([
                    ...pendingTasks,
                    {
                      taskType: AsyncTaskTypeEnum.InsertSourceData,
                      taskId: response.result.sourceDataTaskId,
                    },
                  ])
                );
              }

              dispatch(setUploadInProgress(false));
              dispatch(setUploadSuccessful(true));
            } else {
              dispatch(setUploadInProgress(false));
              dispatch(setUploadSuccessful(false));
              dispatch(setUploadError("Data Import Failed. Please try again."));
            }
          },
          (error: RawAjaxResponse<InitImportResponse>) => {
            dispatch(setUploadInProgress(false));
            dispatch(setUploadSuccessful(false));
            dispatch(setUploadError(error.response.message));
          }
        );
    }
  };

/*********************
SELECTORS
**********************/
export const selectExtractProjectExists = (state: RootState) =>
  state[prepareSlice.name].extractProjectExists;

export const selectCreateProjectFormComplete = (state: RootState) =>
  state[prepareSlice.name].createProjectFormComplete;

export const selectProjectCreateTrigger = (state: RootState) =>
  state[prepareSlice.name].projectCreateTrigger;

export const selectProjectCreationInProgress = (state: RootState) =>
  state[prepareSlice.name].projectCreationInProgress;

export const selectProjectCreationSuccess = (state: RootState) =>
  state[prepareSlice.name].projectCreationSuccess;

export const selectProjectBuilt = (state: RootState) =>
  state[prepareSlice.name].projectBuilt;

export const selectExtractProject = (state: RootState) =>
  state[prepareSlice.name].extractProject;

export const selectSelectedProject = (state: RootState) =>
  state[prepareSlice.name].selectedProject;

export const selectAutoNumberingEnabled = (state: RootState) =>
  state[prepareSlice.name].autoNumberingEnabled;

export const selectAutoNumberingDetected = (state: RootState) =>
  state[prepareSlice.name].autoNumberingDetected;

export const selectNonNumericRecordId = (state: RootState) =>
  state[prepareSlice.name].nonNumericRecordId;

export const selectRecordPrefix = (state: RootState) =>
  state[prepareSlice.name].recordPrefix;

export const selectMultiSheetUpload = (state: RootState) =>
  state[prepareSlice.name].multiSheetUpload;

export const selectCheckboxData = (state: RootState) =>
  state[prepareSlice.name].checkboxData;

export const selectCheckboxDelimiter = (state: RootState) =>
  state[prepareSlice.name].checkboxDelimiter;

export const selectSpecialCharAck = (state: RootState) =>
  state[prepareSlice.name].specialCharAck;

export const selectUploadInProgress = (state: RootState) =>
  state[prepareSlice.name].uploadInProgress;

export const selectUploadSuccessful = (state: RootState) =>
  state[prepareSlice.name].uploadSuccessful;

export const selectUploadError = (state: RootState) =>
  state[prepareSlice.name].uploadError;

export const selectShowMultiSheetDrawer = (state: RootState) =>
  state[prepareSlice.name].showMultiSheetDrawer;
