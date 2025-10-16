
/**
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:

Input: nums = [1,0,1,2]
Output: 3
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if ( nums.length === 0 ) return 0;

    let numSet = new Set(nums);
    let longest = 0;

    for ( let num of numSet ) {
        if ( !numSet.has(num - 1) ) {
            let curr = num;
            let count = 1;

            while ( numSet.has(curr + 1) ) {
                count++;
                curr++;
            }
            longest = Math.max(longest, count);
        }
    }
    return count;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */