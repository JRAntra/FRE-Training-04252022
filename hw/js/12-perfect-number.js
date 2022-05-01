/*
Write a JavaScript function which says whether a number is perfect.
According to Wikipedia: In number theory, a perfect number is a positive integer that is
equal to the sume of its proper positive divisors, that is, the sume of its positive divisors
excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number
is a number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and
1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors
(1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by
the perfect numbers 496 and 8128.

I: an integer
O: a boolean
C: -
Q:
- What if the integer is not a number? I will return 'Invalid input.'
- Can it be a negative value? I presume it has to be positive value, and will return 'Invalid input' on negative number

- Runtime would be O(N) to check all the number between 1 and the integer whether those numbers are divisors of the
integer or not.
- I can store all the divisors found in an array for O(N) space, but prefer to just have the total number to check for O(1) space.
*/

function perfectNum(n) {
    if (n === 0) return false;
    if (typeof n !== 'number' || n < 1) return 'Invalid input.'
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

// TEST
console.log(perfectNum(6)); // true
console.log(perfectNum(28)); // true
console.log(perfectNum(496)); // true
console.log(perfectNum(8128)); // true
console.log(perfectNum(-8128)); // 'Invalid input.'
console.log(perfectNum(0)); // false
console.log(perfectNum([])); // 'Invalid input.'
console.log(perfectNum({})); // 'Invalid input.'
console.log(perfectNum()); // 'Invalid input'
console.log(perfectNum(undefined)); // 'Invalid input'
console.log(perfectNum(null)); // 'Invalid input'
console.log(perfectNum('8128')); // 'Invalid input'
