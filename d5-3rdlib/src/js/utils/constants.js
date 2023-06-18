import React from "react";

export const TABLE_COLUMNS = [
  {
    dataIndex: "date",
    title: "Date",
    defaultSortOrder: "descend",
    filterSearch: "true",
  },
  { dataIndex: "clientName", title: "Client Name" },
  {
    dataIndex: "clientSide",
    title: "Client Side",
    render: (text, record) => {
      const className = record.clientSide === "Buy" ? "buy-side" : "sell-side";
      return <span className={className}>{text}</span>;
    },
  },
  { dataIndex: "ticker", title: "Ticker" },
  { dataIndex: "ric", title: "RIC" },
  {
    dataIndex: "size",
    title: "Size",
    render: (text, record) => {
      const className = record.clientSide === "Buy" ? "buy-side" : "sell-side";
      return <span className={className}>{text}</span>;
    },
  },
  { dataIndex: "price", title: "Price" },
  { dataIndex: "notional", title: "Notional USD" },
  { dataIndex: "currency", title: "Currency" },
  { dataIndex: "sector", title: "Issuer Sector" },
  { dataIndex: "salesperson", title: "Salesperson" },
  { dataIndex: "hp", title: "HT/PT" },
];
