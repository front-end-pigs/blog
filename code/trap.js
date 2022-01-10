/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * https://jangdelong.github.io/blog_img/images/leetcode-42/rainwatertrap.png
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
 */

function trap(heights) {
  const len = heights.length;
  let res = 0;
  let max = 0;
  const leftMaxs = [];
  const rightMaxs = [];
  for (let i = 0; i < len; i++) {
    leftMaxs[i] = max = Math.max(heights[i], max);
  }
  max = 0;
  for (let j = len - 1; j > 0; j--) {
    rightMaxs[j] = max = Math.max(heights[j], max);
  }

  for (let k = 0; k < len; k++) {
    res += Math.min(leftMaxs[k], rightMaxs[k]) - heights[k];
  }

  return res;
}
