import React, { useEffect, useState } from "react";

const Table = (props) => {
  const { columns = [], data = [] } = props;
  const [rowData, setRowData] = useState(data);
  const headers = columns.map((col) => (
    <th
      key={col.field}
      onClick={() => {
        sortTableData(col.field);
      }}
    >
      {col.header}
    </th>
  ));
  const rows = rowData.map((v, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {columns.map((col, colIndex) => {
          const className = col.classFn ? col.classFn(v) : "";
          return (
            <td key={`${rowIndex}-${colIndex}`} className={className}>
              {v[col.field]}
            </td>
          );
        })}
      </tr>
    );
  });

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const sortTableData = (sortBy) => {
    const sortedData = rowData.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      if (a[sortBy] === b[sortBy]) return 0;
    });
    setRowData([...sortedData]);
  };

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
