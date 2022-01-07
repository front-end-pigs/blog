Function.prototype.bind2 = function(asThis, ...args1) {
  const fn = this;
  return function(...args2) {
    return fn.call(asThis, ...args1, ...args2);
  }
}
