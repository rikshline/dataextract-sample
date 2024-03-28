// import { Col, Modal, Row, Space, Typography } from "antd";
// import { FunctionComponent, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ExtractUser } from "../../../api";
// import { ActionFooter } from "../../../common/components/action-footer/ActionFooter";
// import { ExtractBtn } from "../../../common/components/extract-btn/ExtractBtn";
// // import { FileUpload } from "../../../common/components/file-upload/FileUpload";
// import { showNotification } from "../../../common/components/notification/Notification";
// // import { onGoToFieldMapping } from "../../../common/utils/NavUtil";
// import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
// import {
//   initBuildImport,
//   resetPrepareState,
//   selectSelectedProject,
//   selectShowMultiSheetDrawer,
//   selectUploadError,
//   selectUploadInProgress,
//   selectUploadSuccessful,
// } from "../../../store/importSlices/PrepareSlice";
// import {
//   selectBuildWorkflow,
//   selectExtractUser,
//   selectSessionUid,
// } from "../../../store/importSlices/SharedSlice";

// export const Upload: FunctionComponent = () => {
//   // Hooks
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   // Local State
//   const [showCancelWarning, setShowCancelWarning] = useState<boolean>(false);
//   const [sourceDataFile, setSourceDataFile] = useState<any | undefined>(
//     undefined
//   );

//   // Redux State Selectors
//   const user: ExtractUser | undefined = useAppSelector(selectExtractUser);
//   const buildWorkflow: boolean = useAppSelector(selectBuildWorkflow);
//   const uploadInProgress: boolean | undefined = useAppSelector(
//     selectUploadInProgress
//   );
//   const uploadSuccessful: boolean | undefined = useAppSelector(
//     selectUploadSuccessful
//   );
//   const uploadError: string | undefined = useAppSelector(selectUploadError);
//   const showMultiSheetDrawer: boolean = useAppSelector(
//     selectShowMultiSheetDrawer
//   );
//   const sessionUid: string | undefined = useAppSelector(selectSessionUid);
//   const selectedProject = useAppSelector(selectSelectedProject);

//   // Effects
//   useEffect(() => {
//     if (uploadSuccessful && !showMultiSheetDrawer && !!sessionUid) {
//       dispatch(resetPrepareState());
//       // onGoToFieldMapping(navigate, sessionUid);
//       // onGoToFieldMappingBuild(navigate, sessionUid);
//     }
//   }, [uploadSuccessful, showMultiSheetDrawer, sessionUid]);

//   useEffect(() => {
//     if (uploadError) {
//       showNotification({
//         type: "error",
//         message: "File Upload Unsuccessful",
//         description:
//           uploadError +
//           "Please submit feedback above and a member of the Extract team will be in contact with you regarding this issue.",
//         key: "session_init_failed",
//         duration: 0,
//       });
//     }
//   }, [uploadError]);

//   // Handler Functions
//   const onFileUpload = (
//     fileType:
//       | "sourceDataFile"
//       | "destinationMetadataFile"
//       | "sourceMetadataFile"
//       | "mappingsFile",
//     file: File
//   ) => {
//     if (
//       ![
//         "text/csv",
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         "application/vnd.ms-excel",
//       ].includes(file.type)
//     ) {
//       showNotification({
//         key: "warning-invalid-field",
//         type: "warning",
//         message: "Invalid File Type",
//         description:
//           "An invalid file type has been uploaded. Please upload files of type .csv, .xls, or .xlsx only.",
//         duration: 5,
//       });
//       return;
//     }

//     if (file && file.size > 5000000) {
//       showNotification({
//         key: "warning-invalid-field",
//         type: "warning",
//         message:
//           "Your file size is very large and may take a long time to upload. ",
//         description: (
//           <>
//             Files above 5 MB size may take longer. Alternatively you could break
//             your file into multiple smaller files. Click here or below to
//             Cancel.{" "}
//             <b>Warning: closing the browser tab will cancel the upload.</b>
//           </>
//         ),
//         duration: 15,
//         style: { width: 800 },
//       });
//     }
//     setSourceDataFile(file);
//   };

//   const onRemoveFileUpload = (
//     fileType:
//       | "sourceDataFile"
//       | "destinationMetadataFile"
//       | "sourceMetadataFile"
//       | "mappingsFile"
//   ) => {
//     setSourceDataFile(undefined);
//   };

//   const initUpload = () => {
//     if (!!sourceDataFile && !!user)
//       dispatch(initBuildImport(user, sourceDataFile));
//   };

//   return (
//     <>
//       <div
//         style={{
//           paddingTop: 25,
//           paddingLeft: 40,
//           paddingRight: 40,
//         }}
//       >
//         <Row justify="start" align="middle" style={{ marginBottom: 50 }}>
//           <Typography.Text style={{ fontSize: 32, lineHeight: "40px" }}>
//             Upload File
//           </Typography.Text>
//         </Row>
//         <Row justify="center" align="middle">
//           <Col
//             xs={{ span: 22 }}
//             sm={{ span: 20 }}
//             md={{ span: 18 }}
//             lg={{ span: 16 }}
//             xl={{ span: 14 }}
//             xxl={{ span: 12 }}
//           >
//             {/* <FileUpload
//               buildWorkflow={buildWorkflow}
//               fileType={"sourceDataFile"}
//               fileTypeName={"Source Data File"}
//               disabled={false}
//               maxUploadCount={1}
//               uploadTitle={""}
//               fileSubmitted={!!sourceDataFile}
//               submittedFileName={
//                 !!sourceDataFile ? sourceDataFile.name : undefined
//               }
//               submittedFileUid={
//                 !!sourceDataFile ? sourceDataFile.uid : undefined
//               }
//               onFileUpload={onFileUpload}
//               onRemoveFile={() => onRemoveFileUpload("sourceDataFile")}
//             /> */}
//           </Col>
//         </Row>

//         {/* Fixed Action Footer */}
//         <ActionFooter
//           showSave={false}
//           continueBtnId={"upload-continue-btn"}
//           continueBtnDisabled={!sourceDataFile || uploadInProgress}
//           continueBtnLoading={uploadInProgress}
//           continueBtnText={"Start Import"}
//           continueBtnOnClick={initUpload}
//           showCancel={true}
//           cancelBtnOnClick={() => setShowCancelWarning(true)}
//           fixedMessage={undefined}
//         />

//         {/* Cancel Modal TODO: Consolidate into Resuable Component */}
//         <Modal
//           open={showCancelWarning}
//           width={675}
//           title={"Confirm Cancel Import!"}
//           onCancel={() => setShowCancelWarning(false)}
//           footer={
//             <>
//               <Space
//                 style={{ display: "flex", justifyContent: "space-between" }}
//               >
//                 <ExtractBtn
//                   danger
//                   type="primary"
//                   onClick={() => {
//                     navigate("/dashboard");
//                   }}
//                 >
//                   Go To Dashboard
//                 </ExtractBtn>
//                 <ExtractBtn
//                   type="primary"
//                   onClick={() => setShowCancelWarning(false)}
//                 >
//                   Return to Import
//                 </ExtractBtn>
//               </Space>
//             </>
//           }
//           style={{ top: "25vh" }}
//         >
//           <Typography.Paragraph>
//             Are you sure that you&apos;d like to delete this import and lose all
//             your work?
//           </Typography.Paragraph>
//           <Typography.Paragraph strong>
//             This action cannot be undone.
//           </Typography.Paragraph>
//         </Modal>
//       </div>

//       {/* TODO: Show Multi Sheet Drawer - Kinsy */}
//       {/* On Drawer Confirm, Navigate to Mapping & dispatch(resetPrepareState()) */}
//     </>
//   );
// };
