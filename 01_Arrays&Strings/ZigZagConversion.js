
/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if ( numRows === 1 || numRows >= s.length ) return s;

    let idx = 0, d = 1;
    const rows = new Array(numRows).fill().map(() => []);

    for ( const c of s ) {
        rows[idx].push(c);
        if ( idx === 0 ) {
            d = 1;
        } else if ( idx === numRows - 1 ) {
            d = -1
        }
        idx += d;
    }
    for ( let i = 0; i < numRows; i++ ) {
        rows[i] = rows[i].join("");
    }
    return rows.join("");
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if ( numRows === 1 || numRows >= s.length ) return s;

    let rows = new Array(numRows).fill("");
    let currRow = 0;
    let goingDown = false;
    for ( let c of s ) {
        rows[currRow] += c;

        if ( currRow === 0 || currRow === numRows - 1 ) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }
    return rows.join("");
};