function findNthNodeFromEnd(head, n) {
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}