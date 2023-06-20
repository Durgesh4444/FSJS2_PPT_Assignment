function findNextSmallerElement(arr) {
    const n = arr.length;
    const ans = new Array(n);
    for (let i = 0; i < n; i++) {
      ans[i] = -1;
    }
    for (let i = 1; i < n; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) {
          ans[i] = arr[j];
          break;
        }
      }
    }
    return ans;
  }
  const arr = [1, 3, 2, 4];
  console.log(findNextSmallerElement(arr));