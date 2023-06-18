import React, { forwardRef, useImperativeHandle, useRef, useMemo } from "react";
import { Input, Select } from "antd";
import cx from "classnames";

const TradeInput = forwardRef((props, ref) => {
  const {
    type = "input",
    name,
    label,
    options = [],
    inputClass,
    placeholder = "Text input",
  } = props;
  const inputRef = useRef();

  const selectOpts = useMemo(() => {
    return options.map((value) => ({ value, label: value }));
  }, [options]);

  const onChange = (event) => {
    props.onChange && props.onChange(name, event);
  };

  const onSelect = (value, option) => {
    props.onChange && props.onChange(name, { target: { value } });
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        name,
        inputRef,
        focus: () => {
          inputRef.current.focus();
        },
      };
    },
    []
  );

  if (type === "select") {
    return (
      <div className="trade-input-item">
        <label className="trade-input-title">{label}</label>
        <Select
          defaultValue="HT"
          className="trade-input"
          options={selectOpts}
          onChange={onSelect}
        />
      </div>
    );
  }

  return (
    <div className="trade-input-item">
      <label className="trade-input-title">{label}</label>
      <Input
        ref={inputRef}
        className={cx("trade-input", inputClass)}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
});

export default TradeInput;
