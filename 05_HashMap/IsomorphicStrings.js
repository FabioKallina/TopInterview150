
/**
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:

Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if ( s.length !== t.length ) return false;

    let mapS = new Map();
    let mapT = new Map();
    for ( let i = 0; i < s.length; i++ ) {
        let a  = s[i];
        let b = t[i];

        if ( !mapS.has(a) && !mapT.has(b) ) {
            mapS.set(a, b);
            mapT.set(b, a);
        } else if ( mapS.get(a) !== b || mapT.get(b) !== a ) {
            return false;
        }
    }
    return true;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */