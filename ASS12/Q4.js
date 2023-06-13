function isPalindrome(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let reversed = reverse(slow);
    while (head !== null && reversed !== null) {
        if (head.data !== reversed.data) {
            return false;
        }
        head = head.next;
        reversed = reversed.next;
    }
    return true;
}
function reverse(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}