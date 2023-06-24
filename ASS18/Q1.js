function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [];
  
    for (let i = 0; i < intervals.length; i++) {

      if (i > 0 && intervals[i][0] <= intervals[i - 1][1]) {

        intervals[i - 1][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
      } else {
    
        mergedIntervals.push(intervals[i]);
      }
    }
    return mergedIntervals;
  }