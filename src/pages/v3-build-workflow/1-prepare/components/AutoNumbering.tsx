// import { InfoCircleFilled } from "@ant-design/icons";
// import { Col, Row, Typography } from "antd";
// import { FunctionComponent } from "react";
// import { ExtractInput } from "../../../../common/components/extract-input/ExtractInput";
// import { YesNoQuestion } from "../../../../common/components/yes-no-question/YesNoQuestion";
// import { useAppDispatch, useAppSelector } from "../../../../store/Hooks";
// import {
//   selectAutoNumberingDetected,
//   selectAutoNumberingEnabled,
//   selectNonNumericRecordId,
//   selectRecordPrefix,
//   setNonNumericRecordId,
//   setRecordPrefix,
// } from "../../../../store/importSlices/PrepareSlice";
// import { StepContentProps } from "./StepContent";

// export const AutoNumbering: FunctionComponent<StepContentProps> = ({
//   titleFontSize,
//   bodyFontSize,
// }) => {
//   // Hooks
//   const dispatch = useAppDispatch();

//   // Redux Global State
//   const autoNumberingEnabled: boolean | undefined = useAppSelector(
//     selectAutoNumberingEnabled
//   );
//   const autoNumberingDetected: boolean = useAppSelector(
//     selectAutoNumberingDetected
//   );
//   const nonNumericRecordIds: boolean | undefined = useAppSelector(
//     selectNonNumericRecordId
//   );
//   const recordPrefix: string = useAppSelector(selectRecordPrefix);

//   // Handler Functions
//   const onPrefixChange = (prefix: string | undefined) => {
//     dispatch(
//       setRecordPrefix(!prefix || prefix.length === 0 ? "" : prefix.trim())
//     );
//   };

//   // Render Functions
//   const renderRecordPrefixInput = () => {
//     return (
//       <Row
//         justify="start"
//         align="middle"
//         gutter={[0, 15]}
//         style={{ marginTop: 25 }}
//       >
//         <Col span={24}>
//           <Typography.Text style={{ fontSize: bodyFontSize }}>
//             Enter non-numerical prefix
//           </Typography.Text>
//         </Col>
//         <Col span="flex" />
//         <Col span={24}>
//           <ExtractInput
//             size="large"
//             value={recordPrefix === "" ? undefined : recordPrefix}
//             placeholder="e.g. enter “MSK” for Record ID = MSK12345"
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               onPrefixChange(e.target.value)
//             }
//             style={{ width: 450 }}
//           />
//         </Col>
//       </Row>
//     );
//   };

//   return (
//     <Row gutter={[0, 24]}>
//       <Col span={24}>
//         <Typography.Text strong style={{ fontSize: titleFontSize }}>
//           Record ID Auto-Numbering
//         </Typography.Text>
//       </Col>
//       {autoNumberingDetected && (
//         <Col span={24}>
//           <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//             We detected that this project{" "}
//             <Typography.Text strong>
//               {autoNumberingEnabled ? "does" : "does not"}
//             </Typography.Text>{" "}
//             have Auto Numbering Turned On.{" "}
//             {autoNumberingEnabled ? " Please Continue" : ""}
//           </Typography.Paragraph>
//         </Col>
//       )}
//       {!autoNumberingEnabled && (
//         <Col span={24}>
//           <YesNoQuestion
//             strongQuestion={false}
//             question="Does your project's Record ID contain a non-numerical prefix?"
//             value={nonNumericRecordIds}
//             tooltip={""}
//             tooltipIcon={<InfoCircleFilled style={{ color: "#1192E8" }} />}
//             tooltipPlacement="topRight"
//             radioId="prepare-autonumbered-project"
//             disabled={false}
//             radioPlacement="below"
//             onValueChange={(bool: boolean) =>
//               dispatch(setNonNumericRecordId(bool))
//             }
//             renderSideEffectOn={nonNumericRecordIds}
//             sideEffectRenderer={renderRecordPrefixInput}
//             fontSize={bodyFontSize}
//           />
//         </Col>
//       )}
//       <Col span={24}>
//         <div style={{ paddingTop: 25, paddingLeft: 50, marginRight: 100 }}>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • about why auto-numbering is important and the preferred method.
//           </Typography.Paragraph>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • What to do if you don’t have auto-numbering. Short description
//             where this setting is in REDCap. Long description in Help tooltip
//             linnk above.
//           </Typography.Paragraph>
//         </div>
//       </Col>
//     </Row>
//   );
// };
