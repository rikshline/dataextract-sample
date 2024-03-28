import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { fieldSlice } from "./builderSlices/FieldSlices";
import { projectSlice } from "./builderSlices/ProjectSlice";
import { screensSlice } from "./builderSlices/ScreensSlice";
import { sharedSlice as builderSharedSlice } from "./builderSlices/SharedSlice";
import { dashboardSlice } from "./importSlices/DashboardSlice";
import { exportSlice } from "./importSlices/ExportSlice";
import { mskExtractImportApi } from "./importSlices/ImportRTK/generated-hooks";
import { importSlice } from "./importSlices/ImportSlice";
import { mappingSlice } from "./importSlices/MappingSlice";
import { mergeConflictsSlice } from "./importSlices/MergeValidationSlice";
import { prepareSlice } from "./importSlices/PrepareSlice";
import { recordConflictsSlice } from "./importSlices/RecordValidationSlice";
import { sharedSlice as importSharedSlice } from "./importSlices/SharedSlice";
import { validationSlice } from "./importSlices/ValidationSlice";

export const store = configureStore({
  reducer: {
    [builderSharedSlice.name]: builderSharedSlice.reducer,
    [projectSlice.name]: projectSlice.reducer,
    [screensSlice.name]: screensSlice.reducer,
    [fieldSlice.name]: fieldSlice.reducer,
    [importSharedSlice.name]: importSharedSlice.reducer,
    [dashboardSlice.name]: dashboardSlice.reducer,
    [prepareSlice.name]: prepareSlice.reducer,
    [importSlice.name]: importSlice.reducer,
    [mappingSlice.name]: mappingSlice.reducer,
    [validationSlice.name]: validationSlice.reducer,
    [recordConflictsSlice.name]: recordConflictsSlice.reducer,
    [mergeConflictsSlice.name]: mergeConflictsSlice.reducer,
    [exportSlice.name]: exportSlice.reducer,
    [mskExtractImportApi.reducerPath]: mskExtractImportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mskExtractImportApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
