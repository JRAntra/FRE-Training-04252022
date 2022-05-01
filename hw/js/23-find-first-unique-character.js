/*
Write a JavaScript function to find the first not repeated character.
Example: 'abacddbec' => 'e';

I: a string of word/sentence;
O: a string of the first unique character in the word/sentence;
C: -
Q:
- What if the input is not a string? I'd return 'Invalid input.'
- What if the input is an empty string? I'd return 'Invalid input.'
- Is it case sensitive? Is 'A' = 'a' ? I'd treat it case sensitive: 'A' != 'a'.

Runtime would be O(2N) as we have to iterate through all the characters in the string and inventorize
all characters with duplicate and not, then to another iteration through the string and check against our inventory note
Space would be O(N) as I'd have a hash object to track which character is unique and which are not.
This approach is better than having a nested loop, which runtime is O(N^2) with O(1) space.
*/

const firstUniqueChar = (str) => {
    if (typeof str !== 'string' || str === '') return 'Invalid input.'
    const hash = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (hash[char]) hash[char] += 1;
        else hash[char] = 1;
    }
    for (let j = 0; j < str.length; j++) {
        let chr = str[j];
        if (hash[chr] === 1) return chr;
    }
}

// TEST
console.log(firstUniqueChar('abacddbec')); // 'e'
console.log(firstUniqueChar('abcde')); // 'e'

console.log(firstUniqueChar('')); // 'Invalid input.'
console.log(firstUniqueChar(1123)); // 'Invalid input.'
console.log(firstUniqueChar(null)); // 'Invalid input.'
console.log(firstUniqueChar(undefined)); // 'Invalid input.'
console.log(firstUniqueChar()); // 'Invalid input.'
