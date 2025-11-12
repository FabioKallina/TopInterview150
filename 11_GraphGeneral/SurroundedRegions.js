
/**
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:
Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' 
cells and none of the region cells are on the edge of the board.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.


Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:
In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]
Output: [["X"]]
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const ROWS = board.length, COLS = board[0].length;

    let dfs = ( r, c ) => {
        if (
            r < 0 || c < 0 ||
            r >= ROWS || c >= COLS ||
            grid[r][c] !== "O"
        ) return;

        board[r][c] = "T";
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for ( let r = 0; r < ROWS; r++ ) {
        if ( board[r][0] === "O" ) dfs(r, 0);
        if ( board[r][COLS - 1] === "O" ) dfs(r, COLS - 1);
    }
    for ( let c = 0; c < COLS; c++ ) {
        if ( board[0][c] === "O" ) dfs(0, c);
        if ( board[ROWS - 1][c] === "O" ) dfs(ROWS - 1, c);
    }

    for ( let r = 0; r < ROWS; r++ ) {
        for ( let c = 0; c < COLS; c++ ) {
            if ( board[r][c] === "O" ) {
                board[r][c] = "X"
            } else if ( board[r][c] === "T" ) {
                board[r][c] = "O";
            }
        }
    }
};
/** Time and Space Complexity
 * Time: O(n * m)
 * Space: O(n * m)
 */