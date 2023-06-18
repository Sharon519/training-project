var tableData = [];
export default function getTableData(fre) {
  fetch(`./data/${fre}.json`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return { value: [] };
    })
    .then((data) => {
      tableData = data;
      setTableData(data);
    });
}

export function sortTableData(event) {
  const { sortBy } = event.target.dataset;
  tableData.value = tableData.value.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return -1;
    if (a[sortBy] < b[sortBy]) return 1;
    if (a[sortBy] === b[sortBy]) return 0;
  });
  setTableData(tableData);
}

function setTableData(data) {
  const dataTableEl = document.querySelector(".data-table");
  let content = "";
  data.value.forEach((d) => {
    const {
      date,
      clientName,
      clientSide,
      ticker,
      ric,
      size,
      price,
      notional,
      currency,
      sector,
      salesperson,
      hp,
    } = d;
    content += `<tr>
        <td>${date}</td>
        <td>${clientName}</td>
        <td>${clientSide}</td>
        <td>${ticker}</td>
        <td>${ric}</td>
        <td>${size}</td>
        <td>${price}</td>
        <td>${notional}</td>
        <td>${currency}</td>
        <td>${sector}</td>
        <td>${salesperson}</td>
        <td>${hp}</td>
    </tr>`;
  });
  dataTableEl.querySelector("tbody").innerHTML = content;

  const {
    totalBuy,
    totalSell,
    quantity,
    buyNotional,
    sellNotional,
    netNotional,
  } = data;
  dataTableEl.querySelector(".total-buy+span").textContent = totalBuy;
  dataTableEl.querySelector(".total-sell+span").textContent = totalSell;
  dataTableEl.querySelector(".net-quantity+span").textContent = quantity;
  dataTableEl.querySelector(".total-buy-notional+span").textContent =
    buyNotional;
  dataTableEl.querySelector(".total-sell-notional+span").textContent =
    sellNotional;
  dataTableEl.querySelector(".net-notional+span").textContent = netNotional;
  dataTableEl.querySelector(".records span").textContent = data.value.length;
}
