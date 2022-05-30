// Creating Javascript Objects
// JavaScript objects are containers for named values called properties or methods


// There are different ways to create objects in Javascript


// Using Object literals 

var myobject = {name: 'Waqar', age: '27', hobby: 'Coding'};


// Using New keyword

var myobject2=new Object();
myobject2.name='Waqar';
myobject2.age='27';
myobject2.hobby='Coding';

// Using Object Constructor

function myobject3(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// Blueprint for making more than one object for the same type.
var  person1= new myobject3("Waqar", 27, "Coding");
var person2 = new myobject3("Iftikhar", 25, "Cricket");


// Object in Javascript are mutable
// Will not create a seperate copy x will myobject and myobject will be x - change in any one will change the other same impact 
var x=myobject;
// changing in x will impact on the myobject
x.age=99; // will change the age in myobject 
// this proofs this is not the seperate copy object in javascript are mutable.


console.log(x);


//Hoisiting Concept in Javascript
myvar=6;

console.log(myvar);

var myvar=0;


var xy = 5; // Initialize x

z= xy + yx;           // Display x and y
console.log(yx)

var yx = 7; // Initialize y




