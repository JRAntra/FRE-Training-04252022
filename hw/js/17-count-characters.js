/*
Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/

/*
No example given. Presumably:
I: a string
O: not defined, I'd return an object with character as the key and counter as value
Ex: 'abca' => {'a': 2, 'b': 1, 'c': 1};
C: -
Q:
- Can I use built-in method? I can use .reduce method after splitting the string into an array, but it won't be an
optimized solution. I'd rather iterate directly from the string and do the counting;
- Is it CaSeSensItive? Is 'A' the same as 'a'? I'd assume it's not case sensitive, and treat 'A' = 'a';
- Are we just counting letter? What about empty string? I presume we just count letters
- What if input is not a string? I'd return 'Invalid input.'
- What if input is an empty string? I'd return empty object {}
*/

// Runtime O(N) as we have to iterate through all the characters in the string.
// Space is O(N) where N represents all the unique letters we have found and kept in our res object.
const charCounter = (str) => {
    if (typeof str !== 'string') return 'Invalid input.';
    const res = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if character have ASCII code between 97 - 122, it is a lowercased letter
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            // if we have seen this letter before, add the counter in our object
            if (res[char]) res[char] += 1;
            // else we create that letter as a key in our object with a counter value of 1
            else res[char] = 1;
        }
    }
    return res;
}

console.log(charCounter()); // 'Invalid input.'
console.log(charCounter(123)); // 'Invalid input.'
console.log(charCounter(['abca'])); // 'Invalid input.'
console.log(charCounter({'a': 'bca'})); // 'Invalid input.'
console.log(charCounter(null)); // 'Invalid input.'
console.log(charCounter(undefined)); // 'Invalid input.'
console.log(charCounter('_=?><,.*&^%$#@!~+-')); // {}
console.log(charCounter('')); // {}

console.log(charCounter('The quick brown fox jumps over the lazy dog')); /* {
    t: 2,
    h: 2,
    e: 3,
    q: 1,
    u: 2,
    i: 1,
    c: 1,
    k: 1,
    b: 1,
    r: 2,
    o: 4,
    w: 1,
    n: 1,
    f: 1,
    x: 1,
    j: 1,
    m: 1,
    p: 1,
    s: 1,
    v: 1,
    l: 1,
    a: 1,
    z: 1,
    y: 1,
    d: 1,
    g: 1
  } */
