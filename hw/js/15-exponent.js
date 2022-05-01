/*
Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result.

I: base integer, power integer;
O: an integer result of exponentiation
C: -
Q:
- What if any number is not a number
- What if any number is a negative number
- Can I use built-in method?
*/

// Runtime is normally O(N) for exponentiation where N represents the n power.
// Space would be O(1);
function exponent(b, n) {
    if ((b < 0 && n < 1 && n > 0) || typeof b !== 'number' || typeof n !== 'number') return 'Invalid input.';
    return Math.pow(b, n);
}

// TEST
console.log(exponent(2, 3)); // 8
console.log(exponent(144, 1/2)); // 12
console.log(exponent(4, 0.5)); // 2
console.log(exponent(7, -2)); // 0.02040816326530612 == 1/49
console.log(exponent(-7, 0.5)); // 'Invalid input.' // Negative numbers don't have a real square root
console.log(exponent(-7, 2)); // 49
console.log(exponent(-7, 3)); // -343
console.log(exponent(8, -1/3)); // .5
console.log(exponent()); // 'Invalid input.'
console.log(exponent('2', '3')); // 'Invalid input.'
console.log(exponent('2', 3)); // 'Invalid input.'
console.log(exponent(2, '3')); // 'Invalid input.'
console.log(exponent(2)); // 'Invalid input.'
