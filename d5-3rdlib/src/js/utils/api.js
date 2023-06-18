export const getTableData = (fre) => {
  return fetch(`./data/${fre}.json`);
};

export const getChartData = (fre) => {
  return fetch(`./data/chart.json`);
};
