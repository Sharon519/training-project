import React, { useState } from "react";
import cx from "classnames";

const Frequency = (props) => {
  const { onSelectFre } = props;
  const [activeFre, setActiveFre] = useState("1D");
  const frequency = ["1D", "1W", "2W", "1M", "3M", "6M", "1Y", "YTD"];

  const onClickFre = (fre) => {
    setActiveFre(fre);
    onSelectFre && onSelectFre(fre);
  };

  return (
    <div className="fre-group">
      {frequency.map((f) => (
        <span
          key={f}
          className={cx("fre-item", { active: activeFre === f })}
          onClick={() => onClickFre(f)}
        >
          {f}
        </span>
      ))}
    </div>
  );
};

export default Frequency;
