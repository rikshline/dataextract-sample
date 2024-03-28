import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  AsyncTaskTypeEnum,
  BaseImportDataResponse,
  BuildImportStepEnum,
  DataApi,
  DataSourceSheetTypeEnum,
  ImportApi,
  ImportStepEnum,
  RawAjaxResponse,
  Response,
  SessionApi,
  SessionMappingStatus,
  SessionPayload,
  SessionResponse,
  SessionValidationStatus,
  UpdateSessionRequest,
  UserResponse,
} from "../../api";
import { Config } from "../../common/config/Config";
import { InstanceType } from "../../common/constants/LinterConstants";
import { RootState } from "../Store";
import {
  BaseImportData,
  DuplicateFields,
  ExtractUser,
  FormattedItemMsg,
  ImportSession,
  Metadata,
  ProjectDetails,
  SourceDataHeader,
  ValidationErrorMsg,
} from "./ImportRTK/generated-hooks";

/*********************
STATE INTERFACE
**********************/
export interface PendingTask {
  taskType: AsyncTaskTypeEnum;
  taskId: string;
}
export interface SharedState {
  // Async Tasks
  pendingTasks: PendingTask[];
  insertSourceDataInProgress: boolean;
  applyValidationInProgress: boolean;
  importExistingRecordsInProgress: boolean;
  validateSourceDataFieldsInProgress: boolean;
  validateSourceDataRecordsInProgress: boolean;
  validateMergeConflictsInProgress: boolean;
  encodeSourceDataInProgress: boolean;
  exportSourceDataInProgress: boolean;
  sendEmailInProgress: boolean;
  fetchExistingFailed: boolean;
  existingRecordsFetchedOn: string | undefined;

  // Extract
  fetchingExtractUser: boolean;
  isRegularUser: boolean;
  extractToken: string;
  extractUserId: number;
  extractUser: ExtractUser | undefined;
  builderProjectId: number | undefined;
  extractReleaseId: number | undefined;
  buildWorkflow: boolean;

  // General
  error: string;
  linterWarning: string | undefined;
  collapseHeader: boolean;
  collapseDashboard: boolean;
  confirmDeletions: boolean;
  currentStep: ImportStepEnum | BuildImportStepEnum;
  dataViewSearchTerm: string | undefined;

  // Session
  sessionInstantiated: boolean;
  isMultiSheet: boolean;
  getBaseDataLoading: boolean;
  projectUid: string;
  sessionUid: string;
  redcapEnv: InstanceType;
  redcapVersion: string;
  redcapToken: string;
  sourceDataName: string;
  sheetJoinField: string;
  sheetType: DataSourceSheetTypeEnum | undefined;
  checkboxDelimiter: string;
  sourceDataHeaders: SourceDataHeader[];
  duplicateFields: DuplicateFields[];
  ignoredFields: string[];
  metadataForms: string[];
  metadataHeaders: string[];
  metadata: Metadata[];
  malformedSheets: string[];
  recordIdField: string;
  projectDetails: ProjectDetails | undefined;
  mappingStatus: SessionMappingStatus | undefined;
  fieldValidationStatus: SessionValidationStatus | undefined;
  recordValidationStatus: SessionValidationStatus | undefined;
  mergeStatus: SessionValidationStatus | undefined;
  encodedOn: string | undefined;
  encodedDownloadedOn: string | undefined;
  encodedPushedToRcOn: string | undefined;

  // Other
  validationErrors: ValidationErrorMsg[];
  formattedItems: FormattedItemMsg[];

  // Merge Step
  projectContainsExistingRecords: boolean | undefined;

  // ??????
  checkboxMap: any; // TODO: used for what?
  ddOrder: any; // TODO: used for what?

  // extractReleaseInfo: ExtractReleaseInfo | undefined;
  // loading: boolean | undefined;
  // encodeRecordsComplete: boolean | undefined;
  // importRecordsSuccess: boolean | undefined; // existingrecordstatus
  // // Fetching Status
  // fetchingDatafileData: boolean;
  // fetchingDictionaryData: boolean;
  // fetchingMappingData: boolean;
  // fetchingChangelogData: boolean;
  // fetchingExistingData: string;
  // fetchingEncodedData: boolean;
  // downloadInProgress: boolean | undefined;
  // //downloadInProgress: boolean | undefined;
  // outputDownloaded: boolean; //??????????? need?
  // saveFieldsInProgress: boolean | undefined;
  // saveFieldsSuccess: boolean | undefined;
  // fieldsSaved: boolean | undefined;
  // lintingInProgress: boolean | undefined;
  // lintingComplete: boolean | undefined;
  // resolveInProgress: boolean | undefined;
  // resolveComplete: boolean;
  // revisionInProgress: boolean | undefined;
  // resolvedMergeConflicts: boolean | undefined;
  // resolvedSheetConflicts: boolean | undefined;
  // savingMappings: boolean;
  // fetchingRevisionItems: boolean;
  // revisionItems: any;
  // revisionRowFields: any;
  // nextRecordName: number;
  // originalDatafileHeaders: DataFileHeader[];
  // formattedItems: FormattedRow[];
  // cellErrors: DataFileCellError[];
  // repeatInstanceColumn: string; // steve maron req
  // datafileData: SheetData[];
  // datafileHeaders: DataFileHeader[];
  // dictionaryData: any;
  // ddDataRaw: any[];
  // ddData: any[];
  // ddFormNames: string[];
  // ddHeaders: string[];
  // existingRecords: boolean;
  // encodedRecords: any;
  // encodedRecordHeaders: any;
  // recordIdMap: any;
  // repeatInstanceMap: RepeatInstanceMapping[];
  // existingRecordsData: any;
  // matchingRepeatInstances: RepeatInstrumentAssignment[];
  // updatedRecordItems: UpdateItem[];
}

/*********************
INITIAL STATE 
**********************/
const initialState: SharedState = {
  // Async Tasks
  pendingTasks: [],
  insertSourceDataInProgress: false,
  applyValidationInProgress: false,
  importExistingRecordsInProgress: false,
  validateSourceDataFieldsInProgress: false,
  validateSourceDataRecordsInProgress: false,
  validateMergeConflictsInProgress: false,
  encodeSourceDataInProgress: false,
  exportSourceDataInProgress: false,
  sendEmailInProgress: false,
  fetchExistingFailed: false,
  existingRecordsFetchedOn: undefined,

  // Extract
  fetchingExtractUser: false,
  isRegularUser: true,
  extractToken: "",
  extractUserId: 0,
  extractUser: undefined,
  builderProjectId: undefined,
  extractReleaseId: undefined,
  buildWorkflow: false,

  // General
  error: "",
  linterWarning: undefined,
  collapseHeader: false,
  collapseDashboard: false,
  confirmDeletions: true,
  currentStep: ImportStepEnum.Dashboard,
  dataViewSearchTerm: undefined,

  // Session
  sessionInstantiated: false,
  isMultiSheet: false,
  getBaseDataLoading: false,
  projectUid: "",
  sessionUid: "",
  redcapEnv: InstanceType.Production,
  redcapVersion: "",
  redcapToken: "",
  sourceDataName: "",
  sheetJoinField: "",
  sheetType: undefined,
  checkboxDelimiter: ",",
  sourceDataHeaders: [],
  duplicateFields: [],
  ignoredFields: [],
  metadataForms: [],
  metadataHeaders: [],
  metadata: [],
  malformedSheets: [],
  recordIdField: "",
  projectDetails: undefined,
  mappingStatus: undefined,
  fieldValidationStatus: undefined,
  recordValidationStatus: undefined,
  mergeStatus: undefined,
  encodedOn: undefined,
  encodedDownloadedOn: undefined,
  encodedPushedToRcOn: undefined,

  // Other
  validationErrors: [],
  formattedItems: [],

  // Merge Step
  projectContainsExistingRecords: undefined,
  // ????
  checkboxMap: {}, // TODO: used for what?
  ddOrder: {}, // TODO: used for what?
};

/*********************
REDUCERS
**********************/
export const sharedSlice = createSlice({
  name: "importShared",
  initialState: initialState,
  reducers: {
    setBuildWorkflow: (state, action: PayloadAction<boolean>) => {
      state.buildWorkflow = action.payload;
    },
    setSessionInstantiated: (state, action: PayloadAction<boolean>) => {
      state.sessionInstantiated = action.payload;
    },
    setProjectUid: (state, action: PayloadAction<string>) => {
      state.projectUid = action.payload;
    },
    setSessionUid: (state, action: PayloadAction<string>) => {
      state.sessionUid = action.payload;
    },
    setGetBaseDataLoading: (state, action: PayloadAction<boolean>) => {
      state.getBaseDataLoading = action.payload;
    },
    setBaseImportData: (state, action: PayloadAction<BaseImportData>) => {
      state.redcapToken = action.payload.redcapToken;
      state.currentStep = action.payload.currentStep as ImportStepEnum;
      state.recordIdField = action.payload.recordIdField;
      state.projectDetails = action.payload.projectDetails;
      state.sourceDataName = action.payload.sourceName;
      state.sourceDataHeaders = action.payload.sourceDataHeaders;
      state.duplicateFields = action.payload.duplicateSourceFields;
      state.checkboxDelimiter = action.payload.checkboxDelimiter || ",";
      state.metadataForms = action.payload.metadataForms;
      state.metadataHeaders = action.payload.metadataHeaders;
      state.metadata = action.payload.metadata;
      state.sheetType = action.payload.sheetType as DataSourceSheetTypeEnum;
      state.isMultiSheet = action.payload.isMultiSheet;
      state.malformedSheets = action.payload.malformedSheets || [];
      state.confirmDeletions = action.payload.confirmDeletions || true;
      state.mappingStatus = action.payload.mappingStatus;
      state.fieldValidationStatus = action.payload.fieldValidationStatus;
      state.recordValidationStatus = action.payload.recordValidationStatus;
      state.mergeStatus = action.payload.mergeStatus;
      state.existingRecordsFetchedOn = action.payload.existingRecordsFetchedOn;
      state.sheetJoinField = action.payload.sheetJoinField || "";
      state.encodedOn = action.payload.encodedOn;
      state.encodedDownloadedOn = action.payload.encodedDownloadOn || undefined;
      state.encodedPushedToRcOn = action.payload.encodedRcPushOn || undefined;
    },
    setFetchingExtractUser: (state, action: PayloadAction<boolean>) => {
      state.fetchingExtractUser = action.payload;
    },
    setPendingTasks: (state, action: PayloadAction<PendingTask[]>) => {
      state.pendingTasks = action.payload;
    },
    setFetchingExistingRecords: (state, action: PayloadAction<boolean>) => {
      state.importExistingRecordsInProgress = action.payload;
    },
    setInsertingSourceData: (state, action: PayloadAction<boolean>) => {
      state.insertSourceDataInProgress = action.payload;
    },
    setBuilderProjectId: (state, action: PayloadAction<number>) => {
      state.builderProjectId = action.payload;
    },
    setExtractUser: (state, action: PayloadAction<ExtractUser | undefined>) => {
      state.extractUser = action.payload;
    },
    setRedcapEnv: (state, action: PayloadAction<InstanceType>) => {
      state.redcapEnv = action.payload;
    },
    setRedcapToken: (state, action: PayloadAction<string>) => {
      state.redcapToken = action.payload;
    },
    setIsRegularUser: (state, action: PayloadAction<boolean>) => {
      state.isRegularUser = action.payload;
    },
    setExtractUserId: (state, action: PayloadAction<number>) => {
      state.extractUserId = action.payload;
    },
    setExtractAccessToken: (state, action: PayloadAction<string>) => {
      state.extractToken = action.payload;
    },
    setExtractReleaseId: (state, action: PayloadAction<number | undefined>) => {
      state.extractReleaseId = action.payload;
    },
    setCurrentPage: (
      state,
      action: PayloadAction<ImportStepEnum | BuildImportStepEnum>
    ) => {
      state.currentStep = action.payload;
    },
    setCollapseHeader: (state, action: PayloadAction<boolean>) => {
      state.collapseHeader = action.payload;
    },
    setCollapseDashboard: (state, action: PayloadAction<boolean>) => {
      state.collapseDashboard = action.payload;
    },
    setIsMultiSheet: (state, action: PayloadAction<boolean>) => {
      state.isMultiSheet = action.payload;
    },
    setSheetType: (
      state,
      action: PayloadAction<DataSourceSheetTypeEnum | undefined>
    ) => {
      state.sheetType = action.payload;
    },
    setSheetJoinField: (state, action: PayloadAction<string>) => {
      state.sheetJoinField = action.payload;
    },
    setProjectDetails: (state, action: PayloadAction<ProjectDetails>) => {
      state.projectDetails = action.payload;
    },
    setCheckboxDelimiter: (state, action: PayloadAction<string>) => {
      state.checkboxDelimiter = action.payload;
    },
    setConfirmDeletions: (state, action: PayloadAction<boolean>) => {
      state.confirmDeletions = action.payload;
    },
    setMalformedSheets: (state, action: PayloadAction<string[]>) => {
      state.malformedSheets = action.payload;
    },
    // setExtractReleaseInfo: (
    //   state,
    //   action: PayloadAction<ExtractReleaseInfo | undefined>
    // ) => {
    //   state.extractReleaseInfo = action.payload;
    // },
    setValidationErrors: (
      state,
      action: PayloadAction<ValidationErrorMsg[]>
    ) => {
      state.validationErrors = action.payload;
    },
    setFormattedItems: (state, action: PayloadAction<FormattedItemMsg[]>) => {
      state.formattedItems = action.payload;
    },
    setProjectContainsRecords: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.projectContainsExistingRecords = action.payload;
    },
    setSourceDataHeaders: (
      state,
      action: PayloadAction<SourceDataHeader[]>
    ) => {
      state.sourceDataHeaders = action.payload;
    },
    setDataViewSearchTerm: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.dataViewSearchTerm = action.payload;
    },
    setMappingStatus: (
      state,
      action: PayloadAction<SessionMappingStatus | undefined>
    ) => {
      state.mappingStatus = action.payload;
    },
    setFieldValidationStatus: (
      state,
      action: PayloadAction<SessionValidationStatus | undefined>
    ) => {
      state.fieldValidationStatus = action.payload;
    },
    setRecordValidationStatus: (
      state,
      action: PayloadAction<SessionValidationStatus | undefined>
    ) => {
      state.recordValidationStatus = action.payload;
    },
    setMergeStatus: (
      state,
      action: PayloadAction<SessionValidationStatus | undefined>
    ) => {
      state.mergeStatus = action.payload;
    },
    setRecordsEncodedOn: (state, action: PayloadAction<string | undefined>) => {
      state.encodedOn = action.payload;
    },
    resetCoreState: (state) => {
      return {
        ...initialState,
        extractUserId: state.extractUserId,
        extractToken: state.extractToken,
        extractReleaseId: state.extractReleaseId,
        extractUser: state.extractUser,
      };
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setBuildWorkflow,
  setGetBaseDataLoading,
  setSessionInstantiated,
  setBaseImportData,
  setFetchingExtractUser,
  setExtractUserId,
  setExtractUser,
  setRedcapEnv,
  setRedcapToken,
  setPendingTasks,
  setFetchingExistingRecords,
  setInsertingSourceData,
  setIsRegularUser,
  setExtractAccessToken,
  setExtractReleaseId,
  setCurrentPage,
  setCollapseHeader,
  setCollapseDashboard,
  setProjectDetails,
  setIsMultiSheet,
  setSheetType,
  setSheetJoinField,
  setCheckboxDelimiter,
  setProjectUid,
  setSessionUid,
  setConfirmDeletions,
  setMalformedSheets,
  setFormattedItems,
  setValidationErrors,
  setBuilderProjectId,
  setMappingStatus,
  setFieldValidationStatus,
  setRecordValidationStatus,
  setMergeStatus,
  resetCoreState,
  setProjectContainsRecords,
  setSourceDataHeaders,
  setRecordsEncodedOn,
  setDataViewSearchTerm,
} = sharedSlice.actions;

/*********************
THUNKS
**********************/
export const fetchExtractUserAsync =
  (accessToken: string) => (dispatch: any) => {
    if (accessToken) {
      const sessionApi = new SessionApi(Config.API_CONFIG);
      dispatch(setFetchingExtractUser(true));
      sessionApi
        .getUser({
          body: { accessToken: accessToken },
        })
        .subscribe(
          (response: UserResponse) => {
            if (response.result) {
              dispatch(setExtractAccessToken(accessToken));
              dispatch(setExtractUser(response.result));
              dispatch(setExtractUserId(response.result.id));
              dispatch(
                setIsRegularUser(
                  response.result.role.name === "REGULAR_USER" ||
                    (response.result.impersonationRole &&
                      response.result.impersonationRole.name ===
                        "REGULAR_USER") ||
                    true
                )
              );
              switch (response.result.redcapUrl) {
                case "https://redcap.mskcc.org/api/":
                  dispatch(setRedcapEnv(InstanceType.Production));
                  break;
                case "https://redcapdev.mskcc.org/api/":
                  dispatch(setRedcapEnv(InstanceType.Dev));
                  break;
                case "https://redcaptest.mskcc.org/api/":
                  dispatch(setRedcapEnv(InstanceType.Test));
                  break;
                default:
                  dispatch(setRedcapEnv(InstanceType.Production));
                  break;
              }
            }
            dispatch(setFetchingExtractUser(false));
          },
          (error: RawAjaxResponse<UserResponse>) => {
            const errMsg = error.response.message;
            dispatch(setExtractUser(undefined));
            dispatch(setFetchingExtractUser(false));
          }
        );
    } else {
      dispatch(setExtractUser(undefined));
    }
  };

export const fetchExistingRedcapRecords =
  (projectUid: string) => (dispatch: any, getState: () => RootState) => {
    const importApi = new ImportApi(Config.API_CONFIG);

    const rcEnv = selectRedcapEnv(getState());
    const rcToken = selectRedcapToken(getState());
    const pendingTasks = selectPendingTasks(getState());

    dispatch(setFetchingExistingRecords(true));
    importApi
      .importExistingRecordsRedcap({
        body: {
          payload: {
            projectUid: projectUid,
            rcEnv: rcEnv,
            rcToken: rcToken,
          },
        },
      })
      .subscribe(
        (response: Response) => {
          if (response.result) {
            dispatch(
              setPendingTasks([
                ...pendingTasks,
                {
                  taskType: AsyncTaskTypeEnum.ImportExistingRecords,
                  taskId: response.result,
                },
              ])
            );
          }
        },
        (error: RawAjaxResponse<Response>) => {
          const errMsg = error.response.message;
        }
      );
  };

export const getBaseData =
  (userId: number, projectUid: string, sessionUid: string) =>
  (dispatch: any) => {
    const dataApi = new DataApi(Config.API_CONFIG);

    dispatch(setGetBaseDataLoading(true));
    dataApi.getBaseImportData({ projectUid, sessionUid }).subscribe(
      (response: BaseImportDataResponse) => {
        if (response) {
          const res = response.result;
          dispatch(setBaseImportData(res));
          dispatch(setSessionInstantiated(true));
          res.redcapToken && dispatch(fetchExistingRedcapRecords(projectUid));
        }
        dispatch(setGetBaseDataLoading(false));
      },
      (error: RawAjaxResponse<BaseImportDataResponse>) => {
        const errMsg = error.response.message;
        dispatch(setGetBaseDataLoading(false));
      }
    );
  };

export const getSessionData =
  (sessionUid: string) => (dispatch: any, getState: () => RootState) => {
    const sessionApi = new SessionApi(Config.API_CONFIG);

    sessionApi.getSession({ sessionUid }).subscribe(
      (response: SessionResponse) => {
        if (response) {
          const res: ImportSession = response.result;

          // Source Data Headers
          dispatch(
            setSourceDataHeaders(
              res.sourceDataHeaders || selectSourceDataHeaders(getState())
            )
          );
          // Malformed Sheets
          dispatch(
            setMalformedSheets(
              res.malformedSheets || selectMalformedSheets(getState())
            )
          );
        }
      },
      (error: RawAjaxResponse<SessionResponse>) => {
        const errMsg = error.response.message;
      }
    );
  };

export const updateSession =
  (projectUid: string, sessionUid: string, payload: SessionPayload) =>
  (dispatch: any) => {
    const sessionApi = new SessionApi(Config.API_CONFIG);

    const request: UpdateSessionRequest = {
      sessionUid: sessionUid,
      projectUid: projectUid,
      body: { payload: payload },
    };

    sessionApi.updateSession(request).subscribe(
      (response: SessionResponse) => {
        if (response && response.result) {
          const res: ImportSession = response.result;
          dispatch(getSessionData(sessionUid));
          dispatch(setMalformedSheets(res.malformedSheets || []));
          dispatch(setMappingStatus(res.mappingStatus));
          dispatch(setFieldValidationStatus(res.fieldValidationStatus));
          dispatch(setRecordValidationStatus(res.recordValidationStatus));
          dispatch(setMergeStatus(res.mergeStatus));
          dispatch(setRecordsEncodedOn(res.encodedOn));
        }
      },
      (error: RawAjaxResponse<SessionResponse>) => {
        const errMsg = error.response.message;
      }
    );
  };

/*********************
SELECTORS
**********************/
export const selectBuildWorkflow = (state: RootState) =>
  state[sharedSlice.name].buildWorkflow;

export const selectSessionInstantiated = (state: RootState) =>
  state[sharedSlice.name].sessionInstantiated;

export const selectFetchingExtractUser = (state: RootState) =>
  state[sharedSlice.name].fetchingExtractUser;

export const selectExtractUser = (state: RootState) =>
  state[sharedSlice.name].extractUser;

export const selectExtractUserId = (state: RootState) =>
  state[sharedSlice.name].extractUserId;

export const selectProjectUid = (state: RootState) =>
  state[sharedSlice.name].projectUid;

export const selectSessionUid = (state: RootState) =>
  state[sharedSlice.name].sessionUid;

export const selectIsMultiSheet = (state: RootState) =>
  state[sharedSlice.name].isMultiSheet;

export const selectSheetJoinField = (state: RootState) =>
  state[sharedSlice.name].sheetJoinField;

export const selectSheetType = (state: RootState) =>
  state[sharedSlice.name].sheetType;

export const selectCheckboxDelimiter = (state: RootState) =>
  state[sharedSlice.name].checkboxDelimiter;

export const selectRedcapEnv = (state: RootState) =>
  state[sharedSlice.name].redcapEnv;

export const selectRecordIdField = (state: RootState) =>
  state[sharedSlice.name].recordIdField;

export const selectRedcapVersion = (state: RootState) =>
  state[sharedSlice.name].redcapVersion;

export const selectRedcapToken = (state: RootState) =>
  state[sharedSlice.name].redcapToken;

export const selectExtractToken = (state: RootState) =>
  state[sharedSlice.name].extractToken;

export const selectExtractReleaseId = (state: RootState) =>
  state[sharedSlice.name].extractReleaseId;

// export const selectExtractReleaseInfo = (state: RootState) =>
//   state[coreSlice.name].extractReleaseInfo;

export const selectProjectDetails = (state: RootState) =>
  state[sharedSlice.name].projectDetails;

export const selectSourceDataName = (state: RootState) =>
  state[sharedSlice.name].sourceDataName;

export const selectCheckboxMap = (state: RootState) =>
  state[sharedSlice.name].checkboxMap;

export const selectConfirmDeletions = (state: RootState) =>
  state[sharedSlice.name].confirmDeletions;

export const selectIsRegularUser = (state: RootState) =>
  state[sharedSlice.name].isRegularUser;

export const selectWarning = (state: RootState) =>
  state[sharedSlice.name].linterWarning;

export const selectFetchExistingFailed = (state: RootState) =>
  state[sharedSlice.name].fetchExistingFailed;

export const selectMetadataHeaders = (state: RootState) =>
  state[sharedSlice.name].metadataHeaders;

export const selectCollapseHeader = (state: RootState) =>
  state[sharedSlice.name].collapseHeader;

export const selectCollapseDashboard = (state: RootState) =>
  state[sharedSlice.name].collapseDashboard;

export const selectError = (state: RootState) => state[sharedSlice.name].error;

export const selectCurrentPage = (state: RootState) =>
  state[sharedSlice.name].currentStep;

export const selectFetchingExistingRecords = (state: RootState) =>
  state[sharedSlice.name].importExistingRecordsInProgress;

export const selectInsertingSourceData = (state: RootState) =>
  state[sharedSlice.name].insertSourceDataInProgress;

export const selectIgnoredFields = (state: RootState) =>
  state[sharedSlice.name].ignoredFields;

export const selectDuplicateSourceFields = (state: RootState) =>
  state[sharedSlice.name].duplicateFields;

export const selectMalformedSheets = (state: RootState) =>
  state[sharedSlice.name].malformedSheets;

export const selectMetadata = (state: RootState) =>
  state[sharedSlice.name].metadata;

export const selectSourceDataHeaders = (state: RootState) =>
  state[sharedSlice.name].sourceDataHeaders;

export const selectGetBaseDataLoading = (state: RootState) =>
  state[sharedSlice.name].getBaseDataLoading;

export const selectValidationErrors = (state: RootState) =>
  state[sharedSlice.name].validationErrors;

export const selectFormattedItems = (state: RootState) =>
  state[sharedSlice.name].formattedItems;

export const selectBuilderProjectId = (state: RootState) =>
  state[sharedSlice.name].builderProjectId;

export const selectPendingTasks = (state: RootState) =>
  state[sharedSlice.name].pendingTasks;

export const selectMetadataForms = (state: RootState) =>
  state[sharedSlice.name].metadataForms;

export const selectProjectContainsRecords = (state: RootState) =>
  state[sharedSlice.name].projectContainsExistingRecords;

export const selectDataViewSearchTerm = (state: RootState) =>
  state[sharedSlice.name].dataViewSearchTerm;

export const selectMappingStatus = (state: RootState) =>
  state[sharedSlice.name].mappingStatus;

export const selectFieldValidationStatus = (state: RootState) =>
  state[sharedSlice.name].fieldValidationStatus;

export const selectRecordValidationStatus = (state: RootState) =>
  state[sharedSlice.name].recordValidationStatus;

export const selectMergeStatus = (state: RootState) =>
  state[sharedSlice.name].mergeStatus;

export const selectRecordsEncodedOn = (state: RootState) =>
  state[sharedSlice.name].encodedOn;

export const selectEncodedDownloadedOn = (state: RootState) =>
  state[sharedSlice.name].encodedDownloadedOn;

export const selectEncodedPushedToRcOn = (state: RootState) =>
  state[sharedSlice.name].encodedPushedToRcOn;
