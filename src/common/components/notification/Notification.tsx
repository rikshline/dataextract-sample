import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import { Button, Col, Row, notification } from "antd";
import { ArgsProps } from "antd/lib/notification";
import { RawAjaxResponse } from "../../../api";

interface SuccessInterface extends ArgsProps {
  key: string;
  type: "success" | "warning" | "error" | "info";
  footer?: React.ReactNode;
  errorResponse?: RawAjaxResponse<any> | undefined;
}

export const showNotification = (props: SuccessInterface) => {
  // Handler Functions
  const onDismiss = () => {
    notification.close(props.key);
  };

  // Constants
  let icon = <ExclamationCircleFilled />;
  let errDescription = props.description || "";

  switch (props.type) {
    case "error":
      icon = <CloseCircleFilled />;
      if (!!props.errorResponse) {
        errDescription = props.errorResponse.response.message;
      }
      break;
    case "info":
      icon = <InfoCircleFilled />;
      break;
    case "success":
      icon = <CheckCircleFilled />;
      break;
    case "warning":
      break;
    default:
      break;
  }

  notification[props.type]({
    ...props,
    key: props.key,
    icon: icon,
    description: (
      <Row>
        <Col span={19}>{props.description || errDescription}</Col>

        <Col span={4} className="notification-footer flex-end">
          {!!props.footer ? (
            props.footer
          ) : (
            <Button onClick={onDismiss}>Dismiss</Button>
          )}
        </Col>
      </Row>
    ),
    style: { minWidth: 750 },
  });
};
