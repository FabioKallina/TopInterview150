
/**
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. 
Specifically:
Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Explanation:
The bijection can be established as:
'a' maps to "dog".
'b' maps to "cat".

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sArray = s.split(" ");
    if ( pattern.length !== sArray.length ) return false;

    let mapP = new Map();
    let mapS = new Map();
    for ( let i = 0; i < pattern.length; i++ ) {
        let a = pattern[i];
        let b = sArray[i];

        if ( !mapP.has(a) && !mapS.has(b) ) {
            mapP.set(a, b);
            mapS.set(b, a);
        } else if ( mapP.get(a) !== b || mapS.get(b) !== a ) {
            return false;
        }
    }
    return true;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */