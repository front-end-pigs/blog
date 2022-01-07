/**
 * 防抖函数
 * TODO: 防止多次提交按钮，只执行最后提交的一次
 * 原理: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 * 适用场景: 按钮多次点击等
 */
export const debource = (fn, delay) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
};
