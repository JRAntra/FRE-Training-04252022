/* Write a JavaScript function that generates all combinations of a string
Example: 'dog' => 'd', 'do', 'o', 'og', 'g'
*/

// using substring method. Runtime would be O(N^2), space would be O(N) where N is the amount of all subsets
function combinations(str, maxLen = str.length) {
    let set = new Set();
    for (let i = 0; i < maxLen; i++) {
        for (let j = i + 1; j <= maxLen; j++) {
            set.add(str.substring(i, j));
        }
    }
    return [...set];
}

console.log(combinations(''));
console.log(combinations('d'));
console.log(combinations('do'));
console.log(combinations('dog'));
console.log(combinations('dogs', 4));


/* DOES NOT WORK
function combinations(str) {
    if (typeof str !== 'string') return 'Invalid input.';
    const set = new Set();
    let i = 0;
    let substr = '';
    let s = str;
    let char;
    while (substr.length < s.length) {

        // iterate through all the characters in the str
        while (i < s.length) {
            char = s[i];
            // add substring + char to collection
            set.add(substr + char);
            // increment
            i++;
        }
        // reduce our string length, because we already added all possibilities with that first char
        s = s.slice(substr.length);
        // when exiting the inner loop, we add a (first char in string) character into our substring
        substr += s[0];
        console.log(24, substr)
//        console.log(27, s)
        // reset the i
        i = 0;
    }
    console.log([...set])
    return [...set];
} */
