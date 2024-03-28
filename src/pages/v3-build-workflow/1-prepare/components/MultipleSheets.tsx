// import { InfoCircleFilled } from "@ant-design/icons";
// import { Col, Row, Typography } from "antd";
// import { FunctionComponent } from "react";
// import { YesNoQuestion } from "../../../../common/components/yes-no-question/YesNoQuestion";
// import { useAppDispatch, useAppSelector } from "../../../../store/Hooks";
// import {
//   selectMultiSheetUpload,
//   setMultiSheetUpload,
// } from "../../../../store/importSlices/PrepareSlice";
// import { StepContentProps } from "./StepContent";

// export const MultipleSheets: FunctionComponent<StepContentProps> = ({
//   titleFontSize,
//   bodyFontSize,
// }) => {
//   // Hooks
//   const dispatch = useAppDispatch();

//   // Redux Global State
//   const multiSheetUpload: boolean | undefined = useAppSelector(
//     selectMultiSheetUpload
//   );

//   return (
//     <Row gutter={[0, 24]}>
//       <Col span={24}>
//         <Typography.Text strong style={{ fontSize: titleFontSize }}>
//           Multiple Sheets
//         </Typography.Text>
//       </Col>
//       <Col span={24}>
//         <YesNoQuestion
//           strongQuestion={false}
//           question="Do you have multiple sheets of data?"
//           value={multiSheetUpload}
//           tooltip={""}
//           tooltipIcon={<InfoCircleFilled style={{ color: "#1192E8" }} />}
//           tooltipPlacement="topRight"
//           radioId="prepare-mutisheet-upload"
//           disabled={false}
//           radioPlacement="below"
//           onValueChange={(bool: boolean) => dispatch(setMultiSheetUpload(bool))}
//           fontSize={bodyFontSize}
//         />
//       </Col>
//       <Col span={24}>
//         <div style={{ paddingTop: 25, paddingLeft: 50, marginRight: 100 }}>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • Having multiple sheets of data isn’t bad but if each sheet
//             contains PARTIAL records (rows contain data from a single form) the
//             system will need unique IDs that match across the sheets so the
//             responses can be tracked to each respondent.
//           </Typography.Paragraph>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • If you DO NOT have continuous respondent IDs then you will have to
//             add these to your spreadsheet DURING importing your file. Otherwise
//             this data will not be connected to each respondent. Make sure the
//             column name is the same across sheets.
//           </Typography.Paragraph>
//         </div>
//       </Col>
//     </Row>
//   );
// };
