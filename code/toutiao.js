/**
 * 求下面代码的输出结果
 */
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
console.log(i)
/**
输出结果如下
Uncaught ReferenceError: i is not defined
此处等待1s
然后几乎同时输出
0
1
2
3
4
*/
