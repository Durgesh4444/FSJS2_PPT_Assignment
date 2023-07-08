function lengthOfLongestSubstring(s) {
    let longest = 0;
    let start = 0;
    let seen = new Set();
  
    for (let i = 0; i < s.length; i++) {
      if (seen.has(s[i])) {
        longest = Math.max(longest, i - start);
        start = i - longest + 1;
      }
      seen.add(s[i]);
    }
  
    return Math.max(longest, s.length - start);
  }