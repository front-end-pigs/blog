/**
科学家在研究新冠病毒的时候，发现病毒在不通温度下表现不同，为此，科学家随机产生了一个温度序列来为病毒做实验，请为科学家找出这个温度序列中的温度平衡点。
温度平衡点: 该温度的左侧的温度和与右侧的温度和相同。
注：如果存在多个温度平衡点，请返回序列中最靠后的温度平衡点。

示例1：
输入：[1,3,3,5,4,1,2]
输出：3   //温度为5的为温度平衡点，下标为 3

示例2：
输入：[1,1,1,1,1,1]
输出：-1  // 没有温度平衡点

示例3：
输入：[3, 2, -2]
输出：0  // 3 为温度平衡点，下标为0
 */

function findBalance(arr) {
  const len = arr.length;
  const total = arr.reduce((total, item) => {
    total += item;
    return total;
  });
  let point = -1;

  if (total - arr[0] === 0) {
    return 0;
  }

  if (total - arr[len - 1] === 0) {
    return len - 1;
  }

  for (let i = 0; i < len - 1; i++) {
    if (
      (total - arr[i]) / 2 === arr.reduce((total, item, index) => {
        if (index < i) {
          total += item;
        }
        return total;
      })
    ) {
      point = i;
    }
  }

  return point;
}

const arr = [1,3,3,5,4,1,2];
const arr1 = [1,1,1,1,1,1];
const arr2 = [1, 0, 0, 1];


console.log('result ===>', findBalance(arr));
console.log('result1 ===>', findBalance(arr1));
console.log('result2 ===>', findBalance(arr2));
