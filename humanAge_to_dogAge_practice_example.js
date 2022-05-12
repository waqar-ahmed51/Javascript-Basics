// Dog Years
// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

// Here’s how you convert your age from “human years” to “dog years”:

// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.

//A vaiable having your age as value
var myAge=27;

//As dogs growth is much faster in first two years
let earlyYears=2;
earlyYears*=10.8;

// As we calculated the early age.
let laterYears=myAge-2;

//After 2 years of dog growth rest years are like 4 years to 1 human year.
laterYears*=4;

// console.log(earlyYears);
// console.log(laterYears);

//Calculating human age from dogs early age years and later years age.
var myAgeInDogYears=earlyYears+laterYears;


//
var myName='WAQAR';
myName=myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);





