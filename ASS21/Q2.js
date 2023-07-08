class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistance(root, n1, n2) {
    if (root == null) {
      return 0;
    }
    if (root.val > n1 && root.val > n2) {
      return findDistance(root.left, n1, n2);
    }
    if (root.val < n1 && root.val < n2) {
      return findDistance(root.right, n1, n2);
    }
    if (root.val >= n1 && root.val <= n2 || root.val <= n1 && root.val >= n2) {
      return distance(root, n1) + distance(root, n2);
    }
  }
  
  function distance(root, val) {
    if (root == null) {
      return 0;
    }
    if (root.val == val) {
      return 0;
    }
    if (root.val > val) {
      return 1 + distance(root.left, val);
    }
    if (root.val < val) {
      return 1 + distance(root.right, val);
    }
  }
  
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  console.log("The distance between nodes", root.left.right.val, "and", root.right.right.val, "is", findDistance(root, root.left.right.val, root.right.right.val));
  console.log("The distance between nodes", root.left.val, "and", root.left.right.left.val, "is", findDistance(root, root.left.val, root.left.right.left.val));
  