function add(...args) {
  let sum = args.reduce((target, v) => target + v, 0);
  function s(...sArgs) {
    sum = sArgs.reduce((target, v) => target + v, sum);
    return s;
  }
  s.toString = function () {
    return sum;
  };
  return s;
}

console.log('add(2)(2)(3)(4)(5)', add(2)(2)(3)(4)(5).toString());
