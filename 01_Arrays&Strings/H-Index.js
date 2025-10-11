
/**
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, 
return the researcher's h-index.
According to the definition of h-index on Wikipedia: 
The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each 
been cited at least h times.

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,3,1]
Output: 1
*/
/** Sorting
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let n = citations.length, ans = 0;
    for ( let i = 0; i < n; i++ ) {
        let elementsLeft = n - i;
        if ( citations[i] >= elementsLeft ) {
            ans = Math.max(ans, elementsLeft);
        }
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(1)
 */

/** Sorting
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
    let bucket = new Array(n + 1).fill(0);
    for ( let c of citations ) {
        bucket[Math.min(c, n)]++;
    }

    let count = 0;
    for ( let i = n; i >= 0; i-- ) {
        count += bucket[i];
        if ( count >= i ) return i;
    }
    return 0;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */