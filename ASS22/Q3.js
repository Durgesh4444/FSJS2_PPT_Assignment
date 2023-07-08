function printPaths(root) {
    if (!root) return;
    let stack = [];
    stack.push([root, root.val.toString()]);
    while (stack.length > 0) {
      let [node, path] = stack.pop();
      if (!node.left && !node.right) console.log(path);
      if (node.left) stack.push([node.left, path + "->" + node.left.val]);
      if (node.right) stack.push([node.right, path + "->" + node.right.val]);
    }
  }
  