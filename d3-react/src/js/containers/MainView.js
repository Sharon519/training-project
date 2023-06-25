import React, { useEffect, useContext, useCallback } from "react";
import ThemeContext from "../context/ThemeContext";
import HeaderView from "./HeaderView";
import Frequency from "../components/Frequency";
import TableView from "./TableView";
import { useState } from "react";

import TransitionSample from "../components/TransitionExample";
import ReconciliationExample from "../components/ReconciliationExample";

const MainView = () => {
  const [tableData, setTableData] = useState({});
  const theme = useContext(ThemeContext);

  const getTableData = (fre) => {
    fetch(`./data/${fre}.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return { value: [] };
      })
      .then((data) => {
        setTableData(data);
      });
  };

  const onSelectFre = useCallback((fre) => {
    getTableData(fre);
  }, []);

  useEffect(() => {
    getTableData("1D");
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <HeaderView />
      <hr className="separate-line" />
      <Frequency onSelectFre={onSelectFre} />
      <TableView data={tableData} />
      <TransitionSample />
      <ReconciliationExample />
    </ThemeContext.Provider>
  );
};

export default MainView;
