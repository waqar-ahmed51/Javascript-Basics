// In Javascript arrays can hold multiple type of data.

const hobbies=['Coding','Gaming','Travelling'];

console.log(hobbies);

const hello = 'Hello World';
console.log(hello[6]);
// Output: W


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem=famousSayings[0];

console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]); // will output undefined

// Update Arrays
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']


// Length of the Array
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2



// Push method to add an element in the last.
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


//Pop method to remove the last element in arrays
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);


// More methods in Javascript for Arrays
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex=groceryList.indexOf('pasta');
console.log(pastaIndex);



