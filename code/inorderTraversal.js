/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const inorderTraversal = function(root) {
  const res = [];
  traversal(root, res);
  return res;
}

function traversal(root, res) {
  if (root) {
    if (root.left) {
      traversal(root.left, res);
    }
    res.push(root.val);
    if (root.right) {
      traversal(root.right, res);
    }
  }
}

console.log('中序遍历 =>', inorderTraversal([1,null,2,3]));
