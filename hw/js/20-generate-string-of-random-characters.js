/*
Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

I: an integer (length of the return string), and a string (list of permitted characters);
O: a string of random characters with length as specified in input, contains permitted characters;
C: -
Q:
- What if input length is not a number? I'd return 'Invalid input.'
- What if input characters list is not a string? I'd return 'Invalid input.'
- What if permitted characters is only an empty string? I'd return 'Invalid input.'
- What if input length is a floating, not integer? I'd round it down;
*/

function generateID(idLength, stringOfPermittedChars) {
    if (typeof idLength !== 'number' || typeof stringOfPermittedChars !== 'string' || stringOfPermittedChars === '') return 'Invalid input.';
    let result = '';
    let minIdx = 0;
    let maxIdx = Math.floor(stringOfPermittedChars.length);
    for (let i = 0; i < Math.floor(idLength); i++) {
        let randomIdx = Math.floor(Math.random() * (maxIdx - minIdx) + minIdx); // exclusive of maxIdx
        result += stringOfPermittedChars[randomIdx];
    }
    return result;
}


// TEST
console.log(generateID()); // 'Invalid input.'
console.log(generateID(10, '')); // 'Invalid input.'
console.log(generateID('10', 'abc')); // 'Invalid input.'
console.log(generateID('10', null)); // 'Invalid input.'
console.log(generateID(10, '10')); // 'Invalid input.'


// Test helper
function check(resStr, permittedStr, reqLength) {
    if (resStr.length !== reqLength) return false;
    for (let i = 0; i < resStr.length; i++) {
        let char = resStr[i];
        if (permittedStr.indexOf(char) === -1) return false;
    }
    return true;
}

let permittedStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let reqLength = 8
let resultStr1 = generateID(reqLength, permittedStr);
console.log({result: resultStr1, passed: check(resultStr1, permittedStr, reqLength)})

reqLength = 15;
let resultStr2 = generateID(reqLength, permittedStr);
console.log({result: resultStr2, passed: check(resultStr2, permittedStr, reqLength)})

reqLength = 10;
permittedStr = '10';
let resultStr3 = generateID(reqLength, permittedStr);
console.log({result: resultStr3, passed: check(resultStr3, permittedStr, reqLength)})
