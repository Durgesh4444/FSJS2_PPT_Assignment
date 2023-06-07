function findSingleNumber(arr) {
    while (arr.length > 1) {
      if (arr[0] === arr[arr.length - 1]) {
        arr = arr.slice(1, -1);
      } else if (arr[0] < arr[arr.length - 1]) {
        arr = arr.slice(1);
      } else {
        arr = arr.slice(0, -1);
      }
    }
    return arr[0];
  }