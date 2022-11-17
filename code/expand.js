function expand(array) {
  const colLen = array[0].length;
  const rowLen = array.length;
  const res = [];
  for (let col = 0; col < colLen; col++) {
    for (let row = 0; row < rowLen; row++) {
      if (col % 2 === 1) {
        res.push(array[rowLen - row - 1][col]);
      } else {
        res.push(array[row][col]);
      }
    }
  }
  return res;
}

const arr = [
  [ 1,  2,  3,  4,  5,  6,  7,  8], 
  [ 9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32]
];

console.log('expand ==>', expand(arr));
// 1,9,17,25,26,18,10,2,3,11,19,27,28,20,12,4,5,13,21,29,30,22,14,6,7,15,23,31,32,24,16,8


function expand2(array) {
  const colLen = array[0].length;
  const rowLen = array.length;
  const res = [];
  for (let col = 0; col < colLen; col++) {
    for (let row = 0; row < rowLen; row++) {
      if (col % 2 === 0 && row % 2 === 1) {
        res.push(array[row][col + 1]);
      } else if (col % 2 === 1 && row % 2 === 1) {
        res.push(array[row][col - 1]);
      } else {
        res.push(array[row][col]);
      }
    }
  }
  return res;
}

console.log('expand2 ==>', expand2(arr));
// 1, 10, 17, 26, 2, 9, 18, 25, 3, 12, 19, 28, 4, 11, 20, 27, 5, 14, 21, 30, 6, 13, 22, 29, 7, 16, 23, 32, 8, 15, 24, 31
