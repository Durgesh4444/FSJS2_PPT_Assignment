function findClosestElements(arr, k, x) {
    const left = 0;
    const right = arr.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr.slice(mid - k + 1, mid + k + 1);
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // We reach here when `left == right`.
  
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      return arr.slice(left - k + 1, left + k + 1);
    } else {
      return arr.slice(right - k + 1, right + k + 1);
    }
  }