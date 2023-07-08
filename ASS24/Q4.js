function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
      let key = [...str].sort().join("");
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
    return [...map.values()];
  }
  