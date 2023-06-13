function deleteNAfterM(head, m, n) {
    let current = head;
    let next = head;
    while (current !== null) {
        for (let i = 0; i < m - 1; i++) {
            next = next.next;
        }
        let temp = next.next;
        for (let i = 0; i < n; i++) {
            next.next = temp.next;
            temp = temp.next;
        }
        current = next.next;
    }
    return head;
}