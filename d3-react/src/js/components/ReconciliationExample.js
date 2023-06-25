import React, { useState } from "react";

const ReconciliationExample = () => {
  const [showSpan, setShowSpan] = useState(false);
  const [style, setStyle] = useState({});
  const [list, setList] = useState(["first", "second"]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowSpan(!showSpan);
          }}
        >
          tag name change
        </button>
        <button
          onClick={() => {
            setStyle({ color: "red" });
          }}
        >
          style change
        </button>
        <button onClick={() => setList([...list, "third"])}>add to end</button>
        <button onClick={() => setList(["third", ...list])}>
          add to start
        </button>
      </div>
      <div style={style}>
        {showSpan ? <span>I am a span element</span> : <a>I am an a element</a>}
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReconciliationExample;
