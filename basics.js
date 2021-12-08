//Variables:
let name = "Mosh";
console.log(name);
/** In the example abouve the actual variable is name. We use the let keyord to
 * declare a variable called name. After that we set it to the string Mosh. So basically
 * Mosh is the data that goes inside the variable name.
 */
/**Variable rules:
 * Cannot be a reserved keyword
 * Must be camelCased
 * Should be meaningful
 * Cannot start with a number (1name)
 * Cannot contain a space or hyphen (-)
 * Are case-sensitive
 */

let firstName = "Mosh";
let lastName = "Hamedani";

//Constants (let vs const):
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate); //This will throw an error because you reasinged it
/**When you do NOT need to reasign a variable use constants (const).
 * If you need to reasign a variable use let */

//Primitive Types:
/**
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 */

let name = "Brian"; //String
let age = 30; // Number
let isApproved = false; // Boolean
let firstName = undefined; //Undefined
let selectedColor = null; //Null

//Dynamic Typing:
/**
 * The type of each variable is determined at run time\
 * typeof is Actually a kewyord as well
 * see video if you want more info
 */

//Reference Types:

//   Objects:
//   These {} are object literals. To declare an object you use {} like this:
let person = {
  name: "Brian",
  age: 30,
};
//Dot Notation
person.name='John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//Arrays
let selectedColors=['red', 'blue'];
console.log(selectedColors)

//Functions
//Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName)
}

//Calculating a value
function square(number){
    return number * number;
}

console.log(square(2))