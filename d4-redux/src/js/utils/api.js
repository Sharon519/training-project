export const getTableData = (fre) => {
  return fetch(`./data/${fre}.json`);
  // .then((res) => {
  //   console.log("in fetch ======", res);
  //   if (res.ok) {
  //     return res.json();
  //   }
  //   return { value: [] };
  // });
};
