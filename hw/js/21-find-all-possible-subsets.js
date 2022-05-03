/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array.
Sample array: [1, 2, 3] and subset length is 2
Expected output: [[2, 1], [3, 1], [3, 2]]

I: an array, and an integer
O: 2D array
C: -
Q:
*/
/*
function findSubsets(arr, len) {
    const result = [];

    function dfs(current, idx) {
        if (current.length === len) {
            result.push(current);
            return;
        }
        if (current.length > len) {
            return;
        }
        for (let i = idx; i <= arr.length; i++) {
            dfs(current.concat([arr[i]]), idx + 1);
        }
    }
    dfs([], arr[0]);
    return result;
} */

// using DFS NOT WORKING YET
function findSubsets(arr, len, idx = 0, current = [], result = []) {
    // if we're given an empty array / or array has been sliced to nothing recursively, return result
    if (!arr.length || len < 1) return result;
    // -else- if the current length reached the prescribed length,
    if (current.length === len) {
        // push it into our final result
        result.push([...current]);
        return;
    }
    // when our current length is more than the prescribed length, backtrack to parent (previous) 'node'
    if (current.length > len) return;
    // -else- if current length still less than prescribed length, recursively
    for (let i = idx; i < arr.length; i++) {
        // slice out the element out of previous array                      and merge it with current
        findSubsets(arr, len, idx + 1, [...current, arr[i]], result)
    }
    return result;
}

let ar = [1, 2, 3], size = 2;
console.log(findSubsets(ar, size));
ar = [1, 2, 3, 4, 5], size = 3;
console.log(findSubsets(ar, size));
size = 4;
console.log(findSubsets(ar, size));
