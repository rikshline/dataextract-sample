import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ExportApi,
  ExportReportExportTypeEnum,
  RawAjaxResponse,
} from "../../api";
import { Config } from "../../common/config/Config";
import { RootState } from "../Store";

export interface ExportState {
  downloadMappingsLoading: boolean;
  downloadMappingsError: string | undefined;

  downloadEncodedLoading: boolean;
  downloadEncodedError: string | undefined;

  downloadReportLoading: boolean;
  downloadReportError: string | undefined;
  emailReportSuccess: boolean | undefined;

  showGoToRedcap: boolean;
  redcapVersion: string | undefined;
}

export const initialState: ExportState = {
  downloadMappingsLoading: false,
  downloadMappingsError: undefined,

  downloadEncodedLoading: false,
  downloadEncodedError: undefined,

  downloadReportLoading: false,
  downloadReportError: undefined,
  emailReportSuccess: undefined,

  showGoToRedcap: false,
  redcapVersion: undefined,
};

/*********************
REDUCERS
**********************/
export const exportSlice = createSlice({
  name: "export",
  initialState: initialState,
  reducers: {
    setDownloadMappingsLoading: (state, action: PayloadAction<boolean>) => {
      state.downloadMappingsLoading = action.payload;
    },
    setDownloadMappingsError: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.downloadMappingsError = action.payload;
    },

    setDownloadEncodedLoading: (state, action: PayloadAction<boolean>) => {
      state.downloadEncodedLoading = action.payload;
    },
    setDownloadEncodedError: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.downloadEncodedError = action.payload;
    },

    setDownloadReportLoading: (state, action: PayloadAction<boolean>) => {
      state.downloadReportLoading = action.payload;
    },
    setDownloadReportError: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.downloadReportError = action.payload;
    },
    setEmailReportSuccess: (
      state,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.emailReportSuccess = action.payload;
    },
    setShowGoToRedcap: (state, action: PayloadAction<boolean>) => {
      state.showGoToRedcap = action.payload;
    },
    setRedcapVersion: (state, action: PayloadAction<string | undefined>) => {
      state.redcapVersion = action.payload;
    },
    resetExportState: (state) => {
      return initialState;
    },
  },
});

/*********************
ACTIONS
**********************/
export const {
  setDownloadMappingsLoading,
  setDownloadMappingsError,
  setDownloadEncodedLoading,
  setDownloadEncodedError,
  setDownloadReportLoading,
  setDownloadReportError,
  setEmailReportSuccess,
  setShowGoToRedcap,
  setRedcapVersion,
  resetExportState,
} = exportSlice.actions;

/*********************
THUNK
**********************/
export const downloadMappings =
  (projectUid: string, projectTitle: string) =>
  (dispatch: any, getState: () => RootState) => {
    const exportApi = new ExportApi(Config.API_CONFIG);

    dispatch(setDownloadMappingsLoading(true));
    exportApi.downloadMappings({ projectUid: projectUid }).subscribe(
      (response: Blob) => {
        if (response) {
          const currentDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const fileName = `${projectTitle
            .substring(0, 25)
            .replace(/ /g, "_")}_Mappings_${currentDate}.xlsx`;

          // Create a temporary link element to trigger the download
          const a = document.createElement("a");
          const url = URL.createObjectURL(response);
          a.href = url || "";
          a.download = fileName;
          document.body.appendChild(a);
          a.click();

          // Clean up the link element
          document.body.removeChild(a);

          dispatch(setDownloadMappingsLoading(false));
        }
      },
      (error: RawAjaxResponse<Blob>) => {
        // dispatch(setDownloadMappingsError(error.message));
        // dispatch(setDownloadMappingsLoading(false));
      }
    );
  };

export const downloadEncodedRecords =
  (projectUid: string, sessionUid: string, projectTitle: string) =>
  (dispatch: any, getState: () => RootState) => {
    const exportApi = new ExportApi(Config.API_CONFIG);

    dispatch(setDownloadEncodedLoading(true));
    exportApi
      .downloadRecords({ projectUid: projectUid, sessionUid: sessionUid })
      .subscribe(
        (response: Blob) => {
          if (response) {
            const currentDate = new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
            const fileName = `${projectTitle
              .substring(0, 25)
              .replace(/ /g, "_")}_Encoded_${currentDate}.csv`;

            // Create a temporary link element to trigger the download
            const a = document.createElement("a");
            const url = URL.createObjectURL(response);
            a.href = url || "";
            a.download = fileName;
            document.body.appendChild(a);
            a.click();

            // Clean up the link element
            document.body.removeChild(a);

            dispatch(setDownloadEncodedLoading(false));
          }
        },
        (error: RawAjaxResponse<Blob>) => {
          // dispatch(setDownloadEncodedError(error.message));
          // dispatch(setDownloadEncodedLoading(false));
        }
      );
  };

export const downloadChangelogReport =
  (
    projectUid: string,
    sessionUid: string,
    projectTitle: string,
    exportType: ExportReportExportTypeEnum
  ) =>
  (dispatch: any, getState: () => RootState) => {
    const exportApi = new ExportApi(Config.API_CONFIG);

    dispatch(setDownloadReportLoading(true));
    const payload = {
      projectUid: projectUid,
      sessionUid: sessionUid,
      exportType: exportType,
    };

    exportApi
      .exportReport({
        projectUid: projectUid,
        sessionUid: sessionUid,
        exportType: exportType,
      })
      .subscribe(
        (response: Blob) => {
          if (response) {
            if (exportType === "file") {
              const currentDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });
              const fileName = `${projectTitle
                .substring(0, 25)
                .replace(/ /g, "_")}_${currentDate}_Changelog.zip`;

              // Create a temporary link element to trigger the download
              const a = document.createElement("a");
              const url = URL.createObjectURL(response);
              a.href = url || "";
              a.download = fileName;
              document.body.appendChild(a);
              a.click();

              // Clean up the link element
              document.body.removeChild(a);
            }
          } else {
            dispatch(setEmailReportSuccess(true));
          }
          dispatch(setDownloadReportLoading(false));
        },
        (error: RawAjaxResponse<Blob>) => {
          // dispatch(setDownloadReportError(error.message));
          // dispatch(setDownloadReportLoading(false));
        }
      );
  };

/*********************
SELECTORS
**********************/
export const selectDownloadMappingsLoading = (state: RootState) =>
  state[exportSlice.name].downloadMappingsLoading;

export const selectDownloadMappingsError = (state: RootState) =>
  state[exportSlice.name].downloadMappingsError;

export const selectDownloadEncodedLoading = (state: RootState) =>
  state[exportSlice.name].downloadEncodedLoading;

export const selectDownloadEncodedError = (state: RootState) =>
  state[exportSlice.name].downloadEncodedError;

export const selectDownloadReportLoading = (state: RootState) =>
  state[exportSlice.name].downloadReportLoading;

export const selectDownloadReportError = (state: RootState) =>
  state[exportSlice.name].downloadReportError;

export const selectEmailReportSuccess = (state: RootState) =>
  state[exportSlice.name].emailReportSuccess;

export const selectShowGoToRedcap = (state: RootState) =>
  state[exportSlice.name].showGoToRedcap;

export const selectRedcapVersion = (state: RootState) =>
  state[exportSlice.name].redcapVersion;
