const btn = document.querySelector('.Increment_btn');
const btnPress = document.querySelector('.Increment_pressed');
const count = document.querySelector('.Increment_count');

let pressedCount = 0;
let triggeredCount = 0;

const myDebounce = (cb, d) => {
  let timer;
  if (timer) clearTimeout(timer);
  return function (...args) {
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = myDebounce(() => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount();
});
