//1
function reverseNum(num){
	return num.toString().split('').reverse().join('')
}

//2
function checkPalindrome(str){
	return str == str.split('').reverse().join('')
}

//3

function strCombination(str){
	ans = []
	for(i = 0;i<str.length;i++){
		for(j = i+1;j<str.length+1;j++){
			ans.push(str.slice(i,j))
		}
	}
	return ans
}

console.log(strCombination('dog'))

//4
function strOrder(str){
	return str.split('').sort().join('')
}

console.log(strOrder('xcbvkjsdaf'))

//5
function upperFist(str){
	let arr= str.split(' ')
	for(i = 0 ; i < arr.length; i++){
		arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1)
	}
	return arr.join(" ")
}
console.log(upperFist("sdj skdjf sdkfj"))

//6

function longestStr(str){
	let arr = str.split(" ")
	ans = ""
	for(i of arr){
		if( i.length > ans.length){
			ans  = i
		}
	}

	return ans
}
console.log(longestStr("sdf sdfkjsdf sdkfj sdf"))
//7
function countVowel(str){


	let ans = 0
	for (i = 0; i < str.length; i++){
		if ("aoieuAEIOU".includes(str[i])){
			ans+=1
		}
	}

	return ans
}

console.log(countVowel('The quick brown fox'))


//8

function isPrime(num){
	for(let i = 2, s = Math.sqrt(num); i <= s; i++)
		if(num % i === 0) return false; 
	return num > 1;

}

//9
function checkType (argument) {
	return typeof argument
}


//10
function matrix(num) {

	const res = [];
	for(let i = 0; i < num; i++){
		if(!res[i]){
			res[i] = [];
		};
		for(let j = 0; j < num; j++){
			if(i === j){
				res[i][j] = 1;
			}else{
				res[i][j] = 0;
			};
		};
	};
	return res;
}

console.log(matrix(3))

//11

function secondNum(arr){
	arr = [...new Set(arr)]
	arr.sort()
	ans = []
	ans.push(arr[1])
	ans.push(arr[arr.length-2])
	return ans
}

console.log(secondNum([2,4,7,1,8,9,3,6,8]))

//12
function perfectNum(num){

	var temp = 0;
	for(var i=1;i<=num/2;i++)
	{
		if(num%i === 0)
		{
			temp += i;
		}
	}

	if(temp === num && temp !== 0){
		console.log("it's a perfect number")
	}
	else{
		console.log("it's not a perfect number")

	}}

//13
function factors(n)
{
	var factor = [];

	for (i = 1; i <= n/2; i += 1)
		if (n % i === 0)
		{
			factor.push(i);
			if (n / i !== i)
				factor.push(n / i);
		}
		let ans = [...new Set(factor)];
		ans.sort(function(x,y){
			return x-y
		})

		return ans;
	}



//14
function coins(coin){
	ans = []
	money = [25,10,5,2,1]
	if( coin === 0){
		return ans
	}
	while (coin){
		while(coin>=money[0]){
			ans.push(money[0])
			coin-=money[0]
		}
		money.shift()

	}
	return ans

}

console.log(coins(46))

//15

function exp(b,n)
{
	var ans = 1;
	for (var i =1; i <= n; i++)
	{
		ans = b * ans;        
	}
	return ans;
}
console.log(exp(2, 3));

//16
function uniqueChar(str){
	return [...new Set(str)].join("")

}

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"))

//17
function countOcc(str) {
	let map=new Map()

	for (i of str){
		if (map.has(i)){
			map.set(i,map.get(i)+1)
		}
		else{
			map.set(i,1)
		}
	}
	return map
}

console.log(countOcc("thequickbrownfoxjumpsoverthelazydog"))

//18
function binarySearch(num){

	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[mid] === val) {
			return mid;
		}

		if (val < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

//19
function largerNum(arr,num){
	return arr.filter(n => n > num)
}

//20
function generator(length){
	var ans = "";
	var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i=0; i < length; i++ )
	{  
		ans += char_list.charAt(Math.floor(Math.random() * char_list.length));
	}
	return ans;
}

//21
function subset(arra, arra_size)
{
	var result_set = [], 
	result;
	
	
	for(var x = 0; x < Math.pow(2, arra.length); x++)
	{
		result = [];
		i = arra.length - 1; 
		do
		{
			if( (x & (1 << i)) !== 0)
			{
				result.push(arra[i]);
			}
		}  while(i--);

		if( result.length == arra_size)
		{
			result_set.push(result);
		}
	}

	return result_set; 
}

console.log(subset([1, 2, 3], 2));

//22
function countOcc2(str,char){
	let ans = 0;
	for(i of str){
		if (i == char){
			ans+=1;
		}
	}
	return ans;
}
console.log(countOcc2("avcc","c"))


//23
function firstUniqueChar(str){

	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
			return c;
		}
	}
	return null;
}

console.log(firstUniqueChar("abacddbec"))

//24
function bubbleSort(arr){

	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (arr[j] <arr[j + 1]) {
				let tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
//25
function longestCountryName(Countrys){
	let ans = ""
	for(i of Countrys){
		if(i.length>ans.length){
			ans= i;
		}
	}
	return ans;
}

console.log(longestCountryName((["Australia", "Germany", "United States of America"])))
//26
function longestSubstr(s){
	let ans=0
	let map=new Map()
	for(let i=0; i<s.length; i++){
		if(map.has(s[i])){
			for(let pair of map.entries()){ 
				if(pair[0]===s[i]){ 
					map.delete(pair[0])
					break}
					map.delete(pair[0])
				}
			}
			map.set(s[i],i)
			ans=Math.max(ans,map.size)
		}
		return ans
	}

//27
function longestPalindrome(str){

	let max = "";
	for (let i = 0; i < str.length; i++) {
		for (let j of [i, i + 1]) {
			let [left, right] = [i, j];
			while (str[left] && str[left] === str[right]) {
				left--;
				right++;
			}
			if (right - left - 1 > max.length) max = str.substring(left + 1, right);
		}
	}
	return max;
}

console.log(longestPalindrome("banana"))


//28
function greet() {
	return 'Hello'
}

function name(user, func)
{

	const message = func()

	console.log(`${message} ${user}`)
}
function passFunction(){

}

//29
function getName () {
	return arguments.callee.name

}

console.log(getName())

