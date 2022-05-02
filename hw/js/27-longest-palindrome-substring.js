/*
Write a JavaScript function that returns the longest palindrome in a given string.
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.

I: a string
O: a string (substring of the input string with longest palindrome)
C: -
Q:
- What if the input is not a string? I'd return 'Invalid input.'
- What if the input string is empty? I'd return 'Invalid input.'
- Is it case sensitive? Is 'A' = 'a'? I'd treat it as the same, not case sensitive: 'A' = 'a'
- Do we have to return all substrings of the same length that is the longest amongst all?
    OR just return the first instance? OR just return the last instance? I'd return only the first instance.
- Is a single letter considered palindrome? I'd treat it as Yes, a letter is palindrome.

- Is an empty string considered palindrome? Merriam Webster: 'a word, verse, or sentence... ... or a number... ...that reads the same backward or forward
An empty string is NOT a word, verse, sentence, NOR number, thus it is not palindrome.

We cannot use the 02-palindrome.js as helper function because that function iterates with two pointers from the end and
the start of the string. In this case we want to iterate from the middle of the string (current index).

Not sure about the bigO. The worst case would be O(N^2) if most substring being checked on the inner loop
almost the same length with the original string. The space would take O(N) considering the worst case that the longest
substring is the same with the original string.
*/

const longestPalindromeSub = (str) => {
    if (typeof str !== 'string') return 'Invalid input.';
    else if (str === '') return 'Empty string is not a palindrome';
    let longestSub = str[0];
    let currentSub = '';
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        // longer palindrome starts when next char = current char OR next char = previous char
        if (str[i + 1] && str[i + 1].toLowerCase() === c.toLowerCase()) {
            currentSub = c + str[i + 1];
            let j = i - 1;
            let k = i + 2;
            while (str[j].toLowerCase() === str[k].toLowerCase()) {
                currentSub = str[j] + currentSub + str[k];
                j--;
                k++;
            }
            // if current substring is longer than longest substring, reassign longest substring into current substring
            longestSub = longestSub.length < currentSub.length ? currentSub : longestSub;
            // reset current substring for the next iteration
            currentSub = '';
        } else if ((str[i + 1] && str[i - 1]) && str[i + 1].toLowerCase() === str[i - 1].toLowerCase()) {
            currentSub = str[i - 1] + c + str[i + 1];
            let l = i - 2;
            let m = i + 2;
            while (str[l] && str[m] && str[l].toLowerCase() === str[m].toLowerCase()) {
                currentSub = str[l] + currentSub + str[m];
                l--;
                m++;
            }
            // if current substring is longer than longest substring, reassign longest substring into current substring
            longestSub = longestSub.length < currentSub.length ? currentSub : longestSub;
            // reset current substring for the next iteration
            currentSub = '';
        }
    }
    return longestSub;
}

// TEST
console.log(longestPalindromeSub('abracadabra')); // 'aca'
console.log(longestPalindromeSub('AbrACadabra')); // 'ACa'
console.log(longestPalindromeSub('StoopiAbbAdOgmaIamGod')); // 'dOgmaIamGod'

console.log(longestPalindromeSub('')); // 'Empty string is not a palindrome'
console.log(longestPalindromeSub(12321)); // 'Invalid input.' // Although it is palindrome, the instruction expects the input to be a string
console.log(longestPalindromeSub(null)); // 'Invalid input.' // Although 'll' in null is palindrome, the instruction expects the input to be a string
console.log(longestPalindromeSub()); // 'Invalid input.'
console.log(longestPalindromeSub([12321])); // 'Invalid input.'
console.log(longestPalindromeSub({})); // 'Invalid input.'
