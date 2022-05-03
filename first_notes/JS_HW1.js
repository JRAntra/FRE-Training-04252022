// Q1;
function reverse(num) {
  result = '';
  num
    .toString()
    .split('')
    .forEach((element) => {
      result = element + result;
    });
  return result;
}
// console.log(reverse(32243));

// Q2;

function palindrome(str) {
  str = str
    .split('')
    .filter((elem) => elem !== ' ')
    .join('');
  console.log(str);
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// console.log(palindrome('nurses run'));

// Q3;

function allSubstring(str) {
  result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j + 1));
    }
  }
  return result;
}

// console.log(allSubstring('dog'));

// Q4;

function orderString(str) {
  return str.split('').sort().join('');
}

// console.log(orderString('webmaster'));

// Q5;

function upperFirstLetter(str) {
  result = '';
  return str
    .split(' ')
    .map((elem) => {
      return elem[0].toUpperCase() + elem.slice(1);
    })
    .join(' ');
}

// console.log(upperFirstLetter('the quick brown fox'));

// Q6;

function longestStr(str) {
  result = { word: '', maxLen: 0 };
  str.split(' ').forEach((elem) => {
    if (elem.length > result.maxLen) {
      result.maxLen = elem.length;
      result.word = elem;
    }
  });
  return result.word;
}

// console.log(longestStr('Web Development Tutorial'));

// Q7;

function countVowels(str) {
  return new Set(
    str.split('').filter((elem) => {
      return [
        'A',
        'E',
        'I',
        'O',
        'U',
        'W',
        'a',
        'e',
        'i',
        'o',
        'u',
        'w',
      ].includes(elem);
    })
  ).size;
}
// console.log(countVowels('The quick brown fox'));

// Q8;

function checkPrime(num) {
  maxN = Math.floor(num / 2) + 1;
  result = [];
  if (num > 0 && Number.isInteger(num)) {
    for (let i = 1; i < maxN; i++) {
      if (num % i === 0) {
        maxN = num / i;
        result.push(i, num / i);
      }
    }
  } else {
    return false;
  }
  return result.length === 2;
}

// console.log(checkPrime(5));

// Q9;

function checkTypeof(value) {
  return typeof value;
}

// console.log(checkTypeof(5));

// Q10;

function generateMatric(n) {
  result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [...Array(i).fill('0'), '1', ...Array(n - i - 1).fill('0')];
  }
  return result;
}

// console.log(generateMatric(4));

// Q11;

function findSecondNumber(arr) {
  result = {};
  maxResult = [arr[0], arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxResult[1]) {
      maxResult[1] = arr[i];
      if (arr[i] > maxResult[0]) {
        maxResult = maxResult.reverse();
      }
    }
  }
  result['max2Result'] = maxResult[1];

  minResult = [arr[0], arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minResult[1]) {
      minResult[1] = arr[i];
      if (arr[i] < minResult[0]) {
        minResult = minResult.reverse();
      }
    }
  }
  result['min2Result'] = minResult[1];
  return Object.values(result);
}

// console.log(findSecondNumber([5, 7, 4, 2000, 8, 2, 100, 34, 65, 345, 1000]));

// Q12;

function perfectNumber(num) {
  maxN = Math.floor(num / 2) + 1;
  sum = 0;
  for (let i = 1; i < maxN; i++) {
    if (num % i === 0) {
      maxN = num / i;
      sum += num / i + i;
    }
  }
  return sum / 2 === num;
}

// console.log(perfectNumber(8128));

// Q13;

function getFactors(num) {
  maxN = Math.floor(num / 2) + 1;
  result = [];
  for (let i = 1; i < maxN; i++) {
    if (num % i === 0) {
      maxN = num / i;
      result.push(i, num / i);
    }
  }
  return result;
}

// console.log(getFactors(8128));

// ***Q14;
/*
function convertAmount(amount, coins) {
  for (let i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      console.log(amount - coins[i]);
      if (amount - coins[i] === 0) {
        break;
      } else {
        convertAmount(amount - coins[i], coins);
      }
    }
  }
}*/
// function convertAmount(amount, coins) {
//   res = [];
//   //callBackTrack(res, amount, coins);
//   res.push(1);
//   return res;
// }

// function callBackTrack(res, amount, coins) {
//   if (amount == 0) return true;

//   for (let i = 0; i < coins.length; i++) {
//     if (coins[i] < amount) {
//       res.push(coins[i]);
//       if (callBackTrack(res, amount - coins[i], coins)) return true;
//       res.slice(0, -1);
//     }
//   }
//   return false;
// }

// console.log(convertAmount(46, [25, 10, 5, 2, 1]));

// Q15;

function getExponent(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

// console.log(getExponent(3, 4));

// Q16;

function removeDepulicate(str) {
  return [...new Set(str)].join('');
}

// console.log(removeDepulicate('thequickbrownfoxjumpsoverthelazydog'));

// Q17;

function OccurNum(str) {
  result = {};
  str.split('').forEach((elem) => {
    result[elem] === undefined ? (result[elem] = 1) : result[elem]++;
  });
  return result;
}

// console.log(OccurNum('thequickbrownfoxjumpsoverthelazydog'));

// Q18;
// [2,4,5,7,8,23,55]
//  0 1 2 3 4 5  6

// target = 8;
// start = 3;
// end = 5;
// i = 4;

// function binarySearch(array, target) {
//   let start = 0;
//   let end = array.length;
//   let i = Math.ceil((start + end) / 2);
//   while (array[i] !== target && end > start) {
//     if (array[i] >= target) {
//       end = i;
//     } else {
//       start = i;
//     }
//   }
//   return [i, array[i]];
// }
// console.log(binarySearch([3, 5, 6, 7, 8, 9, 10], 3));

//Q19

function largerElem(arr, target) {
  return arr.filter((elem) => {
    return elem > target;
  });
}

// console.log(largerElem([3, 5, 6, 7, 8, 9, 10], 3));

//Q20

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateStr(num) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// console.log(generateStr(30));

// *** Q21

// function allSubset(arr, arra_size) {
//   let result_set = [],
//     result;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       // if (arr.slice(i, j + 1).length === arra_size) {
//       console.log(i, j);
//       result_set.push(arr.slice(i, j + 1));
//       // }
//     }
//   }

//   return result_set;
// }

// console.log(allSubset([4, 6, 8], 2));

// Q22;

function numOfOccur(str, target) {
  const map1 = new Map();
  str.split('').forEach((elem) => {
    map1.get(elem) === undefined
      ? map1.set(elem, 1)
      : map1.set(elem, map1.get(elem) + 1);
  });
  return map1.get(target);
}

// console.log(numOfOccur('microsoft.com', 'o'));

// Q23;

function firstUnique(str) {
  const map1 = new Map();
  str.split('').forEach((elem) => {
    map1.get(elem) === undefined
      ? map1.set(elem, 1)
      : map1.set(elem, map1.get(elem) + 1);
  });

  for (const [key, value] of map1) {
    if (value === 1) {
      return [key, value];
    }
  }
}

// console.log(firstUnique('thequickbrownfoxjumpsoverthelazydog'));

// Q24;

function bubbleSort(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] > str[j]) {
        let tmp = str[i];
        str[i] = str[j];
        str[j] = tmp;
      }
    }
  }
  return str;
}

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

// Q25;

function longestCountry(arr) {
  let country = '';
  let len = 0;
  arr.forEach((elem) => {
    if (elem.length > len) {
      len = elem.length;
      country = elem;
    }
  });
  return country;
}

// console.log(
//   longestCountry(['Australia', 'Germany', 'United States of America'])
// );

// Q26;

function longestSubstr(arr) {
  let res = [];
  let tmp = [];
  arr.split('').forEach((elem) => {
    if (tmp.includes(elem)) {
      tmp = [...tmp.slice(tmp.findIndex((y) => y === elem) + 1)];
    }

    tmp.push(elem);
    if (res.length < tmp.length) {
      res = tmp;
    }
  });
  return res.join('');
}

// console.log(longestSubstr('adeknmipeyutddrsecka'));

// **** Q27;

function longestPalindrome(s) {
  let ll = 0,
    rr = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i + 1]) {
      for (l = i, r = j; s[l] === s[r]; l--, r++)
        if (r - l + 1 > rr - ll + 1) {
          [ll, rr] = [l, r];
        }
    }
  }
  return s.slice(ll, rr + 1);
}

// console.log(longestPalindrome('sabbad'));

// Q28;

function mainFunc(cb) {
  return cb();
}

function innerFunc() {
  return 'I am the inner function';
}

// console.log(mainFunc(innerFunc));

// Q29;

function yuttt() {
  console.log(arguments.callee.name);
}

// yuttt();
