function nextGreaterNode(head) {
    const stack = [];
    const answer = [];
    while (head !== null) {
      while (stack.length !== 0 && stack[stack.length - 1] < head.val) {
        answer[stack.pop()] = head.val;
      }
      stack.push(head.val);
      head = head.next;
    }
    while (stack.length !== 0) {
      answer[stack.pop()] = 0;
    }
    return answer;
  }