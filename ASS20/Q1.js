function maxSubtreeSum(root) {
  let maxSum = -Infinity;
  function dfs(node) {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const sum = node.val + left + right;
    maxSum = Math.max(maxSum, sum);
    return sum;
  }
  dfs(root);
  return maxSum;
}

  