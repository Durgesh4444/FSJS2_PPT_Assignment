function flatten(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current);
        current = current.bottom;
    }
    result.sort((a, b) => a.data - b.data);
    for (let i = 0; i < result.length - 1; i++) {
        result[i].bottom = result[i + 1];
    }
    return result[0];
}