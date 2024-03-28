// import { FunctionComponent } from "react";
// import { CreateProject } from "../../../../builder/components/create-project/CreateProject";
// import { PrepareItems } from "../../../../common/constants/LinterConstants";
// import { AutoNumbering } from "./AutoNumbering";
// import { CheckboxData } from "./CheckboxData";
// import { MultipleSheets } from "./MultipleSheets";
// import { Overview } from "./Overview";
// import { ProjectExists } from "./ProjectExists";
// import { SpecialChars } from "./SpecialChars";

// export interface StepContentProps {
//   titleFontSize: number;
//   bodyFontSize: number;
// }

// export const StepContent: FunctionComponent<{ activeStep: PrepareItems }> = ({
//   activeStep,
// }) => {
//   // Constants
//   const titleFontSize = 18;
//   const bodyFontSize = 16;

//   switch (activeStep) {
//     case PrepareItems.OVERVIEW:
//       return (
//         <Overview titleFontSize={titleFontSize} bodyFontSize={bodyFontSize} />
//       );
//     case PrepareItems.PROJECT_INFO:
//       return (
//         <ProjectExists
//           titleFontSize={titleFontSize}
//           bodyFontSize={bodyFontSize}
//         />
//       );
//     case PrepareItems.CREATE_PROJECT:
//       return (
//         <CreateProject
//           titleFontSize={titleFontSize}
//           bodyFontSize={bodyFontSize}
//         />
//       );
//     case PrepareItems.AUTO_NUMBERING:
//       return (
//         <AutoNumbering
//           titleFontSize={titleFontSize}
//           bodyFontSize={bodyFontSize}
//         />
//       );

//     case PrepareItems.MULTI_SHEET:
//       return (
//         <MultipleSheets
//           titleFontSize={titleFontSize}
//           bodyFontSize={bodyFontSize}
//         />
//       );
//     case PrepareItems.CHECKBOX_DATA:
//       return (
//         <CheckboxData
//           titleFontSize={titleFontSize}
//           bodyFontSize={bodyFontSize}
//         />
//       );
//     case PrepareItems.SPECIAL_CHAR:
//       return (
//         <SpecialChars
//           titleFontSize={titleFontSize}
//           bodyFontSize={bodyFontSize}
//         />
//       );
//     default:
//       return null;
//   }
// };
