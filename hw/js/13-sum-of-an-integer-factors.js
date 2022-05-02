/*
Write a JavaScript function to compute the factors of a positive integer.

* "Factors of a positive integer n are all the positive integers that divide n with remainder equal to zero."

"For example, the divisors of 28 are 1,2,4,7,14 and 28. Of course 28 is also divisible by the negative of each of these,
but by 'divisors' we usually mean the positive divisors."
(Ref.: https://primes.utm.edu/glossary/page.php?sort=Divisor#:~:text=The%20divisors%20(or%20factors)%20of,usually%20mean%20the%20positive%20divisors.)

I: an integer
O: an integer (sum of all factors)
C: -

*/

// TEST for valid input
let control = [], inputN = 28, result = sumOfFactors(inputN), expected = sum(control);
console.log(result, result === expected, control); // 56, true
control = [], inputN = 6, result = sumOfFactors(inputN), expected = sum(control);
console.log(result, result === expected, control); // 12, true
control = [], inputN = 16, result = sumOfFactors(inputN), expected = sum(control);
console.log(result, result === expected, control); // 31, true
control = [], inputN = 0, result = sumOfFactors(inputN), expected = sum(control);
console.log(result, result === expected, control); // 0, true

function sumOfFactors(num) {
    if (typeof num !== 'number' || num < 0) return 'Invalid input.'
    let count = 0,
        i = 1;
    while (i <= num) {
        if (num % i === 0) {
            control.push(i)
            count += i;
        }
        i++;
    }
    return count;
}

// helper
function sum(arr) {
    if (!arr.length) return 0;
    return arr.reduce((sum, num) => {
        return sum + num;
    })
}

// TEST for invalid inputs
console.log(sumOfFactors()); // 'Invalid input.'
console.log(sumOfFactors('16')); // 'Invalid input.'
console.log(sumOfFactors(undefined)); // 'Invalid input.'
console.log(sumOfFactors(null)); // 'Invalid input.'
console.log(sumOfFactors([16])); // 'Invalid input.'
