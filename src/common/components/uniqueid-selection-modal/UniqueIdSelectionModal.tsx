import {
  MenuOutlined,
  RollbackOutlined,
  VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import { Alert, Button, Col, Modal, Row, Select, Typography } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { DataSourceSheetTypeEnum, ImportStepEnum } from "../../../api";
import { useAppSelector } from "../../../store/Hooks";
import {
  Metadata,
  ProjectDetails,
  useUpdateSessionMutation,
} from "../../../store/importSlices/ImportRTK/generated-hooks";
import {
  selectProjectUid,
  selectSessionUid,
} from "../../../store/importSlices/SharedSlice";
import { colors } from "../../constants/LinterConstants";
import { getScrollParent } from "../../utils";
import { ExtractBtn } from "../extract-btn/ExtractBtn";
import { showNotification } from "../notification/Notification";

const { Option } = Select;

interface UniqueIdSelectionModalInterface {
  metadataFields: Metadata[];
  recordIdField: string;
  sheetJoinField: string;
  projectDetails: ProjectDetails;
  showModal: boolean;
  isMultisheet: boolean;
  sourceDataSheetType: DataSourceSheetTypeEnum | undefined;
  onSetProjectDetails: (projectDetails: ProjectDetails) => void;
  onSetSheetJoinField: (fieldName: string) => void;
  onSetSheetType: (type: DataSourceSheetTypeEnum) => void;
  onSetShowModal: (bool: boolean) => void;
}

export const UniqueIdSelectionModal: FunctionComponent<UniqueIdSelectionModalInterface> = ({
  metadataFields,
  recordIdField,
  sheetJoinField,
  projectDetails,
  showModal,
  isMultisheet,
  sourceDataSheetType,
  onSetProjectDetails,
  onSetSheetJoinField,
  onSetSheetType,
  onSetShowModal,
}) => {
  // Local State
  const [showDescription, setShowDescription] = useState<
    DataSourceSheetTypeEnum | undefined
  >(undefined);

  // Redux State Selectors
  const projectUid: string | undefined = useAppSelector(selectProjectUid);
  const sessionUid: string | undefined = useAppSelector(selectSessionUid);

  // Generated RTK Mutations
  const [
    updateSession,
    {
      data: updateSessionRes,
      isLoading: updateSessionLoading,
      error: updateSessionError,
    },
  ] = useUpdateSessionMutation();

  useEffect(() => {
    if (updateSessionRes) {
      onSetShowModal(false);
    }
  }, [updateSessionRes]);

  useEffect(() => {
    if (sourceDataSheetType) {
      setShowDescription(sourceDataSheetType);
    } else {
      setShowDescription(undefined);
    }
  }, [sourceDataSheetType]);

  // Display error messages
  useEffect(() => {
    if (updateSessionError) {
      showNotification({
        key: "update-session-error",
        type: "error",
        message: "Update Session Failed",
        duration: 0,
        description: (updateSessionError as any).data.message,
      });
    }
  }, [updateSessionError]);

  // Handlers
  const onSaveSelection = () => {
    updateSession({
      projectUid: projectUid,
      sessionUid: sessionUid,
      updateSessionPayload: {
        payload: {
          currentStep: ImportStepEnum.Setup,
          sheetJoinField: sheetJoinField,
          sheetType: sourceDataSheetType,
        },
      },
    });
  };

  // Renderers
  const renderFieldSelector = () => {
    const options = metadataFields
      .filter((f: Metadata) => f.fieldName !== projectDetails.recordIdField)
      .map((f: Metadata) => (
        <Option key={f.fieldName} value={f.fieldName}>
          {f.fieldName}
          <span style={{ color: "grey" }}>{` | ${f.fieldLabel}`}</span>
        </Option>
      ));

    return (
      <Select
        id="common-id-field-select"
        size="middle"
        allowClear={true}
        showSearch={true}
        placeholder="Select Common Identifier Field..."
        disabled={updateSessionLoading}
        loading={updateSessionLoading}
        style={{ width: "100%" }}
        dropdownStyle={{ minWidth: 300 }}
        value={sheetJoinField}
        onChange={(fieldName: string) => {
          if (
            !fieldName ||
            fieldName.length === 0 ||
            fieldName === recordIdField //TODO: DOUBLE CHECK THIS
          )
            return;

          const updateProjDetails: ProjectDetails = { ...projectDetails };
          // updateProjDetails.secondaryUniqueFields = [
          //   ...new Set([
          //     ...(projectDetails.secondaryUniqueFields || []),
          //     fieldName,
          //   ]),
          // ];

          onSetProjectDetails(updateProjDetails);
          onSetSheetJoinField(fieldName);
        }}
        onClear={() => {
          const updateProjDetails: ProjectDetails = { ...projectDetails };
          const updatedSecondary = (
            projectDetails.secondaryUniqueFields || []
          ).filter((fieldName: string) => fieldName !== sheetJoinField);
          updateProjDetails.secondaryUniqueFields = updatedSecondary;

          onSetProjectDetails(updateProjDetails);
          onSetSheetJoinField("");
        }}
        getPopupContainer={(trigger) => {
          return getScrollParent(trigger);
        }}
      >
        {options}
      </Select>
    );
  };

  const renderSheetTypeBtn = (type: DataSourceSheetTypeEnum) => {
    let icon: any;
    let description: string;

    if (type === DataSourceSheetTypeEnum.Records) {
      description = `Each Sheet contains full records (rows contain complete REDCap records)`;
      icon = (
        <Row align="middle" justify="center" style={{ marginBottom: 10 }}>
          <Col span={24}>
            <MenuOutlined style={{ fontSize: 40, marginRight: 5 }} />
            <MenuOutlined style={{ fontSize: 40, marginLeft: 5 }} />
          </Col>
          <Col
            span={24}
            className="flex-centered"
            style={{ textAlign: "center" }}
          >
            <RollbackOutlined
              style={{ fontSize: 25, transform: "scale(-1, 1)" }}
              rotate={90}
            />
          </Col>
        </Row>
      );
    } else {
      description = `Each Sheet contains partial records (rows contain data for a single REDCap Form)`;
      icon = (
        <Row
          align="middle"
          justify="center"
          style={{ marginBottom: 20, width: "100%" }}
        >
          <MenuOutlined style={{ fontSize: 40 }} />
          <VerticalAlignMiddleOutlined style={{ fontSize: 35 }} rotate={90} />
          <MenuOutlined style={{ fontSize: 40 }} />
          <VerticalAlignMiddleOutlined style={{ fontSize: 35 }} rotate={90} />
          <MenuOutlined style={{ fontSize: 40 }} />
        </Row>
      );
    }

    return (
      <div
        className="project-btn-container"
        style={{
          border:
            sourceDataSheetType === type ? `3px solid ${colors.primary}` : "",
          height: "max-content",
          minHeight: "20vh",
          minWidth: "25vh",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          const updated: ProjectDetails = { ...projectDetails };
          updated.secondaryUniqueFields = [
            ...(projectDetails.secondaryUniqueFields || []),
          ].filter((field: string) => field !== sheetJoinField);

          onSetProjectDetails(updated);
          onSetSheetJoinField("");
          onSetSheetType(type);
        }}
        onMouseEnter={() =>
          setTimeout(
            () => !sourceDataSheetType && setShowDescription(type),
            300
          )
        }
        onMouseLeave={() =>
          setTimeout(
            () => !sourceDataSheetType && setShowDescription(undefined),
            300
          )
        }
      >
        <Button
          size="large"
          type="link"
          className="project-btn"
          style={{
            width: "100%",
            whiteSpace: "break-spaces",
            textAlign: "center",
            color: ![undefined, type].includes(sourceDataSheetType)
              ? "grey"
              : "",
          }}
        >
          <Row style={{ color: "black", width: "100%" }}>
            <Col span={24}>{icon}</Col>
            <Col span={24}>{description}</Col>
          </Row>
        </Button>
      </div>
    );
  };

  // Constants
  const sheetDescription = {
    forms: `The imported Source Data should have records organized into sheets containing REDCap form data.
    Each sheet must contain one "identifier field" that is common among all sheets (i.e. MRN). The identifier
    field will be used to join sheets into complete records. This should be the only field within a sheet
    that is not a field associated with the sheet's form. One sheet will be generated for REDCap Import.`,
    records: `The imported Source Data should have complete records organized into sheets. Each record in the sheet
    may contain fields pertaining to zero or more repeating instruments. The same amount of sheets found in the
    imported Source Data will be generated for export.`,
  };

  return (
    <Modal
      closable={false}
      maskClosable={false}
      open={showModal}
      title={
        <Typography.Text strong>
         {isMultisheet ? "Multi-Sheet Source Data Import Detected" : "Unique ID Fields" } 
        </Typography.Text>
      }
      footer={null}
      width="55%"
      bodyStyle={{ padding: 25 }}
    >
      <Row justify="center" align="middle">
        <Row justify="center" align="middle" style={{ marginBottom: 25 }}>
          <Col span={20} style={{ fontSize: 16, textAlign: "center" }}>
            <Typography.Text>
              Multiple Sheets have been detected in the imported Source Data. In
              order to properly process this data, please select the
              relationship between sheets in your import.
            </Typography.Text>
          </Col>
        </Row>
        <Row
          justify="center"
          align="middle"
          style={{ marginBottom: 25 }}
          gutter={[15, 15]}
        >
          <Col
            xs={{ span: 14 }}
            sm={{ span: 14 }}
            md={{ span: 14 }}
            lg={{ span: 14 }}
            xl={{ span: 12 }}
            xxl={{ span: 10 }}
          >
            {renderSheetTypeBtn(DataSourceSheetTypeEnum.Records)}
          </Col>
          <Col
            xs={{ span: 14 }}
            sm={{ span: 14 }}
            md={{ span: 14 }}
            lg={{ span: 14 }}
            xl={{ span: 12 }}
            xxl={{ span: 10 }}
          >
            {renderSheetTypeBtn(DataSourceSheetTypeEnum.Forms)}
          </Col>
        </Row>
        {showDescription !== undefined && (
          <Row
            justify="center"
            align="middle"
            style={{ marginBottom: 25 }}
            gutter={[0, 15]}
          >
            <Col
              span={20}
              style={{
                textAlign: "center",
              }}
            >
              <Alert
                message={
                  showDescription === DataSourceSheetTypeEnum.Forms
                    ? sheetDescription["forms"]
                    : sheetDescription["records"]
                }
                type="info"
              />
            </Col>
          </Row>
        )}
        {sourceDataSheetType === DataSourceSheetTypeEnum.Forms && (
          <Row
            justify="center"
            align="middle"
            style={{ marginBottom: 25 }}
            gutter={[0, 15]}
          >
            <Col
              span={20}
              style={{
                textAlign: "center",
              }}
            >
              Select a record Identifier that is present in each sheet of the
              uploaded file and can be used to join forms together (i.e. MRN).
              This field will be considered a Secondary Unique Field.
            </Col>
            <Col span={15}>{renderFieldSelector()}</Col>
          </Row>
        )}

        <Row justify="center" align="middle" style={{ width: "100%" }}>
          <Col>
            <ExtractBtn
              size="large"
              type="primary"
              onClick={onSaveSelection}
              loading={updateSessionLoading}
              disabled={
                sourceDataSheetType === undefined ||
                (sourceDataSheetType === DataSourceSheetTypeEnum.Forms &&
                  sheetJoinField.length === 0) ||
                updateSessionLoading
              }
            >
              Confirm
            </ExtractBtn>
          </Col>
        </Row>
      </Row>
    </Modal>
  );
};
