/*
Write a JavaScript function to extract unique characters from a string
Example:
Input 'thequickbrownfoxjumpsoverthelazydog'
Output: 'thequickbrownfxjmpsvlazydg'

I: a string of sentence
O: a string of unique characters only
C: -
Q:
- What if the input is not a string? I'll return 'Invalid input.'
- What if input is an empty string? I'll return empty string
- Do result string has to be the same order with the input string except for the repeating characters? I presume yes.
- Is it CasESensiTive? Is 'A' the same as 'a' ? I presume it's case sensitive, so 'A' and 'a' are considered different chars.
- Is character only limited to alphanumeric characters? or it also includes other characters like empty string ' ' ?

To check for uniqueness we can use Set. By definition values in a set is not in order, although convention might
agree that an object's key value pair to be in order. So to ensure the order, beside having a set, we're going to have
another variable to contain the result, could be a string, or an array.
*/

function uniqueChars(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    let set = new Set();
    let resA = [];
    for (let i = 0; i < str.length; i++) {  // O(N)
        let c = str[i];
        if (!set.has(c)) {
            set.add(c); // O(1)
            resA.push(c);   // O(1);
        }
    }
    return resA.join('');   // O(N)
}

// TEST
console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog')); // 'thequickbrownfxjmpsvlazydg'
console.log(uniqueChars('thequickbrownfOxjumpsoverthelazydog')); // 'thequickbrownfOxjmpsvlazydg'
console.log(uniqueChars('')); // ''
console.log(uniqueChars('  ')); // ' '
console.log(uniqueChars('__')); // '_'
console.log(uniqueChars()); // 'Invalid input.'
console.log(uniqueChars(12345)); // 'Invalid input.'
console.log(uniqueChars(null)); // 'Invalid input.'
console.log(uniqueChars(undefined)); // 'Invalid input.'
console.log(uniqueChars({})); // 'Invalid input.'
console.log(uniqueChars(['thequickbrownfOxjumpsoverthelazydog'])); // 'Invalid input.'
