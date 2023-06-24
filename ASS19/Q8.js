function intersection(nums1, nums2) {
    const map = new Map();
    for (let num of nums1) {
      map.set(num, map.get(num) || 0) + 1;
    }
    const res = [];
    for (let num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        res.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
    return res;
  }