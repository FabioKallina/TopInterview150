
/**
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //check row
    for ( let r = 0; r < 9; r++ ) {
        let seen = new Set();
        for ( let c = 0; c < 9; c++ ) {
            if ( board[r][c] === "." ) continue;
            if ( seen.has(board[r][c]) ) return false;
            seen.add(board[r][c]);
        }
    }
    //check col
    for ( let c = 0; c < 9; c++ ) {
        let seen = new Set();
        for ( let r = 0; r < 9; r++ ) {
            if ( board[r][c] === "." ) continue;
            if ( seen.has(board[r][c]) ) return false;
            seen.add(board[r][c]);
        }
    }
    //check squares
    for ( let square = 0; square < 9; square++ ) {
        let seen = new Set();
        for ( let r = 0; r < 3; r++ ) {
            for ( let c = 0; c < 3; c++ ) {
                let row = Math.floor(square / 3) * 3 + r;
                let col = Math.floor(square % 3) * 3 + c;
                if ( board[row][col] === "." ) continue;
                if ( seen.has(board[row][col]) ) return false;
                seen.add(board[row][col]);
            }
        }
    }
    return true;
};
/** Time and Space Complexity
 * Time: O(n^2) technically its O(1) since a sudoku board is fixed in size but for the sake of algo its O(n^2)
 * Space: O(n) technically its O(1) since a sudoku board is fixed in size but for the sake of algo its O(n^2)
 */