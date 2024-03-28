import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AsyncTaskTypeEnum,
  ExtractProject,
  ExtractUser,
  ImportApi,
  InitImportResponse,
  RawAjaxResponse,
} from "../../api";
import { Config } from "../../common/config/Config";
import { ImportApiInterface } from "../../pages/import/Import";
import { RootState } from "../Store";
import {
  selectPendingTasks,
  setInsertingSourceData,
  setPendingTasks,
  setProjectUid,
  setSessionUid,
} from "./SharedSlice";

export interface ImportState {
  extractProjects: ExtractProject[] | undefined;
  destinationProject: ExtractProject | undefined;
  sourceProject: ExtractProject | undefined;
  mappingStatus: boolean;
  correctionsStatus: boolean;
  importError: string | undefined;
  fetchingExtractProjects: boolean;
  importInProgress: boolean;
  importSuccess: boolean;
}

export const initialState: ImportState = {
  extractProjects: [],
  destinationProject: undefined,
  sourceProject: undefined,
  mappingStatus: false,
  correctionsStatus: false,
  importError: undefined,
  fetchingExtractProjects: false,
  importInProgress: false,
  importSuccess: false,
};

/*********************
REDUCERS
**********************/
export const importSlice = createSlice({
  name: "import",
  initialState: initialState,
  reducers: {
    setExtractProjects: (
      state,
      action: PayloadAction<ExtractProject[] | undefined>
    ) => {
      state.extractProjects = action.payload;
    },
    setDestinationProject: (
      state,
      action: PayloadAction<ExtractProject | undefined>
    ) => {
      state.destinationProject = action.payload;
    },
    setSourceProject: (
      state,
      action: PayloadAction<ExtractProject | undefined>
    ) => {
      state.sourceProject = action.payload;
    },
    setMappingStatus: (state, action: PayloadAction<boolean>) => {
      state.mappingStatus = action.payload;
    },
    setCorrectionsStatus: (state, action: PayloadAction<boolean>) => {
      state.correctionsStatus = action.payload;
    },
    setImportError: (state, action: PayloadAction<string | undefined>) => {
      state.importError = action.payload;
    },
    setFetchingExtractProjects: (state, action: PayloadAction<boolean>) => {
      state.fetchingExtractProjects = action.payload;
    },
    setImportInProgress: (state, action: PayloadAction<boolean>) => {
      state.importInProgress = action.payload;
    },
    setImportSuccess: (state, action: PayloadAction<boolean>) => {
      state.importSuccess = action.payload;
    },
    resetImportState: () => {
      return {
        destinationProject: undefined,
        sourceProject: undefined,
        mappingStatus: false,
        correctionsStatus: false,
        importError: undefined,
        fetchingExtractProjects: false,
        importInProgress: false,
        importSuccess: false,
      } as ImportState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setExtractProjects,
  setDestinationProject,
  setSourceProject,
  setMappingStatus,
  setCorrectionsStatus,

  setImportInProgress,
  setImportSuccess,
  setImportError,

  resetImportState,
  setFetchingExtractProjects,
} = importSlice.actions;

/*********************
THUNK
**********************/
export const initRcImport =
  (form: ImportApiInterface, extractUser: ExtractUser, redcapEnv: string) =>
  (dispatch: any, getState: () => RootState) => {
    if (extractUser) {
      const destinationProject = selectDestinationProject(getState());
      const sourceProject = selectSourceProject(getState());
      const pendingTasks = selectPendingTasks(getState());

      dispatch(setImportInProgress(true));
      const importApi = new ImportApi(Config.API_CONFIG);
      importApi
        .initDataFileImport({
          sourceFile: form.sourceDataFile,
          sourceMetadataFile: form.sourceMetadataFile,
          sourceMetadataToken: !!sourceProject
            ? sourceProject.redcapToken
            : form.sourceMetadataToken,
          destinationMetadataFile: form.destinationMetadataFile,
          destinationMetadataToken: !!destinationProject
            ? destinationProject.redcapToken
            : form.destinationMetadataToken,
          destinationProjectId: !!destinationProject
            ? destinationProject.extractId
            : form.destinationProjectId,
          mappingsFile: form.mappingsFile,
          redcapEnv: redcapEnv,
          extractToken: extractUser.refreshToken,
          applyMappings: form.applyMappings ? "true" : "false",
          applyCorrections: form.applyCorrections ? "true" : "false",
          decodeImport: form.decodeImport ? "true" : "false",
        })
        .subscribe(
          (response: InitImportResponse) => {
            if (response.result.sessionUid && response.result.projectUid) {
              dispatch(setSessionUid(response.result.sessionUid));
              dispatch(setProjectUid(response.result.projectUid));
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

              dispatch(setImportInProgress(false));
              dispatch(setImportSuccess(true));
            } else {
              dispatch(setImportInProgress(false));
              dispatch(setImportSuccess(false));
              dispatch(setImportError("Data Import Failed. Please try again."));
            }
          },
          (error: RawAjaxResponse<InitImportResponse>) => {
            dispatch(setImportInProgress(false));
            dispatch(setImportSuccess(false));
            dispatch(setImportError(error.response.message));
          }
        );
    }
  };

/*********************
SELECTORS
**********************/
export const selectExtractProjects = (state: RootState) =>
  state[importSlice.name].extractProjects;

export const selectDestinationProject = (state: RootState) =>
  state[importSlice.name].destinationProject;

export const selectSourceProject = (state: RootState) =>
  state[importSlice.name].sourceProject;

export const selectMappingStatus = (state: RootState) =>
  state[importSlice.name].mappingStatus;

export const selectCorrectionsStatus = (state: RootState) =>
  state[importSlice.name].correctionsStatus;

export const selectImportInProgress = (state: RootState) =>
  state[importSlice.name].importInProgress;

export const selectImportSuccess = (state: RootState) =>
  state[importSlice.name].importSuccess;

export const selectImportError = (state: RootState) =>
  state[importSlice.name].importError;
