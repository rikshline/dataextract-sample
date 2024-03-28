// import {
//   ExtractMetaDataFormat,
//   ExtractMetaDataType,
// } from "../../builder/graphql/Operations";

export enum ProjectGroup {
  MyProjects = "My Projects",
  AllShared = "All Shared",
  AllLocked = "All Locked",
  All = "All",
}

export enum ProjectType {
  All = "All",
  Workspaces = "Workspaces",
  Templates = "Templates",
  Projects = "Projects",
}

export enum StandarLibrary {
  StandarLibrary = "Standard Library",
}

export enum ViewFieldMode {
  ReadOnly = 1,
  Editable = 2,
  New = 3,
}

export enum ProjectsType {
  Mine = 1,
  SharedProjects = 2,
  SharedTemplates = 3,
  Locked = 4,
  All = 5,
  SharedData = 6,
}

export enum ProjectMode {
  Edit = 0,
  ReadOnly = 1,
  RequestAccess = 2, // Read Only + Request Project Access message
  Locked = 3, // # Read Only + Edit Projects Details message
  Archived = 4,
  Freezed = 5,
}

export enum ProjectPurpose {
  Practice = 0,
  Other = 1,
  Research = 2,
  Quality = 3,
  Operational = 4,
}

export enum SessionInfoKeys {
  EditMode = "ADMIN_EDIT_MODE",
  CurrentRoleId = "CURRENT_ROLE_ID",
}

export enum AdminEditMode {
  Edit = "Edit Mode",
}

export enum DateTimeType {
  Date_DMY = "date_dmy",
  Date_MDY = "date_mdy",
  Date_YMD = "date_ymd",
  DateTime = "datetime_dmy",
  DateTime_MDY = "datetime_mdy",
  DateTime_YMD = "datetime_ymd",
  DateTimeSec_DMY = "datetime_seconds_dmy",
  DateTimeSec_MDY = "datetime_seconds_mdy",
  DateTimeSec_YMD = "datetime_seconds_ymd",
}

export const fieldAlignmentTypes: any = {
  RV: "RV",
  RH: "RH",
  LV: "LV",
  LH: "LH",
};

export const fieldAlignmentNames: any = {
  RV: "Right/Vertical",
  RH: "Right/Horizontal",
  LV: "Left/Vertical",
  LH: "Left/Horizontal",
};

export const fieldTypeTexts = {
  // [ExtractMetaDataType.Text]: "Text",
  // [ExtractMetaDataType.Date]: "Date",
  // [ExtractMetaDataType.Time]: "Time",
  // [ExtractMetaDataType.Datetime]: "Datetime",
  // [ExtractMetaDataType.Email]: "Email",
  // [ExtractMetaDataType.Mrn10]: "MRN (10 digits)",
  // [ExtractMetaDataType.Mrn]: "MRN (generic)",
  // [ExtractMetaDataType.Phonenumber]: "Phone Number",
  // [ExtractMetaDataType.Ssn]: "Social Security Number (U.S.)",
  // [ExtractMetaDataType.Zipcode]: "Zip Code (U.S.)",
  // [ExtractMetaDataType.Integer]: "Integer",
  // [ExtractMetaDataType.Number]: "Number",
  // [ExtractMetaDataType.Notesbox]: "Notes Box",
  // [ExtractMetaDataType.Yesno]: "Yes - No",
  // [ExtractMetaDataType.Truefalse]: "True - False",
  // [ExtractMetaDataType.Checkboxes]: "Checkboxes",
  // [ExtractMetaDataType.Dropdown]: "Dropdown",
  // [ExtractMetaDataType.Radiobuttons]: "Radio Buttons",
  // [ExtractMetaDataType.Slider]: "Slider",
  // [ExtractMetaDataType.Calculatedfield]: "Calculated Field",
  // [ExtractMetaDataType.Fileupload]: "File Upload",
  // [ExtractMetaDataType.Descriptive]: "Descriptive",
};

export const fieldTypeAlignment = {
  // [ExtractMetaDataType.Text]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Date]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Time]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Datetime]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Email]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Mrn10]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Mrn]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Phonenumber]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Ssn]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Zipcode]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Integer]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Number]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Notesbox]: fieldAlignmentTypes["LH"],
  // [ExtractMetaDataType.Yesno]: fieldAlignmentTypes["RH"],
  // [ExtractMetaDataType.Truefalse]: fieldAlignmentTypes["RH"],
  // [ExtractMetaDataType.Checkboxes]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Dropdown]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Radiobuttons]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Slider]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Calculatedfield]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Fileupload]: fieldAlignmentTypes["RV"],
  // [ExtractMetaDataType.Descriptive]: fieldAlignmentTypes["RV"],
};

export enum ScreenLayoutType {
  Tile,
  List,
}

export enum DataImportType {
  Token,
  File,
}

export enum InstanceId {
  Test = 21,
  Prod = 1,
}

export enum InstanceType {
  Test = "",
  Prod = "",
}

export const instanceType = {
  Test: "",
  Prod: "",
};

export const projectTooltips = {
  title: "Title of the project, displayed in both REDCap and Extract",
  titleTemporary: "Title of the temporary workspace",
  titleTemplate: "Title of the template",
  description:
    "Comments describing the project's use or purpose that are displayed on the 'My Projects' page in REDCap and 'Project Details' in Extract",
  descriptionTemporary:
    "Comments describing the temporary workspace's use or purpose",
  descriptionTemplate:
    "Comments describing the template's use ore purpose that are displayed in the 'Project Details' page in Extract",
  managedBy:
    "List of users with design rights in REDCap and Extract. Your changes will be reflected in REDCap the next time you sync. At this time, you can only add users via Extract. If you would like to remove users or change permissions, please do so in REDCap.",
  managedByTemp: "List of users with design rights in Extract",
  totalFields: "The total number of the data elements included in the project",
  sharedFields:
    "The total number of data elements marked as public in the project",
  temporaryWarning: "Click 'Convert to Permanent' and select an option",
  standardLibrary:
    "The Standard Library is a list of vetted/standardized fields provided by the Extract team",
  sharedField:
    "Shared Fields come from existing projects or templates created by other Extract users",
};

export enum SLIndex {
  SL = "topbraid",
  SLRC = "topbraid_rc",
}

export const timeFormat = (formatType: string | undefined) => {
  switch (formatType) {
    case "D-M-Y H:M":
    case "M-D-Y H:M":
    case "Y-M-D H:M":
      return "HH:mm";
    case "D-M-Y H:M:S":
    case "M-D-Y H:M:S":
    case "Y-M-D H:M:S":
      return "HH:mm:ss";
    default:
      return undefined;
  }
};

export const dateTimeFormat = (
  formatType: ExtractMetaDataFormat | undefined
) => {
  switch (formatType) {
    case ExtractMetaDataFormat.Dmy:
    case ExtractMetaDataFormat.Mdy:
    case ExtractMetaDataFormat.Ymd:
      return "YYYY-MM-DD";
    case ExtractMetaDataFormat.Dmyhm:
    case ExtractMetaDataFormat.Mdyhm:
    case ExtractMetaDataFormat.Ymdhm:
      return "YYYY-MM-DD HH:mm";
    case ExtractMetaDataFormat.Dmyhms:
    case ExtractMetaDataFormat.Mdyhms:
    case ExtractMetaDataFormat.Ymdhms:
      return "YYYY-MM-DD HH:mm:ss";
    default:
      return "";
  }
};

export const dateTimeDisplayFormat = (formatType: string | undefined) => {
  switch (formatType) {
    case "D-M-Y":
      return "DD-MM-YYYY";
    case "M-D-Y":
      return "MM-DD-YYYY";
    case "Y-M-D":
      return "YYYY-MM-DD";
    case "D-M-Y H:M":
      return "DD-MM-YYYY HH:mm";
    case "M-D-Y H:M":
      return "MM-DD-YYYY HH:mm";
    case "Y-M-D H:M":
      return "YYYY-MM-DD HH:mm";
    case "D-M-Y H:M:S":
      return "DD-MM-YYYY HH:mm:ss";
    case "M-D-Y H:M:S":
      return "MM-DD-YYYY HH:mm:ss";
    case "Y-M-D H:M:S":
      return "YYYY-MM-DD HH:mm:ss";
    default:
      return "";
  }
};

export const dateTimeFormatDB = (formatType: string | undefined) => {
  switch (formatType) {
    case "D-M-Y":
      return ExtractMetaDataFormat.Dmy;
    case "M-D-Y":
      return ExtractMetaDataFormat.Mdy;
    case "Y-M-D":
      return ExtractMetaDataFormat.Ymd;
    case "D-M-Y H:M":
      return ExtractMetaDataFormat.Dmyhm;
    case "M-D-Y H:M":
      return ExtractMetaDataFormat.Mdyhm;
    case "Y-M-D H:M":
      return ExtractMetaDataFormat.Ymdhm;
    case "D-M-Y H:M:S":
      return ExtractMetaDataFormat.Dmyhms;
    case "M-D-Y H:M:S":
      return ExtractMetaDataFormat.Mdyhms;
    case "Y-M-D H:M:S":
      return ExtractMetaDataFormat.Ymdhms;
    default:
      return ExtractMetaDataFormat.Ymd;
  }
};

export const dateTimeFormatDbDisplay = (formatType: string | undefined) => {
  switch (formatType) {
    case ExtractMetaDataFormat.Dmy:
      return "D-M-Y";
    case ExtractMetaDataFormat.Mdy:
      return "M-D-Y";
    case ExtractMetaDataFormat.Ymd:
      return "Y-M-D";
    case ExtractMetaDataFormat.Dmyhm:
      return "D-M-Y H:M";
    case ExtractMetaDataFormat.Mdyhm:
      return "M-D-Y H:M";
    case ExtractMetaDataFormat.Ymdhm:
      return "Y-M-D H:M";
    case ExtractMetaDataFormat.Dmyhms:
      return "D-M-Y H:M:S";
    case ExtractMetaDataFormat.Mdyhms:
      return "M-D-Y H:M:S";
    case ExtractMetaDataFormat.Ymdhms:
      return "Y-M-D H:M:S";
    default:
      return "";
  }
};

export const BuilderUrl: { [key: string]: string } = {
  local: "",
  local_docker: "",
  aws_dev: "",
  aws_test: "",
  aws_uat: "",
  aws_prod: "",
};
