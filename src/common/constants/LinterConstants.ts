import { BuildImportStepEnum, ImportStepEnum } from "../../api";

export const tableScrollHeight = 650;

export const fullTableCell = {
  height: "105%",
  padding: "0 0 0 0",
  display: "flex",
  alignItems: "center",
};

export const responsive = {
  small: { span: 24 },
  medium: { span: 24 },
  large: { span: 12 },
  xlarge: { span: 8 },
};

export const colors = {
  primary: "#063769",
  info: "#4DA4FA",
  white: "#fff",
  success: "#009900",
  danger: "#A80900",
  lightDanger: "#FCF4F2",
  warning: "#FFB326",
  lightWarning: "#FEF6E4",
  disabled: "#F6F6F4",
  background: "#F6F6F4",
  selected: "#ddf0fc",
  neutral: "#737373",
  waiting: "#5ce8fa",
  info2: "#E8F6FE",
  mapped: "#bce600",
  hotPink: "#ff69b4",
};

export enum ProjectImportType {
  Extract,
  Redcap,
}

export enum DataImportType {
  Extract,
  Token,
  File,
}

export enum InstanceType {
  Production = "",
  Dev = "",
  Test = "",
}

export const instanceType: any = {
  Production: "",
  Development: "",
  Test: "",
};

export const PageTitles: any = {
  [ImportStepEnum.Import]: "Import",
  [ImportStepEnum.Setup]: "Setup",
  [ImportStepEnum.Mapping]: "Field Mapping",
  [ImportStepEnum.Validation]: "Field Validation",
  [ImportStepEnum.RecordConflict]: "Record Validation",
  [ImportStepEnum.MergeConflict]: "Merge Existing Records",
  [ImportStepEnum.Export]: "Export",
};

export const BuildPageTitles: any = {
  [BuildImportStepEnum.Prepare]: "Prepare",
  [BuildImportStepEnum.Upload]: "Upload",
  [BuildImportStepEnum.FieldMapping]: "Field Mapping",
  [BuildImportStepEnum.FieldValidation]: "Field Validation",
  [BuildImportStepEnum.RecordConflict]: "Record Validation",
  [BuildImportStepEnum.MergeConflict]: "Merge Existing Records",
  [BuildImportStepEnum.Export]: "Export",
};

export const PageTooltips: any = {
  [ImportStepEnum.Import]: "Upload or Select data for Import",
  [ImportStepEnum.Setup]: "Confirm project settings",
  [ImportStepEnum.Mapping]: "Map Source Data fields to Destination Project",
  [ImportStepEnum.Validation]:
    "Validate source data according to Destination Project Field metadata",
  [ImportStepEnum.RecordConflict]:
    "Checks the source data for inconsistencies in non-repeating fields and duplicate records",
  [ImportStepEnum.MergeConflict]:
    "Check existing Destination Project Records for updates with source data",
  [ImportStepEnum.Export]: "Export Data to Destination",
};

export const BuildPageTooltips: any = {};

export const PageOrder: any = {
  [ImportStepEnum.Dashboard]: -1,
  [ImportStepEnum.Import]: 0,
  [ImportStepEnum.Setup]: 1,
  [ImportStepEnum.Mapping]: 2,
  [ImportStepEnum.Validation]: 3,
  [ImportStepEnum.RecordConflict]: 4,
  [ImportStepEnum.MergeConflict]: 5,
  [ImportStepEnum.Export]: 6,
};
export const BuildPageOrder: any = {
  [BuildImportStepEnum.Dashboard]: -1,
  [BuildImportStepEnum.Prepare]: 0,
  [BuildImportStepEnum.Upload]: 1,
  [BuildImportStepEnum.FieldMapping]: 2,
  [BuildImportStepEnum.FieldValidation]: 3,
  [BuildImportStepEnum.RecordConflict]: 4,
  [BuildImportStepEnum.MergeConflict]: 5,
  [BuildImportStepEnum.Export]: 6,
};

export const PagePath: any = {
  [ImportStepEnum.Dashboard]: `/${ImportStepEnum.Dashboard}`,
  [ImportStepEnum.Import]: `/${ImportStepEnum.Import}`,
  [ImportStepEnum.Setup]: `/{sessionUid}/${ImportStepEnum.Setup}`,
  [ImportStepEnum.Mapping]: `/{sessionUid}/${ImportStepEnum.Mapping}`,
  [ImportStepEnum.Validation]: `/{sessionUid}/${ImportStepEnum.Validation}`,
  [ImportStepEnum.RecordConflict]: `/{sessionUid}/${ImportStepEnum.RecordConflict}`,
  [ImportStepEnum.MergeConflict]: `/{sessionUid}/${ImportStepEnum.MergeConflict}`,
  [ImportStepEnum.Export]: `/{sessionUid}/${ImportStepEnum.Export}`,
};
export const BuildPagePath: any = {
  [BuildImportStepEnum.Dashboard]: `/build/${BuildImportStepEnum.Dashboard}`,
  [BuildImportStepEnum.Prepare]: `/build/${BuildImportStepEnum.Prepare}`,
  [BuildImportStepEnum.Upload]: `/{sessionUid}/build/${BuildImportStepEnum.Upload}`,
  [BuildImportStepEnum.FieldMapping]: `/{sessionUid}/build/${BuildImportStepEnum.FieldMapping}`,
  [BuildImportStepEnum.FieldValidation]: `/{sessionUid}/build/${BuildImportStepEnum.FieldValidation}`,
  [BuildImportStepEnum.RecordConflict]: `/{sessionUid}/build/${BuildImportStepEnum.RecordConflict}`,
  [BuildImportStepEnum.MergeConflict]: `/{sessionUid}/build/${BuildImportStepEnum.MergeConflict}`,
  [BuildImportStepEnum.Export]: `/{sessionUid}/build/${BuildImportStepEnum.Export}`,
};

export const PageProgressColors: any = {
  complete: "#2D6C2B",
  inProgress: "#001641",
  disabled: "rgb(224, 224, 224)",
};

export enum MatchMode {
  DATA_FIELD = "Data Field",
  REDCAP_FIELD = "REDCap Field",
}

export enum LintMode {
  COLUMN = "column",
  ROW = "row",
}

export enum RecordConflictsMode {
  CHOOSE_COLS = "CHOOSE_RECONCILIATION_COLUMNS",
  REVIEW = "REVIEW",
  DONE = "DONE",
}

export enum MergeMode {
  SETUP = "SETUP",
  CHOOSE_COLS = "CHOOSE_RECONCILIATION_COLUMNS",
  MERGE = "MERGE",
  DONE = "DONE",
}

export const DATE_FORMATS: any = {
  date_dmy: "MM/DD/YYYY",
  date_mdy: "MM/DD/YYYY",
  date_ymd: "MM/DD/YYYY",
  datetime_dmy: "MM/DD/YYYY HH:mm",
  datetime_mdy: "MM/DD/YYYY HH:mm",
  datetime_ymd: "MM/DD/YYYY HH:mm",
  datetime_seconds_dmy: "MM/DD/YYYY HH:mm:ss",
  datetime_seconds_mdy: "MM/DD/YYYY HH:mm:ss",
  datetime_seconds_ymd: "MM/DD/YYYY HH:mm:ss",
  time: "HH:mm",
};

export enum PrepareItems {
  OVERVIEW = "overview",
  PROJECT_INFO = "project-info",
  CREATE_PROJECT = "create-project",
  AUTO_NUMBERING = "autonumbering-enabled",
  MULTI_SHEET = "multi-sheet",
  CHECKBOX_DATA = "checkbox-data",
  SPECIAL_CHAR = "special-char",
}
