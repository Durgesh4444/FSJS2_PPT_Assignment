// Given a string s consisting of words and spaces, return *the length of the **last** word in the string.*

// A **word** is a maximal substring consisting of non-space characters only.

// **Example 1:**

// **Input:** s = "Hello World"

// **Output:** 5

// **Explanation:** The last word is "World" with length 5.

// ******************Solution:******************

// One can break down the solution into two steps:
s = "Hello World"
function lengthOfLastWord(s) {
    // trim the trailing spaces
    let p = s.length - 1;
    while (p >= 0 && s.charAt(p) === ' ') {
        p--;
    }

    // compute the length of last word
    let length = 0;
    while (p >= 0 && s.charAt(p) !== ' ') {
        p--;
        length++;
    }
    return length;
}