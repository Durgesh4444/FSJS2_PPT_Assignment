function pushZerosToEnd(arr) {
    let left = 0;
    let right = arr.length - 1;
  

    while (left < right) {
      
      if (arr[left] !== 0) {
        left++;
      } else {
       
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        right--;
      }
    }
  }
  
  let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
  pushZerosToEnd(arr);
  console.log(arr);