// import { InfoCircleFilled } from "@ant-design/icons";
// import { Button, Col, Row, Typography } from "antd";
// import { FunctionComponent, useState } from "react";
// import { REDCapProjectsSelect } from "../../../../builder/components/create-project/components/REDCapProjectsSelect";
// import { ExtractProjectSelect } from "../../../../builder/components/project-select/ExtractProjectSelect";
// import { YesNoQuestion } from "../../../../common/components/yes-no-question/YesNoQuestion";
// import { ProjectImportType } from "../../../../common/constants/LinterConstants";
// import { useAppDispatch, useAppSelector } from "../../../../store/Hooks";
// import {
//   DestinationProjectSelection,
//   selectExtractProjectExists,
//   selectSelectedProject,
//   setExtractProject,
//   setExtractProjectExists,
//   setSelectedProject,
// } from "../../../../store/importSlices/PrepareSlice";
// import { StepContentProps } from "./StepContent";

// export const ProjectExists: FunctionComponent<StepContentProps> = ({
//   titleFontSize,
//   bodyFontSize,
// }) => {
//   // Hooks
//   const dispatch = useAppDispatch();

//   // Local State
//   const [showMappingUpload, setShowMappingUpload] = useState<boolean>(false);
//   const [projectSelectMode, setProjectSelectMode] = useState<ProjectImportType>(
//     ProjectImportType.Extract
//   );

//   // Redux State Selectors
//   const extractProjectExists: boolean | undefined = useAppSelector(
//     selectExtractProjectExists
//   );
//   const selectedProject: DestinationProjectSelection = useAppSelector(
//     selectSelectedProject
//   );

//   // Render Functions
//   const renderProjectSelection = () => {
//     let selection: JSX.Element = <></>;
//     if (projectSelectMode === ProjectImportType.Extract) {
//       selection = <ExtractProjectSelect />;
//     }
//     if (projectSelectMode === ProjectImportType.Redcap) {
//       selection = (
//         <REDCapProjectsSelect
//           selectedRedcapProjectToken={selectedProject.redcapToken}
//           onProjectSelect={(redcapToken) =>
//             dispatch(
//               setSelectedProject({
//                 ...selectedProject,
//                 extractId: undefined,
//                 redcapToken: redcapToken,
//               })
//             )
//           }
//           onProjectDeselect={() =>
//             dispatch(
//               setSelectedProject({ ...selectedProject, redcapToken: undefined })
//             )
//           }
//         />
//       );
//     }

//     return (
//       <Row
//         justify="start"
//         align="middle"
//         gutter={[0, 15]}
//         style={{ marginTop: 25 }}
//       >
//         <Col span={24}>
//           <Row justify="space-between" align="middle">
//             <Col span={8}>
//               <Typography.Text style={{ fontSize: bodyFontSize }}>
//                 Select Project
//               </Typography.Text>
//             </Col>
//             <Col span="flex" />

//             <Col>
//               <Button
//                 size="large"
//                 id={"dest-proj-import-type-btn"}
//                 type="link"
//                 onClick={() => {
//                   dispatch(
//                     setSelectedProject({
//                       ...selectedProject,
//                       extractId: undefined,
//                       redcapToken: undefined,
//                     })
//                   );
//                   projectSelectMode === ProjectImportType.Extract
//                     ? setProjectSelectMode(ProjectImportType.Redcap)
//                     : setProjectSelectMode(ProjectImportType.Extract);
//                 }}
//               >
//                 {projectSelectMode === ProjectImportType.Extract
//                   ? "Select from REDCap"
//                   : "Select from Extract"}
//               </Button>
//             </Col>
//           </Row>
//         </Col>
//         <Col span={24}>{selection}</Col>
//       </Row>
//     );
//   };

//   return (
//     <Row gutter={[0, 24]}>
//       <Col span={24}>
//         <Typography.Text strong style={{ fontSize: titleFontSize }}>
//           Tell us about your Project
//         </Typography.Text>
//       </Col>
//       <Col span={24}>
//         <YesNoQuestion
//           strongQuestion={false}
//           question="Do you have an existing Extract or REDCap Project that you want to import this file into?"
//           value={extractProjectExists}
//           tooltip={""}
//           tooltipIcon={<InfoCircleFilled style={{ color: "#1192E8" }} />}
//           tooltipPlacement="topRight"
//           radioId="prepare-existing-project"
//           disabled={false}
//           radioPlacement="below"
//           onValueChange={(bool: boolean) => {
//             dispatch(setExtractProjectExists(bool));
//             dispatch(setExtractProject(undefined));
//             dispatch(
//               setSelectedProject({
//                 ...selectedProject,
//                 extractId: undefined,
//                 redcapToken: undefined,
//               })
//             );
//           }}
//           renderSideEffectOn={extractProjectExists}
//           sideEffectRenderer={renderProjectSelection}
//           fontSize={bodyFontSize}
//         />
//       </Col>
//       <Col span={24}>
//         <div style={{ paddingTop: 25, paddingLeft: 50, marginRight: 100 }}>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • Some info on what Builder Is and entails to building a project
//             here vs. doing building and import at the same time goes here. A
//             dropdown of their projects is shown if the user toggles YES.
//           </Typography.Paragraph>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • Integer at lorem sapien volutpat sagittis faucibus. Eu interdum
//             ultrices vitae viverra. Molestie lobortis aliquam lorem interdum. Ut
//             diam mauris amet augue. Consectetur velit sapien dui magna libero
//             mauris risus tellus. Malesuada at id
//           </Typography.Paragraph>
//         </div>
//       </Col>
//     </Row>
//   );
// };
