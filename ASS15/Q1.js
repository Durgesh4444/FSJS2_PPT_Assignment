function nextGreaterElement(arr) {
  const n = arr.length;
  const stack = [];
  const ans = new Array(n);
  ans[n - 1] = -1;
  stack.push(arr[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (!stack.empty() && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.empty()) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return ans;
}
