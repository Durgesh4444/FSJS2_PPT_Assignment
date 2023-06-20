function reverseStack(stack) {
    if (stack.length === 0) {
      return;
    }
    const top = stack.pop();
    reverseStack(stack);
    stack.push(top);
  }
  const stack = [1, 2, 3, 4, 5];
  reverseStack(stack);
  console.log(stack)