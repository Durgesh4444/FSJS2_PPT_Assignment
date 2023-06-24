function intersection(nums1, nums2) {
    const result = [];
    const map = new Map();
    for (const num of nums1) {
      map.set(num, true);
    }
    for (const num of nums2) {
      if (map.has(num)) {
        result.push(num);
        map.delete(num);
      }
    }
    return result;
  }