
/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let backtrack = ( path, openP, closeP ) => {
        if ( openP + closeP === n * 2 ) {
            ans.push(path);
            return;
        }

        if ( openP < n ) {
            backtrack(path + "(", openP + 1, closeP );
        }
        if ( closeP < openP ) {
            backtrack(path + ")", openP, closeP + 1);
        }
    }
    let ans = [];
    backtrack("", 0, 0);
    return ans;
};