function reverseNumber(num) {
    const stack = [];
    while (num > 0) {
      stack.push(num % 10);
      num = Math.floor(num / 10);
    }
    let reversedNum = 0;
    while (!stack.isEmpty()) {
      reversedNum = reversedNum * 10 + stack.pop();
    }
    return reversedNum;
  }