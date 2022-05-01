/*
Write a JavaScript function which accepts an argument and returns the type. Note:
There are six possible values that typeof returns: object.boolean, function, number, string,
undefined.
*/

// Runtime: O(1); Space: O(1)
const checkType = (input) => {
    return Array.isArray(input) ?
    `array` :
    typeof input;
}

console.log(checkType([])); // 'array'
console.log(checkType({})); // 'object'
console.log(checkType()); // 'undefined'
console.log(checkType(undefined)); // 'undefined'
console.log(checkType(null)); // 'object'
console.log(checkType(NaN)); // 'number'
console.log(checkType('string')); // 'string'
console.log(checkType(123)); // 'number'
console.log(checkType(() => {})); // 'function'
console.log(checkType(1n)); // 'bigint'
