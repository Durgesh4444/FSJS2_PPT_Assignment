function reverseKNodes(head, k) {
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
    while (current !== null) {
        count++;
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        if (count % k === 0) {
            if (prev !== null) {
                head.next = current;
            }
            head = prev;
            prev = null;
        }
    }
    if (next !== null) {
        head.next = next;
    }
    return head;
}