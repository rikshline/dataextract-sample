import { Col, Row } from "antd";
import { FunctionComponent } from "react";
import { ExtractSelectWithTag } from "../../../common/components/extract-select-with-tag/ExtractSelectWithTag";

export const RenderAnyComponent: FunctionComponent<any> = () => {
  return (
    <Row
      style={{
        flexGrow: 1,
        minHeight: "100%",
        paddingTop: 25,
      }}
      justify={"center"}
    >
      <Col span={24}></Col>

      <ExtractSelectWithTag
        data-cy="template-select"
        allowClear
        showSearch
        labelInValue
        filterOption={false}
        placeholder={"Type to Search for an existing template"}
        loading=""
        onSelect={(projectId: any) => {}}
        onDeselect=""
        onSearch=""
        onClear=""
        style={{ width: 550 }}
        size="large"
        notFoundContent=""
        optionLabelProp="children"
      ></ExtractSelectWithTag>

      {/* <ExtractSelect
      data-cy="template-select"
      allowClear
      showSearch
      labelInValue
      filterOption={false}
      placeholder={"Type to Search for an existing template"}
      loading={getTemplatesLoading}
      onSelect={(projectId: any) => {
        const template = (getTemplatesRes?.extractMetaProjects || []).find(
          (p: ProjectInfoFragment) => p.id === projectId.value
        );
        template && onTemplateClick(template);
      }}
      onDeselect={onTemplateClear}
      onSearch={onSearchFormFinish}
      onClear={onTemplateClear}
      style={{ width: 550 }}
      size="large"
      notFoundContent={
        getTemplatesLoading ? (
          <Spin size="small" indicator={<LoadingOutlined />} />
        ) : null
      }
      optionLabelProp="children"
    >
      {(getTemplatesRes?.extractMetaProjects || []).map(
        (p: ProjectInfoFragment) => (
          <Option data-cy={`project-option-${p.id}`} key={p.id} value={p.id}>
            <Typography.Text>{p.title}</Typography.Text>
            {renderFieldScreen(p._count?.fields, p._count?.forms)}
          </Option>
        )
      )}
    </ExtractSelect> */}
    </Row>
  );
};
