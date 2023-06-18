export default function tradeSubmit(event) {
  let data = {};
  const type = event.target.dataset.value;
  const selectCls =
    type === "buy" || type === "sell" ? ".trade-traditional" : ".trade-nlp";
  const inputEls = document.querySelectorAll(`${selectCls} .trade-input`);

  inputEls.forEach((inputEl) => {
    data[inputEl.name] = inputEl.value;
  });

  fetch("/submitTrade", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
