function deleteLastOccurrence(head, key) {
    let prev = null;
    let current = head;
    while (current !== null) {
        if (current.data === key) {
            if (prev === null) {
                head = current.next;
            } else {
                prev.next = current.next;
            }
        } else {
            prev = current;
        }
        current = current.next;
    }
}