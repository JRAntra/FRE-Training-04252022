/* Write a JavaScript function that generates all combinations of a string
Example: 'dog' => 'd', 'do', 'o', 'og', 'g'
*/

function combinations(str) {
    const set = new Set();
    let substr = '';
    while (substr.length <= str.length) {
        let i = 0;
        while (i < str.length) {
            let char = str[i];
            substr += char;
            set.add(substr);
            substr = '';
            if (substr.length === str.length) {
                str = str.slice(1);
                substr = '';
                i = 0;
                break;
            }
            i++;
        }
    }
    return [...set];
}

console.log(combinations('dog'))
