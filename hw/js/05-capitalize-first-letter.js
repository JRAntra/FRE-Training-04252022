/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter
of each word of the string in upper case.
*/

function capsFirstChar(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        strArr[i] = word[0].toUpperCase() + word.slice(1);
    }
    return strArr.join(' ');
}

console.log(capsFirstChar())
