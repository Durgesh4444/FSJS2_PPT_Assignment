class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorder(root, arr) {
  if (root == null) {
    return;
  }
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}

function replace(root, arr) {
  if (root == null) {
    return;
  }
  replace(root.left, arr);
  root.val = arr.shift();
  replace(root.right, arr);
}

function convertBTtoBST(root) {
  const arr = [];
  inorder(root, arr);
  arr.sort((a, b) => a - b);
  replace(root, arr);
}

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

console.log("Before conversion:");
console.log(JSON.stringify(root));

convertBTtoBST(root);

console.log("After conversion:");
console.log(JSON.stringify(root));
