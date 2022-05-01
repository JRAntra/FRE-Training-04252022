/*  Write a JavaScript function that checks whether a passed string is
palindrome or not? A palindrome is word, phrase, or sequence that reads
the same backward as forward, e.g., madam or nurses run. */

// runtime O(N), space O(1);
function palindrome(str) {
    if (typeof str !== 'string') return false;
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        let cA = str[i], cB = str[j];
        if (cA !== cB) return false;
    }
    return true;
}

// TEST
console.log(palindrome(['abc'])); // false
console.log(palindrome({a: 2})); // false
console.log(palindrome(123)); // false
console.log(palindrome('')); // true
console.log(palindrome('aba')); // true
console.log(palindrome('madam')); // true
console.log(palindrome('car')) // false
