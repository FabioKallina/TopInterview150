
/**
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findFirst = () => {
        let l = 0, r = nums.length - 1;
        let idx = -1;

        while ( l <= r ) {
            let mid = l + Math.trunc((r - l) / 2);

            if ( nums[mid] >= target ) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }

            if ( nums[mid] === target ) {
                idx = mid;
            }
        }
        return idx;
    }

    const findLast = () => {
        let l = 0, r = nums.length - 1;
        let idx = -1;

        while ( l <= r ) {
            let mid = l + Math.trunc((r - l) / 2);

            if ( nums[mid] <= target ) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }

            if ( nums[mid] === target ) {
                idx = mid;
            }
        }
        return idx;
    }

    return [findFirst(), findLast()];
};
/** Time and Space Complexity
 * Time: O(logn)
 * Space: O(1)
 */