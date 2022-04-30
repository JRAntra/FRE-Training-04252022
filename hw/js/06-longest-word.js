/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within
the string.
Example: 'Web Development Tutorial' => 'Development'

I: string of sentence;
O: string of longest word;
C:
Q:
- What if string is not a string?
- What if string is empty?
*/

// O(N) space because we're having a set that consists of words as value
// O(N) runtime because we iterate through all the characters in the sentence str.

function longestWord(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    else if (str === '') return str;
    let set = {}, count = 0, word = '', max = 0;
    for (let i = 0; i <= str.length; i++) {
        let char = str[i];
        // if there's a space OR we reached the end of sentence, AND counter is not 0
        if ((char === ' ' || i === str.length) && count > 0) {
            // we store the word count as key and the word as value in our set
            set[count] = word;
            // check if current word count is longer than the longest we've ever found
            max = max < count ? count : max;
            // reset counter
            count = 0;
            // reset the word
            word = '';
        }
        else {
            // keep adding the counter
            count += 1;
            // keep concatenating the word with the char
            word += char;
        }
    }
    return set[max];
}

console.log(longestWord('Web Development Tutorial')); // Development
console.log(longestWord('Web     Development Tutorial')); // Development
console.log(longestWord('')); // ''
console.log(longestWord()); // 'Invalid input.'
console.log(longestWord(undefined)); // 'Invalid input.'
console.log(longestWord(null)); // 'Invalid input.'
console.log(longestWord([1, 2, 'abaer'])); // 'Invalid input.'
console.log(longestWord({Web: 'Development', Tutorial: true})); // 'Invalid input.'
console.log(longestWord(12345)); // 'Invalid input.'
