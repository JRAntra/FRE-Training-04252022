/*1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output: 34223 */

// console.log(+(32243 + "").split("").reverse().join(""));

/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run. */

/*
function palindrome(str) {

    if (str.length === 0) {
        return true;
    }

    if (str.length % 2 === 1) {
        let a = Math.floor(str.length / 2);

        let i = a - 1;
        let j = a + 1;

        while (i >= 0 && j <= str.length - 1) {
            if (str[i] !== str[j]) {
                return false;
            }
            i--;
            j++;
        }
    }
    else {
        
        let a = Math.floor(str.length / 2) -1;
        let i = a;
        let j = a + 1;

        while (i >= 0 && j <= str.length - 1) {
            if (str[i] !== str[j]) {
                return false;
            }
            i--;
            j++;
        }
    }

    
    return true;
}

console.log(palindrome("ab")); */

/*
3. Write a JavaScript function that generates all combinations of a string.
Example string: 'dog'
Expected Output: d, do, dog, o, og, g*/

/*
function foo(str) {
    const arr = [];
    if (str.length === 0) {
        return arr;
    }

    for (let i = 1; i <= str.length; i++) { 
        for (j = 0; j <= (str.length - i); j++) {
            arr.push(str.substr(j, i));
        }
    }

    return arr;
}

console.log(foo("abcv")); */

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

// console.log(('webmaster').split("").sort().join(""));

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox ' */

/*
function foo(str) {
    if (str.length === 0) {
        return str;
    }

    str = str.split("");
    str[0] = (str[0]).toUpperCase();


    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            str[i] = (str[i]).toUpperCase();
        }
    }

    str = str.join("");

    return str;
}

console.log(foo("aa baaa sss www aaaaaaa www")); */

/* 
6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string.
Example string: 'Web Development Tutorial'
Expected Output: 'Development' */

/*
function foo(str) {
    if (str.length === 0) {
        return "";
    }

    str = str.split(" ");
    let max = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[max].length <= str[i].length) {
            max = i;
        }
    }

    return str[max];
}

console.log(foo("aaaa aa cccccccccc bb aa")); */

/* 
7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string.
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here.
Example string: 'The quick brown fox'
Expected Output: 5
*/

/*
function foo(str) {
    let arr = str.match(/o/ig);
    arr = arr.concat(str.match(/a/ig));
    arr = arr.concat(str.match(/i/ig));
    arr = arr.concat(str.match(/e/ig));
    arr = arr.concat(str.match(/u/ig));

    let i = 0;
    while (i < arr.length) {
        if (arr[i] === null) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr.length;
}

console.log(foo('The quick brown fox')); */

/* 
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/

/*
function foo(num) {
    
    if (Math.ceil(num % 1) === 1) {
        return false;
    }
    
    if (num <= 1) {
        return false;
    }
    
    if (num === 2) {
        return true;
    }

    let i = 2;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let result = foo(112) ? "Prime" : "Not Prime";

console.log(result); */

/*
9. Write a JavaScript function which accepts an argument and returns the type.
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined. */

/*
function foo(argument) {
    return typeof argument;
}

console.log(foo(11));
console.log(foo([1, 2, 3]));
console.log(foo(true));
console.log(foo(function () { }));
console.log(foo("111"));
console.log(foo(undefined));
console.log(foo(null)); */

/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function foo(arr, x, y) {
    if (x < 0 || x >= arr[0].length || y < 0 || y >= arr.length) {
        return null;
    }
    else {
        return arr[y][x];
    }
}

console.log(foo([[1, 2, 3], [4, 5, 6]], 0, 0));
console.log(foo([[1, 2, 3], [4, 5, 6]], -1, 0));
console.log(foo([[1, 2, 3], [4, 5, 6]], 3, 0));
console.log(foo([[1, 2, 3], [4, 5, 6]], 0, 2));
console.log(foo([[1, 2, 3], [4, 5, 6]], 2, 1)); */

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively.
Sample array: [1, 2, 3, 4, 5]
Expected Output: 2, 4 */

/*
function foo(arr) {
    if (arr.length <= 1) {
        return [];
    }
    else {
        arr.sort();
        return [arr[1], arr[arr.length - 2]];
    }
}

console.log(foo([1,2,5,3,4,5])); */

/*
 * 12. Write a JavaScript function which says whether a number is perfect.
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128. */

/*
function foo(num) {
    if (num <= 1) {
        return;
    }

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum / num === 2 || sum === num) {
        console.log(num + " is perfect");
    }
}

for (let i = 1; i <= 100; i++) {
    foo(i);
} */

// 13. Write a JavaScript function to compute the factors of a positive integer.

/*
function foo(num) {
    if (num <= 0) {
        return [];
    }
    else {
        const arr = [];

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                arr.push(i);
            }
        }

        return arr;
    }
}
console.log(foo(100)); */

/* 14. Write a JavaScript function to convert an amount to coins.
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output: 25, 10, 10, 1 */


/*
function foo(num) {
    if (num <= 0) {
        return [];
    }
    if (Math.ceil(num % 1) === 1) {
        return [];
    }

    let arr = [];

    while (num !== 0) {
        if (num - 25 >= 0) {
            arr.push(25);
            num -= 25;
            continue;
        }

        if (num - 10 >= 0) {
            arr.push(10);
            num -= 10;
            continue;
        }

        if (num - 5 >= 0) {
            arr.push(5);
            num -= 5;
            continue;
        }

        if (num - 2 >= 0) {
            arr.push(2);
            num -= 2;
            continue;
        }

        if (num - 1 >= 0) {
            arr.push(1);
            num -= 1;
            continue;
        }
    }

    return arr;
}

console.log(foo(100)); */

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases.Accept b and n from the user and display the result. */

/*
function foo(b, n) {
    return b ** n;
}

console.log(foo(0, 1));
console.log(foo(3, 0));
console.log(foo(3, -3));
console.log(foo(-3, 3));
console.log(foo(-3, -3));  */

/*
16. Write a JavaScript function to extract unique characters from a string.
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/

// let str = "thequickbrownfoxjumpsoverthelazydog";
// console.log([...new Set([...str])].join(""));


/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
// a = 97
function foo(str) {
    const arr = [];
    for (let i = 0; i < 26; i++) {
        arr.push(0);
    }

    const arr1 = str.split("");
    for (let i = 0; i < arr1.length; i++) {
        arr[str.charCodeAt(i) - 97] += 1;
    }


    const obj = {};
    for (let i = 97; i < 97 + 26; i++) {
        obj[String.fromCharCode(i)] = arr[i - 97];
    }
    return obj;
}
console.log(foo("abbbbbbbbbasasc"));*/


/*
18. Write a function for searching JavaScript arrays with a binary search.
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.


function foo(arr, target) {
    if (arr.length === 0) {
        return -1;
    }
    else if (arr.length === 1) {
        if (arr[0] === target) {
            return 0;
        }
        return -1;
    }
    else if (arr.length === 2) {
        if (arr[0] === target) {
            return 0;
        }
        if (arr[1] === target) {
            return 1;
        }
        return -1;
    }
    else {
        let i = 0;
        let k = arr.length - 1;
        let j = Math.floor(arr.length / 2);

        if (arr[j] === target) {
            return j;
        }
        else if (arr[j] < target) {
            return fooo(arr, target, j + 1, k);
        }
        else {
            return fooo(arr, target, i, j - 1);
        }
    }
}

function fooo(arr, target, start, end) {
    if (start === end) {
        if (arr[start] === target) return start;
        return -1;
    }
    else if (start + 1 === end) {
        if (arr[start] === target) return start;
        if (arr[end] === target) return end;
        return -1;
    }
    else {
        let i = start;
        let k = end;
        let j = Math.floor((start + end) / 2);

        if (arr[j] === target) {
            return j;
        }
        else if (arr[j] < target) {
            return fooo(arr, target, j + 1, k);
        }
        else {
            return fooo(arr, target, i, j - 1);
        }
    }
}

const arr = [1, 3, 5, 11, 333, 444, 1231, 3233,22222]; 

console.log(foo(arr,5));
*/

// 19. Write a JavaScript function that returns array elements larger than a number.
/*
const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(arr.filter(function(cur, i, array){return cur >= target})); */


/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"


function foo(leng) {
    let text = [];
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < leng; i++) {
        let num = Math.floor(Math.random() * 52);
        text.push(str[num]);
    }

    return text.join("");
}

console.log(foo(17)); */


/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array.
Sample array: [1, 2, 3] and subset length is 2
Expected output: [[2, 1], [3, 1], [3, 2]]
*/

/*
function foo(arr, leng) {
    if (leng <= 0) return [];
    if (leng > arr.length) return [];

    const arr1 = [];
    for (let i = 0; i <= arr.length - leng; i++) {
        let j = i;
        const arr2 = [];
        for (let k = 0; k < arr.length; k++) {
            arr2.push(arr[j]);
            j++;
        }
        arr1.push(arr2);
    }

    return arr1;
}

console.log(foo([1, 2, 3, 4, 5], 2)); */


/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string.
Sample arguments: 'microsoft.com', 'o' Expected output: 3
*/

/*
23. Write a JavaScript function to find the first not repeated character.
Sample arguments: 'abacddbec'
Expected output: 'e'
24. Write a JavaScript function to apply Bubble Sort algorithm.
    Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output.
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. 
27. Write a JavaScript function that returns the longest palindrome in a given string.
    Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum - length contiguous substring of a
given string that is also a palindrome.For example, the longest palindromic substring of
"bananas" is "anana".The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings(that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
29. Write a JavaScript function to get the function name.
_________________________________________________________________________________________ */
































