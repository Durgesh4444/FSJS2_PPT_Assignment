// Given a string s, *find the first non-repeating character in it and return its index*. If it does not exist, return -1.

// **Example 1:**

// **Input:** s = "leetcode"

// **Output:** 0

// ******************Solution:******************

// The best possible solution here could be of a linear time because to ensure that the character is unique you have to check the whole string anyway. The idea is to go through the string and save in a hash map the number of times each character appears in the string.

// And then we go through the string the second time, this time we use the hash map as a reference to check if a character is unique or not. 

// If the character is unique, one could just return its index.

// **Complexity Analysis**

// - Time complexity : O(*N*) since we go through the string of length N two times.
// - Space complexity : O(1) because English alphabet contains 26 letters.
s = "leetcode"

function firstUniqChar(s) {
    const count = new Map();
    const n = s.length;
    // build hash map: character and how often it appears
    for (let i = 0; i < n; i++) {
        const c = s.charAt(i);
        count.set(c, (count.get(c) || 0) + 1);
    }

    // find the index
    for (let i = 0; i < n; i++) {
        if (count.get(s.charAt(i)) === 1) {
            return i;
        }
    }
    return -1;
}