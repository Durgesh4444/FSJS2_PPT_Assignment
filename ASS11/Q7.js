function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let start = mid;
            let end = mid;
            while (start > 0 && nums[start - 1] === target) {
                start--;
            }
            while (end < nums.length - 1 && nums[end + 1] === target) {
                end++;
            }
            return [start, end];
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [-1, -1];
}