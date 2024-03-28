// import { Checkbox, Col, Row, Typography } from "antd";
// import { CheckboxChangeEvent } from "antd/lib/checkbox";
// import { FunctionComponent } from "react";
// import { useAppDispatch, useAppSelector } from "../../../../store/Hooks";
// import {
//   selectSpecialCharAck,
//   setSpecialCharAck,
// } from "../../../../store/importSlices/PrepareSlice";
// import { StepContentProps } from "./StepContent";

// export const SpecialChars: FunctionComponent<StepContentProps> = ({
//   titleFontSize,
//   bodyFontSize,
// }) => {
//   // Hooks
//   const dispatch = useAppDispatch();

//   // Redux Global State
//   const specialCharAck: boolean | undefined =
//     useAppSelector(selectSpecialCharAck);

//   // Handler Functions
//   const onAckChange = (checked: boolean) => {
//     dispatch(setSpecialCharAck(checked));
//   };

//   return (
//     <Row gutter={[0, 24]}>
//       <Col span={24}>
//         <Typography.Text strong style={{ fontSize: titleFontSize }}>
//           Special Characters
//         </Typography.Text>
//       </Col>
//       <Col span={24}>
//         <Typography.Paragraph
//           style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//         >
//           Does your data header columns have any of the following special
//           characters: <Typography.Text strong>“$” OR “.”</Typography.Text>
//         </Typography.Paragraph>
//         <Typography.Paragraph
//           style={{ paddingBottom: 25, fontSize: bodyFontSize }}
//         >
//           These characters interfere with the system code and will be removed by
//           the system at the beginning of the import process. Please check your
//           file to be uploaded ahead of time to make sure removal of these
//           characters will not cause any critical omissions of your data. These
//           characters can be used in the data cells.
//         </Typography.Paragraph>
//       </Col>
//       <Col span={24}>
//         <Checkbox
//           checked={specialCharAck}
//           onChange={(e: CheckboxChangeEvent) => onAckChange(e.target.checked)}
//         >
//           I recognize that the above special characters will be removed from my
//           spreadsheet / data headers. I confirm that I have reviewed my data and
//           this will not affect my data negatively.{" "}
//         </Checkbox>
//       </Col>
//     </Row>
//   );
// };
