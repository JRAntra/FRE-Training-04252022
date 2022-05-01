/*
Write a JavaScript function that returns array elements larger than a number.

I: array, and target number
O: array of numbers larger than target
C: -
Q:
- What if array is not an array? I'd return 'Invalid input.'
- What if target number is not a number? I'd return 'Invalid input.'
- What if any element in the array is not a number? I'll ignore
- What if array has no length? I'll return empty array []

Runtime would be O(N) as we have to iterate through all the numbers in the array and check against target
Space would take O(N) where N represents all numbers larger than target.
*/

function findLargerNums(arr, targetNum) {
    if (!Array.isArray(arr) || typeof targetNum !== 'number') return 'Invalid input.';
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (n > targetNum) result.push(n);
    }
    return result;
}

console.log(findLargerNums([1,2,3,4,5,6,7])); // 'Invalid input.'
console.log(findLargerNums([1,2,3,4,5,6,7], 'Hello')); // 'Invalid input.'
console.log(findLargerNums(1, 4)); // 'Invalid input.'
console.log(findLargerNums('1,2,3,4,5,6,7', 4)); // 'Invalid input.'

console.log(findLargerNums([], 4)); // []
console.log(findLargerNums([1,2,3,4,5,6,7], 3)); // [4,5,6,7]
