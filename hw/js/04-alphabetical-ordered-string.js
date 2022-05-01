/*
Write a JavaScript function that returns a passed string with letters in alphabetical order
Example: 'webmaster' => 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

// is it case sensitive? Presumed not CaSeSensitive

function sortChar(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        let c = str[i].toLowerCase();
        let key = c.charCodeAt(0);
        if (hash[key]) hash[key] += str[i];
        else hash[key] = str[i];
    }
    let res = '';
    for (let key in hash) {
        res = res + hash[key];
    }
    return res;
}

// TEST
console.log(sortChar([1,2,3])); // 'Invalid input.'
console.log(sortChar({'a': true, 'b': 1})); // 'Invalid input.'
console.log(sortChar()); // 'Invalid input.'
console.log(sortChar(null)); // 'Invalid input.'
console.log(sortChar(undefined)); // 'Invalid input'
console.log(sortChar(123)); // 'Invalid input.'
console.log(sortChar('webmaster')) // 'abeemrstw'
console.log(sortChar('WebMaster')) // 'abeeMrstW'
console.log(sortChar('')); // ''
