/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string.
Example: 'microsoft.com', 'o' => expected: 3

I: a string of word/sentence AND a string of character;
O: an integer counter of how many times the target character appeared in the word/sentence;
C: -
Q:
- What if any of them is not a string? What to return? I'd return 'Invalid input.'
- What if the word string is empty?
- What if the character string is empty?
- Is it CaseSeNsitive? 'A' is the same with 'a'? or not? I presume case sensitive. 'A' !== 'a'

Runtime would be O(N) because we have to iterate through all the elements in the word string;
Space would be O(1) because we only need one counter to track the appearance of target character in the string
*/

const countAChar = (wordStr, charStr) => {
    if (typeof wordStr !== 'string' || typeof charStr !== 'string') return 'Invalid input.';
    let counter = 0;
    for (let i = 0; i < wordStr.length; i++) {
        let c = wordStr[i];
        if (c === charStr) counter++;
    }
    return counter;
}

// TEST
console.log(countAChar(['microsoft'], 'o')); // 'Invalid input.'
console.log(countAChar('microsoft')); // 'Invalid input.'
console.log(countAChar()); // 'Invalid input.'
console.log(countAChar(undefined, 'e')); // 'Invalid input.'
console.log(countAChar(null, 'l')); // 'Invalid input.'
console.log(countAChar('12334', 3)); // 'Invalid input.'

console.log(countAChar('microsoft.com', 'o')); // 3
console.log(countAChar('microsoft.com', 'O')); // 0
