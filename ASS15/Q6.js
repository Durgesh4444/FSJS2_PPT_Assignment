function evaluatePostfix(expr) {
    const stack = [];
    for (const token of expr.split(" ")) {
      if (token === "+" || token === "-" || token === "*" || token === "/") {
        const op1 = stack.pop();
        const op2 = stack.pop();
        const result = eval(`${op1} ${token} ${op2}`);
        stack.push(result);
      } else {
        stack.push(Number(token));
      }
    }
    return stack.pop();
  }
