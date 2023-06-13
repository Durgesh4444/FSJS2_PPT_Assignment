function detectAndRemoveLoop(head) {
    if (head === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
            fast.next = null;
            return head;
        }
    }
    return null;
}