/*
Write a JavaScript function to convert an amount to coins.
Example: amountTocoins(46, [25, 10, 5, 2, 1]);
Here 46 is the amount, and 25, 10, 5, 2, 1 are coins.
Output: 25, 10, 10, 1

I: integer and array
O: Not sure if it wants an array or a string. I'll return an array
C: -
- What if amount is not a number?
- What if array is not an array?
- What if array has no length?
- What if numbers are negative?
*/

// Runtime O(N) despite having two variables. Space is O(N) for having a new array for result
function amountToCoins(nominal, coins = [25, 10, 5, 1]) {
    if (typeof nominal !== 'number' || nominal < 0 || !Array.isArray(coins) || !coins.length) return 'Invalid input.'
    const result = [];
    let i = nominal;
    let j = 0;
    while (i > 0) {
        if (!(coins[j] - 0)) return 'Invalid input: coin nominal must be a number!'
        if ((coins[j] - 0) < 0) return 'Invalid input: coin nominal must be a POSITIVE number!'
        // if coin is a number AND it is a positive number AND nominal - coin is greater/equal to zero
        if ((coins[j] - 0) && coins[j] > 0 && i - coins[j] >= 0) {
            // push the coin nominal into our result
            result.push(coins[j] - 0);
            i = i - coins[j];
        } else {
            j++;
        }
    }
    return result;
}

// TEST
console.log(amountToCoins('46', [25, 10, 5, 2, 1])); // 'Invalid input.'
console.log(amountToCoins(46, [])); // 'Invalid input.'
console.log(amountToCoins()); // 'Invalid input.'
console.log(amountToCoins(-84)); // 'Invalid input.'
console.log(amountToCoins(78, ['-25', '10', '5', '1'])); // Invalid input: coin nominal must be a POSITIVE number!
console.log(amountToCoins(78, ['-25', 'Hello', '5', '1'])); // Invalid input: coin nominal must be a POSITIVE number!
console.log(amountToCoins(78, ['Hello', '10', '5', '1'])); // Invalid input: coin nominal must be a number!
console.log(amountToCoins(91, [25, 10, 5, -1, 1])); // Invalid input: coin nominal must be a POSITIVE number!
console.log(amountToCoins(92, ['25', '10', '5', '1'])); // [25, 25, 25, 10, 5, 1, 1]
console.log(amountToCoins(100)); // [25, 25, 25, 25]
console.log(amountToCoins(87)); // [25, 25, 25, 10, 1, 1]
console.log(amountToCoins(93)); // [25, 25, 25, 10, 5, 1, 1, 1]
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // [25, 10, 10, 1]
