/*
Write a JavaScript program to pass a 'JavaScript function' as parameter

I: a function
O: a function
C: -
Q:
- What if input is not a function? I'd return 'Invalid input.'
- What if input type is not 'function'? I'd return 'Invalid input.'

This is related to JS Closure topic.
Runtime and Space would be O(1);
*/

function fnPasser(fn) {
    if (typeof fn !== 'function') return 'Invalid input.'
    return fn;
}

// TEST

function greet() {
    return 'Hello';
}
console.log(fnPasser(greet)); // Function: greet
const x = fnPasser(greet);
console.log(x()); // 'Hello'

function say(word) {
    return `${word}!`
}
const y = fnPasser(say);
console.log(fnPasser(say)); // Function: say
console.log(y('Good Morning')); // 'Good Morning!

console.log(fnPasser(123)); // Invalid input
console.log(fnPasser()); // Invalid input
console.log(fnPasser([])); // Invalid input
console.log(fnPasser(null)); // Invalid input
console.log(fnPasser(undefined)); // Invalid input
