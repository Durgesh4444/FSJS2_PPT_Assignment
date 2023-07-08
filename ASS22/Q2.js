function flipBinaryTree(root) {
    if (!root) return null;
    if (!root.left && !root.right) return root;
    let newRoot = flipBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;
    return newRoot;
  }
  