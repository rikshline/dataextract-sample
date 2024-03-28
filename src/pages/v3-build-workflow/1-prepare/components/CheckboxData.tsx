// import { InfoCircleFilled } from "@ant-design/icons";
// import { Col, Row, Typography } from "antd";
// import { FunctionComponent } from "react";
// import { ExtractInput } from "../../../../common/components/extract-input/ExtractInput";
// import { YesNoQuestion } from "../../../../common/components/yes-no-question/YesNoQuestion";
// import { useAppDispatch, useAppSelector } from "../../../../store/Hooks";
// import {
//   selectCheckboxData,
//   setCheckboxData,
//   setCheckboxDelimiter,
// } from "../../../../store/importSlices/PrepareSlice";
// import { selectCheckboxDelimiter } from "../../../../store/importSlices/SharedSlice";
// import { StepContentProps } from "./StepContent";

// export const CheckboxData: FunctionComponent<StepContentProps> = ({
//   titleFontSize,
//   bodyFontSize,
// }) => {
//   // Hooks
//   const dispatch = useAppDispatch();

//   // Redux Global State
//   const checkboxData: boolean | undefined = useAppSelector(selectCheckboxData);
//   const checkboxDelimiter: string = useAppSelector(selectCheckboxDelimiter);

//   // Handler Functions
//   const onDelimiterChange = (delimiter: string | undefined) => {
//     dispatch(
//       setCheckboxDelimiter(
//         !delimiter || delimiter.length === 0 ? "," : delimiter.trim()
//       )
//     );
//   };

//   // Render Functions
//   const renderCheckboxDelimiterInput = () => {
//     return (
//       <Row
//         justify="start"
//         align="middle"
//         gutter={[0, 15]}
//         style={{ marginTop: 25 }}
//       >
//         <Col span={24}>
//           <Typography.Text style={{ fontSize: bodyFontSize }}>
//             Add your Delimiter
//           </Typography.Text>
//         </Col>
//         <Col span="flex" />

//         <Col span={24}>
//           <ExtractInput
//             size="large"
//             value={checkboxDelimiter === "," ? undefined : checkboxDelimiter}
//             placeholder="Leaving blank defaults to comma “,”"
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               onDelimiterChange(e.target.value)
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
//           Multi-select / Checkboxes
//         </Typography.Text>
//       </Col>
//       <Col span={24}>
//         <YesNoQuestion
//           strongQuestion={false}
//           question="Does the imported Source Data / Spreadsheet contain data that allow multi-select such as checkbox fields?"
//           value={checkboxData}
//           tooltip={""}
//           tooltipIcon={<InfoCircleFilled style={{ color: "#1192E8" }} />}
//           tooltipPlacement="topRight"
//           radioId="prepare-checkbox-data"
//           disabled={false}
//           radioPlacement="below"
//           onValueChange={(bool: boolean) => dispatch(setCheckboxData(bool))}
//           renderSideEffectOn={checkboxData}
//           sideEffectRenderer={renderCheckboxDelimiterInput}
//           fontSize={bodyFontSize}
//         />
//       </Col>
//       <Col span={24}>
//         <div style={{ paddingTop: 25, paddingLeft: 50, marginRight: 100 }}>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • Message about why checkbox is an a different or important field
//             type
//           </Typography.Paragraph>
//           <Typography.Paragraph
//             style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//           >
//             • What to do if you do have checkbox or dropdown fields How to
//             prepare your file with checkbox fields or dropdown selections in the
//             spreadsheet.
//           </Typography.Paragraph>
//         </div>
//       </Col>
//     </Row>
//   );
// };
