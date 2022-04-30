/*
Write a JavaScript function that accepts a string as a parameter and counts the number
of vowels within the string.
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count
'y' as vowel here.
Example: 'The quick brown fox' => 5

I: str of sentence
O: int, total of vowels
C:
Q:
- What if typeof str is not a string? I'll return 'Invalid input.'.
- Is it case sensitive? I presume no. 'A' is the same with 'a'.
*/

// O(N) runtime where N represents the amount of characters in the string
// O(1) space for the counter ?

function countVowel(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        switch(char) {
            case 'a': count += 1;
            break;
            case 'i': count += 1;
            break;
            case 'u': count += 1;
            break;
            case 'e': count += 1;
            break;
            case 'o': count += 1;
            break;
        }
    }
    return count;
}

console.log(countVowel('The quick brown fox')); // 5
console.log(countVowel('')); // 0
console.log(countVowel('Over And Over Again')); // 8
console.log(countVowel()); // 'Invalid input.
console.log(countVowel(undefined)); // 'Invalid input.
console.log(countVowel(null)); // 'Invalid input.
console.log(countVowel(1234)); // 'Invalid input.
console.log(countVowel(['a', 'i', 'u'])); // 'Invalid input.
console.log(countVowel({'a': 1, 'e': 1, 'o': 1})); // 'Invalid input.
