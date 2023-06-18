import selectTradeType from "./tradeType.js";
import selectWindow from "./tradeWindow.js";
import getTableData, { sortTableData } from "./tradeTable.js";
import submitTrade from "./tradeSubmit.js";

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
