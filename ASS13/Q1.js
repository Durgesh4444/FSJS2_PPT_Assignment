function mergeTwoLists(head1, head2) {
    let newHead = null;
    let current = null;
    while (head1 !== null && head2 !== null) {
        if (head1.data > head2.data) {
            if (newHead === null) {
                newHead = head1;
                current = head1;
            } else {
                current.next = head1;
                current = head1;
            }
            head1 = head1.next;
        } else {
            if (newHead === null) {
                newHead = head2;
                current = head2;
            } else {
                current.next = head2;
                current = head2;
            }
            head2 = head2.next;
        }
    }
    if (head1 !== null) {
        current.next = head1;
    }
    if (head2 !== null) {
        current.next = head2;
    }
    return newHead;
}