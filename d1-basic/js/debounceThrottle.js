function debounce(event, wait, flag) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (!timer && flag) {
      event.apply(this, args);
    } else {
      timer = setTimeout(() => {
        event.apply(this, args);
      }, wait);
    }
  };
}

function throttle(event, wait) {
  let pre = 0,
    timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (new Date() - pre > wait) {
      timer = null;
      pre = new Date();
      event.apply(this, args);
    } else {
      timer = setTimeout(() => {
        event.apply(this, args);
      }, wait);
    }
  };
}
