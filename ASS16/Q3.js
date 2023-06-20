function deleteMiddleElement(stack) {
    if (stack.isEmpty()) {
      return;
    }
    let n = stack.size();
    if (n == 1) {
      stack.pop();
      return;
    }
    let mid = Math.floor(n / 2);
    stack.pop();
    for (let i = mid; i < n - 1; i++) {
      stack.push(stack.pop());
    }
  }