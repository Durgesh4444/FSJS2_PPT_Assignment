function findNextGreaterFrequency(arr) {
  let frequencies = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    frequencies[i] = 1;
  }
  
  for (let i = arr.length - 1; i >= 0; i--) {
    frequencies[i]++;
    for (let j = i + 1; j < arr.length; j++) {

      if (frequencies[i] < frequencies[j]) {
        frequencies[i] = j;
      }
    }
  }
  return frequencies;
}