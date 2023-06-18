import React from "react";
import Table from "../components/Table";

const TableView = (props) => {
  const { data } = props;
  const columns = [
    { field: "date", header: "Date" },
    { field: "clientName", header: "Client Name" },
    {
      field: "clientSide",
      header: "Client Side",
      classFn: (rowData) => {
        return rowData.clientSide === "Buy" ? "buy-side" : "sell-side";
      },
    },
    { field: "ticker", header: "Ticker" },
    { field: "ric", header: "RIC" },
    {
      field: "size",
      header: "Size",
      classFn: (rowData) => {
        return rowData.clientSide === "Buy" ? "buy-side" : "sell-side";
      },
    },
    { field: "price", header: "Price" },
    { field: "notional", header: "Notional USD" },
    { field: "currency", header: "Currency" },
    { field: "sector", header: "Issuer Sector" },
    { field: "salesperson", header: "Salesperson" },
    { field: "hp", header: "HT/PT" },
  ];

  return (
    <div className="data-table">
      <Table columns={columns} data={data.value} />
      <div className="data-summary">
        <div className="summary-items">
          <span>
            <label className="total-buy">Total Buy: </label>
            <span>{data.totalBuy}</span>
          </span>
          <span>
            <label className="total-sell">Total Sell: </label>
            <span>{data.totalSell}</span>
          </span>
          <span>
            <label className="net-quantity">Net Quantity: </label>
            <span>{data.quantity}</span>
          </span>
          <span>
            <label className="total-buy-notional">Total Buy Notional: </label>
            <span>{data.buyNotional}</span>
          </span>
          <span>
            <label className="total-sell-notional">Total Sell Notional: </label>
            <span>{data.sellNotional}</span>
          </span>
          <span>
            <label className="net-notional">Net Notional: </label>
            <span>{data.netNotional}</span>
          </span>
        </div>
        <span className="records">
          <label>Total Records:</label>
          <span>{data?.value?.length}</span>
        </span>
      </div>
    </div>
  );
};

export default TableView;
