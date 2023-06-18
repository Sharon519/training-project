import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../context/ThemeContext";
import HeaderView from "./HeaderView";
import Frequency from "../components/Frequency";
import TableView from "./TableView";
import ChartView from "./ChartView";
import { fetchTableData, fetchChartData } from "../actions";

const MainView = () => {
  const { tableData } = useSelector((state) => {
    return {
      showLoading: state.appReducer.showLoading,
      tableData: state.tableReducer.tableData,
    };
  });
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  const getTableData = (fre) => {
    return dispatch(fetchTableData(fre));
  };

  const getChartData = (fre) => {
    return dispatch(fetchChartData(fre));
  };

  const onSelectFre = (fre) => {
    getTableData(fre);
  };

  useEffect(() => {
    const promise = getTableData("1D");
    getChartData("1D");
    return () => {
      promise.abort();
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <HeaderView />
      <hr className="separate-line" />
      <Frequency onSelectFre={onSelectFre} />
      <TableView data={tableData} />
      <ChartView />
    </ThemeContext.Provider>
  );
};

export default MainView;
