export default function (event) {
  const tradeTypeEl = event.currentTarget;
  const activeEl = tradeTypeEl.querySelector(".trade-type-item.active");
  if (activeEl) {
    activeEl.classList.remove("active");
    const type = activeEl.dataset.value;
    document.querySelector(`.trade-${type}`).style.display = "none";
  }

  const itemEl = event.target;
  itemEl.classList.add("active");
  const type = itemEl.dataset.value;
  document.querySelector(`.trade-${type}`).style.display = "flex";
}
