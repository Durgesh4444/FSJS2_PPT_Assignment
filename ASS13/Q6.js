function mergeTwoLists(head1, head2) {
    let current1 = head1;
    let current2 = head2;
    let head = null;
    let current = null;
    while (current1 !== null && current2 !== null) {
        if (current1.data < current2.data) {
            if (head === null) {
                head = current1;
                current = current1;
            } else {
                current.next = current1;
                current = current1;
            }
            current1 = current1.next;
        } else {
            if (head === null) {
                head = current2;
                current = current2;
            } else {
                current.next = current2;
                current = current2;
            }
            current2 = current2.next;
        }
    }
    if (current1 !== null) {
        current.next = current1;
    }
    if (current2 !== null) {
        current.next = current2;
    }
    return head;
}