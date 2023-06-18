import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../context/ThemeContext";
import HeaderView from "./HeaderView";
import Frequency from "../components/Frequency";
import TableView from "./TableView";
import { fetchTableData } from "../actions";

const MainView = () => {
  const { tableData } = useSelector((state) => {
    return {
      showLoading: state.appReducer.showLoading,
      tableData: state.tableReducer.tableData,
    };
  });
  const dispatch = useDispatch();
  // const [tableData, setTableData] = useState({});
  const theme = useContext(ThemeContext);

  const getTableData = (fre) => {
    dispatch(fetchTableData(fre));
    // fetch(`./data/${fre}.json`)
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     return { value: [] };
    //   })
    //   .then((data) => {
    //     setTableData(data);
    //   });
  };

  const onSelectFre = (fre) => {
    getTableData(fre);
  };

  useEffect(() => {
    getTableData("1D");
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <HeaderView />
      <hr className="separate-line" />
      <Frequency onSelectFre={onSelectFre} />
      <TableView data={tableData} />
    </ThemeContext.Provider>
  );
};

export default MainView;
