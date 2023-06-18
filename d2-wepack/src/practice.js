import "./css/practice.css";

import selectTradeType from "./js/tradeType.js";
import selectWindow from "./js/tradeWindow.js";
import getTableData, { sortTableData } from "./js/tradeTable.js";
import submitTrade from "./js/tradeSubmit.js";

function init() {
  const freGroup = document.querySelector(".fre-group");
  freGroup.addEventListener("click", (event) => {
    const v = selectWindow(event);
    getTableData(v);
  });

  const tradeType = document.querySelector(".trade-type");
  tradeType.addEventListener("click", (event) => {
    selectTradeType(event);
  });

  const submitTraditional = document.querySelector(".traditional-submit");
  submitTraditional.addEventListener("click", (event) => {
    submitTrade(event);
  });

  const tableHeader = document.querySelector(".data-table thead");
  tableHeader.addEventListener("click", (event) => {
    sortTableData(event);
  });

  getTableData("1D");
}

init();
