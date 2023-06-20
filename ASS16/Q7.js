function destroySimilarWords(words) {
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
      if (set.has(words[i])) {
        set.delete(words[i]);
      } else {
        set.add(words[i]);
      }
    }
    return set.size;
  }