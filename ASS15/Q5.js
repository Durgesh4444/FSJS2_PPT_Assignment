function reverseString(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
    let reversedStr = "";
    for (let i = stack.length - 1; i >= 0; i--) {
      reversedStr += stack[i];
    }
    return reversedStr;
  }
  