import React from "react";
// import Table from "../components/Table";
import { Table } from "antd";
import { sortDate, sortStr } from "../utils/utils";
import { TABLE_COLUMNS } from "../utils/constants";

const TableView = (props) => {
  const { data } = props;
  const dataSource = (data.value || []).map((item, index) => ({
    key: index,
    ...item,
  }));

  const columns = TABLE_COLUMNS.map((col) => {
    const filterValues = [...new Set(dataSource.map((d) => d[col.dataIndex]))];
    return {
      ...col,
      filters: filterValues.map((value) => ({ text: value, value })),
      onFilter: (value, record) => record[col.dataIndex].indexOf(value) === 0,
      sorter:
        col.dataIndex === "date"
          ? (a, b) => sortDate(a.date, b.date)
          : (a, b) => sortStr(a[col.dataIndex], b[col.dataIndex]),
    };
  });

  return (
    <div className="data-table">
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      {/* <Table columns={columns} data={data.value} /> */}
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
