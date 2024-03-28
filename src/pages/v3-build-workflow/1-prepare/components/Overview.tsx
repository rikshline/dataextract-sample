// import { Col, Row, Typography } from "antd";
// import { FunctionComponent } from "react";
// import { StepContentProps } from "./StepContent";

// export const Overview: FunctionComponent<StepContentProps> = ({
//   titleFontSize,
//   bodyFontSize,
// }) => {
//   const textItems = [
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Prepare:
//         </Typography.Text>{" "}
//         Answer a few questions before you upload your data that will help you
//         confirm if your file and it&apos;s data are ready. Use the{" "}
//         <Typography.Text strong style={{ fontSize: bodyFontSize }}>
//           CONTINUE{" "}
//         </Typography.Text>
//         button below to cycle through questions. Some responses MAY require
//         follow up questions.
//       </Typography.Paragraph>
//     </>,
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Upload
//         </Typography.Text>{" "}
//         your file{" "}
//       </Typography.Paragraph>
//       <Typography.Text strong style={{ fontSize: bodyFontSize }}>
//         Warning! Once you start the upload, closing your browser tab will cancel
//         your upload.
//       </Typography.Text>
//     </>,
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Map
//         </Typography.Text>{" "}
//         your column fields to Extracts Standard Library of moderated fields and
//         then to individual screens or forms.
//       </Typography.Paragraph>
//     </>,
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Validate Fields:
//         </Typography.Text>{" "}
//         Normalize the data to make sure it fits inside of your fields data
//         ranges
//       </Typography.Paragraph>
//     </>,
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Validate Data:
//         </Typography.Text>{" "}
//         Remove conflicts and duplicates relating to individual records with the
//         same unique ID (patient number).
//       </Typography.Paragraph>
//     </>,
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Merge Data:
//         </Typography.Text>{" "}
//         Select secondary identifiers that repeat through multiple spreadsheet
//         pages.
//       </Typography.Paragraph>
//     </>,
//     <>
//       <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//         <Typography.Text strong italic>
//           Export:
//         </Typography.Text>{" "}
//         Export your data to your selected data repository.
//       </Typography.Paragraph>
//     </>,
//   ];

//   const renderTextItem = (idx: number) => {
//     return (
//       <Row
//         style={{ paddingTop: 5, paddingBottom: 5 }}
//         key={`overview-item-${idx}`}
//       >
//         <Col
//           xs={{ span: 2 }}
//           sm={{ span: 2 }}
//           md={{ span: 1 }}
//           lg={{ span: 1 }}
//           xl={{ span: 1 }}
//           xxl={{ span: 1 }}
//         >
//           <Typography.Text style={{ fontSize: bodyFontSize }}>
//             {idx + 1}.
//           </Typography.Text>
//         </Col>
//         <Col
//           xs={{ span: 21 }}
//           sm={{ span: 21 }}
//           md={{ span: 22 }}
//           lg={{ span: 22 }}
//           xl={{ span: 22 }}
//           xxl={{ span: 22 }}
//         >
//           {textItems[idx]}
//         </Col>
//       </Row>
//     );
//   };

//   return (
//     <Row gutter={[0, 24]}>
//       <Col span={24}>
//         <Typography.Text strong style={{ fontSize: titleFontSize }}>
//           Welcome to Extract Import
//         </Typography.Text>
//       </Col>
//       <Col span={24}>
//         <Typography.Paragraph style={{ fontSize: bodyFontSize }}>
//           Here are the major steps below.{" "}
//           <Typography.Text strong style={{ fontSize: bodyFontSize }}>
//             NOTE: Your work will be saved while you work.
//           </Typography.Text>
//         </Typography.Paragraph>

//         {textItems.map((_, idx: number) => renderTextItem(idx))}
//       </Col>
//     </Row>
//   );
// };
