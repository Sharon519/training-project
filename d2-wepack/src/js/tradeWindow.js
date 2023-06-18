export default function selectWindow(event) {
  const freGroup = event.currentTarget;
  const activeEl = freGroup.querySelector(".fre-item.active");
  if (activeEl) {
    activeEl.classList.remove("active");
  }

  const freEl = event.target;
  freEl.classList.add("active");
  return freEl.dataset.value;
}
