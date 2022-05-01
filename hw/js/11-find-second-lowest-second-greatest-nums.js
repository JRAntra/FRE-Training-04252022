/*
Write a JavaScript function which will take an array of numbers
stored and find the second lowest and second createst numbers, respectively.
Example: [1,2,3,4,5] =>
Expected output: 2,4

I: array
O: a string of 2 numbers OR array of 2 elements: [second lowest, second greatest] ??
C: -
Q:
- What if array is not an array?
- What if any element in array is not a number?
- What if array is empty?
- Is it an array of only positive numbers? Presume include negatives
- Can I use built-in method? I'd use sort method to sort ascending, and then iterate with two pointers to find the next min/max
- What if the array only contains 2 nums that'll be the min and max value? I'll return empty string / blank array
*/

// Runtime with sorting: O(N log N), so in total it's O(N log N); Space: O(N) since .sort creates a new array
const findSecondMinMax = (arr) => {
    if (!Array.isArray(arr)) return 'Invalid input.';
    let res = [];
    if (arr.length <= 2) return '';
    let sortA = arr.sort((a, b) => a - b);
    for (let i = 0, j = sortA.length - 1; i < sortA.length; i++, j--) {
        while (sortA[i] === sortA[i + 1]) i++;
        while (sortA[j] === sortA[j - 1]) j--;
        i++;
        j--;
        res = [sortA[i], sortA[j]];
        break;
    }
    // I presume the expected output is a string instead of an array based on the instruction.
    // thus the array merged into a string, else I could serve just the array result directly.
    return res.join(', ');
}

// TEST
console.log(findSecondMinMax([1,3,4,2,5])); // '2, 4'
console.log(findSecondMinMax([1,1,3,5,5,6,4,7,3,4,2,5,5])); // '2, 6'
console.log(findSecondMinMax([1,-5,-4,-10,3,4,2,5])); // '-5, 4'
console.log(findSecondMinMax([-100])); // ''
console.log(findSecondMinMax([-100, 100])); // ''
console.log(findSecondMinMax([-85, 1, 75])); // '1, 1'
console.log(findSecondMinMax([])); // ''
console.log(findSecondMinMax({})); // 'Invalid input.'
console.log(findSecondMinMax('1, 2, 4, 3, 5')); // 'Invalid input.'
console.log(findSecondMinMax(321567)); // 'Invalid input.'
console.log(findSecondMinMax()); // 'Invalid input.'
console.log(findSecondMinMax(undefined)); // 'Invalid input.'
console.log(findSecondMinMax(null)); // 'Invalid input.'
