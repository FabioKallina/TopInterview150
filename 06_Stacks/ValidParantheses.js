
/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([])"
Output: true

Example 5:

Input: s = "([)]"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const matching = {
        "(": ")",
        "{": "}",
        "[": "[",
    }

    for ( const c of s ) {
        if ( c in matching ) {
            stack.push(c);
        } else {
            if ( !stack.length ) return false;

            let prev = stack.pop();
            if ( matching[prev] !== c ) return false;
        }
    }
    return !stack.length;
};
/** Time And Space Complexity
 * Time: O(n)
 * Space: O(n)
 */