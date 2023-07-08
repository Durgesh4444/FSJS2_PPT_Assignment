function printBottomView(root) {
    let queue = [];
    let map = new Map();
    let min = 0;
    let max = 0;
    if (root === null) return [];
    queue.push([root, 0]);
    while (queue.length > 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let [node, hd] = queue.shift();
        map.set(hd, node.val);
        min = Math.min(min, hd);
        max = Math.max(max, hd);
        if (node.left !== null) queue.push([node.left, hd - 1]);
        if (node.right !== null) queue.push([node.right, hd + 1]);
      }
    }
    let result = [];
    for (let i = min; i <= max; i++) {
      result.push(map.get(i));
    }
    return result;
  }
  