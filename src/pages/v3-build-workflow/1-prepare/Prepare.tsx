// import { Card, Col, List, Modal, Row, Space, Typography } from "antd";
// import { FunctionComponent, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router";
// import { ActionFooter } from "../../../common/components/action-footer/ActionFooter";
// import { ExtractBtn } from "../../../common/components/extract-btn/ExtractBtn";
// import { PrepareItems } from "../../../common/constants/LinterConstants";
// import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
// import {
//   DestinationProjectSelection,
//   selectAutoNumberingEnabled,
//   selectCheckboxData,
//   selectCreateProjectFormComplete,
//   selectExtractProjectExists,
//   selectMultiSheetUpload,
//   selectNonNumericRecordId,
//   selectProjectCreationInProgress,
//   selectProjectCreationSuccess,
//   selectRecordPrefix,
//   selectSelectedProject,
//   selectSpecialCharAck,
//   setProjectCreateTrigger,
// } from "../../../store/importSlices/PrepareSlice";
// import { StepContent } from "./components/StepContent";
// import { StepItem } from "./components/StepItem";

// interface PrepareItemMeta {
//   key: PrepareItems;
//   title: string;
//   visible: boolean;
// }

// export const Prepare: FunctionComponent = () => {
//   // Hooks
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const scrollableRef = useRef<HTMLDivElement>(null);

//   // Local State
//   const [activeStep, setActiveStep] = useState<PrepareItems>(
//     PrepareItems.OVERVIEW
//   );
//   const [continueDisabled, setContinueDisabled] = useState<boolean>(false);
//   const [showCancelWarning, setShowCancelWarning] = useState<boolean>(false);

//   // Redux State Selectors
//   const extractProjectExists: boolean | undefined = useAppSelector(
//     selectExtractProjectExists
//   );
//   const selectedProject: DestinationProjectSelection = useAppSelector(
//     selectSelectedProject
//   );
//   const autoNumberingEnabled: boolean | undefined = useAppSelector(
//     selectAutoNumberingEnabled
//   );
//   const nonNumericRecordIds: boolean | undefined = useAppSelector(
//     selectNonNumericRecordId
//   );
//   const recordPrefix: string = useAppSelector(selectRecordPrefix);
//   const checkboxData: boolean | undefined = useAppSelector(selectCheckboxData);
//   const multiSheetUpload: boolean | undefined = useAppSelector(
//     selectMultiSheetUpload
//   );
//   const specialCharAck: boolean | undefined =
//     useAppSelector(selectSpecialCharAck);
//   const createProjectFormComplete: boolean | undefined = useAppSelector(
//     selectCreateProjectFormComplete
//   );
//   const projectCreationInProgress: boolean = useAppSelector(
//     selectProjectCreationInProgress
//   );
//   const projectCreationSuccess: boolean | undefined = useAppSelector(
//     selectProjectCreationSuccess
//   );

//   // Effects
//   useEffect(() => {
//     if (projectCreationInProgress && scrollableRef.current) {
//       scrollableRef.current!.scrollTop = 0; // Vertical scroll
//     }
//   }, [projectCreationInProgress]);

//   useEffect(() => {
//     canUserContinue();
//   }, [
//     activeStep,
//     extractProjectExists,
//     createProjectFormComplete,
//     selectedProject.extractId,
//     selectedProject.redcapToken,
//     autoNumberingEnabled,
//     nonNumericRecordIds,
//     recordPrefix,
//     checkboxData,
//     multiSheetUpload,
//     specialCharAck,
//   ]);

//   useEffect(() => {
//     if (projectCreationSuccess) {
//       const currentStep = checklist.findIndex(
//         (i: PrepareItemMeta) => PrepareItems.CREATE_PROJECT === i.key
//       );
//       if (currentStep > -1) {
//         const nextStep = currentStep + 1;
//         const stepItem = checklist[nextStep];
//         setActiveStep(stepItem.key);
//       }
//     }
//   }, [projectCreationSuccess]);

//   // Handler Functions
//   const isStepVisible = (key: PrepareItems) => {
//     switch (key) {
//       case PrepareItems.OVERVIEW:
//         return true;
//       case PrepareItems.PROJECT_INFO:
//         return true;
//       case PrepareItems.CREATE_PROJECT:
//         return extractProjectExists === undefined
//           ? false
//           : extractProjectExists
//           ? false
//           : true;
//       case PrepareItems.AUTO_NUMBERING:
//         return extractProjectExists === undefined
//           ? false
//           : extractProjectExists
//           ? true
//           : false;
//       case PrepareItems.MULTI_SHEET:
//         return true;
//       case PrepareItems.CHECKBOX_DATA:
//         return true;
//       case PrepareItems.SPECIAL_CHAR:
//         return true;
//       default:
//         return false;
//     }
//   };

//   const canUserContinue = (stepKey?: PrepareItems): boolean => {
//     let canContinue = false;
//     switch (!!stepKey ? stepKey : activeStep) {
//       case PrepareItems.OVERVIEW:
//         setContinueDisabled(false);
//         canContinue = true;
//         break;
//       case PrepareItems.PROJECT_INFO:
//         if (extractProjectExists === undefined) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else if (
//           extractProjectExists &&
//           !selectedProject.extractId &&
//           !selectedProject.redcapToken
//         ) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else {
//           setContinueDisabled(false);
//           canContinue = true;
//         }
//         break;
//       case PrepareItems.CREATE_PROJECT:
//         if (!projectCreationSuccess && !createProjectFormComplete) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else {
//           setContinueDisabled(false);
//           canContinue = true;
//         }
//         break;
//       case PrepareItems.AUTO_NUMBERING:
//         if (
//           autoNumberingEnabled !== true &&
//           nonNumericRecordIds === undefined
//         ) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else if (
//           !autoNumberingEnabled &&
//           nonNumericRecordIds &&
//           recordPrefix.length === 0
//         ) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else {
//           setContinueDisabled(false);
//           canContinue = true;
//         }
//         break;
//       case PrepareItems.MULTI_SHEET:
//         if (multiSheetUpload === undefined) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else {
//           setContinueDisabled(false);
//           canContinue = true;
//         }
//         break;
//       case PrepareItems.CHECKBOX_DATA:
//         if (checkboxData === undefined) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else {
//           setContinueDisabled(false);
//           canContinue = true;
//         }
//         break;
//       case PrepareItems.SPECIAL_CHAR:
//         if (!specialCharAck) {
//           setContinueDisabled(true);
//           canContinue = false;
//         } else {
//           setContinueDisabled(false);
//           canContinue = true;
//         }
//         break;
//       default:
//         break;
//     }
//     return canContinue;
//   };

//   const onStepChange = (stepKey: PrepareItems): void => {
//     const activeStepIdx = checklist.findIndex(
//       (i: PrepareItemMeta) => activeStep === i.key
//     );
//     const stepKeyIdx = checklist.findIndex(
//       (i: PrepareItemMeta) => stepKey === i.key
//     );

//     if (
//       canUserContinue(activeStep) ||
//       (canUserContinue(stepKey) && stepKeyIdx <= activeStepIdx)
//     )
//       setActiveStep(stepKey);
//   };

//   const onContinue = () => {
//     const currentStep = checklist.findIndex(
//       (i: PrepareItemMeta) => activeStep === i.key
//     );

//     if (currentStep > -1) {
//       const nextStep = currentStep + 1;
//       if (nextStep < checklist.length) {
//         const stepItem = checklist[nextStep];
//         if (
//           checklist[currentStep].key === PrepareItems.CREATE_PROJECT &&
//           !projectCreationInProgress &&
//           !projectCreationSuccess
//         ) {
//           dispatch(setProjectCreateTrigger(true));
//           return;
//         }

//         setActiveStep(stepItem.key);
//         return;
//       }
//       if (nextStep === checklist.length) {
//         navigate("/build/upload");
//       }
//     }
//   };

//   // Constants
//   const checklist: PrepareItemMeta[] = [
//     {
//       key: PrepareItems.OVERVIEW,
//       title: "Welcome to Import - Overview",
//       visible: isStepVisible(PrepareItems.OVERVIEW),
//     },
//     {
//       key: PrepareItems.PROJECT_INFO,
//       title: "Tell us about your Project",
//       visible: isStepVisible(PrepareItems.PROJECT_INFO),
//     },
//     {
//       key: PrepareItems.CREATE_PROJECT,
//       title: "Create a New Project",
//       visible: isStepVisible(PrepareItems.CREATE_PROJECT),
//     },
//     {
//       key: PrepareItems.AUTO_NUMBERING,
//       title: "Does your project have record auto-numbering enabled?",
//       visible: isStepVisible(PrepareItems.AUTO_NUMBERING),
//     },
//     {
//       key: PrepareItems.MULTI_SHEET,
//       title: "Do you have multiple sheets of data?",
//       visible: isStepVisible(PrepareItems.MULTI_SHEET),
//     },
//     {
//       key: PrepareItems.CHECKBOX_DATA,
//       title:
//         "Does the imported document contain data that will be loaded into a multi-option field such as checkboxes?",
//       visible: isStepVisible(PrepareItems.CHECKBOX_DATA),
//     },
//     {
//       key: PrepareItems.SPECIAL_CHAR,
//       title: "Does your data set have any special characters or fonts?",
//       visible: isStepVisible(PrepareItems.SPECIAL_CHAR),
//     },
//   ].filter((i: PrepareItemMeta) => i.visible);

//   return (
//     <div style={{ paddingTop: 25, paddingLeft: 40, paddingRight: 40 }}>
//       <Row justify="start" align="middle">
//         <Typography.Text style={{ fontSize: 32, lineHeight: "40px" }}>
//           Prepare You Import
//         </Typography.Text>
//       </Row>
//       <Row justify="start">
//         <Col span={8}>
//           <List
//             itemLayout="horizontal"
//             dataSource={checklist}
//             style={{
//               marginTop: 50,
//             }}
//             renderItem={(item: PrepareItemMeta, idx: number) => (
//               <List.Item
//                 className={
//                   item.key === activeStep ? "active-prepare-step-item" : ""
//                 }
//                 onClick={() => onStepChange(item.key)}
//                 style={{
//                   cursor:
//                     checklist.findIndex(
//                       (i: PrepareItemMeta) => item.key === i.key
//                     ) <=
//                       checklist.findIndex(
//                         (i: PrepareItemMeta) => activeStep === i.key
//                       ) || canUserContinue()
//                       ? "pointer"
//                       : "not-allowed",
//                 }}
//               >
//                 <StepItem
//                   title={item.title}
//                   isComplete={
//                     idx <
//                     checklist.findIndex(
//                       (i: PrepareItemMeta) => i.key === activeStep
//                     )
//                   }
//                 />
//               </List.Item>
//             )}
//           />
//         </Col>
//         <Col span={16}>
//           <Card ref={scrollableRef} className="active-prepare-step-content">
//             <StepContent activeStep={activeStep} />
//           </Card>
//         </Col>
//       </Row>

//       {/* Fixed Action Footer */}
//       <ActionFooter
//         showSave={false}
//         continueBtnId={"prepare-continue-btn"}
//         continueBtnDisabled={continueDisabled || projectCreationInProgress}
//         continueBtnLoading={projectCreationInProgress}
//         continueBtnText={
//           activeStep === PrepareItems.CREATE_PROJECT && !projectCreationSuccess
//             ? projectCreationInProgress
//               ? "Building Extract Project..."
//               : "Build Extract Project"
//             : "Continue"
//         }
//         continueBtnOnClick={onContinue}
//         showCancel={true}
//         cancelBtnOnClick={() => setShowCancelWarning(true)}
//         fixedMessage={
//           continueDisabled
//             ? activeStep === PrepareItems.CREATE_PROJECT
//               ? "“Build Extract Project” is disabled until you have filled out all required fields."
//               : "“Continue” is disabled until you have filled out all required fields."
//             : undefined
//         }
//       />

//       {/* Cancel Modal TODO: Consolidate into Resuable Component */}
//       <Modal
//         open={showCancelWarning}
//         width={675}
//         title={"Confirm Cancel Import!"}
//         onCancel={() => setShowCancelWarning(false)}
//         footer={
//           <>
//             <Space style={{ display: "flex", justifyContent: "space-between" }}>
//               <ExtractBtn
//                 danger
//                 type="primary"
//                 onClick={() => {
//                   navigate("/dashboard");
//                 }}
//               >
//                 Go To Dashboard
//               </ExtractBtn>
//               <ExtractBtn
//                 type="primary"
//                 onClick={() => setShowCancelWarning(false)}
//               >
//                 Return to Import
//               </ExtractBtn>
//             </Space>
//           </>
//         }
//         style={{ top: "25vh" }}
//       >
//         <Typography.Paragraph>
//           Are you sure that you&apos;d like to delete this import and lose all
//           your work?
//         </Typography.Paragraph>
//         <Typography.Paragraph strong>
//           This action cannot be undone.
//         </Typography.Paragraph>
//       </Modal>
//     </div>
//   );
// };
