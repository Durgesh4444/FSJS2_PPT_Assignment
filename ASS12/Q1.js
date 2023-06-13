function deleteMiddle(head) {
    if (head === null || head.next === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
}