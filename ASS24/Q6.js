function topKFrequent(words, k) {
    const counts = new Map();
    for (const word of words) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
  
    const candidates = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    return candidates.slice(0, k).map(([word, count]) => word);
  }