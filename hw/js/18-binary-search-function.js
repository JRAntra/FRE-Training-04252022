/*
Write a function for searching JavaScript arrays with a binary search.
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
*/

/*
I: sorted array of integer, and a target (presumably an integer). Although it's possible to have an array of strings sorted based on their ascii code but we'll take it out of equation.
O: an integer index position of the searched element in the array, or -1
C: -
Q:
- What if input is not an array?

Solution can be achieved recursively or iteratively. Recursion is more expensive than iteration as it
occupies call stack space, yet looks more elegant. Iteration is cheaper, yet takes more lines in writing.
Runtime for both operation is O(logN) as the interval got sliced in half in every iteration.
Space would be O(1) as we won't create anything in our function.
*/

/* Iterative function. Working. */
function binarySearch(arr, target) {
    if (!Array.isArray(arr) || typeof target !== 'number') return 'Invalid input.';
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(((start + end) / 2));
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

/* Recursive function. Working.
function binarySearch(arr, target) {
    if (!Array.isArray(arr) || typeof target !== 'number') return 'Invalid input.';

    if (!arr.length) return -1;
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearch(arr.slice(mid + 1), target);
    else return binarySearch(arr.slice(0, mid - 1), target);
}
*/


// TEST
console.log(binarySearch([1,2,3])); // 'Invalid input.'
console.log(binarySearch([1,2,3], '1')); // 'Invalid input.'
console.log(binarySearch([1,2,3], null)); // 'Invalid input.'
console.log(binarySearch([1,2,3], undefined)); // 'Invalid input.'
console.log(binarySearch([1,3,5,6,7,9], 3)); // 1
console.log(binarySearch([1,3,5,6,7,9,14, 15, 18, 19, 20], 9)); // 5
console.log(binarySearch([1,3,5,6,7,9,14, 15, 18, 19, 20], 8)); // -1
console.log(binarySearch([], 8)); // -1
console.log(binarySearch([1,2,3])); // 'Invalid input.'
