
/**
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, maxLen = 0;
    let seen = new Map();
    for ( let r = 0; r < s.length; r++ ) {
        if ( seen.has(s[r]) && seen.get(s[r]) >= l ) {
            l = seen.get(s[r]) + 1;
        }
        seen.set(s[r], r);
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, maxLen = 0;
    let seen = new Set();
    for ( let r = 0; r < s.length; r++ ) {
        while ( seen.has(s[r]) ) {
            seen.delete(s[l]);
            l++;
        }
        seen.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */