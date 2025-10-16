
/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if ( s.length !== t.length ) return false;

    let mapS = new Map();
    let mapT = new Map();
    for ( let i = 0; i < s.length; i++ ) {
        let a = s[i];
        let b = t[i];

        mapS.set(a, (mapS.get(a) || 0) + 1);
        mapT.set(b, (mapT.get(b) || 0) + 1);
    }

    for ( let [key, val] of mapS.entries() ) {
        if ( mapT.get(key) !== val ) {
            return false;
        }
    }
    return true;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */