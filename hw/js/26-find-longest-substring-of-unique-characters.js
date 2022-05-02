/*
Write a JavaScript function to find longest substring in a given string without repeating characters

I: a string
O: a string (substring only with unique characters)
C: -
Q:
- What if string input is not a string? I'd return 'Invalid input.'
- What if input is an empty string? I'd return empty string;
- Is it case sensitive? Is 'A' = 'a'? I'd treat it case sensitive: 'A' !== 'a'
- If there are two or more substrings with the same maximum length, do we return all? or the first instance? or the last instance?
    I'd return the first instance
*/

/* WORKS, with POJO as a set
function longestSubstringOfUniqueC(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    if (str === '') return str;
    let set = {};
    set[str[0]] = true;
    let longestSub = str[0];
    let currentSub = str[0];

    for (let i = 1; i < str.length; i++) { // <= because we need to run one more loop to check the last substring we saw
        let char = str[i];
        // if set has this character, OR we reached the end of string, check it agains our max and store it if it fits requirement
        if (set[char]) {
            set = {};
            set[char] = true;
            if (currentSub.length > longestSub.length) {
                longestSub = currentSub;
            }
            currentSub = char;
        } else { // if char is not a key in set
            set[char] = true;
            currentSub += char;
        }
    }
    return currentSub.length > longestSub.length ? currentSub : longestSub;
} */

// WORKS. With built in Set
function longestSubstringOfUniqueC(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    if (str === '') return str;
    let set = new Set(str[0]);
    let longestSub = str[0];
    let currentSub = str[0];

    for (let i = 1; i < str.length; i++) { // <= because we need to run one more loop to check the last substring we saw
        let char = str[i];
        // if set has this character, OR we reached the end of string, check it agains our max and store it if it fits requirement
        if (set.has(char)) {
            set = new Set(char);
            if (currentSub.length > longestSub.length) {
                longestSub = currentSub;
            }
            currentSub = char;
        } else {
            set.add(char);
            currentSub += char;
        }
    }
    return currentSub.length > longestSub.length ? currentSub : longestSub;
}


// TEST
console.log(longestSubstringOfUniqueC('abcabcdabcde')); // 'abcde
console.log(longestSubstringOfUniqueC('abcabcdAbcde')); // 'abcdA // first instance found, 'A' !== 'a'
console.log(longestSubstringOfUniqueC('The quick brown fox jump over')); // 'The quick'
console.log(longestSubstringOfUniqueC(123)); // 'Invalid input.'
console.log(longestSubstringOfUniqueC('')); // ''
console.log(longestSubstringOfUniqueC()); // 'Invalid input.'
console.log(longestSubstringOfUniqueC(null)); // 'Invalid input.'
console.log(longestSubstringOfUniqueC(undefined)); // 'Invalid input.'
console.log(longestSubstringOfUniqueC(['abracadabra'])); // 'Invalid input.'
