//filter even numbers
let arr=[2, 4, 7, 9, 15, 20];
let evenNumber=arr.filter((arr)=>{
    if(arr%2==0){
    return true;
    }
    else{
        return false;
    }
});
console.log(evenNumber);

//get adults only using filter
let user=[
    {name: "nemat",age:20},
    {name:"jiya",age:18},
    {name: "shweta",age:20},
    {name:"jasmine",age:17}
]
let adults = user.filter((user)=>{
    if(user.age>=18){
        console.log("adults");
    }
    else{
        console.log("kids");
    }
});