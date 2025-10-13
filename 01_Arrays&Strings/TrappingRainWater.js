/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    let l = 0, r = height.length - 1;
    let leftMax = rightMax = 0;
    while ( l <= r ) {
        leftMax = Math.max(leftMax, height[l]);
        rightMax = Math.max(rightMax, height[r]);
        if ( height[l] <= height[r] ) {
            if ( leftMax > height[l] ) {
                water += leftMax - height[l];
            }
            l++;
        } else {
            if ( rightMax > height[r] ) {
                water += rightMax - height[r];
            }
            r--;
        }
    }
    return water;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */