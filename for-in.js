const person={
    name: "nemat",
    roll: 25,
    age: 20,

    draw: function(){
        console.log("person");
    }
};
for(let key in person){
    console.log(key + " :" + person[key]);
};

//print all properties and values 
const car = {
    brand:"Tyota",
    model:"camry",
    year: 2020,
};
for(let key in car){
    console.log(key + ":" + car[key]);
};
//count the number of properties in this object
let student ={
    name:"Amit",
    age: 22,
    grade:"A",
    
};
let count=0;
for(let key in student){
    count++;
};
console.log("total properties"+":" + count);

//print only string-type values

const info ={
    name:"saara",
    age: 30,
    city:"delhi",
    married: false
};
for(let key in info){
    if(typeof info[key] === "string"){
        console.log(key + ":" + info[key]);
    }
};
//delete properties whose value is a number 

const data = {
    id:101,
    title:"post title",
    likes:50,
    published:true,
};
for(let key in data){
    if(typeof data[key] === "number"){
        delete data[key];
    }
};

console.log(data);