/**
 * 节流函数
 * TODO: 固定时间内只执行一次，防止超高频次触发位置变动
 * 原理: 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 * 适用场景: 滚动事件等
 */
export const throttle = (fn, delay) => {
  let flag = true;
  return function(...args) {
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  }
};
