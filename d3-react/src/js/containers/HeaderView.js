import React, { useState, useReducer, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

import ThemeContext from "../context/ThemeContext";
import TradeInput from "../components/TradeInput";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_clientName":
      return { ...state, clientName: action.payload };
    case "change_ticker":
      return { ...state, ticker: action.payload };
    case "change_ric":
      return { ...state, ric: action.payload };
    case "change_size":
      return { ...state, size: action.payload };
    case "change_price":
      return { ...state, price: action.payload };
    case "change_currency":
      return { ...state, currency: action.payload };
    case "change_sector":
      return { ...state, sector: action.payload };
    case "change_salesperson":
      return { ...state, salesperson: action.payload };
    case "change_hp":
      return { ...state, hp: action.payload };
  }
};

const HeaderView = () => {
  const [viewType, setViewType] = useState("traditional");
  const [state, dispatch] = useReducer(reducer, {});
  const nlpInputRef = useRef();

  const theme = useContext(ThemeContext);

  const traditionalItems = [
    { name: "clientName", label: "Client Name" },
    { name: "ticker", label: "Ticker" },
    { name: "ric", label: "RIC" },
    { name: "size", label: "Size" },
    { name: "price", label: "Price" },
    { name: "currency", label: "Currency" },
    { name: "sector", label: "Issue Sector" },
    { name: "salesperson", label: "Salesperson" },
    {
      name: "hp",
      label: "HT/PT",
      type: "select",
      options: ["HT", "PT"],
    },
  ];

  const onChange = (name, event) => {
    dispatch({ type: `change_${name}`, payload: event.target.value });
  };

  const onSubmit = () => {
    console.log(state);
  };

  const traditionalInputs = () => {
    return (
      <div className={cx("trade-traditional", { dsn: viewType === "nlp" })}>
        <div className="trade-input-items">
          {traditionalItems.map((item) => (
            <TradeInput key={item.name} {...item} onChange={onChange} />
          ))}
        </div>
        <div className="trade-submit-btns traditional-submit">
          <button
            className="trade-btn trade-buy"
            onClick={() => onSubmit("Buy")}
          >
            Buy
          </button>
          <button
            className="trade-btn trade-sell"
            onClick={() => onSubmit("Sell")}
          >
            Sell
          </button>
        </div>
      </div>
    );
  };

  const nplInputs = () => {
    return (
      <div className={cx("trade-nlp", { dsn: viewType === "traditional" })}>
        <TradeInput
          ref={nlpInputRef}
          name="nlp"
          label="Client Name"
          inputClass="trade-nlp-input"
        />
        <div className="trade-submit-btns">
          <button className="trade-btn trade-go">Go</button>
        </div>
      </div>
    );
  };

  const switchView = (type) => {
    setViewType(type);
  };

  return (
    <>
      <div className="trade-type">
        <span
          className={cx("trade-type-item", {
            active: viewType === "traditional",
          })}
          onClick={() => {
            switchView("traditional");
          }}
        >
          Traditional Trade
        </span>
        <span
          className={cx("trade-type-item", { active: viewType === "nlp" })}
          onClick={(event) => {
            console.log(event.isDefaultPrevented());
            console.log(event.isPropagationStopped());
            event.stopPropagation();
            console.log(event.isPropagationStopped());
            switchView("nlp");
          }}
        >
          NLP Trade
        </span>
      </div>
      {nplInputs()}
      {traditionalInputs()}
      {/* <button
        onClick={() => {
          nlpInputRef.current.focus();
        }}
      >
        Focus
      </button> */}
      {/* {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )} */}
    </>
  );
};

export default HeaderView;
