function reverseFirstKElements(queue, k) {
    const tempQueue = new Queue();
    for (let i = 0; i < k; i++) {
      tempQueue.enqueue(queue.dequeue());
    }
    for (let i = k - 1; i >= 0; i--) {
      queue.enqueue(tempQueue.dequeue());
    }
    for (let i = k; i < queue.size(); i++) {
      queue.enqueue(queue.dequeue());
    }
  }