function rearrange(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
      if (arr[i] < 0) {
        i++;
      } else if (arr[j] > 0) {
        j--;
      } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    return arr;
  }