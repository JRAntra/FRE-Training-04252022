/*
Write a JavaScript function to get the function name

I: function
O: a string of the function name
C: -
Q:
- Do you want me to return the name of function passed into this function as an argument?
- OR do you want me to return this current function's name?
*/

function getFunctName(func) {
    if (typeof func !== 'function') return 'Invalid input.'
    return func.name;
}

function getThisFunctName() {
    return getThisFunctName.name;
}

let x = () => {};
function y() {}

// TEST
console.log(getFunctName(x)); // 'x'
console.log(getFunctName(y)); // 'y'
console.log(getFunctName('x')); // 'Invalid input.'
console.log(getFunctName()); // 'Invalid input.'

console.log(getThisFunctName()); // 'getThisFunctName
