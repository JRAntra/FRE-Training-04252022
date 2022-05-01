/*
Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output.
Example: ['Australia', 'Germany', 'United States of America'] => 'United States of America'

I: array of country names;
O: string of country name in the array with longest length;
C: -
Q:
- What if countries names is not an array? I'd return 'Invalid input.'
- What if countries array is empty? I'd return 'Invalid input.'
- What if a country name in the array is not a string? I'd return 'Invalid input.'
- Does space included in the length for comparison? I'd presume they're included
- What if there are more than one country with the same name length? Do we return all, or only return the first instance or return the last instance?
    I'd return the first instance

Runtime would be O(N) since we have to iterate through and check all the countries' name length before concluding which
one has the most length. Space would take O(1) just to keep record of the longest country name we've seen.
*/

const findLongestCountryName = (countries) => {
    if (!Array.isArray(countries) || !countries.length) return 'Invalid input.';
    return countries.reduce((longestName, country) => {
        if (typeof country !== 'string') return 'Invalid input.';
        if (longestName.length < country.length) {
            longestName = country;
        }
        return longestName;
    })
}

// TEST
let countries = ['Australia', 'Germany', 'United States of America'];
console.log(findLongestCountryName(countries)); // 'United States of America'
console.log(findLongestCountryName(['Nauru', 'Monaco', 'Mexico', 'Japan'])); // 'Monaco' as the first instance

console.log(findLongestCountryName()); // 'Invalid input.'
console.log(findLongestCountryName(['Zambia', null, undefined, 'Japan'])); // 'Invalid input.'
console.log(findLongestCountryName(['Japan', 'Nigeria', 123])); // 'Invalid input.'
console.log(findLongestCountryName([])); // 'Invalid input.'
