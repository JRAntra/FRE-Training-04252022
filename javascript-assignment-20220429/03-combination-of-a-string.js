/* Write a JavaScript function that generates all combinations of a string
Example: 'dog' => 'd', 'do', 'o', 'og', 'g'
*/

function combinations(str) {
    let res = [], set = new Set(), strArr = str.split('');
    let q = [[str[0], strArr.slice(1)]];

}

console.log(combinations('dog'))
