let btn = document.querySelector('.Increment_btn');
let btnPress = document.querySelector('.Increment_pressed');
let count = document.querySelector('.Increment_count');

let pressedCount = 0;
let triggeredCount = 0;
const start = new Date().getTime();

var myThrotteled = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

var throttlled = myThrotteled(() => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 1000);

btn.addEventListener('click', () => {
  btnPress.innerHTML = pressedCount++;
  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());
  throttlled();
});
