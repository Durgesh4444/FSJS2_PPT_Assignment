function removeZeroSumSublists(head) {
    const stack = [];
    let currentSum = 0;
    let node = head;
    while (node !== null) {
      currentSum += node.val;
      if (currentSum === 0) {
        while (stack.length !== 0 && stack[stack.length - 1] === node) {
          stack.pop();
        }
        node = node.next;
        continue;
      }
      stack.push(node);
      node = node.next;
    }
    while (stack.length !== 0 && stack[stack.length - 1].val === currentSum) {
      stack.pop();
    }
    return stack.length === 0 ? null : stack[0];
  }