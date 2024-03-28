// import { CheckCircleFilled } from "@ant-design/icons";
// import { Col, Row, Typography } from "antd";
// import { FunctionComponent } from "react";

// interface StepItemProps {
//   title: string;
//   isComplete: boolean;
// }

// export const StepItem: FunctionComponent<StepItemProps> = ({
//   title,
//   isComplete,
// }) => {
//   return (
//     <Row className="prepare-step-item" style={{ width: "100%" }}>
//       <Col
//         xs={{ span: 6 }}
//         sm={{ span: 6 }}
//         md={{ span: 5 }}
//         lg={{ span: 4 }}
//         xl={{ span: 3 }}
//         xxl={{ span: 3 }}
//       >
//         <CheckCircleFilled
//           className={isComplete ? "complete-checkmark" : "incomplete-checkmark"}
//         />
//       </Col>
//       <Col
//         xs={{ span: 17 }}
//         sm={{ span: 17 }}
//         md={{ span: 18 }}
//         lg={{ span: 20 }}
//         xl={{ span: 20 }}
//         xxl={{ span: 20 }}
//       >
//         <Typography.Text
//           style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
//         >
//           {title}
//         </Typography.Text>
//       </Col>
//     </Row>
//   );
// };
