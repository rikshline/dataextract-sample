import {
  CaretRightOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Tooltip, Typography } from "antd";
import { FunctionComponent } from "react";
import { colors } from "../../constants/LinterConstants";
import { getScrollParent } from "../../utils";
import { ExtractBtn } from "../extract-btn/ExtractBtn";

interface ActionFooterInterface {
  showSave?: boolean;
  saving?: boolean;
  tooltipPlacement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  tooltipOpen?: boolean;
  tooltipText?: string | JSX.Element;
  minTooltipWidth?: number | string;
  tooltipColor?: string;
  continueBtnType?:
    | "link"
    | "text"
    | "ghost"
    | "primary"
    | "default"
    | "dashed"
    | undefined;
  continueBtnText?: string | JSX.Element;
  continueBtnDisabled?: boolean;
  continueBtnLoading?: boolean;
  continueBtnId?: string;
  continueBtnStyle?: React.CSSProperties;
  continueBtnOnClick?: () => void;
  customContinueBtn?: JSX.Element;
  secondaryButtons?: JSX.Element;
  fixedMessage?: string;
  showCancel?: boolean;
  cancelText?: string;
  cancelBtnDisabled?: boolean;
  cancelBtnOnClick?: () => void;
  cancelBtnStyle?: React.CSSProperties;
}

export const ActionFooter: FunctionComponent<ActionFooterInterface> = ({
  showSave = true,
  saving = false,
  tooltipPlacement = "left",
  tooltipOpen = false,
  tooltipText = undefined,
  minTooltipWidth = "55em",
  tooltipColor = undefined,
  continueBtnType = "primary",
  continueBtnText = "Save and Continue",
  continueBtnDisabled = false,
  continueBtnLoading = false,
  continueBtnId = "1",
  continueBtnStyle = { width: "18em", minHeight: 40, fontWeight: 500 },
  continueBtnOnClick = () => null,
  customContinueBtn = undefined,
  fixedMessage = undefined,
  secondaryButtons = <></>,
  showCancel = false,
  cancelText = "Cancel",
  cancelBtnDisabled = false,
  cancelBtnOnClick = () => {},
  cancelBtnStyle = { width: 125, minHeight: 40 },
}) => {
  return (
    <>
      {fixedMessage && (
        <div
          className="sticky-footer-message"
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Typography.Text italic>{fixedMessage}</Typography.Text>
        </div>
      )}
      <div className="sticky-footer">
        <Row justify="space-between" align="middle" style={{ width: "100%" }}>
          {showCancel && (
            <Col>
              <ExtractBtn
                id={"sticky-footer-cancel-btn"}
                ghost
                type={"primary"}
                disabled={cancelBtnDisabled}
                loading={false}
                onClick={cancelBtnOnClick}
                style={cancelBtnStyle}
              >
                {cancelText}
                <CloseOutlined style={{ margin: 0 }} />
              </ExtractBtn>
            </Col>
          )}
          <Col flex="auto" />
          <Col>
            {showSave &&
              (saving ? (
                <Space>
                  <LoadingOutlined style={{ color: colors.primary }} />
                  <Typography.Text>Saving...</Typography.Text>
                </Space>
              ) : (
                <Space>
                  <CheckCircleOutlined style={{ color: colors.success }} />
                  <Typography.Text>Saved!</Typography.Text>
                </Space>
              ))}
          </Col>

          {/* Continue Button */}
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingLeft: 25,
            }}
          >
            {customContinueBtn ? (
              customContinueBtn
            ) : (
              <Space>
                {secondaryButtons}
                <Tooltip
                  placement={tooltipPlacement}
                  open={tooltipOpen}
                  title={tooltipText}
                  overlayStyle={{ minWidth: minTooltipWidth }}
                  color={tooltipColor}
                  getPopupContainer={(trigger) => {
                    return getScrollParent(trigger);
                  }}
                >
                  <ExtractBtn
                    id={continueBtnId}
                    type={continueBtnType}
                    disabled={continueBtnDisabled}
                    loading={false}
                    onClick={continueBtnOnClick}
                    style={continueBtnStyle}
                  >
                    {continueBtnText}
                    <CaretRightOutlined style={{ margin: 0 }} />
                  </ExtractBtn>
                </Tooltip>
              </Space>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
