//JavaScript Assignment ONe

//1. reverse a number.

function revInt(num) {
  // Use toString() to convert it into a String

  // Use the split() method to return a new array: -123 => ['-', '1','2','3']

  // Use the reverse() method to reverse the new created array: ['-', '1','2','3'] => ['3','2','1','-'];

  // Use the join() method to join all elements of the array into a string

  let val = num.toString().split("").reverse().join("");

  // If the entered number was negative, then that '-' would be the last character in

  //  our newly created String, but we don't want that, instead what we want is

  //  for it to be the first one. So, this was the solution from the top of my head.

  // The endsWith() method determines whether a string ends with the characters of a specified string

  if (val.endsWith("-")) {
    val = "-" + val;

    return parseInt(val);
  }

  return parseInt(val);
}

console.log(revInt(-123569));

//2. check whether a passed string is palindrome or not?

function fastestIsPalindrome(str) {
  str = str.toLowerCase();
  //var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1]) return false;
  return true;
}

//3. generates all combinations of a string.

let possibleCombinations = (str) => {
  let combinations = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }

  return combinations;
};

console.log(possibleCombinations("Dog"));

//4. returns letters in alphabetical order.

function alph_order(str) {
  return str.split("").sort().join("");
}

myOrder = zemsinglenwiysadcbb;

Console.log(alph_order(myOrder));

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str) {
  var array1 = str.split(" ");

  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }

  return newarray1.join(" ");
}

console.log(uppercase("the quick brown fox"));

//6. Write a JavaScript function that find the longest word within the string.

function longer(champ, contender) {
  return contender.length > champ.length ? contender : champ;
}

function longestWord(str) {
  var words = str.split(" ");
  return words.reduce(longer);
}

console.log(longestWord("The quick brown fox jumped over the lazy dogs"));

//7. Write a JavaScript function that counts the number of vowels within the string.
// program to count the number of vowels in a string

function countVowel(str) {
  // find the count of vowels

  const count = str.match(/[aeiou]/gi).length;
  // return number of vowels

  return count;
}

// take input

const string = prompt("Enter a string: ");
const result = countVowel(string);

console.log(result);

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

//9. Write a JavaScript function which accepts an argument and returns the type.

var getType = function (value) {
  return Object.prototype.toString
    .call(value)
    .replace(/^\[object |\]$/g, "")
    .toLowerCase();
};

var checkTypes = function (types, fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments, 0);
    for (var idx = 0; idx < types.length; idx += 1) {
      var expected = types[idx];
      var received = getType(args[idx]);
      if (received != expected) {
        throw new TypeError("expected " + expected + "; received " + received);
      }
    }
    fn.apply(null, args);
  };
};

var exampleUsage = checkTypes(
  ["array", "array", "number"],
  function (arr1, arr2, num1) {
    console.log("arr1:", arr1);
    console.log("arr2:", arr2);
    console.log("num1:", num1);
  }
);

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {
  var i;
  var j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        console.log(" 1 ");
      } else {
        console.log(" 0 ");
      }
    }
    console.log("----------");
  }
}
matrix(4);

//11. take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function Second_Greatest_Lowest(arr_num) {
  arr_num.sort(function (x, y) {
    return x - y;
  });
  var uniqa = [arr_num[0]];
  var result = [];

  for (var j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {
      uniqa.push(arr_num[j]);
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  return result.join(",");
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

//12. Write a JavaScript function which says whether a number is perfect.

function is_perfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}

//13. Write a JavaScript function to compute the factors of a positive integer.

function factors(n) {
  var num_factors = [],
    i;

  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0) {
      num_factors.push(i);
      if (n / i !== i) num_factors.push(n / i);
    }
  num_factors.sort(function (x, y) {
    return x - y;
  }); // numeric sort
  return num_factors;
}

//14. Write a JavaScript function to convert an amount to coins.

function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function myExp(b, n) {
  var rest = 1;

  for (i = 1; i <= n; i++) {
    rest = b * rest;
  }

  return rest;
}

//16. Write a JavaScript function to extract unique characters from a string.

function unique_char(str1) {
  var str = str1;
  var uniql = "";
  for (var x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x];
    }
  }
  return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

//17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function Char_Counts(str1) {
  var uchars = {};
  str1.replace(/\S/g, function (l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
  });
  return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

//18. Write a function for searching JavaScript arrays with a binary search.

function array_binarySearch(narray, delement) {
  var mposition = Math.floor(narray.length / 2);

  if (narray[mposition] === delement) {
    return mposition;
  } else if (narray.length === 1) {
    return null;
  } else if (narray[mposition] < delement) {
    var arr = narray.slice(mposition + 1);
    var res = array_binarySearch(arr, delement);
    if (res === null) {
      return null;
    } else {
      return mposition + 1 + res;
    }
  } else {
    var arr1 = narray.slice(0, mposition);
    return array_binarySearch(arr1, delement);
  }
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 6));

//19. Write a JavaScript function that returns array elements larger than a number.

function BiggerElements(val) {
  return function (evalue, index, array) {
    return evalue >= val;
  };
}
var result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));
console.log(result);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.

function makeid(l) {
  var text = "";
  var char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function subset(arra, arra_size) {
  var result_set = [],
    result;

  for (var x = 0; x < Math.pow(2, arra.length); x++) {
    result = [];
    i = arra.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arra[i]);
      }
    } while (i--);

    if (result.length >= arra_size) {
      result_set.push(result);
    }
  }

  return result_set;
}

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function char_find(str, letter) {
  var letter_count = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letter_count += 1;
    }
  }

  return letter_count;
}

//23. Write a JavaScript function to find the first not repeated character.

function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split("");
  var result = "";
  var ctr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}

//24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubble_Sort(a) {
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function Longest_Country_Name(country_name) {
  return country_name.reduce(function (lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
}

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longest_substring_without_repeating_characters(input) {
  var chars = input.split("");
  var curr_char;
  var str = "";
  var longest_string = "";
  var hash = {};
  for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) {
      str += curr_char;
      hash[chars[i]] = { index: i };
    } else {
      if (longest_string.length <= str.length) {
        longest_string = str;
      }
      var prev_dupeIndex = hash[curr_char].index;
      var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + curr_char;
      hash = {};
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = { index: j };
      }
    }
  }
  return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com"));

console.log(longest_substring_without_repeating_characters("example.com"));

//27. Write a JavaScript function that returns the longest palindrome in a given string.

function is_Palindrome(str1) {
  var rev = str1.split("").reverse().join("");
  return str1 == rev;
}

function longest_palindrome(str1) {
  var max_length = 0,
    maxp = "";

  for (var i = 0; i < str1.length; i++) {
    var subs = str1.substr(i, str1.length);

    for (var j = subs.length; j >= 0; j--) {
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }

  return maxp;
}

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function addStudent(id, refreshCallback) {
  refreshCallback();
}

function refreshStudentList() {
  console.log("Hello");
}

addStudent(1, refreshStudentList);

//29. Write a JavaScript function to get the function name.

function getFunName() {
  console.log(arguments.callee.name);
}
getFunName();
