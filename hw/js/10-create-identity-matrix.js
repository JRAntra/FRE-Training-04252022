/*
Write a JavaScript function which returns the n rows by n columns identity matrix.

Assumption:
1. Identity matrix is always a Square Matrix;
2. All elements in the matrix are zeroes, except the one in the middle of N column is filled with 1.
3. So, e.g.
    matrix n = 1 => [ 1 ];      // i = 0
    matrix n = 2 => [ 1 0       // i = 0, 3     interval: 3 - 0 = 3 <=> n + 1
                      0 1 ];
    matrix n = 3 => [ 1 0 0     // i = 0, 4, 8  interval = 8 - 4 - 0 = 4 <=> n + 1
                      0 1 0
                      0 0 1 ];
    matrix n = 4 => [ 1, 0, 0, 0, // i = 0, 5, 10, 15   interval = 15 - 10 - 5 - 0  = 5 <=> n + 1
                      0, 1, 0, 0,
                      0, 0, 1, 0,
                      0, 0, 0, 1 ];
    matrix n = 5 => [ 1, 0, 0, 0, 0, // i = 0, 6, 12, 18, 24    interval = 6 <=> n + 1;
                      0, 1, 0, 0, 0,
                      0, 0, 1, 0, 0,
                      0, 0, 0, 1, 0,
                      0, 0, 0, 0, 1 ]

I: integer (length of row = column);
O: a 1D array;
C: -
Q:
- What if input is not a number? I'd return 'Invalid input.'
- What if input is a negative number? I'd return 'Invalid input.'

From above example
*/


const createIDMatrix = (num) => {
    if (typeof num !== 'number' || num < 0) return 'Invalid input.';
    let result = [],
        max = num * num,
        i = 0,
        interval = 0;
    while (i < max) {
        if (i === interval) {
            result.push(1);
            interval = interval + (num + 1);
        }
        else result.push(0);
        i++;
    }
    return result;
}

console.log(createIDMatrix('1')); // 'Invalid input.'
console.log(createIDMatrix()); // 'Invalid input.'
console.log(createIDMatrix(null)); // 'Invalid input.'
console.log(createIDMatrix(undefined)); // 'Invalid input.'
console.log(createIDMatrix([2])); // 'Invalid input.'


console.log(createIDMatrix(0)); // []
console.log(createIDMatrix(1)); // [1]
console.log(createIDMatrix(2)); // [1, 0, 0, 1]
console.log(createIDMatrix(3));
/* [
    1, 0, 0, 0, 1,
    0, 0, 0, 1
] */

console.log(createIDMatrix(4));
/* [
    1, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 1, 0,
    0, 0, 0, 1
] */

console.log(createIDMatrix(5));
/* [
    1, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0,
    1
  ] */
