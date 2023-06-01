// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

let intervals = [[0,30],[5,10],[15,20]]
const canAttendMeetings = function(intervals) {
     const isOverlapping = (interval1, interval2) => {
      return !(interval1[1] <= interval2[0] || interval1[0] >= interval2[1])
    }
    
    intervals.sort((a, b) => a[0] - b[0])
  
    for (let i = 1; i < intervals.length; i++) {
      if (isOverlapping(intervals[i], intervals[i - 1])) {
        return false
      }
    }
    
    return true
};