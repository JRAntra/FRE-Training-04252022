// 1 Write a JavaScript function that reverse a number;

function reverseNum(num) {
    if (typeof num !== 'number' || !num || num % 1 > 0) return 'Invalid input.';
    let arrN = [],
        i = Math.abs(num),
        mult = 10;
    while (i > 0) {
        let n = i % mult;
        arrN.push(n);
        i = Math.floor(i / mult);
    }
    let res = 0;
    mult = 1;
    for (let i = arrN.length - 1; i >= 0; i--) {
        let n = arrN[i];
        res = res + (n * mult);
        mult = mult * 10;
    }
    console.log()
    return num < 0 ? -res : res;
}

// TEST
console.log(reverseNum(32243)); // 34223
console.log(reverseNum('string')); // 'Invalid input.'
console.log(reverseNum([1,2,3])); // 'Invalid input.'
console.log(reverseNum({key1: 'one', key2: 'two'})); // 'Invalid input.'
console.log(reverseNum()); // 'Invalid input.'
console.log(reverseNum(-234)); // -432
console.log(reverseNum(0.235)); // 'Invalid input.'
console.log(reverseNum(5.123)); // 'Invalid input.'
