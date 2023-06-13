function leftShift(head, k) {
    let temp = head;
    let count = 0;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    k %= count;
    if (k === 0) {
      return head;
    }
    let newHead = head;
    for (let i = 0; i < count - k; i++) {
      newHead = newHead.next;
    }
    let temp2 = newHead;
    while (temp2.next !== null) {
      temp2 = temp2.next;
    }
    temp2.next = head;
    head = newHead.next;
    newHead.next = null;
    return head;
  }