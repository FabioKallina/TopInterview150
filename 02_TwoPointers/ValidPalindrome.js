
/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric 
characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCase = s.toLowerCase();
    let alphaStr = lowerCase.replace(/[^a-zA-Z0-9]/g, "");

    let l = 0, r = alphaStr.length - 1;
    while ( l <= r ) {
        if ( alphaStr[l] !== alphaStr[r] ) return false;
        l++;
        r--;
    }
    return true;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */