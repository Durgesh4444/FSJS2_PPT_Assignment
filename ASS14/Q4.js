function copyRandomList(head) {
    let map = new Map();
    let newHead = new Node(head.val);
    map.set(head, newHead);
    let current = head;
    let newCurrent = newHead;
    while (current !== null) {
        newCurrent.next = map.get(current.next);
        newCurrent.random = map.get(current.random);
        current = current.next;
        newCurrent = newCurrent.next;
    }
    return newHead;
}