function intersect(nums1, nums2) {
    const nums1Map = new Map();
    for (const num of nums1) {
        if (nums1Map.has(num)) {
            nums1Map.set(num, nums1Map.get(num) + 1);
        } else {
            nums1Map.set(num, 1);
        }
    }
    const res = [];
    for (const num of nums2) {
        if (nums1Map.has(num)) {
            const count = nums1Map.get(num);
            for (let i = 0; i < count; i++) {
                res.push(num);
            }
            nums1Map.delete(num);
        }
    }
    return res;
}