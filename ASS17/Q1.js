if (!(char in charCount)) {
  charCount[char] = 1;
  queue.push(char);
} else {
  charCount[char]++;
}

while (queue.length > 0 && charCount[queue[0]] > 1) {
  queue.shift();
}
