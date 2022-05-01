/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter
of each word of the string in upper case.
*/

// Runtime O(3N) => O(N), Space O(2N) => O(N).
function capsFirstChar(str) {
    if (typeof str !== 'string') return 'Invalid input';
    else if (str === '') return '';
    let strArr = str.split(' ');        // O(N) runtime and O(N) space where N is the amount of words
    for (let i = 0; i < strArr.length; i++) { // O(N) runtime where N is the amount of words.
        let word = strArr[i];
        strArr[i] = word[0].toUpperCase() + word.slice(1); // O(1) space for variable reassignment
    }
    return strArr.join(' ');    // O(N) runtime where N is the amount of words, O(N) space for creating a new sentence
}

// TEST
console.log(capsFirstChar([1,2,3])); // 'Invalid input.'
console.log(capsFirstChar({'a': true, 'b': 1})); // 'Invalid input.'
console.log(capsFirstChar()); // 'Invalid input.'
console.log(capsFirstChar(null)); // 'Invalid input.'
console.log(capsFirstChar(undefined)); // 'Invalid input'
console.log(capsFirstChar(123)); // 'Invalid input.'
console.log(capsFirstChar('the quick brown fox')); // 'The Quick Brown Fox
console.log(capsFirstChar('')); // ''
