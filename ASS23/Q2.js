function printLeftView(root) {
    let queue = [];
    let result = [];
    if (root === null) return result;
    queue.push(root);
    while (queue.length > 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        if (i === 0) result.push(node.val);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
    }
    return result;
  }
  