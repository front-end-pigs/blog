/**
 * 盘子里有n个苹果，由于你的手比较小的原因，一次只能拿1个或者2个或者3个，每次至少拿1个，请问有多少种拿法？
 * 【n苹果有多少种拿法问题】
 * 如：
 * 1 - 1（1种）
 * 2 - 1+1、2（2种）
 * 3 - 1+1+1、2+1、1+2、3（4种）
 * 4...
 * 
 * 斐波那契数列问题
 */
function takeApples (n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } els if (n === 3) {
    return 4
  } else {
    return takeApples(n - 1) + takeApples(n - 2) + takeApples(n - 3)
  }
}

// 优化
const betterTakeApples = (function () {
  const f = {}
  return function (n) {
    if (f[1] === undefined) {
      return f[1] = 1
    }
    if (f[2] === undefined) {
      return f[2] = 2
    }
    if (f[3] === undefined) {
      return f[3] = 4
    }
    if (f[n - 1] === undefined) {
      f[n - 1] = betterTakeApples(n - 1)
    }
    if (f[n - 2] === undefined) {
      f[n - 2] = betterTakeApples(n - 2)
    }
    if (f[n - 3] === undefined) {
      f[n - 3] = betterTakeApples(n - 3)
    }
    return f[n] = f[n - 1] + f[n - 2] + f[n - 3]
  }
})()
