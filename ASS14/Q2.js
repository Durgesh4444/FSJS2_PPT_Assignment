function addOne(head) {
    let carry = 1;
    let current = head;
    while (current !== null) {
        let sum = current.data + carry;
        carry = sum / 10;
        current.data = sum % 10;
        current = current.next;
    }
    if (carry > 0) {
        let newNode = new Node(carry);
        newNode.next = head;
        head = newNode;
    }
    return head;
}