import React, { forwardRef, useImperativeHandle, useRef } from "react";
import cx from "classnames";

const TradeInput = forwardRef((props, ref) => {
  const {
    type = "input",
    name,
    label,
    options,
    inputClass,
    placeholder = "Text input",
  } = props;
  const inputRef = useRef();

  const onChange = (event) => {
    props.onChange && props.onChange(name, event);
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
        <select name={name} className="trade-input" onChange={onChange}>
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="trade-input-item">
      <label className="trade-input-title">{label}</label>
      <input
        // ref={ref}
        ref={inputRef}
        className={cx("trade-input", inputClass)}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
});

export default TradeInput;
