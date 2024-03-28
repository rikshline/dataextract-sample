import { SearchOutlined } from "@ant-design/icons";
import { Select, SelectProps } from "antd";
import { FunctionComponent, RefObject } from "react";

interface ExtractSelectProps extends SelectProps {
  ref?: RefObject<any>;
  isSearch?: boolean;
  isActive?: boolean;
  maxWidth?: number;
}

export const ExtractSelect: FunctionComponent<ExtractSelectProps> = ({
  ref = undefined,
  isSearch = false,
  isActive = false,
  maxWidth = 550,
  ...restProps
}) => {
  if (isSearch) {
    return (
      <span
        className="extract-select ant-input-group ant-input-group-compact"
        style={{ width: "100%" }}
      >
        <span className="ant-input-group-addon">
          <div className="anticon anticon-folder">
            <SearchOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
          </div>
        </span>
        <span style={{ width: maxWidth - 40 }}>
          <Select
            className="extract-select"
            dropdownAlign={{ offset: [-40, 0] }}
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ width: maxWidth }}
            {...restProps}
          />
        </span>
      </span>
    );
  }

  return <Select ref={ref} className="extract-select" {...restProps} />;
};
