//add two numbers (check for numbers)
function add(a , b){
    if(typeof a==='number'&& typeof b==='number'){
        return a+b;
}
else{
    return 'both inputs must be numbers';
}
}
console.log(add(3 ,5));
console.log(add(3,'hello'));

// check if a number is even or odd
function isEven(num){
    return (num%2==0);
    }

console.log(isEven(8));
console.log(isEven(7));

//find the largest number in an array
function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([2,4,8,17,20]));

//reverse a string
function reverseString(str){
    return str.split('').reverse().join();
}
console.log(reverseString("hello"));

//square function
//function declaration

function square(number){
    return number*number;
}
console.log(square(8));

//filter even number
function filterEvenNumbers(arr){
    return arr.filter(num=>num%2==0);
}
console.log(filterEvenNumbers([1,2,3,4,5,6]));