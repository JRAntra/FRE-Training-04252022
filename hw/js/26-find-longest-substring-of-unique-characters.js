/*
Write a JavaScript function to find longest substring in a given string without repeating characters

I: a string
O: a string (substring only with unique characters)
C: -
Q:
- What if string input is not a string? I'd return 'Invalid input.'
- What if input is an empty string? I'd return empty string;
- Is it case sensitive? Is 'A' = 'a'? I'd treat it case sensitive: 'A' !== 'a'
*/

function longestSubstringOfUniqueC(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    let set = {};
    let substring = '';
    let max = {length: 0, strg: ''};

    for (let i = 0; i < str.length; i++) { // <= because we need to run one more loop to check the last substring we saw
        let char = str[i];
        // if set has this character, OR we reached the end of string, check it agains our max and store it if it fits requirement
        if (set[char]) {
            if (substring.length > max.length) {
                max.strg = substring;
                max.length = substring.length;
                substring = char;
                set = {};
                set[char] = true;
            }
        } else {
            set[char] = true;
            substring += char;
        }
    }
    return substring.length > max.length ? substring : max.strg;
}

// TEST
console.log(longestSubstringOfUniqueC('abcabcdabcde')); // 'abcde
console.log(longestSubstringOfUniqueC('abcabcdAbcde')); // 'abcdA // first instance found

console.log(40, longestSubstringOfUniqueC('The quick brown fox jump over'))


// console.log(longestSubstringOfUniqueC(123)); // 'Invalid input.'
// console.log(longestSubstringOfUniqueC('')); // ''


/*
function longestSubstringOfUniqueC(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    let set = new Set();
    let substring = '';
    let max = {length: 0, strg: ''};

    for (let i = 0; i < str.length; i++) { // <= because we need to run one more loop to check the last substring we saw
        let char = str[i];
        // if set has this character, OR we reached the end of string, check it agains our max and store it if it fits requirement
        if (set.has(char)) {
            if (substring.length > max.length) {
                max.strg = substring;
                max.length = substring.length;
                substring = char;
                set = new Set(char);
            }
        } else {
            set.add(char);
            substring += char;
        }
    }
    return substring.length > max.length ? substring : max.strg;
} */
