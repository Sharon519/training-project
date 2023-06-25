import React, { startTransition, useState } from "react";

const TransitionSample = () => {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const getList = (e) => {
    setVal(e.target.value);
    let arr = Array.from(new Array(10000), (item) => Date.now());
    setArr(arr);
    // startTransition(() => {
    //   setArr(arr);
    // });
  };

  return (
    <div>
      <input value={val} onChange={getList} />
      {arr.map((item, key) => (
        <div className="records" key={key}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default TransitionSample;
