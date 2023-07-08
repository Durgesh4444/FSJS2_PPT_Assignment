function calculateDepth(preorder) {
  let stack = [];
  let depth = 0;
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === "n") {
      stack.push(preorder[i]);
      depth++;
    } else {
      while (stack.length > 0 && stack[stack.length - 1] === "l") {
        stack.pop();
        depth--;
      }
      if (stack.length > 0 && stack[stack.length - 1] === "n") {
        stack.pop();
        stack.push("l");
      }
    }
  }
  return depth;
}
