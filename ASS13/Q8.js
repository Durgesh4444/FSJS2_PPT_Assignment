function deleteNode(head, position) {
    if (head === null) {
        return null;
    }
    if (position === 0) {
        return head.next;
    }
    let current = head;
    for (let i = 0; i < position - 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    current.next.prev = current;
    return head;
}