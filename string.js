//use string.length for finding the length
let str = "nemat";
console.log(str.length );
// use string.startswith 
console.log(str.startsWith( "miss"));
console.log(str.endsWith("jamal"));

//use toUpperCase() to convert into capital letters

let name="dilkash"
console.log(name.toUpperCase());

// use toLowerCase() to convert into small letters
let name1 = "NEMAT"
console.log(name1.toLowerCase());

// how to check if a string contains another substring?

let string = "hello my name is nemat jamal";
console.log(string.includes("my name"));

//how to get the first character of a string?

let message = "i love myself";
console.log(message.charAt(0));

// for triming we use string.trim

let string1 = "  hello world  "
console.log(string1.trim());

console.log(string1.trimStart());
console.log(string1.trimEnd());

// how to split a string 
let array = "apple,banana,grapes"; 
console.log(array.split(','));

// how to replace a word in a string?

let arr = "i like c++";
console.log(arr.replace('c++','javascript'));

// repeat string 5 times

let arr1 = "hello";
console.log(arr1.repeat(5));

//extract part of string 

let arr2 = "javascript";
console.log(arr2.slice(4));

//reverse a string 
let firstName = "nemat";
function reverseString(firstName){
    return 
    firstName.split("").reverse().join("")
    ;
}
console.log(reverseString(firstName));






