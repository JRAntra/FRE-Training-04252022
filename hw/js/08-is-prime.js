/*
Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. Note: A prime number (or a prime) is a natural number greater than 1 that
has no positive divisors other than 1 and itself.

I: an int
O: a boolean
C: -
Q:
- What if number is not a number? I'll return 'Invalid input.'
- What if number is negative? by definition they're not prime, so return false
- What if input is a string of number? I'll return 'Invalid input.'
*/

// Runtime: O(N) where N represents all the number between 2 and int
// Space: O(1). We don't create anything.
function isPrime(int) {
    if (typeof int !== 'number') return 'Invalid input.';
    else if(int < 2) return false;
    for (let n = 2; n < int; n++) {
        if (int % n === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(1)); // false
console.log(isPrime(0)); // false
console.log(isPrime(-1)); // false
console.log(isPrime()); // 'Invalid input.'
console.log(isPrime(undefined)); // 'Invalid input.'
console.log(isPrime(null)); // 'Invalid input.'
console.log(isPrime('7')); // 'Invalid input.'
console.log(isPrime({})); // 'Invalid input.'
console.log(isPrime({})); // 'Invalid input.'
