function findTheWinner(n, k) {
    const queue = [];
    for (let i = 1; i <= n; i++) {
      queue.push(i);
    }
    while (queue.length > 1) {
      for (let i = 0; i < k - 1; i++) {
        queue.push(queue.shift());
      }
      queue.shift();
    }
    return queue[0];
  }
  