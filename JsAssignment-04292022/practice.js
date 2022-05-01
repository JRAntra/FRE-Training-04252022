//1.reverse a number
function rev(number) {
  const arr = number.toString().split("");
  return +arr.reverse().join("");
}
console.log(rev(12345));

//2.check pass string is palindrome
function checkPalindrome(str) {
  if (str === "") {
    return "No word";
  }
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;
}
console.log(checkPalindrome("noon"));

//3.generate all combination of string
function generateComb(str) {
  var result = [];
  for (let i = 0; i < str.length; i++) {
    newArr = str.substr(i).split("");

    for (let j = 0; j < newArr.length; j++) {
      result.push(newArr.slice(0, j + 1).join(""));
    }
  }

  return result;
}
console.log(generateComb("dog"));

//4.passed string in alphabetial order
function reSort(str) {
  return str.split("").sort().join("");
}
console.log(reSort("wish"));

//5.convert to Captical letter
function convertUppercase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}
console.log(convertUppercase("convert to upper case"));

//6.find the longest word
function longestWord(str) {
  var longest = "";
  str.split(" ").forEach((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
}
console.log(longestWord("web development tutorial"));

//7.check the vowels numbers in string
function isVowelRegEx(char) {
  if (char.length == 1) {
    return /[aeiou]/.test(char);
  }
}
function vowelNumber(str) {
  var number = 0;
  str.split("").forEach((letter) => {
    if (isVowelRegEx(letter)) {
      number++;
    }
  });
  return number;
}
console.log(vowelNumber("the quick brown fox"));

//8.check prime number
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
      break;
    }
  }
  return true;
}
console.log(isPrime(11));

//9.return type
function isType(args) {
  return typeof args;
}
console.log(isType(9));

//10. generate n rows n columns matrix
function matrix(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < num; j++) {
      if (i === j) {
        arr[i][j] = "1";
      } else {
        arr[i][j] = "0";
      }
    }
  }
  return arr;
}
console.log(matrix(4));
//11. take an array of number and find the second lowest and second greatest number
function findNumber(numArr) {
  let newArr = [...numArr.sort()];
  return [newArr[1], newArr[newArr.length - 2]];
}
console.log(findNumber([1, 8, 3, 6, 4]));

//12.check if number is perfect
function isPerfect(num) {
  var facts = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      facts.push(i);
    }
  }
  const total = facts.reduce((acc, cur) => acc + cur, 0);
  return total / 2 === num;
}
function findPerfectNumber(num) {
  var result = [];
  for (let i = 1; i <= num; i++) {
    if (isPerfect(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(isPerfect(6));
console.log(findPerfectNumber(10000));
//13. computer the facts of integer
function findFacts(int) {
  var result = [];
  for (let i = 1; i <= int; i++) {
    if (int % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(findFacts(24));

//14. convert number to coins
function convertToCoin(num) {
  var leftNumber = num;
  var coinsArr = [];
  var coinList = [25, 10, 5, 1];
  coinList.sort((a, b) => b - a);
  coinList.forEach((value) => {
    while (leftNumber >= value) {
      coinsArr.push(value);
      leftNumber = leftNumber - value;
    }
  });
  return coinsArr;
}
console.log(convertToCoin(48));

//15. compute the value of bn
function calculateBn(b, n) {
  var base = 1;
  for (let i = 0; i < n; i++) {
    base = base * b;
  }
  return base;
}
console.log(calculateBn(3, 2));

//16. find the unique characters from string
function uniqueChar(str) {
  var arr = [];
  str.split("").forEach((char) => {
    arr.indexOf(char) < 0 && arr.push(char);
  });
  return arr.join("");
}
console.log(uniqueChar("slsjeowij"));

//17. get the number of occurrences of each letter in specified string
function occurNum(str) {
  var arr = str.split("");
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(obj).includes(arr[i])) {
      obj[arr[i]]++;
      continue;
    }
    obj[arr[i]] = 1;
  }
  return obj;
}
console.log(occurNum("heelllo"));
//18. binary search
function recursiveFunction(arr, x, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return true;
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  if (arr[mid] < x) return recursiveFunction(arr, x, mid + 1, end);
}
function checkSearch() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  var x = 5;
  if (recursiveFunction(arr, x, 0, arr.length - 1)) {
    return "element is found";
  } else {
    return "element is not found";
  }
}
console.log(checkSearch());

//19.return array elements greater than a number
function filterFunction(arr, num) {
  return arr.filter((item) => item > num);
}
console.log(filterFunction([3, 5, 6, 4, 8, 2], 4));

//20. generate a specified length character list(ramdom)
function generateRandom(num) {
  var result = "";
  var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < num; i++) {
    var index = Math.floor(Math.random() * list.length);
    result += list.charAt(index);
  }
  return result;
}
console.log(generateRandom(8));

//21.get all possible subset with a fixed length
function subset(arr, num) {
  var allSets = arr.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );
  console.log(allSets);
  var result = allSets.filter((set) => set.length === num);
  return result;
}
console.log(subset([1, 2, 3], 2));

//22.count the number of occurrences of the specified letter
function countNumber(str, char) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
console.log(countNumber("www.microsoft.com", "w"));

//23.fint the not repeated character
function nonRepeated(str) {
  var arr = [];
  str.split("").forEach((char) => {
    if (arr.indexOf(char) < 0) {
      arr.push(char);
    } else {
      arr.splice(arr.indexOf(char), 1);
    }
  });
  return arr[0];
}
console.log(nonRepeated("abacddbec"));

//24.Bubble Sort algorithm

function sort(arr) {
  function swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
  return arr;
}
console.log(
  sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);
function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    const value = arr[0];
    let lesser = [];
    let greater = [];
    let equal = [];
    arr.forEach((item) => {
      if (item > value) {
        greater.push(item);
      } else if (item < value) {
        lesser.push(item);
      } else {
        equal.push(item);
      }
    });
    return [...quickSort(greater), ...equal, ...quickSort(lesser)];
  }
}
console.log(
  quickSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

//25.compare the country longest
function countryList(arr) {
  var longest = "";
  arr.forEach((country) => {
    if (country.length > longest.length) {
      longest = country;
    }
  });
  return longest;
}
console.log(countryList(["Australia", "Germany", "United States of America"]));
//26. find the longest substr without repeating characters
function findLongestSubstr(str) {
  var substr = "";
  var arr = [];
  var longest = "";
  for (let i = 0; i < str.length; i++) {
    if (substr.includes(str.charAt(i))) {
      arr.push(substr);
      substr = str[i];
    } else {
      substr = substr + str[i];
    }
  }
  arr.push(substr);
  arr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest.length;
}
console.log(findLongestSubstr("abcabcdababc"));

//27. find the longest palindrome str
function longestPalindrome(str) {
  //check if the str is palindrome
  function isPalindrom(str1) {
    let newStr = str1.split("").reverse().join("");
    return newStr === str1;
  }
  //split the str into all substr and check if substr is palindrome then compare with longest
  var longest = "";
  for (let i = 0; i < str.length; i++) {
    let subStr = str.substr(i, str.length);
    for (let j = subStr.length; j >= 0; j--) {
      let subSubstr = subStr.substr(0, j);
      // if (subSubstr.length <= 1) continue;
      if (isPalindrom(subSubstr)) {
        if (subSubstr.length > longest.length) {
          longest = subSubstr;
        }
      }
    }
  }
  return longest;
}
console.log(longestPalindrome("abracadabra"));

//28 pass a function as parameter
function myFilter(arr, callback) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}
function callback(cur) {
  return cur >= 4;
}
console.log(myFilter([1, 2, 4, 6, 7, 8], callback));

function eat(food1, food2) {
  console.log("I like to eat " + food1 + " and " + food2);
}
function myFunc(callback, args) {
  callback(args[0], args[1]);
}
myFunc(eat, ["rice", "bean"]);

//29 function get function name
function getFunctionName(func) {
  func();
  return func.name;
}
function testFunc() {
  console.log("function name");
}
console.log(getFunctionName(testFunc));
