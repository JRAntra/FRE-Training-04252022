/*
Write a JavaScript function to apply Bubble Sort algorithm.
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order".
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

I: unsorted array;
O: sorted array
C: -
Q:
- What to return if input is not an array? I'd return 'Invalid input.'
- What to return if all the number in the array are string of number, e.g. '1', '2' ? They could be sorted.
- What to return if any number in the array is not / cannot be converted into a number? I'd return 'Invalid input'

Runtime would be O(N^2), space would be O(N) since sorting is done in place
*/

const bubbleSort = (arr) => {
    if (!Array.isArray(arr)) return 'Invalid input.';
    // define variable to track whether a swap has happened or never happened
    let hasSwapped = true;
    // while swap previously happened
    while (hasSwapped) {
        // turn the variable to false, which means a swap never happened
        hasSwapped = false;
        // start iteration
        for (let i = 0; i < arr.length; i++) {
            // if current num is less than next num
            if (arr[i] - 0 == NaN || arr[i + 1] - 0 == NaN) return 'Invalid input.';
            if (arr[i] < arr[i + 1]) {
                // switch the order by array destructuring
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                // switch the variable to true, means a swap happened
                hasSwapped = true;
                // break out to while loop to restart for loop from the beginning again
                break;
            }
            // if iteration never enter the if statement, the hasSwapped will stay false
        }
        // after exiting the for loop with hasSwapped stay false, we'll exit the while loop too
    }
    // after exiting while loop, returning the result
    return arr;
}

let a = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
console.log(bubbleSort(a));
/* [
  3223, 546, 455, 345, 234,
   213, 122,  98,  84,  64,
    23,  12,   9,   4,   1
]*/

console.log(bubbleSort(['1', '3', '2']))
console.log(bubbleSort([])); // []
console.log(bubbleSort('1, 2, 3, 4')); // 'Invalid input.'
console.log(bubbleSort()); // 'Invalid input.'
console.log(bubbleSort(1234)); // 'Invalid input.'
console.log(bubbleSort(null)); // 'Invalid input.'
console.log(bubbleSort(undefined)); // 'Invalid input.'
