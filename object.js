let person = {
    name: "nemat",
    roll: 25,
    isStudent: true,

    draw: function(){
        console.log("person's detail")
    }
};
console.log(person.name);
console.log(person.roll);
console.log(person.draw);

let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){
        console.log("draw a rectangle");
    }
};
console.log(rectangle.length);
console.log(rectangle.breadth);
console.log(rectangle.draw);
//adding property
rectangle.color = "yellow";
console.log(rectangle.color);
// deleting property 
delete rectangle.color ;

//let square= {
function square(side){
    this.side= side;

    this.draw= function(){
        console.log(" square");
    }
};
//object creation by constructor function
let squareObject= new square(6);
console.log(squareObject);




