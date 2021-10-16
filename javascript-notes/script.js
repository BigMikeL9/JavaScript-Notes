// *************************************************************************************
// ADDING JAVASCRIPT TO WEBSITES

// There are three ways to add javaScript to webites (same as in css) 
// Number 1 => Inline JavaScript
 ex: <body onload="alert('Hello');">
       </body>
       
// Number 2 => Internal JavaScript (adding <script> to the html) 
  ex: <body>
          <script type="text/javascript">
            alert("Hello");
          </script>
      </body>
       
// Number 3 => External JavaScript [USE THIS WAY] 
 /* If in JavaScipt, we try to change an HTML element (using javascript) that does not yet exist (ie: that is
       javascript link) then it will fail and nothing will happen. Always add javascripts at the end of the script
       just before the closing body tag */
  <script src="index.js" charset="utf-8"></script>      

// Add this line just before the closing body tag </body>

// ***********************************
// Different versions of 'console.log();'

1. 'console.log()'
2. 'console.warn()'
3. 'console.error()'
3. 'console.table()'



// ***********************************
// Activating Strict mode in Javascript [**** ALWAYS USE ****]

// 'Strict mode' is a special mode that we can activate in Javascript, which makes it easier for us to write secure javascript code.

// Write this string/line of code at the VERY START (line 1) of the Javascript document to activate strict mode.

'use strict';

// Strict mode is usefull because: 
          1. It forbids us to do certain things
          2. It creates visible errors in the developer CONSOLE, where without it javascript would just fail silently. Wouldn't let us know that there is an error. Like a typo for example. 
          3. Introduces a shortlist of variable names that are reserved for features that might be added to the language,  a bit later. So that we cannot use them for variables, and gives us an error in the console 'Unexpected strict mode reserved word'.
                  // Example of reserved feature names --> "interface", "private" 
                    // ie: these will produce an error in Strict mode
                            const interface = 'Audio';
                            const private = 534;



// ***********************************
//alert("Hello"); // Writes a Pop-up message.
                  // alert(); is a function that the uder can see.

//prompt("What is your name?") // Identical to the alert() method, but allows the user to enter an input or a piece of text. *********** ALWAYS RETURNS A STRING **********

//Console.Log("Hello") // Console.Log() only shows up in the console, like debug.log in C#.
                       // Used to help the developer debug the code or print something to the console.
      // We can log multiple values like this --> console.log(myName, myAge);




// ***********************************
typeof("mikel"); // Tells us the data type of the paramterer/argument in a pop-up message. 
//Output: "string"
typeof(true); //Output: "boolean"
typeof(1+3); //Output: "number"




// ***********************************
// String Concatenation and Template Literals

const name = "Mikel";
const birthYear = 1993;
const year = 2021;

// String Concatenation 
const mikel = "Hello, my name is " + name + ". I am " + (year - birthYear) + " years old."
console.log(mikel) // Output: Hello, my name is Mikel. I am 27 years old.

// Template Literals (another easier way of combining strings and variables, which was introduced in ES6) [use `.....`]
// Takes in function expressions
const mikel2 = `Hello, my name is ${name}. I am ${year - birthYear} years old.`;
console.log(mikel2); // Output: Hello, my name is Mikel. I am 28 years old.

// MULTI LINE STRINGS
// using String Concatenation ("\n\" --> means a new line)
console.log("String with \n\
multiple \n\
lines.");

// using Template Literals (we dont need "\n\". Just hit ENTER)
console.log(`String with
multiple
lines`);




// ***********************************
// Variables in JavaScript

// Variables naming conventions:
/* 1. They follow camelCase 
   2. Dont start variable names with an uppercase
   3. Variable names cannot start with a number
   4. Can only contain numbers, letters, underscore, or dollar sign.
   5. Cannot name a variable using a RESERVED keywords (ie: "new", "name", or "function")
   6. Variable names with all uppercase are reserved for CONSTANTS that will never change (ie: "let PI = 3.145" ) */

// Declaring Variables 
// [DONT USE THIS]
var myName = "Mikel"; // This is how you assign variables in javaScript. 

// USE THESE VARIABLE KEYWORDS (These were introduced in ES6 [Modern Javascript]) :
let myName - "Mikel"; // We use the "let" keyword to declare a variable that can change later, during the execution of our program. At first glance, this is same as "var",                            BUT, they are actually different under the hood. 
                      // When RE-ASIGNING a new value to a variable, it is also called MUTATING the variable.
const myName = "Mikel"; // We use the "const" keyword to declare variables that are not suppose to change at any point in the future. A variable that cannot be re-assigned                              or is imutable.
                        // ****** We CANNOT declare empty "const" variables. We need an inital value.

// FOR BEST PRACTICE --> Use "const" by default and "let" when you know that the variable will need to change at some point in the future.

// We can define 2 variables at the same time.
let x, y;
x = y = 25 -10 -5;
console.log(x, y); // output: 10 10;



// ***********************************
// Datatypes in JavaScript

// Javscript has dynamic typing, which means that we dont have to manually define data types of values stored in variables, unlike in C#. They are determined automatically

let myName = "Mikel"; // here we define/create a new variable with a value
myName = "Rodriguo"; // Here we can change the value of the variable
myName= 9999; /* we can also change the value to be a different data type, since
                javascript has dynamic typing */



// ***********************************
//  Datatype Converision and Coercion 

// Datatype CONVERSION ---> is when we manually convert from one datatype to another.
// "Number()" function --> converts a string to a number.
// "String()" function --> converts a number to a string.
// ex: 
const inputYear = '1991'; // This a string datatype
console.log((inputYear) + 18); // Output: 199118 (concatenates the string) 
console.log(Number(inputYear) + 18); // Output: 2009

console.log(String(19)); // Converts the number to a string 


// Datatype COERCION ---> is when Javascript automatically converts datatypes from behind the scenes for us.
// Happens whenever the operator is dealing with two values that have different types. 
    // here the "+" operator triggers a COERCION to string, on the number 23. "+" operator converts numbers to strings.
console.log("I am " + 23 + "years old.");
    // if Javascript doesnt have Datatype Coercion, we'd have to write this like this:
console.log("I am " + String(23) + "years old.");

    // here the "-" operator (and all other operators [except for "+"]) triggers a COERCION to number, on the strings. "-" (and ALL OTHER operators [except for "+"]) operator converts strings to numbers.
console.log('23' - '10' - 3); // Output: 10
console.log('23' * '10'); // Output: 230
console.log('23' > '18'); // Output: true

/* ⭐⭐ SUMMARY: - "+" operator converts NUMBERS to STRINGS.
            - While all other operators convert STRINGS to NUMBERS ("-", "/", "<", etc) */

// EXAMPLES:
let n = '1' + 1; // "+" operator cause Datatype Coercion to a string --> "11"
n = n - 1; // "-" operator cause Datatype Coercion to a number --> 10
console.log(n); // Output: 10

console.log(2 + 3 + 4 + '5'); // Output: "95" ----> the "+" makes the output a string type
console.log('10' - '4' - '3' - 2 + '5') // Output: "15" ----> the "+" operator at the end makes the output a string type
console.log(5 + 6 + '4'+ 9 - 4 - 1) // Ouput: 1144



// ***********************************
// Truthy and Falsy Values

// FALSY values - are values that are not exactly false, but will become false when we try to convert them into a booLean.
  // There are 5 falsy values in JavaScript: [0, '', undefined, null, NaN]

// TRUTHY values - are values that will be converted to true. 
    // So any number that is not zero, or any string that is not an empty string ('')


// "Boolean()" function converts what inside its parameter, to a boolean.
// EXAMPLES: 
console.log(Boolean(0)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean('Johns')); // Output: true
console.log(Boolean({})); // Output: true
console.log(Boolean('')); // Output: false

// Javascript converts to booleans automatically, behind the scenes (Datatype COERCION) 

const money = 0; // Falsy value
if (money) { // data type gets converted automatically from "number" datatype --> to "boolean" datatype. (Datatype COERCION) 
  console.log("Don't spend it all");
} else {
  console.log("Go get a job!");
}
// Output: Go get a job!    // because 0 is a falsy value which when converted to a boolean become false.

const height; // undefined. Falsy value
if (height) {
  console.log("Height is DEFINED");
} else {
  console.log("Height is UNDEFINED");
}
// Output: Height is UNDEFINED!    // because height variable has no value and thus is undefinded, which is a falsy value thats when converted to a boolean becomes false. Thus trigerring the else statement.

const height = 100; // truthy value
if (height) {
  console.log("Height is DEFINED");
} else {
  console.log("Height is UNDEFINED");
}
// Output: Height is DEFINED!    // because height variable has a number value, which means it a truthy value that when converted to a boolean becomes true. Thus trigerring the if block.



// ***********************************
// Operators in Javscript

// Operators exection order --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 

// Math operators
console.log((12 ** 2)); // means 12 to the power of 2 ("12^2"). // output: 144
// etc.

// Assignement Operators
let x = 10 + 5; // Output: 15
x += 10; // x = x + 10 
x *= 4; // x = x * 4
x++ // x = x + 1 
x-- // x = x - 1
console.log(x); 

// Comparison Operators (used to produce BOOLEAN values)
// > , < , >=, <=
const yearNow = 2000;
const ageJonas = yearNow - 1999;
const ageMikel = yearNow - 1980;
console.log(ageJonas > ageMikel) // False



// ***********************************
// Increment Expression => x++ means x+1
// Decrement Expression => x-- means x-1

//Confusing Example:
 What does y  equal?
var x = 3;
var y = x++;
y += 1;   // Answer is y=4. Check this link for explanation: https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/quiz/4415112#questions/12184244


 

// ***********************************
// Comparators and Equality

"===" => Checks for equality AND if data types are matching. Called the STRICT EQUALITY OPERATOR. Does NOT perform datatype Coercion. [ALWAYS USE THIS]
"==" => Only checks for equality. Called the LOOSE EQUALITY OPERATOR. DOES  perform datatype Coercion.

// Dont confues the equality opertators with the ASIGNEMENT operator "="
"=" --> assignement opertator which assigns values ** right-to-left **


//Examples:
console.log('18' === 18); // Output: false
console.log('18' == 18); // Output: true


//Example: 
var a = 1;
var b = "1";

if (a === b) // Output: No. (because data-types are not the same)
{
    console.log("Yes");
}
else 
{
    console.log("No");
}

if (a == b) // Output: Yes. (doesnt care about data-types) 
{
    console.log("Yes");
}
else 
{
    console.log("No");
}


// ***********************************
// Difference Comparators 

"!==" => Checks for difference AND if data types are matching. Called the STRICT DIFFERENCE OPERATOR. Does NOT perform datatype Coercion. [ALWAYS USE THIS]
"!=" => Only checks for difference. Called the LOOSE DIFFERENCE OPERATOR. DOES  perform datatype Coercion.



// ***********************************
// Boolean Logic

// Most important Boolean Logic Operators -->[ &&, ||, ! ]
    // Check Notes picture

&& --> all have to be true
|| --> only one have to be true
! --> "NOT operator" which means the opposite. 

//Example: 
const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = true;

console.log(hasDriversLicense && hasGoodVision); // Output: false
console.log(hasDriversLicense || hasGoodVision); // Output: true
console.log(!hasDriversLicense); // Output: false

if (hasDriversLicense && hasGoodVision && !isTired) { // true false false
  console.log('Sarah is able to Drive!');
} else {
  console.log('Someone else should drive...');
}
//Output: Someone else should drive...


// ***********************************
// If-else Statements (Controlled-Structure)

// If the "if-else" statement only has on line of code in its block, then we can ommit the curly braces
// ie: 
if (name = 'Mikel') console.log('AYYYY');




// ***********************************
// Switch Statements

// An alternative way of writing a complicated If-else statement when all we want to do is to compare one value, to multiple different options.

// **** The GOAL of the "switch" statements is to DO STRICT COMPARISON FOR EQUALITY "===", and not for comparing stuff (although we can). 
// "break;" prevents the code from continuing to execute after a condition is true. Stops execution of the switch statement as soon as one of the coditions is true.

const day = 'Monday';

switch(day) { // specifies what we want to compare to muliple options
  case 'Monday': // define cases.   // day === 'Monday'
    console.log("Plan course structure"); // Code that we want to execute if condition is true 
    console.log("Go to coding meetup");
    break; // stops the code when the ocndition above it is true.
  case 'Tuesday':
     console.log('Prepare Theory Videos!');
     break;
  // We can write the same code for two different values like this:
  case  'Wednesday':
  case 'Thursday':
     console.log('Write Code examples');
     break;
  case 'Friday':
     console.log('Record Videos!');
     break;
  case 'Saturday':
  case 'Sunday':
     console.log('Enjoy Weekend 😀')
     break;
  default: // executes if all other conditions dont meet
     console.log('Not a Valid Day!!!')
}
        



// ***********************************
// Difference between STATEMENTS/DECLARATIONS and EXPRESSIONS/OPERATOR

// An EXPRESSSION --> is a piece of code that produces a value.
// ie:  These all produce a value
3 + 4
1991
true && false && !false
'23 is bigger'

// A STATEMENT --> is a bigger piece of code that is executed, and which DOES NOT produce a value on its own. 
// ie:    This doesnt produce a value, it just declares "str" to be equal a value when the condition is met. WHENEVER A LINE OF CODE ENDS WITH A SEMICOLON, JUST KNOW ITS A STATEMENT.
if (23 > 10) {
  const str = '23 is bigger'; 
}

// SUMMARY: - EXPRESSIONS produce values
            - While STATEMENTS are like full sentences that translate actions that we want to perform. DOES NOT produce values. 



            
            
// ***********************************
// The conditional (Ternary) Operator/Expression
            
// Allows us to write something similar to an "if" statement but ALL IN ONE LINE.
// Things to keep in mind when using Ternary expression:
        1. Ternary operator can only have one line of code.
        2. Have to have a mandatory "else" block. (after ":")
        3. Have three parts (condition --> then the "if" part --> then the "else" part)
        4. Is an EXPRESSION/OPERATOR (produces a value), and thus can be used inside of a Template Literal. Unlike "if-else" STATEMENTS (does not produce a value), and thus cannot be used inside a Template Literal.

            
// if condition is met ? execute this line of code : else execute this line of code
const age = 23;
age >= 18 ? console.log('Can drink wine 🍷') : console.log ('Too young LUL 🤣');
     

// STORING Ternary Expressions to VARIABLES
// Ternary expression is an expression, which means IT CAN PRODUCE A VALUE, and VALUES CAN BE ASSIGNED TO A VARIABLE. 
// ******* So we can use Ternary expressions to CONDITIONALLY declare values to variables. Like so:

const age = 23;
// this means if condition is met --> then decalre to value 'Can drink wine 🍷' to the "drink" variable , else declare tht value 'Too young LUL 🤣' to the "drink" variable.
const drink = age >= 18 ? 'Can drink wine 🍷' : 'Too young LUL 🤣';
console.log(drink);


// if we use the "if-else" statement, it would be multiple lines
let drink2;
if (age >= 18) {
  drink2 = ('Can drink wine 🍷');
} else {
  drink2 = ('Too young LUL 🤣');
}
console.log(drink2);


// USING TERNARY EXPRESSIONS in TEMPLATE LITERALS.
// Template Literal ONLY TAKES VALUES (ie: EXPRESSIONS). And since Ternary expression IS an expression, then we can us it in the Template Literal. Unlike "if-else" statements which do not return a value and thus CANNOT be used in the TEMPLATE Literal.

const age = 23;
console.log(`I can drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
// Ouput: I can drink wine 🍷




// ***********************************
// FUNCTION DECLARATION (type of function)

// An important principle in coding is DRY code (Dont Repeat Your Code). Functions help us do this by reusing chunks of code.

// A function is a piece of code, that we can reuse over and over again in our code.

// It is like a variable, but for whole chunks of code.

function logger() {
  // function body
  console.log('Mikel');
}

// Using a function.  
/* Also called INVOKING the function, RUNNING the function or CALLING the function */
logger();


// Receiving ("Parameters") and Returning ("Return") data using functions

// "Parameters" are like variables that are specific only to this function, and they will get defined once we call the function. Paramaters ARE VARIABLES PLACED IN THE FUNCTION.
// "Arguments" ARE THE VALUES OF THE FUNCTION'S PARAMTERS. WHEN CALLING THE FUNCTION WE ADD ARGUMENTS (VALUES) TO THE PARAMATERS (VARIABLES).

// "Return" keyword lets us return any value from the function. The result of executing the function.
  // "Return" keywords IMMEDIATLY EXITS THE FUNCTION, AFTER IT GETS EXECUTED. (The function has returned). WON'T EXECUTE ANYTHING UNDERNEATH IT.
    // ***** One thing to keep in mind ---> is that "console.log()" DOES NOT RETURN A FUNCTION. It is just a function that is called within a function. And has nothing to do with returning a function. 

// Have to call the function for it to do anything, otherwise it is useless.


function foodProcessor(apples, oranges) { // ** Parameters **
  const juice = (`Juice with ${apples} apples, and ${oranges} oranges.`)
  return (juice);
}

// we capture the return value of the function into a variable 
const appleJuice = foodProcessor(5, 0); // ** Arguments **
console.log(appleJuice);

const orangeJuice = foodProcessor(0, 2);
console.log(orangeJuice);


// ***********************************
// FUNCTION EXPRESSIONS stored in a variable, called an ** ANONYMOUS FUNCTION ** (another type of function)


// A function without a name (function expression), that you store in a variable.
      // The whole thing is then an ANONYMOUS FUNCTION

const calcAge2 = function (birthYear) {
  return (2037 - birthYear);
}

calcAge2(1993); // Output: 44

// Remember, expressions produces values.
// IF SOMETHING PRODUCES A VALUE, WE CAN STORE IT IN A VARIABLE. (just like a function)




// ***********************************
// The main Difference between FUNTION DECLARATIONS and FUNCTION EXPRESSIONS

// Is that we can CALL a function declaration BEFORE they are defined in the code. 
  // Whereas, we CANNOT CALL a function expression BEFORE they are defined in the code.
    // This is due to a process called HOISTING.

// ie: 
  // We CAN do this (Function Declaration):
calcAge(1993); // calling the function before declaring it.

function calcAge(birthYear) {
  return(2037 - birthYear);
}
  
  // We CANNOT dot this (Function Expression)
calcAge2(1993); // This will give us an error 

const calcAge2 = function(birthYear) {
   return(2037 - birthYear);
}


// ***********************************
// ARROW FUNCTION (another type of functions) [was added to Javascript in ES6]

// An Arrow function is a simple form of a Function Expression, that is shorter and therefore faster to write

// Things to keep in mind:
      1. DONT need the "return" keyword, WHEN we only have one line of code. Because Return happens implicitly.
      2. DONT need the curly braces to define a code block, WHEN we only have one line of code (I prefer to write them tho)
      4. DONT need the parentheses around the parameter, WHEN we only have one parameter.
      5. So Arrow functions are great for one liner functions.
      6. We NEED the "curly braces" and "return" tho, WHEN we have more than one line of code. 

// Example with ONE parameter and ONE line of code in the code block.
const calcAge = birthYear => 2037 - birthYear;
/* Same as this --> 
const calcAge = (birthYear) => {2037 - birthYear}; // I prefer this way */
const age = calcAge(1993);
console.log(age);


// Example with MULTIPLE parameters and MULTIPLE lines of code in the code block.

const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = (2037 - birthYear);
  const retirement = (65 - currentAge);
  return (`${firstName} have ${retirement} years left until retirement.`);
}

console.log(yearsUntilRetirement(1993, 'Mikel'));




// ***********************************
// Functions Calling other Functions

// Example: 

function cutPieces(fruit) {
  return (fruit * 4); // cut fruit into 4 pieces
}

function foodProcessor(apples, oranges) { 
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = (`Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`)
  return (juice);
}

console.log(foodProcessor(2, 3));





// ***********************************
// Data Structures

// Data structures store data, so we can use it later. Two main types of data structure in Javascript are: 
                       1. Arrays 
                       2. Objects
                       
                       
// ***********************************
// Array data structure
                       
// Array is a data structure. Its a big container on which we can throw variables and then later use them.

// Literal Syntax                       
const friends = ['Mikel', 'Rodriguo', 'Peter'];
console.log(friends[0]); // Output: 'Mikel'
console.log(friends.length); // Output: 3    //  ".length" is a property
console.log(friends[friends.length - 1]); // Output: 'Peter'

// Another way of writing an array (using the "Array()" function)
const years = new Array(1992. 1880, 1780, 1997); // have to use the "new" keyword 
  
// Things to keep in mind: 
**** PRIMITIVES ARE LIKE numbers, strings, booleans etc. Basically a primitive value is data that is not an object and has no methods. ****
  1. We CAN change the values of arrays (mutate them), even tho they are declared with "const" because an array is NOT a primitive value (its a reference value). It works that way because of the way Javascript stores things in memory.
  1A. Only primitive values are immutable (cannot be changed if declared "const")
        friends[2] = 'Jay';
        console.log(friends); // Output: ["Mikel", "Rodriguo", "Jay"] 

  2. We CANNOT change the entire array tho, like this:
        friends = ['Alice', 'Francesca']; // THIS WILL GIVE US AN ERROR.

  3. Javascript expects an EXPRESSION in each position, so we can calculate something in a position, or write the name of a variable that has a value stored in it. // Remember, expressions produces values.
  4. We CAN store an array, inside another array. And we can also have different datatypes inside an array.
       const firstName = 'Mikel'
       const mikel = [firstName, 'Kamel', 2037 - 1993, friends];
       console.log(mikel); // Output: ["Mikel", "Kamel", 44, Array(3)]



                       
// ***********************************
// Array Methods/Functions

// Array Methods are javascript built-in functions that we can apply onto arrays.
const friends = ['Mikel', 'Rodriguo', 'Peter'];

1. "push()" method/function --> Adds one or more elements to the end of the array. Returns the length of the new array.
// ex: 
      friends.push('Jay');  
      console.log(friends); //Output: ["Mikel", "Rodriguo", "Jay", "Jay"]

2. "unshift()" method/function --> Adds one or more elements to the beginning of the array. Returns the length of the new array.
// ex: 
      friends.unshift('Joey');  
      console.log(friends); //Output: ["Joey", Mikel", "Rodriguo", "Jay"]

3. "pop()" method/function --> Removes the last element of the array. (Doesnt take an argument). Returns the removed element.
      friends.pop();  
      console.log(friends); //Output: [Mikel", "Rodriguo"]

4. "shift()" method/function --> Removes the first element of the array. (Doesnt take an argument). Returns the removed element.
      friends.shift();  
      console.log(friends); //Output: ["Rodriguo", "Jay"]

5. "indexOf()" method/function --> Tells us in which position a certain element is, in the array. (Takes in a parameter). Returns the index on which the argument's element is located inside the array.
    If the element is not in the array, it will return a -1.
      console.log(friends.indexOf('Rodriguo'));  //Output: 1

6. "includes()" an ES6 method/function --> Returns a Boolean. True if the argument's element is in the array, or false if it is not. This method uses strict equallity "===" (does not do datatype coercion)
        console.log(friends.includes('Mikel')); // Ouput: true




'// *****************************************************************'*
    '// *****************************************************************'
// OBJECT data structure

// An object is just like an array (where we group together different variables that belong together).

// Objects enables us to give names to the different values it has. Unlike Arrays, where we only define the values.
// In Objects, we define Key-Value pairs. Key is the Varaiable name.
        1. We use curly braces when creating an object
        2. We use a colon after defining the Key
        3. The Value of the Key, can be any datatype
        4. Then use a comma to seperate the Key-Value pairs
        5. Each Key-Value pair is called a ** PROPERTY **
          
// Object Literal Syntax
const mikel = {
  firstName: 'Mikel',
  lastName: 'Kamel',
  age: 2037 - 1993,
  job: 'Non',
  friends: ['Rodriguo', 'Peter', 'Steven']
};


// THE DIFFERENCE BETWEEN ARRAY and OBJECT: is that the ORDER of the values in an object, DOES NOT matter at all, when we try to retrieve them. Whereas the order of the values matter in Arrays, because we access a specific values/elements, depending on its order number in the array.

// This means that we should use Arrays for more ordered data. And use objects for more unstructured data, data that we want to name --> and then retrieve from that object, based on their name.




// ***********************************
// Retrieving and Changing Data in Objects
        [Dot vs. Bracket Notation]


const mikel = {
  firstName: 'Mikel',
  lastName: 'Kamel',
  age: 2037 - 1993,
  job: 'Non',
  friends: ['Rodriguo', 'Peter', 'Steven']
};


// RETRIEVING data from an Object 

console.log(mikel.firstName);   // [using DOT operator] ---> ."ACTUAL property name (not a string)"
console.log(mikel['firstName']);    // [using Brackets Notation] ----> [STRING with the property name/Key]

// The difference between the Dot operator and the Brackets Notation, is that in the brakcets notation we can put ANY expression (a piece of code that produces a value) in between the square brackets "[]". 
// In Dot notation, we have to use the REAL final property name, and NOT a COMPUTED property name. 
// ie:
const nameKey = 'Name';
console.log(mikel['first' + nameKey]); // Output: Mikel
console.log(mikel['last' + nameKey]); // Output: Kamel


// Example:
let interestedIn = prompt(
  "What do you want to know about mikel, his firstName. lastName, age, job, or friends?"
);

console.log(mikel.interestedIn); // Output: UNDEFINED  // "undefined" is what we get when we try to access a property that does not exist.  // Reason we get "undefined" is because "mikel" object does not have a property called "interestedIn".
console.log(mikel[interestedIn]); // if we enter 'firstName' in the prompt ---> Ouput: Mikel  // the 'interestedIn' prompt is an expression that gets evaluated in the square brackets.


// REMINDER: // TRUTHY values - are values that will be converted to true. 
    // So any number that is not zero, or any string that is not an empty string ('')

if (mikel[inetrestedIn]) { // Truthy value, if the user entered a property name that exists in the 'mikel' object
   console.log(mikel[interestedIn]);
} else { // if user enters a property name that does not exist in the object, then 'mikel[interestedIn]' will return 'undefined' which is a FALSY value. thus triggering this block of code.
  console.log('Wrong request!. Please choose between firstName. lastName, age, job, or friends');
}

  


// ADDING new properties to an Object
  
mikel.location = 'Egypt'; // using the DOT notation
mikel['location'] = 'Egypt';
  
  
  


'// ***********************************'
// Object Methods


// Writing a method in an Object

// Remember that objects take Key/Value pairs, and since Expressions produce a value, we can write a function expression as the value of a key inside an object. We CANNOT write a function Declaration for instance, inside an object, because it does not produce a value. 
// ****** ANY FUNCTION THAT IS ATTACHED TO AN OBJECT ---> IS CALLED A "METHOD"

// the "this" keyword or variable is equal to the object on which the method is called.
    // In other words, it is equal to the Object calling the method.

const mikel = {
  firstName: 'Mikel',
  lastName: 'Kamel',
  birthYear: 1993,
  job: 'None',
  friends: ['Rodriguo', 'Peter', 'Steven'],
  hasDriversLicense: true,
  
  // One way of writing a method in an Object --->  Method using a parameter
   calcAge1: function(birthYear) {   // This is called a METHOD/PROPERTY. calcAge is a PROPERTY of the 'mikel' Object.
    return (2037 - birthYear); 
  }, 
  
  // Another way ---->  Method using the 'this' keyword/variable
  calcAge2: function() {
    console.log(this); // just to clarify what "this" refers to
    return (2037 - this.birthYear); // "this" is equal to the object calling the method. ie: "mikel.birthYear" 
  },
  
  // Another way ---->  Method using the 'this' keyword/variable THAT STORES the output of the function in a new property, by creating one.
      // This is the most efficient way if we want to use the method multiple times, because then we wouldn't have the to compute it everytime, instead we would compute it once --> store it in a property --> and then get it from there everytime we need it.
  calcAge3: function() {
    this.age = (2037 - this.birthYear); // creates a new property in the 'mikel' object ("this")
    return (this.age); // We dont need to return "this.age", we can just make this method only calculate the age; but it is good practice to also return it.
  }
  
  getSummary: function () {
    return (`${this.firstName} is a ${this.calcAge3()}-year old ${
      this.job
    }, and ${
      this.hasDriversLicense ? "has" : "does not have"
    } a driver's license.`);
  },
};


const calcAge = function(birthYear) { // This is called a FUNCTION. calcAge here is a regular VARIABLE.
  return (2037 - birthYear);
};


// Calling Methods/Properties with a function expression within an Object
console.log(mikel.calcAge1(mikel.birthYear));
console.log(mikel['calcAge1'](mikel['birthYear']));

// if we're using the "this" keyword in the object's property, then the function expression doesn't have a parameter and thus we dont need an argument when calling the function. Like so:
console.log(mikel.calcAge2());


// after adding the 'calcAge3' property
console.log(mikel.age); // Only retreives the property that was calculated once using 'mikel.calcAge3();'


console.log(mikel.getSummary());  





'// ***********************************'
// Loops (Another type of a Controlled Structure)

// Loops allows us to automate repetitive tasks. Tasks that we have to perform over and over again.

// For-Loop
/* Things to keep in mind: 1. A for-loop has 3 parts
                           2. The first part is the initial value of the counter.
                           3. The second part is a logical condition that is evaluated, before each iteration of the loop. Before each time that the code is executed. IF THIS CONDITION IS TRUE --> THEN THE NEXT ITERATION WILL RUN, BUT AS SOON THIS CONDITION IS FALSE --> THEN THE LOOP STOPS. SO IN SHORT, FOR-LOOP KEEPS RUNNING WHILE THE CONDITION IN THE SECOND PART IS TRUE. 
                           4. The Third part updates the counter after each iteration (by one in this case "i++"). */
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repitition ${i} 🏋️‍♀️`);
}

*** WE DONT ADD 'return' IN A FOR --> BECAUSE IT WILL IMMEDIATLY EXIT THE LOOP *** 
  
// We dont have to put curly braces if we only have one line of code in the code block. Like so:
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(`Button: ${btnsOpenModal[i].textContent}`);
  

// Looping through arrays, using For-Loop

// Example 1:
const mikel = ['Mikel', 'Kamel', 2032 - 1993, 'Programmer', ['Peter', 'Steven', 'Rodriguo'], true];

const valueTypes = [];

for (let i = 0; i < mikel.length; i++) {
  // READING elements from 'mikel' Array
  console.log(mikel[i], typeof (mikel[i]));
  
  // ADDING elements to an array 
  valueTypes[i] = typeof(mikel[i]); // Adds the types of all the values in the 'mikel' array, to the 'valueTypes'
  
  // Another way of ADDING elements to an array 
  valueTypes.push(typeof(mikel[i]));
}

// Example 2:

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  const calcAge = 2037 - years[i]; // ******* The reason why we can use 'const' even tho the calcAge value changes as we loop over the 'years' array, is because in each iteration, a new calcAge variable is beingcreated, so we are not mutating or changing the original calcAge. In other words, in each iteration we simply create a new calcAge, which is why we use 'const'.
  age.push(calcAge);
}

console.log(years);
console.log(age);


// **** Continue and Break statements (Two important statements for Loops) ****

// Continue statement is used to exit the current iteration of the loop and continue to the next one. SKIPS an iteration, if it doesnt meet a certain condition.

// Continue statements are perfect for adding elements to the array that are only strings. Because with Continue, we can exit the current iteration of the loop. 
Inorder to create a Continue statement, we add the keyword 'continue' at the end.

//Example: 
for (let i = 0; i < mikel.length; i++) {
  if (typeof (mikel[i]) !== 'string') continue; // if the typeof current element in 'mikel' array, is not a string ---> then skip it ("continue") (means exit the current iteration of the loop, and start the next one immediatly. So the OUTPUT WILL ONLY BE ELEMENTS IN THE ARRAY THAT ARE OF TYPE STRINGS.)
  console.log(mikel[i], typeof(mikel[i]));
}


// Break statement is used to completly terminate the whole loop.

//Example: 
for (let i = 0; i < mikel.length; i++) {
  if (typeof (mikel[i]) === 'number') break; // As soon as a number is found ---> break the loop. Stop the whole loop.
  console.log(mikel[i], typeof(mikel[i]));
}



// *****
// Looping through an Array Backwards

const mikel = ['Mikel', 'Kamel', 2032 - 1993, 'Programmer', ['Peter', 'Steven', 'Rodriguo']];


for (let i = mikel.length - 1; i >= 0; i--) {
  console.log(mikel[i]);
}


// *****
// Creating a Loop inside a Loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting Exercise ${exercise}`);
  
  for (let rep = 1; rep < 6; rep ++) {
    console.log(`Lifting Exercise ${exercise} weight repetition ${rep} 🏋️‍♂`)
  }
}



// ***********************************
// While Loop

// With a while loop, we can only specify a condition. And the while loop will keep running as long as the condition is true. 

// Example 1
let rep = 1;

while (rep <= 10) { // while 'rep' is smaller than or equal to 10 --> execute the code block
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

// A While-loop is more versatile than the for-loop, which means that it can be used in a larger variety of situations, and thats because it does not need a counter (like for-loop), all the while-loop needs is a condition to stay true, for it to keep running. 
The condition can be anything, not just a number. UNLIKE the For-Loop which has to have a counter and a NUMBER that is increasing (or decreasing).
**** WHENEVER WE NEED A LOOP WITHOUT A COUNTER, USE THE WHILE-LOOP ****
   (when we dont know before hand how many iterations the loop will have)

// Example 2:
// Keep rolling the dice until the rolled dice is equal to 6

let randomDice = Math.floor(Math.random() * 6 + 1);

while (randomDice !== 6) {
  console.log(`You rolled ${randomDice}`);
  randomDice = Math.floor(Math.random() * 6 + 1);
  if (randomDice === 6) {
    console.log(`Loop is about to end...`);
  }
}



// ****************************************
// What is the DOM?

DOM (Document Structure Model) is a structured representation of HTML documents. It allows javascript to acces HTML elements and styles in order to manipulate them.
So the DOM is a connection point between HTML documents and Javascript code.

// How is the DOM created?

The DOM is created by the browser as soon as the HTML page loads. And is stored in a tree structure. Check pictures in notes folder.


Things to remember: 1. Bascially whatever is in the HTML document, also has to be in the DOM.
                    2. So the DOM is a complete representation of the HTML document. So that we can manipulate it in complex ways.
 
                    
// DOM is not part of JavaScript *******
             
The DOM and all the properties we can use to maniulate the DOM (such as 'document.querySelector()'), ARE NOT part of JavaScript.

The DOM and DOM methods are part of WEB APIs ('Application Programming Interface'). WEB APIs are like libraries, that are also written in JavaScript, and that are automatically available for us to use.
They are libraries that browsers implement and that we can access from our javascript code.

There is an official DOM specification that browsers implement, which is the reason why DOM manipulation works the same in all browsers



// ******************************
// Selecting and manipulating elements using Javscript
// (Look at Bootcamp notes for this topic)

// Reading the content of an element (".textContent")
console.log(document.querySelector('.message').textContent);

// Setting the content of an element (".textContent")
document.querySelector('.message').textContent = 'Correct Answer!';

// Getting the value of an INPUT (".value") property
console.log(document.querySelector(".guess").value);

// Setting the value of an INPUT (".value") property *******
document.querySelector(.guess).value = 23;

**** WHENEVER WE GET SOMETHING FROM THE USER INTERFACE (ie: from an Input field), it ussually is a STRING. ****

  
  
// ******************************
// Manipulating css styles using JavaScript

Things to remember: 1. Need to '.style' property
                    2. Then specify the css property in camelCase (ie '.backgroundColor')
                    3. And the value always need to be a STRING. 
                    
// Examples: 
document.querySelector('body').style.backgroundColor = '#60b347'; 
document.querySelector('.number').style.width = '20rem';

 document.querySelector("...")  // ==> also returns a single item. Returns the first element with the tag, class or ID specified. 
     
document.querySelectorAll("...")  // ==> GetS all the selectors in the document with class="example". Returns an NodeList, which like an Array but not exactly as an array tho.



// ********************************************
// classList (uses classes only) [adding, removing, toggling classes]

document.querySelector("h1").classList.add("huge"); // adds a class to the HTML document. the "huge" class is created in the styles.css, so by using the classList property, we apply the css properties to the h1 element by adding the "huge" class to it. TAKES IN THE NAME OF THE CLASS AS A STRING.

document.querySelector("h1").classList.remove("huge"); // removes the "huge" class from the element.

{Using multiple classes}
document.querySelector("h1").classList.remove("huge", "small"); // removes the "huge" class from the element.

document.querySelector("h1").classList.toggle("huge"); // toggles between on/off for the class everytime you run the javaScript code. Return a bool.

// Checking if an element HAS a certain class
document.querySelector('h1').classList.contains('huge') // Returns a bool


  
// ******************************
// Handling Click Events using Javscript
  // [CHECK NOTES BELOW FROM BOOTCAMP]

// ('.addEventListener') 

// An 'event' is something that happens on the page. For example, a mouse click, a mouse moving, a key press, or many other events.
// With an eventListener, we can wait for a ertain thing to happen, and then react to it. It attaches an EventHandler to the element, which is the function expression or anonymous function in its second argument.

// In '.addEventListener()', first argument is the name of the event that we are listening for, and the second argument is the function expression that contains the code that we want to execute whenever the event happens.

// The second argument, passed in function expression, will only be called as soon as the event happens. Beacuse we are not calling it using the parentheses.


document.querySelector('.check').addEventListener('click', function() {
  console.log(document.querySelector('.guess').value);
});




// ********************************************
// Keypress events (Responding to keyboard events)
    // Still uses ".addEventListener()" because keypress event is just another type of event(just like 'click' event)

// Keyboard events are GLOBAL events, because they do not happen on one specific element ---> as a result we ussually listen on the WHOLE document.


// There are three types of events for the keyboard: 
                                        1. 'keydown' (we usually use this)
                                        2. 'keypress'
                                        3. 'keyup'

// When we press a keyboard button, a keydown event is generated which the listener function (second parameter in ".addEventListener()") is waiting for that event to happen ---> and when that event happens javascript generates an object which contains all the information about the event/pressedkey --> which then we can access that object, by adding a paramter to the event handler function (second parameter in ".addEventListener()").


document.addEventListener('keydown', function (event) {
  console.log(event); // console logs the Object that was generated by javascript when the key was pressed, or when the event happened. That object contains all the information about the key that was pressed.
  console.log(event.key);  // console logs the name of thekey that was pressed
  
  if (event.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) { // if 'Escape' kep is pressed. And the "modal" class DOES NOT contain a "hidden" class 
    console.log('Modal DOES NOT contain the HIDDEN class'); // then execute this code
  }
});


// 
// Manipulating HTML attributes from JavaScript

// Example: 
// in HTML:
<img src="dice-5.png" alt="Playing dice" class="dice" />
  // in Javascript:
  document.querySelector('.dice').src = (`dice-${randomNum}.png`);

// We can also use:
 document.querySelector('.dice').setAttribute('src', diceImage);
[SEE BELOW FOR MORE EXPLANATION]
 
  


// ******************************************************************* JavaScript Theory *******************************************************************
                                                          LOOK AT PICTURES WITH SLIDES FOR THIS PART

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648469#questions/13060170

JavaScript is a --> 1. High-Level: Which means that we DO NOT have to manage resourses manually, everything happens automatically. Downside is programs will never be as fast as programs written in Low-Level languages (C languages).

                    2. Garbage-Collection: An algorithm inside the Javascript engine, that automatically removes old unused object from the computer memory.

                    3. Just-in-time (JIT) compiled language: Means the Javascript engine converts our code to Machine code (0s and 1s) by compiling AND interpreting, so that the computer can understand it. (See pictures) Means javascript is gets both, compiled and interpreted.

                    4. Multi-paradigm: Paradigm is an approach and mindset of structuring code, which will direct your coding style and technique.
                (Javascript does all of the three Paradigms below)
    Three popular paradigms are --> A. Procedural programming: organizing the code in a linear way, with some functions in between.
                                    B. Object-oriented programming (OOP): Software is designed by using objects that interact with one another. In object-oriented programming data structures, or objects are defined, each with its own properties or attributes. Each object can also contain its own procedures or methods.
                                      C. Functional programming(FP)
                    
                     5. Protoype-based object-oriented: Which means that is Object-oriented programming ????

                     6. First-class functiions: Which means that functions are simply treated as variables. We can pass them into other functions, and return them from functions.

                     7. Dynamic: Dynamically typed. We dont need to assign Datatypes to variables. And the types of variables can easily be changed.

                     8. Single-threaded: (Concurrency Model) processes contain the execution of instructions in a single sequence. In other words, one command is processes at a time. 
  
                     9. Non-blocking event loop: takes long running tasks, executes them in the 'background', and puts them back in the main thread once the are finished.



/* ⭐ Side Note: A code block is code that is within curly braces. */
      
// *******************************
// Best Practices when declaring/calling function (look at Hoisting pictures)
                     
                     1. Always declare variables at the top.
                     2. Dont use 'var' data-type. Use 'const' most of the time to declare variables, and 'let' if you want to change variables later.
                     3. Declare variables at the top of each Scope. ie: declare them on the top inside a function.
                     4. Always declare functions first, and THEN call them. Not the other way around, even with Function Declarations which are Hoisted and would still work.
                     
// *******************************
// Global Window Object
// "window" is the Global Object of JavaScript in the browser.
                     
      By typing "window" in the browser console, you can see all kind of stuff, like all the methods available. Check it out.

      console.log(window.myName);



'// *******************************'
      '// *******************************'
// Copying properties from one object to another.
// "Object.assign()" method. 


// Objects are Reference type, which are stored in the HEAP, so their properties can change even if declared 'const' [mutable] (check picture notes). So inorder to copy the properties from one declared object to a new object, we can use the "Object.assign()" method, which only copies the properties of that object, and thus creating a NEW object that has its own memory address allocated in the Call Stack, that references the newly stored object's location, with it copied properties.
They dont share the same address in the CALL STACK, each object has its own address with values that references the different memory addresses in the HEAP.

// Example:
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}

const jessica2 = Object.assign({}, jessica);

jessica2.lastName = 'Davis';
console.log('Before marriage:', jessica); // Before marriage: {firstName: "Jessica", lastName: "Williams", age: 27}
console.log('After marriage:', jessica2); // After marriage: {firstName: "Jessica", lastName: "Davis", age: 27}



// "Object.assign()" method only creates a 'shallow copy' and not a 'Deep Clone', which means that it only copies the properties in the first level, AND JUST REFERENCES OBJECTS/ARRAYS IN ALL LEVELS BEYOND THAT, ie:  OBJECTS/ARRAYS NESTED WITHIN THE OBJECT . (Arrays are objects behind the scenes, so it wouldn't copy Arrays either)

// A 'Deep Clone' on the other hand would copy EVERYTHING. So even objects nested into other objects, including Arrays which are Objects behind the scenes.
Creating a 'Deep Cloning' tho, is a not easy to achieve. We would have to use an External Library like LowDash, which has alot of helpful tools and one of them is for 'Deep Cloning'.





'// *****************************************************************'
      '// *****************************************************************'
// This part focuses more on Modern JavaScript (ES6+) features and syntax

//**********************
// ARRAY DESTRUCTURING

// An ES6 feature, and is a way of unpacking values from an Array or an object, into seperate variables. In other words, destructring is to break a complex data structure down into a smaller data structure, like a variable.

// REMEMBER --> Data structures store data, so we can use it later. Two main types of data structure in Javascript are: 
                       1. Arrays 
                       2. Objects

// So for Arrays, we use Destructuring to retrieve elements from the array, and store them into variables in a very easy way. Like so:


const arr = [1, 2, 3];

// If we wanted to retrive each one into its own variable, WITHOUT Destructuring:
const a = arr[0];
const b = arr[1];
const c = arr[2];

// WITH destructuring ---> 
const [a, b, c] = arr;
console.log(a, b, c); // Output: 1 2 3 
console.log(arr); // Output: (3) [1, 2, 3]     // which means we are not destroying the actual Array, we are just unpacking it.

// Whenever JavaScript sees the destructuring assignement '[]' on the left side of the equal sign, it knows that it should do destructuring.


// We dont have to destructure all the elements in the Array --> 

const [a, b] = arr; // here we only take the first two elements of the Array
const [a, , b] = arr; // here we only take the FIRST and THIRD elements of the Array, the SECOND element is skipped. We leave a WHOLE or a BLANK space in the Destructuring operator inorder to skip the second element.



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  },
}

// 🟢 ************ Destructuring an object property with an array
let [main, , secondary] = restaurant.categories; // equal to array from which "main" and "secondary" should be taken from
console.log(main, secondary); //Output: Italian Vegetarian


// 🟠 ************ Switching/Mutating Variables while destructuring Objects
// Inorder to SWITCH variable values of "main, secondary" -->

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Output: Italian Vegetarian

// Without destructuring: 
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Output: Vegetarian Italian

// WITH Destructuring: 
[main, secondary] = [secondary, main]; // Output: Vegetarian Italian


// 🔵 ************ Receiving 2 return values from a function 
// Another trick with Destructuring is that we can have a function return an Array, and then we can immediatly destruct the result into different variables. This allows us to return multiple values from a function.

// In this example, we receive 2 return values from a function (immediatly creating two variables out of a function call)


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function (starterIndex, mainIndex) {
    const starter = this.starterMenu[starterIndex];
    const main = this.mainMenu[mainIndex];
    return [starter, main];
  },
}

console.log(restaurant.order(1, 2)); // Ouput: (2) ["Bruschetta", "Risotto"]

const [starterCourse, mainCourse] = restaurant.order(1, 2); // destructuring
console.log(starterCourse, mainCourse); // Ouput: Bruschetta Risotto



// 🟡 ************ Nested Destructuring in Arrays
// Exmample with a NESTED Array (one Array inside another Array)

const nestedArray = [2, 4, [5, 6]];

const [a, , c] = nestedArray;
console.log(a, c); // Output: 2 [5, 6]

const [a, , [c, d]] = nestedArray; // nested destructuring (destructuring within destructuring)
console.log(a, c, d); // Output: 2 5 6


// 🟠 ************ Default Values
// Another feature of Destructuring, which is that we can set DEFAULT values for the variables when we are extracting them (very useful in the case where we dont know the LENGTH of the Array) -->

// here we are trying to extract a value that doesn't exist, so we get 'undefined'
const [a, b, c] = [8, 9];
console.log(a, b, c); // Output: 8 9 undefined

// setting Default values --> the 'c' value doesn't exist but is not 'undefined' because we gave it a default value, so it is equal to 1.
const [a = 1, b = 1, c = 1] = [8, 9];
console.log(a, b, c); // Output: 8 9 1


// DEFAULT VALUES get applied ONLY when the property DOES NOT exist in the Array/Object we are extracting from.




'//***************'
// OBJECT DESTRUCTURING

1. When destructuring Objects, we use the curly braces "{}" to destructure (because this is also how we create objects)
2. Then we provide the variable names, that EXACTLY match the PROPERTY NAMES, that we want to retrive from the object.

// Example:
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


So remember: when destructuring objects --> 1. We use curly braces.
                                            2. And we use the EXACT property names in the main object, that we want to extract.
   
                                            
// ******** Variable name the SAME as Property names --> 
// Extracting 'name', 'categories' and 'openingHours' from the 'restaurant' Object

// Since in objects the ORDER does NOT matter (unlike in Arrays), we dont need to manually skip elements like when destructuring an array (ie: const [a, , [c, d]] = nestedArray;)
                                            
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Ouput:   Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]                            



// ******** Making Variable NAMES DIFFERENT from the Property names --> 
// need to specify the exact property name as in the object we are extracting from, but then add a semicolon followed by the NEW variable name.

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags); // Ouput:   Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]  




// ******** Default Values in objects
// Setting DEFAULT values for the variables when we are extracting them 

// **** DEFAULT VALUES get applied ONLY when the property value DOES NOT exist in the Array/Object we are extracting from.

// so here the default value '[]' for 'menu' will be applied because there is no 'menu' property in the 'restaurant' object, BUT it wont be applied for the 'starterMenu' because it has value

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // Output: [] (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]



// ******** Switching/Mutating Variables while destructuring Objects

let a = 111;
let b = 999;
const object = {
  a: 23,
  b: 7,
  c: 14,
};

{ a, b } = object; // Ouput: 'ERROR'
// ** javascript takes the left side and assumes its a code block, and we cant make code blocks equal something, so we get an error.
// So inorder to switch the values and not get an error, we have to wrap the whole thing in between BRACES.

console.log(a, b); // Output: 111 999
({ a, b } = object);
console.log(a, b); // Output: 23 7



// ************ Nested Destructuring in Objects

// from object above
const { name, openingHours, categories } = restaurant; // after storing the 'openingHours' property in a variable

const {fri} = openingHours;
console.log(fri); // Output: {open: 11, close: 23}

// Now destructuring a NESTED object (just memorize this)
const {fri: {open, close}} = openingHours;
console.log(open, close); // Output: 11 23

// we can even give them different variable names
const {fri: {open: a, close: b}} = openingHours;
console.log(a, b); // Output: 11 23



// ************ Passing an Object into a parameter of a function, as an argument (when calling the method) --> and then immediatly destructuring that argument object in the method's parameter.

// remember:  ANY FUNCTION THAT IS ATTACHED TO AN OBJECT ---> IS CALLED A "METHOD"

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  orderDelivery: function ({ time = '21:00', address, mainIndex = '0', starterIndex = '2' }) { // Since we did destructing in the parameter itself, we now have 4 different variables. (We can even assign them default values in the parameter)
    console.log( `Order received ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`);
  },
};


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole',
  mainIndex: 2,
  starterIndex: 2,
});
// Output: Order received! Garlic Bread, and Risotto will be delivered at 22:30 to Via del Sole.


// Making use of the default values we set in the method's parameter. Which is why 'time' is '21:00' and 'mainIndex' is '0'.
restaurant.orderDelivery({
  address: 'Via del Sole',
  starterIndex: 1,
});
// Output: Order received! Bruschetta, and Pizza will be delivered at 21:00 to Via del Sole.


// Its important to remember that: 
1. We passed in ONE object as an argumment to the parameter, and NOT four different arguments
2. Then as we receive that argument in the function --> we immediatly destructure it (*** which is why the names in the parameter need to be the EXACTLY the same as the names in the object's properties in the argument)
3. Order inwhich we specify the arguments in the paramter while destructring, DOES NOT MATTER tho.                                                                         
                                                                                      
                  
                                                                                      
                                                                                      
                                                                                      
// *************************************************************************
// Spread Operator (...)
                                                                                     
// We can use the Spread Operator to basically expands an Array into all its elements.
// Bascally UPACKING all the Array elements at one.
        
// We can ONLY use the Spread Operator --> 
                            1. When building an Array.
                            2. Or when we pass values into a function.
// If we wanted to create a NEW array based on this array, with rwo new elements in the beginning -->

const arr = [7, 8, 9];
// without the spread operator
const newBadArr = [1, 2, arr[0], arr[1], arr[2]]; 
console.log(newBadArr); // Ouput: [1, 2, 7, 8, 9]

// with spread operator
const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr); // Ouput: [1, 2, 7, 8, 9]

// So the Spread operator takes all the values out of the specified array, and adds them individually to new array in the same order.
**** So we can use the spread operator whenever we would otherwise write multiple values, seperated by commas.

// We can also log the INDIVIDUAL elements of the Array --> 
console.log(...arr); // Output: 7 8 9

So whenever we need the elements of an Array INDIVIDUALLY, then we can use the spread operator.

// Example:
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

console.log(restaurant.mainMenu); // Output: (3) ["Pizza", "Pasta", "Risotto"]
const newMenu = [...restaurant.mainMenu, 'Kaki']; // this creates a NEW array but just adds a new element to it.
console.log(newMenu);  // Output: (4) ["Pizza", "Pasta", "Risotto", "Kaki"]  


// THING TO KEEP IN MIND: the Spread operator is a bit similar to destructuring because it also helps us get elements out of Arrays. 
****** The big DIFFERENCE is that Spread Operator takes ALL the elements out of the Array AND it also DOES NOT create new variables. And as a consequence we can only use it in places where we would otherwise write values seperated by commas. ******

// ⭐⭐ Two important use cases of the Spread Operator:

/ '1. Creating shallow COPIES of Arrays, using the Spread Operator'

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // Output: (3) ["Pizza", "Pasta", "Risotto"]


/  '2. Merging two Arrays together, using the Spread Operator'

const mergingArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergingArrays); // Output: (7) ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]



// 🟠 The Spread Operator DOES NOT JUST WORK ON ARRAY, it also work with ITERABLES.

// Iterables are Arrays, Strings, maps, sets. BUT NOT OBJECTS.
    // Basically most of the data structures in JavaScript are now Iterables, EXCEPT OBJECTS.
Since "Strings" are also iterables, we can also use the spread operator on a string as well.

// Keep in mind that we can ONLY use the Spread Operator --> 
                            1. When building an Array.
                            2. Or when we pass values into a function.
                            
const string = 'Mikel';
const stringArray = [...string, ' ', 27];
console.log(...string); // Output: M i k e l
console.log(stringArray); // Output: (7) ["M", "i", "k", "e", "l", " ", 27]

console.log(`${...string} Mikel`);  // ****** IMPORTANT: This wont work because Template Literals is not a place that expects multiple values, seperated by a comma.
/* So multiple values seperated by a comma are ussually only expected: 
1. When we build a new array.
2. Or when we pass arguments into a function. */



// Real World Example:
// A function that accepts multiple arguments, and then use the spread operator to actually pass those arguments.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's is your delicious pasta order with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
};


const pastaIngredients = [
  prompt('Enter First Ingredient: '),
  prompt('Enter Second Ingredient: '),
  prompt('Enter Third Ingredient: '),
];


// Without Spread Operator
restaurant.orderPasta(pastaIngredients[0], pastaIngredients[1], pastaIngredients[2]); // Output: Here's is your delicious pasta order with Peperoni, Tomatoes, and Olives.

// With Spread Operator
restaurant.orderPasta(...pastaIngredients); // Output: Here's is your delicious pasta order with Peperoni, Tomatoes, and Olives.


// *********
// Since ES2018 the spread operator also works on OBJECTS, even tho objects is not an ITERABLE

// creating a new object, by adding the properties of another object to it, and also giving it its own properties.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const newRestaurant = { foundedIn: 1981, ...restaurant, founder: 'Mikel' };
console.log(newRestaurant); // log it to the console

// Copying another Array
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy); // log it to the console

// Doesn't change the 'name' of the main restaurant we copied
restaurantCopy.name = 'LUUUUUUULLL';
console.log(restaurantCopy.name); // Output: LUUUUUUULLL
console.log(restaurant.name); // Output: Classico Italiano






// *********************************************************
// Rest Pattern 

// The Rest Pattern has the same syntax as the Spread Operator '...'. But it does the opposite of the Spread Operator.
// So the Spread Operator is to UNPACK an Array, while the Rest Pattern is to PACK elements INTO an Array

// So the Rest Pattern collects the elements THAT ARE UNUSED IN THE DESTRUCTURING ASSIGNEMENT, and condenses them into an array. WE USE THE REST PATTERN ON THE LEFT SIDE OF THE '=' SIGN, WHILE DOING DESTRUCTURING.


// Rest Pattern in ARRAYS
// 🔴 Spread Operator --> because on RIGHT side of equal sign '='
const arr = [1, 2, ...[3, 4]];

// 🟢 Rest Pattern --> because on LEFT side of equal sign '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // Output: 1 2 [3, 4, 5]
// Its called REST because it will take the rest of the elements (remianing elements of the array), and then put them into a new array. And in this case the new Array is called 'others'.


// Example using both the Spread Operator and the Rest Pattern

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};


const [pizza, , rissotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rissotto, otherFood); // Output: Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
            
/* SO REST PATTERN ONLY GETS THE ***REST*** OF THE ELEMENTS, and not any SKIPPED elements. AND FOR THAT REASON THE REST PATTERN ALWAYS HAVE TO BE THE LAST IN THE DESTRUCTURING ASSIGNMENT. 
And there can only be ONE Rest Pattern in any destructing assignment. */


            
// Rest Pattern in OBJECTS
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { sat, ...weekDays } = { ...restaurant.openingHours };
console.log(sat, weekDays); // putting 'sat' in its own variable, and creates a new object that only contains 'thu' and 'fri' called 'weekDays'.


// ************************
// Rest Paramaters (used in functions)

// by using the REST pattern as a parameter, the function can now accept both single values, AND an Array 
const add = function (...numbers) { // here we are using the REST Pattern to PACK passed in arguments values, into the parameter of the function.
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 4); // Output: 6
add(3, 4, 2, 1); // Output: 10
add(4, 6, 2, 3, 4, 5); // Output: 24

const x = [23, 5, 7];
add(...x); // using the Spread Operator. Unpacks the values, and then repacks them using the Rest Operator in the paramter, into an Array.



// Rest Parameters are perfect to use when we dont know how many parameter we need in a function. So we can pass as many arguments as we want when calling the function.


const restaurant = {
  orderPizza: function (firstIngredient, ...otherIngredients) {
    console.log(firstIngredient); // Output: Mushroom
    console.log(otherIngredients); // Output: (3) ["onion", "olives", "spinash"]
  },
};

restaurant.orderPizza('Mushroom', 'onion', 'olives', 'spinash');


// Main point of this example is that the REST Parameter serves to collect the remaining UNUSED parameters, that were not used in the function's parameter.



// SUMMARY of Spread Operators and Rest Patterns ---> 
1. So the Spread and Rest syntax both look the same, but they work in opposite ways, depending on where they are used.
2. The Spread operator is used where we would otherwise write VALUES seperated by a comma, ON THE OTHERHAND the Rest Pattern is basically used where we would otherwise write VARIABLE names sperated by commas, AND NOT VALUES SEPERATED BY COMMAS.




// *****************************************************
// Short Circuiting (&& and ||)


// Properties for Logical operators:
 1. They can use any Data type
 2. They can return any Data type
 3. And they do something called Short-Circuiting (or Short Circuit Evaluation)

// *** Short-Circuits means, that the operator will not evaluate the rest of the operands, will immediatlly return the Truthy value (if using '||), the Falsy value (if using '&&'), and the Nullish  value (if using '??').

// ******  Short Circuiting with the '||' 'OR' operator
// In terms of the '||' operator, Short-Circuiting means that whenever the '||' operator encounters a truthy value (from the left side), it will immediatly return that value, and Javascript will ignore the rest of the values/operhands after it, wont even look them. Falsy values wont be returned, UNLESS ALL values are falsy, then Javascript will return the LAST falsy value.

// The logic behind it is that when you use the '||' operator it checks if anything in the operation is true, and if something IS true, then it doesnt care about the rest of the operands.

console.log(3 || 'Mikel'); // Output: 3
console.log('' || 'Mikel'); // Output: Mikel
console.log(true || 0);  // Output: true
console.log(undefined || null);  // Output: null   // (returns the second value even tho its also a Falsy value)

console.log(undefined || 0 || '' || 'Mikel' || 23 || null); // Output: Mikel



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// WITHOUT Short-Circuiting
// In this example we want to check if 'restourant.numGuests' exist in the object, it it does we want to use its value and if it doesnt then we want to set a default value for it.
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; 
console.log(restaurant.numGuests) // Output: 10  // because 'restaurant.numGuests' doesnt exist


// WITH Short-Circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // Output: 10

// this works because first the 'restaurant.numGuests' is undefined, so the result of the '||' operator will be '10'


// in this case the 'restaurant' object has a 'numGuests' property so the first truthy value will be the result of the '||' operator
restaurant.numGuests = 23;
const guest3 = restaurant.numGuests || 10;
console.log(guest3); // Output: 23



****  SO Short-Circuiting is a way easier method of setting default values, than having to deal with a ternary operator or an IF-ELSE statement


// ******  Short Circuiting with the '&&' 'and' operator
// When it comes to Short-Circuit evaluation, the '&&' operator works in the exact opposite way of the '||' operator.

// The '&&' operator Short-Circuits when the first value is FALSY. It immediatly returns a FALSEY value as soon as it encounter it, wihtout evaluating the other operands (Short-Circuits means, that the operator will not evaluate the rest of the operands.)

console.log(0 && 'Mikel'); // Output: 0
console.log(7 && 'Mikel'); // Output: Mikel

// The logic behind this is that the '&&' operator is only true, if all the operands are true, so if it encounters a falsy operand in the operation, then that means that the entire operation is false anyways, and thus it returns the first FALSY value it encounters.


console.log( 'Hello' && 23 && null && 'jonas'); // Output: null

// Practical Example -->
// Many times we can use the '&&' operator, to avoid using 'if' statements like this, when all we want to do is to check if a certain property or value actually exists.

const restaurant = {
  orderPizza: function (firstIngredient, ...otherIngredients) {
    console.log(firstIngredient); 
    console.log(otherIngredients); 
},
  

  // WITHOUT Short-Circuiting
if (restaurant.orderPizza) { // checks if 'orderPizza' function exists
  // if it does, then execute its code block
  restaurant.orderPizza('Mushrooms', 'Spinach');
}


// WITH Short-Circuiting
// basically if 'restaurant.orderPizza' doesn't exist (undefined --> Falsy value), then the '&&' operator will short-circuit the evaluation, and wont continue with the rest of the code. (same as the if-statement).
  // but if it DOES exist (truthy value), then the second part will be evaluated.
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach')



*** ⭐ SUMMARY ⭐ --> 

The '||' operator will return the FIRST *TRUTHY* value, of all the operands, or simply the last value if all of them are Falsy.
For practical applications --> we can use the '||' operator to set default values:

const guest3 = restaurant.numGuests || 10;

The '&&' operator will return the FIRST *FALSY* value, or the last value if all of them are Truthy.
For practical applications --> we can use the '&&' operator to execute code in the second operand, if the first operand is true:

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach')




// **********************************
// The Nullish Coalescing operator (??)

restaurant.numGuests = 0;
// here 'numGuests' doesn't exist in 'restaurant' object (falsy value)--> so 'guest3' is given a default value of 10. Because '||' operator returns the first truthy value 
const guest3 = restaurant.numGuests || 10;
console.log(guest3); // Output: 10

// BUT the PROBLEM here is that when we have no guests 'restaurant.numGuests = 0;', we want 'guest3' to be equal to '0', but 0 is a falsy value so it wont be returned by the '||' operator, instead 10 is the value that will be returned.


// This is where the Nullish Coalescing operator (??) comes in. It was introduced in ES2020.

// The '??' operator works with the idea/concept of NULLISH values, instead of falsey values. 
// ***** And NULLISH values are ---> null and undefined [doesn't include 0 or '']
// so only NULLISH values will Short-Circuit the evaluation below, in other words only if 'restaurant.numGuests' is equal to null or undefined, then the second operand '10' will be returned.

const guest3 = restaurant.numGuests ?? 10; // so here 'restaurant.numGuests' is a NULLISH value (undefined because it doesnt exist), and thus return '10'.

restaurant.numGuests = 0;
const guest3 = restaurant.numGuests ?? 10; // whereas here 'restaurant.numGuests' is NOT a nullish value, so it will Short-Circuit the operation, thus return '0'


Works just like '||' operator, except it doesnt care about '0' and ''. Only Nullish values (undefined and null)



// *****************************************************************
// The for-of Loop

// Was introduced in ES6. Similar to the for-each loop in C#.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// logging each item individually to the console (both ways same result)

// using a for loop
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]); 
}

// using a for-of loop
for (const item of menu) {
  console.log(item);
}

// dont need to create a code block when there is only one line of code/statement to execute. --> 
for (const item of menu) console.log(item);  // [FUK THIS WAY]

// *** We can still use the 'continue' and 'break' keywords with the for-of loop.


// if we need the current Index and not just the current element (dont use the for-of to achieve this, but this is how we can do it)
// have to use the 'entries()' method, which creates an Array Iterator, and then iterate over the key/value pairs:

for (const item of menu.entries()) {
  console.log(item); /* Output: (2) [0, "Focaccia"]
                                (2) [1, "Bruschetta"]
                                (2) [2, "Garlic Bread"]
                                (2) [3, "Caprese Salad"]
                                (2) [4, "Pizza"]
                                (2) [5, "Pasta"]
                                (2) [6, "Risotto"]         */
  
  // WITHOUT destructuring
  console.log(`${item[0] + 1}. ${item[1]}`); /* Output: 1. Focaccia
                                                        2. Bruschetta
                                                        3. Garlic Bread
                                                        4. Caprese Salad
                                                        5. Pizza
                                                        6. Pasta
                                                        7. Risotto           */
  
  
}

console.log(...menu.entries()); // just to see what 'entries()' actually does


  // WITH destructuring
for (let [num, foodItem] of menu.entries()) {
  console.log(`${num + 1}. ${foodItem}`); /* Output: 1. Focaccia
                                                     2. Bruschetta
                                                     3. Garlic Bread
                                                     4. Caprese Salad
                                                     5. Pizza
                                                     6. Pasta
                                                     7. Risotto           */
}




// ******************************************************************
// Enhanced Object Literals


// The 'restaurant' object is an Object Literal --> because we wrote this object literally in our code with the curly braces syntax.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// ES6 introduced 3 new ways of writing Object Literals, which makes it easier to write object literals --> 


The FIRST Enhancement --> // Lets say that we have two different objects. But we want one of the objects to be inside the other object.

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // WITHOUT ENHANCED OBJECT LITERALS (whats annoying is that the property name is now the same as the variable name from which we are getting this new object) -->
  openingHours: openingHours,
  
  // WITH ES6 ENHANCED OBJECT LITERALS  (just write the name of the object and it will create its own property name)
  openingHours, 
};


The SECOND Enhancement --> // The second enhancmeent to Object Literals is about writing methods.
// So in ES6 we no longer have to create a property name, and then set it to a function expression, like we've been doing.


const restaurant = {
  // WITHOUT ENHANCED OBJECT LITERALS -->
  orderPizza: function (starterIndex) {
    const starter = this.starterMenu[starterIndex];
    return (starter);
  };
    
     // WITH ENHANCED OBJECT LITERALS (just get rid of the 'function' keyword and the semicolon ':'-->
  orderPizza (starterIndex, mainIndex) {
    const starter = this.starterMenu[starterIndex];
    return (starter);
};



    
The THIRD Enhancement --> // Is that we can compute property names, instead of having to write them out manually and literally. Compute means calculate
    

const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: { // put the computed name in between square brackets
    // thurs:
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day--${2 + 2}`]: { // we can even compute the property name like this
    open: 0,
    close: 24,
  },
};
    
    
    
    
// *******************************************************************
// Optional Chaining (?.)

// Introduced in ES2020. With Optional Chaining, if a certain property does not exist, then undefined is returned immediatly. Otherwise, if we dont use it we would then get an Error. Beacuse ''undefined.order' gives an error.
    
const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];    

const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },  
};
    
// checking whether a property and a nested property exists, in an object.
    
  // WITHOUT Optional Chaining
    if (restaurant.openingHours && restaurant.openingHours.mon) {
      console.log(restaurant.openingHours.mon.open) // this will give us an error, because 'restaurant.openingHours.mon' is undefined (doesnt exist). so we cant do 'undefined.open'.
    }
// can get out of hand quickly in a real-world application, if we have deeply nested objects with lots of optional properties.
    
  
    // WITH Optional Chaining (?.)
console.log(restaurant.openingHours.mon?.open); // Ouput: undefined  // because 'mon doesnt exist'
    
// so only if the property that is before '?.' ('mon' in this case) EXISTS then 'open' property will be read from there. But if it does NOT exist, then immediatly 'undefined' will be returned.
    // a property exists if it is not null or undefined. SO if its 0 or an empty string then it still exists.
    
    
    
// Real World Example: 
   // we want to loop over the Array and then log to the console whether the restaraunt is open or closed ineach of the days.
    
    const weekDays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekDays) {
  const openTime = restaurant.openingHours[day]?.open ?? `we are closed`; // if we want to use a variable NAME as a property NAME, we have to use the BRACKETS notation. Because the name is coming dynamically from the 'weekDays' Array.
  // Setting a default value with the '??' notation. Because '??' returns a truthy value and ignoring falsy/nullish values (short-cicuits nullish values). undefined and null are nullish values.

  console.log(`On ${day}, we open at ${openTime}`);
}
    /*  Output:  On mon, we open at we are closed
                 On tues, we open at we are closed
                 On wed, we open at we are closed
                 On thu, we open at 12
                 On fri, we open at 11
                 On sat, we open at 0
                 On sun, we open at we are closed       */
    
// Optional Chaining (?.) with methods    
    
  // checks if a method actually exists before we call it
    
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    const starter = this.starterMenu[starterIndex];
    const main = this.mainMenu[mainIndex];
    return [starter, main];
  },
};


// checks if 'restaurant.order' exists, and if it does we call it. IF it doesnt --> then set up a DEFAULT value using the Nullish Coalescing Operator (??).
console.log(restaurant.order?.(1, 2) ?? `Method does not exist`); 
// Ouput: (2) ["Bruschetta", "Risotto"]
    
console.log(restaurant.orderRissotto?.(1, 2) ?? `Method does not exist`); 
// Output: Method does not exist
            
***** So always use the Nullish Coalescing Operator (??) with Optional Chaining (?.) inorder to set up a default value, incase the method/property specified doesnt exist and thus returns undefined due to the use of Optional Chaining (?.) ******
    
    
  
// Optional Chaining (?.) with Arrays
  
// we can use it to check if an Array is empty
 
const users = [
  {
    name: 'Mikel',
    email: 'mikel1832@yahoo.com',
  }
];
  
console.log(users[0]?.name ?? 'Name not Found!'); // Output: Mikel
    
console.log(users[0]?.age ?? `Age not Found!`); // Output: Age not Found!
    
// without Optional Chaining
if (users.length > 0 ) {
  console.log(users[0]?.name);
} else {
  console.log('Name not Found!'); // Output: Mikel
}
    
    
    
**** SUMMARY --> SO Optional Chaining (?.) checks if the value on the left does exist
    




// ************************************************************
// Looping over Objects (which are not iterables) in an indirect way

//REMEMBER: Iterables are Arrays, Strings, maps, sets. BUT NOT OBJECTS.
    // Basically most of the data structures in JavaScript are now Iterables, EXCEPT OBJECTS.


/ Looping over an Object's property NAMES -->
    // Remember property names are also called KEYS

// using 'Object.keys(...)' method, which returns an array with an Objects property names.

const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },  
};

// So we are not going to loop over an object iteself, we're gonna loop array that contains the Object's property names. Using 'Object.keys(...)', then the (for-of Loop).

    
const openDays = Object.keys(restaurant.openingHours);
console.log(openDays); // Output: (3) ["thu", "fri", "sat"]

let openString = `Restaurant is open ${openDays.length} days a week, on `;
for (const openDay of openDays) {
  openString += `${openDay} `;
}
console.log(openString); // Output: Restaurant is open 3 days a week, on thu fri sat




/ Looping over an Object's property VALUES -->
  // using 'Object.values(...)' method, returns an array with an Objects property VALUES.
    
const openingHours = Object.values(restaurant.openingHours);
console.log(openingHours); /* Ouput: (3) [{…}, {…}, {…}]
                                          0: {open: 12, close: 22}
                                          1: {open: 11, close: 23}
                                          2: {open: 0, close: 24} */

    
    
/ To loop over the ENTIRE OBJECT, we need the 'entries()' method which returns the index number plus the element itself --> 
    // using 'Object.entries()' method, which returns an array of a given object's own string-keyed property [key, value] pairs.

const entries = Object.entries(restaurant.openingHours); // transforms the object into an array of key-value pairs.
console.log(entries); /* Output: (3) [Array(2), Array(2), Array(2)]
                                    0: (2) ["thu", {…}]
                                    1: (2) ["fri", {…}]
                                    2: (2) ["sat", {…}] */


// then we can use this, to loop over the object
for (const [day, { open, close }] of entries) {
  // using Array and Object Destructuring. We had to do object destructing in the second element of the array, because its value itself is an object.
  console.log(`On ${day}, restaurant is open from ${open} to ${close}`);
}


    
// *********************************
// Very Confusing Challenge
    
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
      
Question ---> 1. Loop over the game.scored array and print each player name to the console,
                along with the goal number (Example: "Goal 1: Lewandowski")
              2. Use a loop to calculate the average odd and log it to the console (We already
                studied how to calculate averages, you can go check if you don't remember)
  
              3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
                      Odd of victory Bayern Munich: 1.33
                      Odd of draw: 3.25
                      Odd of victory Borrussia Dortmund: 6.5
                  Get the team names directly from the game object, don't hardcode them
                  (except for "draw"). Hint: Note how the odds and the game objects have the
                  same property names. 
              4. Bonus: Create an object called 'scorers' which contains the names of the
                  players who scored as properties, and the number of goals as the value. In this
                  game, it will look like this:
                  {
                   Gnarby: 1,
                   Hummels: 1,
                   Lewandowski: 2
                  }
    
    
Solution -->        // 1 - solution
                    const scoredEntries = Object.entries(game.scored);
                    // console.log(scoredEntries);

                    for (const [goalNum, player] of scoredEntries) {
                      console.log(`Goal ${Number(goalNum) + 1}: ${player}`);
                    }

                    // 2 - solution
                    const oddValues = Object.values(game.odds);
                    // console.log(oddValues);

                    let sum2 = 0;
                    let avg2;
                    for (const odd of oddValues) {
                      sum2 += odd;
                      avg2 = sum2 / oddValues.length;
                    }
                    console.log(`Odd sum: ${sum2}. Average Odd: ${Math.trunc(avg2)} ⚽`);


                    // 3 - solution
                    const oddEntries = Object.entries(game.odds);
                    console.log(oddEntries);
    
                    for (const [team, oddValue] of oddEntries) {
                      const teamStr = game[team] ? `victory ${game[team]}` : `Draw`;
                      console.log(`Odd of ${teamStr}: ${oddValue}`);
                    }

                    // BONUS - solution
                    const scorer = {};
                    for (const player of game.scored) {
                      // console.log(player);
                      scorer[player] ? scorer[player]++ : (scorer[player] = 1);
                    }
                    console.log(scorer);
    
    
    
****** VERY IMPORTANT *******
    solution 3 explanation --> /* if we want to use a variable NAME as a property NAME, we have to use the BRACKETS notation. After destructing which gives us variable names.
    Because we want to access properties team1 & team2 inside the game object. Since we can't use the dot . notation to access the properties, we use the [] notation to access them. If you try to use dot notation, you'll get undefined because game.team command will try  to find property team and won't be found because we didn't define it inside game object, thus it will return undefined. */
    
    solution BONUS explanation --> /* Here we need to check if the player is already added to the object "scorers" or not.

If not so add the player to the object and set its value to 1. If the player exist increment its value by 1.

So for the case of 'Lewandowski' at the first loop, it will be added to the object with a value of 1 (as 'scorers[player] = false')  then when it comes again in the loop, it will NOT be added again (as 'scorers[player] = true') but it value will be incremented by 1. */
    
    
    
    
// ***********************************************************  
// Sets
    
    // A new Data structure that was introduced in ES6.
    
// A set is just a collection of unique values. Which means that a set cannot have any duplicates. Sets are also iterables.
    
// to create a new Set, we use 'new Set()' and then pass in an iterable. And the most common iterable here is an Array.  
       
const orderSet = new Set([
  'Pizza',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Rissotto',
  'Mango',
]);

console.log(orderSet); // Output: Set(3) {"Pizza", "Rissotto", "Mango"}
    
    // So a 'set' gets rid of all the duplicates in an iterable (an Array for instance)
    
Sets are different from Arrays in two way --> 1. Because each value is unique
                                              2. Order of values is irrelevant
    
    
// Getting the size of a set using '.size' (works just like '.length') --> 
console.log(orderSet.size); // Ouput: 3
    
// Checking if a certain element is in a 'set' using the 'has()' method --> 
    // careful this method is CASE SENSITIVE
console.log(orderSet.has('Pizza')); // Ouput: true
console.log(orderSet.has('Bread')); // Ouput: false
    
// Adding new elements to a set using '.add()' method --> 
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet); // Output: Set(4) {"Pizza", "Rissotto", "Mango", "Garlic Bread"}  
    
// Deleting elements in a 'set' using '.delete()' method -->
orderSet.delete('Garlic Bread');
console.log(orderSet); // Output: Set(3) {"Pizza", "Rissotto", "Mango"}

// Deletes ALL of the elements of the Set using 'clear()' method --> 
orderSet.clear(); // Ouput: Set(0) {}
    
// Retrieving elements in Sets. Cant use Indexes like in Arrays (ie: orderset[0]). because Sets dont have Indexes.
    THERE IS SIMPLY NO WAY OF GETTING VALUES OUT OF A SET
// because of we need to retrieve values from a Set, we can just use an Array
    
// Sets are iterables. So we can LOOP over them --> 
for (const order of orderSet) {
  console.log(order); 
}
    
    
// ⭐ Main use case of SETS, is to REMOVE duplate values from Arrays --> 
    
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// CONVERTING from a Set to an array (easy because they are both iterables)
// remember that the Spread Operator works on all iterables.
const staffUniqueSet = [...new Set(staff)];
console.log(staffUniqueSet); // Output: Set(3) {"Waiter", "Chef", "Manager"}

// if we just wanted to know how many unique positions there are in the array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // Output: 3

// Counting how many unique letter there are in a String (remember a String is also an iterable)
console.log(new Set('MikelMamdouhAzizKamel').size); // Output: 14
    
    
    **** SUMMARY --> Sets are not intended to replace Arrays at all. So whenever we need to store values in order, that might contain duplicates all just use Arrays.
    So just use Sets when you need to work with Unique values.

    

    
    
    
// *****************************************
// Maps
    
    // Another new ES6 Data Structure.

    // A Map is a data structure that we can use to map Values to Keys. Just like in Objects, data is stored in Key/Value pairs in Maps.
// THE big DIFFERENCE between Objects and Maps, is that in Maps the Key can have ANY type, WHEREAS in objects it can only be a STRING. 
    So in Maps we can have ANY type of Key, it can even be Objects, Arrays or even other Maps, as Keys
    

// Creating a Map using 'new Map()' -->
  // the easiest way to create a Map, is to create an empty one (without passing anyhting in), and then to fill up the Map, we can use the 'set()' method which takes in two arguments. The fist argument is a Key name, and the second is its Value.
    
    const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy'); // Key can be any Data type
console.log(rest.set(2, 'Lisbon, Portugal')); // Output: Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}
    // Calling the 'set()' method like this, does not only update the map thats called on, but it also returns the Map (which is why the Output looks like this).
    // The fact that the 'set()' method actually returns the updated Map, allows us to CHAIN the 'set()' method like this   --> 
    
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open!')
  .set(false, 'We are Closed!');

// Getting Data from the Map using the 'get()' method (by just passing in the name of the Key as an argument)
console.log(rest.get('name')); // Output: Classico Italiano
console.log(rest.get(true)); // Output: We are Open!

// Clever Exercise 🌚
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // Output: We are Open  // because 'rest.set(true) --> is equal to 'We are Open'
    
// Checking if a Map contains a certain Key using the 'has()' method --> 
console.log(rest.has('categories')); // Output: true
    
// Deleting elements from the Map using '.delete()' --> 
console.log(rest.delete(2)); //  removes '2, 'Lisbon, Portugal'
    
// Getting the size of a Map data structure using '.size' property --> 
console.log(rest.size); // Output: 7
    
// Removes all the elements from the Map using 'clear()' --> 
rest.clear();
console.log(rest); // Output: Map(0) {}
    
    
// Using Arrays or Objects as Map Keys -->
    
    rest.set([1, 2], 'Test');
console.log(rest); // Output: Map(1) {Array(2) => "Test"}

// to get the data based on a Key Array
// Have to store the Key Array in a variable because its an Imperative type and thus it is stored in the Heap. The array [1, 2] in rest.get([1, 2]) is not the same array [1, 2] in the rest map. They look the same and everything but they are still two different arrays in the heap. The two arrays have different memory addresses in the heap.
// So, how can we access the value that is mapped to [1, 2] in rest? First, we have to store a reference to the array in a variable. Then we can just use that variable to map it to a value, and also retrieve that value.

// Wrong way
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // Output: undefined

// Correct way
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Output: Test

    
// We can also FUCKING use Objects as Map Keys which can be very useful with DOM elements, which are nothing more han a special type of objects.
    
    rest.set(document.querySelector('h1'), 'Heading');
    

    
// ****
// Another way of populating the a Map, wihtout having to use the 'set()' method.
    
    // pass in an array inside the 'new Map()' parameter, the Array will contain multiple Arrays, and each Array will have a Key/Value pair (Key in first position and Value in second position).
    
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again!'],
]);

console.log(question);

// this structure (Array of Arrays) looks similar to the output of 'Object.entries()' method.
// which means we can convert Objects to Maps -->
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// So use this trick whenever we have an Object but need a Map.

// Iteration on Maps. Possible because Maps are Iterables (so the For-of loop is also available on them)

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${value}`);
  }
}

const userAnswer = Number(prompt(`Please answer`));

// My way
userAnswer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

// Another way
console.log(question.get(userAnswer === question.get('correct')));

// ******** Converting a Map back to an Array -->
// by building a new Array, and then using the Spread Operator
console.log([...question]);

// we can also use the 'entries()', 'key()', and 'value()' method on a Map -->
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
    
     
    
    
    
// ******************************************************
    // So which Data Structure to Use? (Arrays, Objects, Sets, Maps)
    

    CHECK OUT THE IMAGE IN NOTES CALLED --> 'Data Structures Overview (How Data is stored)' to see how data is stored.
    

    // When to use Data Structures --> 
    
    CHECK OUT THE IMAGE IN NOTES CALLED --> 'When to use Arrays vs Sets AND Objects vs Maps' to see the differences between Arrays vs Sets AND Objects vs Map, and when to use each
    
 
    
// ******************************************************
    // Working with Strings (different String methods)

const airLine = 'TAP Air Portugal';
const plane = 'A320';

// Getting the character of a string at a certain position
console.log(plane[0]); // Output: A
console.log(plane[1]); // Output: 3  (this is a string tho which we can convert to a number using 'Number()').
console.log(plane[2]); // Output: 2
// Another way
console.log('Mikel'[1]); // Output: i

// 'length' property on Strings
console.log(plane.length); // Output: 4
console.log('Mikel'.length); // Output: 5

    
// *** Different methods for Strings

  // 'indexOf' and 'lastIndexOf()'
// Get the position in which a certain letter is in the string using the 'indexOf()' and 'lastIndexOf()' methods. (space counts as a character)
console.log(airLine.indexOf('r')); // Output: 6 (this method gives us the FIRST letter occurrence)
console.log(airLine.lastIndexOf('r')); // Output: 10 (this method gives us the LAST letter occurrence)
console.log(airLine.indexOf('Portugal')); // Output: 8 (we can search for entire words (this is CASE SENSITIVE))

    
    // '.slice(start, stop)'
// One good use case of using 'indexOf()' and 'lastIndexOf()', is to extract parts of a string using the 'slice()' which need Indexes as arguments.

console.log(airLine.slice(4)); // Output: Air Portugal (the result is called a sub-string because it is just a part of the original string)
console.log(airLine.slice(4, 7)); // Output: Air (end value is not included in the String, ** stops extracting before it reaches index number 7)
    // so length of a sliced string is always 'end' minus 'start' arguments.

    The 'slice()' method doesn't change the ORIGINAL String, because Strings are Primitive types and Primitive types are immutable (impossible to mutate).
    So if we wanted to use the sliced string, we would have to store it in a variable or data structure first.
    
So the 'slice()' method and all the other String methods mentioned below, ALWAYS RETURN A NEW STRING that needs to be stored in a variable.

// examples sliceing without hardcoding the arguments.
console.log(airLine.slice(0, airLine.indexOf(' '))); // Output: TAP
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); // Output: Portugal (by not specifying the end, the string will log to the end of the last word) (added +1 inorder to make the indexof start from position 8 not 7 and thus removing the space)
    
// defining a NEGATIVE 'start' argument for the 'slice()' method.
    // which will make it start extracting from the end
console.log(airLine.slice(-2)); // Output: al
console.log(airLine.slice(1, -1)); // Output: al
    
// defining a NEGATIVE 'end' argument for the 'slice()' method.
    // which will make it cut off letters from the end
console.log(airLine.slice(1, -1)); // Output: AP Air Portuga
    
    
    
// PRACTICE EXAMPLE  
    
const checkMiddleSeat = function (seat) {
  //   console.log(seat.lastIndexOf('B')); // just to check the output
  // B and E are middle seats
  seat.lastIndexOf('B') > 0 || seat.lastIndexOf('E') > 0
    ? console.log('Seat is in the Middle 😭')
    : console.log('You got lucky 💺');

  // ANOTHER WAY
  //   const s = seat.slice(-1);
  //   if (s === 'B' || s === 'E') {
  //     console.log('Seat is in the Middle 😭');
  //   } else {
  //     console.log('You got lucky 💺');
  //   }
};

checkMiddleSeat('11B'); // Output: Seat is in the Middle 😭
checkMiddleSeat('23C'); // Output: You got lucky 💺
checkMiddleSeat('3E'); // Output: Seat is in the Middle 😭
    
    
   ***** // Theory 
    // Strings are just Primitive types. SO WHY DO THEY HAVE METHODS? Shouldn't methods only be available on Objects, such as Arrays? Yes, thats True. However JavaScript is Smart --> 
    ⭐⭐⭐ This is how this works, whenever we call a method on a String, JavaScript will convert that String Primitive into a String Object, with the same content. And then its on that String Object where the method is called. This process is called *BOXING*, because it basically takes our string and puts it in a box which is the Object.

    console.log(new String('Mikel')); // JavaScript calls this 'new String()' method whenever we call a method on a String, which converts it to an object.
    console.log(typeof new String('Mikel')); // Output: object
    
   And then when the operation is done (the method is executed), the String Object is converted back to a String Primitve. 
   ALL STRING METHODS RETURN PRIMITIVE, even when called on a String Object.

   console.log(typeof new String('Mikel').slice(1)); // Output: string
    
// Methods for changing the case of a String
  // 'toUpperCase()' and 'toLowerCase()' methods
    
const airLine = 'TAP Air Portugal';
const plane = 'A320';
    
console.log(airLine.toLowerCase()); // Output: tap air portugal
console.log(airLine.toUpperCase()); // Output: TAP AIR PORTUGAL
    
console.log('Mikel'.toUpperCase()); // Output: MIKEL

    
// Practical Example --> 
    
// Fix capitalization in name
const passenger = 'jONAS'; // FIX TO Jonas
// ***** need to store in new variable because strings are Primitive types and Primitive types are immutable (impossible to mutate). So we need to create a new one.
const lowerPassenger = passenger.toLowerCase(); // put everything to lowercase first
const correctPassenger =
  lowerPassenger[0].toUpperCase() + lowerPassenger.slice(1); // then make first letter uppercase + the rest of the string

console.log(correctPassenger); // Output: Jonas
    

// Another example 
    // Comparing User input email (to see if they have the same format)
        / ('trim()' method removes whitespace from both ends of a string)
    
const email = 'hello@jonas.io'; //;
const loginEmail = '   Hello@jonas.Io \n'; // '\n' is enter;

// first step --> convert to lowercase
const lowerCase = loginEmail.toLowerCase();
// second step --> get rid of all the white space using the 'trim()' method which removes whitespace from both ends of a string.
const trimmedEmail = lowerCase.trim();
console.log(trimmedEmail); // Output: hello@jonas.io

// we can do all this in one step -->
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // Output: hello@jonas.io    

// comparing them
console.log(email === normalizedEmail); // Output: true
    
      
// ******** 
    // REPLACING parts of strings using 'replace()'
    // using 'replace()' (takes in two arguments, the first is the string we want to replace, and the second argument is what we want to replace it with)
    // 'replace()' only replaces the FIRST occurence of its first argument string.
    Side note: All string methods are Case Sensitive.

    const priceGB = '288,97₤';
const priceUS = priceGB.replace('₤', '$').replace(',', '.');
console.log(priceUS); // Output: 288.97$

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';

// remember string methods creates a new string, it doesn't mutate the original one.

    // 'replace()' replaces ALL occurences in its first argument string.
console.log(announcement.replaceAll('door', 'gate')); // Output: All passengers come to barding gate 23. Boarding door 23!
    
    
    
// ********
// Three string methods that return Booleans ('includes()', 'startsWith()', 'endsWith()')
    
const plane = 'Airbus A320neo';

console.log(plane.includes('A320')); // Output: true
console.log(plane.includes('Boeing')); // Output: false

console.log(plane.startsWith('Air')); // Output: true
console.log(plane.startsWith('Boo')); // Output: false

console.log(plane.endsWith('neo')); // Output: true
console.log(plane.endsWith('Neo')); // Output: false (case sensitive)

// check if current plane is part of the new Airbus family
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`New plane IS part of the family ✈`);
} else {
  console.log('Fuck this plane!!');
}
    
    
// Practical Exercise
    
// ***** ⭐ IMPORTANT: when we receive input from a user, we ussually start by putting everything to LowerCase *******
    
    
const checkBaggage = function (items) {
  // Always first step when receiving input from a user is --> PUT EVERYTHING IN LOWERCASE
  const lowerCase = items.toLowerCase();
  if (lowerCase.includes('knife') || lowerCase.includes('gun')) {
    console.log(`ARREST THIS MAN!! 👮‍♀️`);
  } else {
    console.log(`You're good to go sir 💂‍♀️`);
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); 
    
    
    
    
// **********
    // 'split()' for Strings (takes in the divider string as an argument)
    
// allows us to split a String into multiple parts based on a divider string, and then stores the results into elements of a new *ARRAY*.
    // divider string is the string used in the original string to divide... the string.
    
    Side note --> '\n' is the new line character.
    
console.log('Mikel+is+a+BEAAASSSTTT!!!!'.split('+')); // Output: (4) ["Mikel", "is", "a", "BEAAASSSTTT!!!!"]

// splitting using the space between string, by using an empty string with a space in the divider (' ')
console.log('Mikel Kamel'.split(' ')); // Output: (2) ["Mikel", "Kamel"]

// using DESTRUCTURING to create variables, from the created Array using 'split('')' method
const [firstName, lastName] = 'Mikel Kamel'.split(' ');
console.log(firstName, lastName); // Output: Mikel Kamel
    

// *********
    // 'join()' method
    
    // the opposite of the 'split('')' method. which creates and returns a new string by concatenating all of the elements in an array. Its argument specificies what will be between strings in the Array after they join.
    
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); 
console.log(newName); // Output: Mr. Mikel KAMEL
    

// 🌃 Example --> 
    
    // we want to capitalize the first letter of each name
const capitalizeName = function (name) {
  // step one - create an array to loop over
  const nameArray = name.split(' ');
  // loop over the nameArray and capitalize each name
  // then push it to the empty array
  let capitalizedArray = [];
  for (const names of nameArray) {
    const capitalizedName = names[0].toUpperCase() + names.slice(1);

    // another way of capitalzing each name
    // const capitalizedName = names.replace(names[0], names[0].toUpperCase());

    capitalizedArray.push(capitalizedName);
  }
  // lastly join the array into a string by concatenating all the elements in it
  const newName = capitalizedArray.join(' ');
  console.log(newName);
  return newName;
};

capitalizeName('Jessica ann smith davis'); // Output: Jessica Ann Smith Davis
capitalizeName('mikel kamel'); // Output: Mikel Kamel

    
    
// *******************    
    // Padding a string using 'padStart()' and 'padEnd()'. (First argument is the length that we want for the string after padding, and the Second argument is the character that we want to pad the string with).
      
// means to add a number of characters to the string, until the string has a desired length.
    
const message = 'Go to gate 23';
    
// will add some characters to the BEGINNING and END of the string.
    // so entire length of the string is '30' which is mentioned in the 'padEnd()' method.
console.log(message.padStart(20, '🐧').padEnd(30, '⚽')); // Output: ++++++++++++Go to gate 23⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽    // length of the whole string is '30'
    
console.log('Jonas'.padStart(20, '🎮').padEnd(30, '🏉')); // Output: ++++++++++++++++++++Jonas
    
// if we want empty spaces as padding --> 
console.log('Mikel'.padEnd(10, ' '));
console.log('Mikel'.padEnd(10));
    (Both do the same thing)
    
// Practical Example
    
    // show the last 4 digits of a credit card number, and hode the rest
  
const maskCreditCard = function (number) {
  // converts parameter to a string
  const string = number + '';
  // slice last 4 numbers and addd characters with the same length to replace them
  const hiddenCredit = string.slice(-4).padStart(string.length, '*');
  return hiddenCredit;
};

console.log(maskCreditCard('432478432')); // Output: *****8432
console.log(maskCreditCard('4324789327498237494979')); // Output: ******************4979
console.log(maskCreditCard(4328479389723494)); // Output: ************3494
    

    
// *********  
    // 'repeat()' (takes in an argument that specifies the number of times we want to repeat the string)
    
// allows us to repeat the same String multiple times
    
    
const message = 'Bad Weather....All Departures Delayed ☔ ';
console.log(message.repeat(3)); // Output: Bad Weather....All Departures Delayed ☔ Bad Weather....All Departures Delayed ☔ Bad Weather....All Departures Delayed ☔

// another example
const planesInLine = function (number) {
  console.log(
    `There are ${number} of planes waiting in line ${'✈'.repeat(number)}`
  );
};

planesInLine(5); // Output: There are 5 of planes waiting in line ✈✈✈✈✈
planesInLine(2); // Output: There are 2 of planes waiting in line ✈✈
planesInLine(10); // Output: There are 10 of planes waiting in line ✈✈✈✈✈✈✈✈✈✈
    
    
    
// ********************
    
    // CHALLENGE #4 -- page 19 in challenges  https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648623#questions/13883150
    
    answer --> document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const inputText = document.querySelector('textarea').value;
  const stringArray = inputText.split('\n');
  //   console.log(stringArray);

  for (const [i, string] of stringArray.entries()) {
    const lowerCase = string.toLowerCase();
    // const [first, second] = lowerCase.split('_');
    // const secondUpperCase = second.replace(second[0], second[0].toUpperCase());
    // const normalized = [first, secondUpperCase].join('').trim().padEnd(20, ' ');
    // console.log(normalized, '✅'.repeat(i + 1));

    // another way
    // const [first, second] = lowerCase.split('_');
    // const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`.trim().padEnd(20);
    // console.log(`${output}${'✅'.repeat(i + 1)}`);
  }
});
    
   
    
// ***************
// String Methods CHALLENGE
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Our goal is to display the data like this -->
/* 🔴 Delayed Departure from FAP tp TXL (11h25)
                  Arrival from BRU to FAO (11h45)
     🔴 Delayed Departure from HEL tp FAO (11h25)
                  Arrival from FAO to LIS (11h45) */

const flightInfo = function (flightsInfo) {
  const flightArray = flightsInfo.split('+');
  console.log(flightArray);

  for (const flight of flightArray) {
    const [status, from, to, time] = flight.split(';');

    let statusInfo = status.replaceAll('_', ' ');
    statusInfo.includes('Delayed') ? (statusInfo = `🔴${statusInfo}`) : statusInfo;

    const fromInfo = from.slice(0, 3).toUpperCase();
    const toInfo = to.slice(0, 3).toUpperCase();
    const timeInfo = time.replace(':', 'h');

    const output =
      `${statusInfo} from ${fromInfo} to ${toInfo} (${timeInfo})`.padStart(48);
    console.log(output);
  }
};

flightInfo(flights);
    
    
    
'// *****************************************************************'
    '// *****************************************************************'
    // FUNCTIONS SECTION
    
// *************************
    // Default Parameters

// Sometimes its usefull to set default values for function parameters, so that we dont have to pass them in manually if we ont want to change the default.

    // The new ES6 way of setting default values to parameter --> 
    const randomFunction = function (num = 1, num2 = 4, num3 = 10) {};
    
    // The old way of setting default values ES5 is using the '||' operator
    const randomFunction = function (num, num2, num3) {
      num = num || 1;
      num2 = num2 || 4;
      num3 = num3 || 10;
    };
    
    
// Default values can contain expressions --> 
const randomFunction = function (num = 1 * 3, num2 = 4 + 4, num3 = 10 / 5) {
  console.log(num); // Output: 3
  console.log(num2); // Output: 8 
  console.log(num3); // Output: 2
};

randomFunction();
    

// We can also use the values of other parameters that was set before it, as a default value (VERY USEFULL)
    // **** ONLY WORKS when we define paramaters BEFORE using them, to calculate other parameters. ****
const randomFunction = function (num = 2, num2 = 4 + num, num3 = 10 / num) {
  console.log(num); // Output: 2
  console.log(num2); // Output: 6
  console.log(num3); // Output: 5
};

randomFunction();


// SKIPPING a parameter when passing in arguments, we can give that argument a value of 'undefined'
const randomFunction = function (num = 2, num2 = 4, num3 = 10 / num) {
  console.log(num); // Output: 5
  console.log(num2); // Output: 4
  console.log(num3); // Output: 30
};

console.log(randomFunction(5, undefined, 30));
    
    
// Example:
const bookingArray = [];

const createBooking = function ( flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // using Short Circuiting to set up default values for 'undefined' parameters (they are undefined because we didnt pass anything in arguments for them)

  // the old way of setting default values ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingArray.push(booking);
};

createBooking('LH123'); // Output: {flightNum: "LH123", numPassengers: 1, price: 199}
createBooking('LH123', 0, 2500); // we can override the default values
createBooking('LH123', 2); // Output: {flightNum: "LH123", numPassengers: 2, price: 398}
createBooking('LH123', 5); // Output: {flightNum: "LH123", numPassengers: 5, price: 995}
createBooking('LH123', undefined, 5); // skipping the second parameter which will make use the default value set.
   
    
// *******************************************
    // Difference between passing in Primitive types and Reference Types as arguments to a function? 
    
    
const flight = 'LH234';

const passenger = {
  name: 'Mikel',
  passport: 479823749238742,
};

const checkIn = function (flightNum, passengerObject) {
  flightNum = 'LH9999999'; // Primitive type --> just a copy of the original, so wont affect the value of the 'flight' variable.
  passengerObject.name = 'Mr. ' + passengerObject.name; // Reference type --> the refernce to the object stored is the Memory Heap is copied, so values changes WILL affect the original Object property values.

  // check if passport number is correct
  if (passengerObject.passport === 479823749238742) {
    alert(`Check In`);
  } else {
    alert(`Wrong Passport!`);
  }
};

checkIn(flight, passenger);
console.log(flight); // Output: LH234 [the value didn't change to what was specified inside the function, because 'flight' is a string, which is a PRIMITIVE TYPE. And primitive types are immutable, thus when we pass in the 'flight' value as an argument, it creates a COPY of the 'flight' variable which is then passed in into the flightNum parameter, with a different address in the Call Stack. SO THE PASSED IN ARGUMENT IS NOT THE ORIGINAL VARIABLE --> 'FLIGHT', its just a COPY or a completely different variable].
// Would be the same as writing --> 'const flightNum = flight' which would create a copy. A completely different variable.

console.log(passenger); // Output: {name: "Mr. Mikel", passport: 479823749238742}  [the 'name' property value changed because passenger' is an Object, which is a REFERENCE TYPE, stored in the memory Heap, which is mutable. So when we pass in a reference type to a function, what is copied is just the reference to the object in the memory Heap, but they are both pointing to the same Object in memory, and thus can change the ORIGINAL object's values.]
// Would be the same as writing --> 'const passengerObject = passenger' which would only create a copy of the reference to the Object stored in the memory Heap.

⭐ SUMMARY --> 
    /* Passing a PRIMITIVE TYPE to a function, is really just the same as creating a copy of that original variable outside the function, and then passing it in the function. (thus both variables are completely different and wont affect one another if we change their values). */
    /* Where as passing a REFERENCE TYPE (like an object), is just copying the reference to the Object's address in the memory Heap, and thus whatever values we change in the copied object, WILL AFFECT THE ORIGINAL VALUES. */
    
    

// **** 🔴 Real world unforseen BUGS can occur due to MANIPULATING an OBJECT, from multiple DIFFERENT functions. Bescause it keeps changing the ORGINAL Object's properties values.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(passenger);
checkIn(flight, passenger); // Output: Wrong Passport. 
    

    
// Two terms that are used all the time in programming when dealing with FUNCTIONS, which are --> 
    1. 'Passing by Value'
    2. 'Passing by Reference'
    // JavaScript DOES NOT have 'Passing by Reference', ONLY 'Passing by Value'.
 'Passing by Reference' means that you CAN pass a refernece to ANY value instead of the value itself, so you can even change the values of Original Primitve types. (in C++)
 When passing in Reference type in JavaScript, we are just passing in the memory reference to the object, WHICH IS STILL A VALUE (simply a value that contains a memory address). So JavaScript only has 'Passing by Value'.
 
 
 
// *********************************************************************
 // First-Class and Higher-Order functions [CHECK PICTURE IN NOTE]
 
// First-Class functions enables us to write Higher-Order functions.

  // Difference between First-Class functions and Higher-Order functions is that First-Class functions is just a FEATURE that a programming language either has or does not have. All it means --> IS THAT ALL FUNCTIONS ARE VALUES.
 // So there are no First-Class functions in practice/when writing code, its just a concept. There are Higher-Order functions in practice however, which are possible because the language supports First-Class functions.
 
 
 // Higher-Order functions are functions that receives other functions as an argument (CallBack functions) (ex: addEventListener('click', ...) method), it can also return a new function, or do both.
// Passing functions as INPUTS to other functions. [arguments/paramters]   
 
 

// ***************************************************************************
 // Higher-Order functions (Funtions accepting CallBack functions)
  
 // Call-Back functions are called Call-Back functions, because we do not call them ourselves, we bascially tell JavaScript to call them later.
 
 
 // a function that takes in any string, and removes all the spaces in it.
  // lower-level of abstraction (see explanation below)
const oneWord = function (string) {
  return string.replaceAll(' ', '').toLowerCase();
};

// a function that converts the first word of a string to all capital
      // lower-level of abstraction (see explanation below)
const upperFirstWord = function (string) {
  const [first, ...other] = string.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-Order function
    // higher-level of abstraction (see explanation below)
const transformer = function (string, callBackFunction) {
  console.log(`Original string: ${string}`);
  console.log(`Transformed value: ${callBackFunction(string)}`);

// we can use properties on functions like this one '.name' which gives us the name of the function
  console.log(`Transformed by (function name): ${callBackFunction.name}`);
};

    
transformer('JavaScript is the best!', upperFirstWord); // WE ONLY PASS IN FUNCTION Arguments as a VALUE IN HIGHER-ORDER FUNCTIONS (so function WITHOUT parentheses, ie: ), NOT calling the function (which would be with parentheses)
    /* Output:
    Original string: JavaScript is the best!
    Transformed value: JAVASCRIPT is the best!
    Transformed by (function name): upperFirstWord */

transformer('JavaScript is the best!', oneWord);
     /* Output:
    Original string: JavaScript is the best!
    Transformed value: javascriptisthebest!
    Transformed by (function name): oneWord */
 
 
 
// Another example: 
 
 // log ✋ to the console every time we press space bar
    // lower-level of abstraction (see explanation below)
const highFive = function (event) {
  if (event.key === ' ') {
    console.log(`✋`);
  }
};

    // higher-level of abstraction (see explanation below)
document.addEventListener('keydown', highFive); // so 'highFive' is the call-back function, which in this case because the higher-order function is 'addEventListener', 'highFive' is also called the 'EventHandler' or the 'EventListener'.
 
 
 
// Why are Call-Back functions so much used in JavaScript and why are they so helpful?
    
    1. Its makes it easy to split up our code into more reusable and interconnected parts.
    2. Second and most important advantage, which is the fact that Call-Back funtions allows us to create ABSTRACTION. Abstraction means that we hide the detail of some code implementation because we dont really car about all that detail, which allows us to think about problems on a higher, more Abstract level.
    Higher-order functions (like the 'transformer' function in the example above) doesn't care HOW the string is transformed, it doesnt care about that level of detail, it just cares about TRANSFORMING the string not the details on HOW. It leaves these details to Lower-Level functions (Call-back functions) that are passed into it as arguments.
    So Higher-Order functions operates at a HIGHER LEVEL of abstraction, leaving the LOW LEVEL details to LOWER LEVEL functions (such as the 'oneWord' and 'upperFirstWord' in the example above)
    
    
// ************************************************************************
    // Functions RETURNING other new functions
 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greetingHey = greet('Hey 👋'); // the result of this function call --> is the returned function inside the 'greet' function. Which we can then store in a variable, and then use that variable to call and pass in an argument for the returned function, like so:
greetingHey('Mikel'); // Output: Hey 👋, Mikel
greetingHey('Jonas'); // Output: Hey 👋, Jonas

/* so 'const greetingHey = greet('Hey 👋'); is the same as 
const greetingHey = function (name) {
    console.log(`${greeting}, ${name}`);
}; */

// We can also do it in one go (without creating a variable to store the returned function)
greet('Hello 🙋‍♂️')('Sadik'); // Output: Hello 🙋‍♂️, Sadik
 

// So what's the point of having functions returning other functions?
    
    It can become extremely useful in certain situations, especially if we are using a very important programming Paradigm called FUNCTIONAL PROGRAMMING.  
    
    
// Same example but with Arrow functions
const greetArrowFunction = greeting => {
  return name => {
    console.log(`${greeting}, ${name}`);
  };
};

// another way of writing the Arrow function.
// const greetArrowFunction = greeting => name =>
//   console.log(`${greeting}, ${name}`);

const greetingHello = greetArrowFunction('Hello 🙋');
greetingHello('Mikel');
greetingHello('Jonas');

greetArrowFunction('Hi 👋')('Sadik');

/* REMEMBER --> We dont need the 'return' keyword and curly braces when we have one line of code. And we dont need brackets when we have one argument, in an Arrow function. */   
    
 
 
/ ***********************************************************************
  // The 'call()', 'apply()' and 'bind()' function methods
    
const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight: ${this.iataCode}${flightNum} 🐱‍🏍`
    );
    this.bookings.push({ Flight: `${this.iataCode}${flightNum} 👩‍✈️` ,
      name: `${name}`, }); // here we are pushing two OBJECTS into the 'bookings' array.
  },
};

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  booking: [],
};
    
const swiss = {
  airLine: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
    
lufthansa.book(832, 'Mikel');
lufthansa.book(647, 'Jonas');
console.log(lufthansa.bookings); // Ouput: (2) [{…}, {…}]

// This external function takes the 'book' method from the 'lufthansa' object, and STORES it in an external function, so that we can re-use it in other Objects . Like so:
const book = lufthansa.book;

book(322, 'Sadik'); // DOES NOT WORK. This will give us an ERROR, because now the 'this' in the 'lufthansa' object method, refers to the book method, due to remember from the theory section, functions' have their own 'this' keyword BUT it's undefined (atleast in 'strict mode').

/*  So inorder to fix this problem, we need to tell JavaScript explicitly what the 'this' keyword should refer to. 
And inorder to do so we can use 3 function methods that could do that --> 'call()', 'apply()', and 'bind()'. */
    
/ Remember Functions are just Objects. And Objects have methods --> therefore Functions can have methods too.
    
        // ** 'call()' function method
    // using the 'call()' function method. Which allows for a function/method belonging to one object to be assigned and called for a different object.
    // The first argument is exactly what we want the 'this' keyword to point to. Then the rest of the arguments in the original function.
    
 book.call(eurowings, 322, 'Sadik'); // so here the 'this' keyword from the 'book' method, is set to the 'eurowings' Object.
    // Output: Sadik booked a seat on Eurowings flight: EW322 🐱‍🏍
console.log(eurowings.bookings);  // log to check that 'book' method output was pushed to the empty 'bookings' Array.
    // Output: [{…}]
    
book.call(lufthansa, 456, 'Rodriguo'); // Output: Rodriguo booked a seat on Lufthansa flight: LH456 🐱‍🏍
console.log(lufthansa.bookings); // Output: (3) [{…}, {…}, {…}]
    
book.call(swiss, 987, 'Sara'); 
console.log(swiss.bookings); // Output: [{…}]
    
    // So the 'call()' function method, allows us to manually and explicitly set the 'this' keyword of any function that we want to CALL. Then all the arguments after the FIRST one, are simply the arguments of the original function.
    
    
    // *** 'apply()' function method [DONT USE]
  // The 'apply()' function method does exactly the same things as the 'call()' function method, the only DEIFFERENCE is that 'apply()' DOES NOT receive a LIST of arguments after the 'this' keyword (or after the first argument). INSTEAD, it takes an ARRAY of the arguments.
    
const flightData = [638, 'Franco'];
book.apply(swiss, flightData); // Output: Franco booked a seat on Swiss Air Lines   flight: LX638 🐱‍🏍
console.log(swiss.bookings); // Output: (2) [{…}, {…}]
    
    /* THE 'apply()' is not used much anymore in Modern JavaScript, because now there is a more better way of doing the exact same thing. Which is by using the Spread Operator, inside the 'call()' method, to take out the arguments from an Array and use them in the 'call()' method. */
    
    
book.call(swiss, ...flightData);  // Output: Franco booked a seat on Swiss Air Lines flight: LX638 🐱‍🏍
    // THIS IS THE PREFERRED WAY, NOT THE 'apply()'
    
    
   SUMMARY --> /* The 'call()' allows us to explicity define the 'this' keyword in any function that we want. Inother words, make the 'this' keyword point/refer to any Object that we want. */
 
    
// **************
    // ** 'bind()' function method
    
  // More important than the 'call()' and 'apply()' function methods.
    
    // Just like the 'call()' method, the 'bind()' method allows us to manually set the 'this' keyword for any function call. The difference is that 'bind()' function method DOES NOT immediatly call the function, instead it returns a NEW function where the 'this' keyword is bound, so its set to whatever value to pass into 'bind()'.
    
        // using the same example functions from above 👆
    
const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight: ${this.iataCode}${flightNum} 🐱‍🏍`
    );
    this.bookings.push({ Flight: `${this.iataCode}${flightNum} 👩‍✈️` }); // here we are pushing an OBJECT into the 'bookings' array.
  },
};

const eurowings = {
  airLine: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airLine: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// This external function takes the 'book' method from the 'lufthansa' object, and STORES it in an external function, so that we can re-use it in other Objects . Like so:
const book = lufthansa.book;
    
    // this is using the 'call()' method -->
    book.call(eurowings, 322, 'Sadik');  // Output: Sadik booked a seat on Eurowings flight: EW322 🐱‍🏍
    
    // this is using the 'bind()' method [since it creates a NEW function, we need to set it to a variable, inorder to create the NEW function] -->  
const bookEW = book.bind(eurowings); // we set the 'this' keyword in the 'book function, to the 'eurowings' function, and then store it in a function.
bookEW(909, 'Rodrigui Juvanos'); // Output: Rodrigui Juvanos booked a seat on Eurowings flight: EW909 🐱‍🏍
    
    / So this will NOT CALL the book function, instead it will return a NEW function where the 'this' keyword will **ALWAYS** be set to 'eurowings'
    
    
    // creating a booking function for the other two airlines
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookLH(635, 'Franco Benihan');
bookLX(820, 'Jojo Juvanos');
    
          // advantage of 'bind()' method is defining the 'this' keyword once, and from there on we can always use their functions. Instead of having to use the 'call()' method everytime we want to define the 'this' keyword to the same Object.

    
// ANOTHER advantage of the 'bind()' method is that we can preset arguments when creating a new function using the 'bind()' method. Like so:
    
    const bookEW23 = book.bind(eurowings, 213); // now the 'flightNum' argument is preset for this specific function.
    bookEW23('FRAANCOOOO'); // so this function now only needs the 'name' as an argument, because the 'flightNum' argument is preset in the function itself.
      // Output: FRAANCOOOO booked a seat on Eurowings flight: EW213 🐱‍🏍
    bookEW23('Urgano Kanty'); // Output: Urgano Kanty booked a seat on Eurowings flight: EW213 🐱‍🏍
    
    / ***** Specifying parts of the argument beforehand, like we did here 👆, is a common PATTERN in programming called PARTIAL APPLICATION. Which means that a part of the arguments of the original function are already applied/already set.
    
    
// 🟢 Other situations in which we can use the 'bind()' method, and it is VERY USEFUL.
    
    // One example of that is when we use Objects together with EventListeners -->
    
    // creating a new property to the lufthansa Object
lufthansa.plane = 300;
  // adding a method to the lufthansa Object that will add a plane eveytime a button is clicked
lufthansa.buyPlane = function () {
  console.log(this); // Output: <button class="buy">Buy new plane 🛩</button>

  this.plane++;
  console.log(this.plane);
};


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // Output: NaN   // the reason we are getting an Output of 'NaN' is because the 'this' keyword is pointing to the button itself 👆 [due to THE 'lufthansa.buyPlane' method being called BY THE 'addEventListener' function], and something that we learned earlier which is that in eventHanderFunctions the 'this' keyword ALWAYS POINTS TO THE ELEMENT ONWHICH THAT eventHandler is attached to (which in this case is the 'button' element). 
  // on the other hand if we call the method like this:
    lufthansa.buyPlane(); // then the 'this' keyword will point to the 'lufthansa' Object, because it is the one calling the method 'buyPlane()'.
    
    // So inorder to FIX this we need to manually define the 'this' keyword using the 'bind()' method. Like so --> 
    / ****** IMPORTANT --> WE CANT USE THE 'call()' because it CALLS the methods, and we need to PASS in a Call-Back function in the 'addEventListener' function, NOT CALL IT (which will give the function brackets, ie: 'buyPlaneLH()').
    const buyPlaneLH = lufthansa.buyPlane.bind(lufthansa);

    // and then use it as a Call-Back function in the 'addEventListener' Higher-Order function.
    document.querySelector('.buy').addEventListener('click', buyPlaneLH);
    
    // we could have also created the new function inside the 'addEventListener' function, using 'bind()' method. Like so: [same result]
    document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
    
    
    
// ********
// Partial Application
    // Another BIG usecase for the 'bind()' method. In this case of Partial Apllication, many times we are not even interested in the 'this' keyword, but we still use 'bind()' method for this. 
    
    // Remember Partial Application pattern, means that we can preset parameters.
    
const addTax = (rate, value) => value + value * rate; // [remember: dont need 'return' keyword or curly braces since its a one line code]

console.log(addTax(0.1, 200)); // Output: 220

// If we have a tax rate that is commonly used, in the 'addTax' function and we want to PRESET its value so we don't have to write it everytime, we can use the 'bind()' method -->
    // since we dont care about the 'this' keyword here [its not even in the 'addTax' function] --> then we use 'null' for the first argument, and then we write the value of the argument that we want to preset.
const addVAT = addTax.bind(null, 0.23);
// this is the same as -->
// const addVAT = value => value + value * 0.23;

console.log(addVAT(200)); // Output: 246    
 
    
    // Difference between Default parameters and Preseting values using the 'bind()'
  / One might argue that presetting values using the 'bind()' method can easily be done using DEFAULT PARAMETERS, but this is different because the 'bind()' method creates a BRAND NEW simply more specific function, based on a more general function. So using the 'bind()' gives us a new function.
    
    
    
// Challenge --> re-writing the above example but using the technique of one function returning another function.
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTax2(0.1)(200)); // Output: 220

const addVAT2 = addTax2.bind(null, 0.23);

console.log(addVAT2()(200)); // Output: 246
 
    
// Challenge #1 in the 'A Closer Look at Functions' Section (good challenge)
    // solution --> 

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    // getting answer
    const userOption = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // registering the answer
    if (typeof userOption === 'number' && userOption < this.answers.length) {
      this.answers[userOption]++;
    } else {
      console.log('Please enter a valid option between 0 and 3 🎭');
    }
    this.displayResults();
    this.displayResults('string');
    this.displayResults('array');

    // another way (using '&&' Short-Circuiting) [can use Short-Circuiting here because its just one line of code and we dont have an else statement]
    /* typeof userOption === 'number' &&
      userOption < this.answers.length &&
      this.answers[userOption]++; */
  },

  displayResults: function (type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

// this 'bind()' method sets the 'this' keyword to point to the 'poll' object
const registerAnsBind = poll.registerNewAnswer.bind(poll);

document.querySelector('.poll').addEventListener('click', registerAnsBind);

// Bonus:
const data1 = {
  answers: [5, 2, 3],
};
const data2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(data1);
poll.displayResults.call(data1, 'string');

poll.displayResults.call(data2);
poll.displayResults.call(data2, 'string');

/* instead of creating Objects outside with the 'Data' we can just create a ne Object within the call method. [Don't like this way tho] */
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
    
    
 
/ *******************************************************
    // Immediately Invoked Function Expressions (IIFE) Pattern
    
    
 // Sometimes in JavaScript we need a function that is only executed ONCE, and then never again. So basically a function that disappears, right after it is called once. (We're going to need this technique later with something called ASYNC AWAIT)
    
    // We want to execute a function immediatly and not even save it somewhwere. So how do we do that? 
    We simply write the function expression itself, without assigning it to any variable (without giving it a name), which will give us an error, but then we can trick JavaScript into thinking that its just an expression, by WRAPPING THE WHOLE THING IN PARENTHESES. And by doing that we basically transformed the statement that we had before, into an expression. 
    After that inorder to immediatly CALL the expression, we simply add '()' parentheses to the end of it, right before the semicolon, which will immediatly call the expression.  Like so -->
    // [This is why this PATTERN is called the Immediately Invoked Function Expressions (IIFE), because it executes immediatly]
    
    (function () {
  console.log('This will never run again! 🛑');
})(); // Output: This will never run again! 🛑

    // same thing using an Arrow function
(() => console.log('This will ALSO never run again! ⛔'))(); // Output: This will ALSO never run again! ⛔
    

    // SO why was this Pattern even invented? 
      / We already know that functions create scopes, and that Variables created inside those functions, are ONLY accessible within those functions, NOT outside (also called local scope [see pic notes]). We do not have access to variables from an inner scope, but have access to variables in the outer GLOBAL Scope. So for example --> 
    
(function () {
  console.log('This will never run again! 🛑');
  const isPrivete = 23; // this variable is PRIVATE, or encapsulated within the scope of the function its inside.
})();  
    
console.log(isPrivate); // Ouput: Error.  // because its in the inner scope of that function, and we dont have access to it from outside (see Scope Chain pictures notes). ie: its PRIVATE.
    
    // Therefore, we say that ALL data defined inside a scope, is PRIVATE. We also say that this data is ENCAPSULATED.
      Data ENCAPSULATION and data Privacy are extremely important concepts in programming. Many times we actually need to protect our variables from being accidently overridden by some other parts of the program, or even with external grits, or libraries. So its important to hide variables, and scopes is a good tool for doing this.
      
      // this is also the reason why the Immediately Invoked Function Expressions (IIFE) pattern was invented. Which is not a feature of the JavaScript language, but more of a Pattern that some developers came up with and then started to be used by many developers. Inorder to protect variables and make them private by writing them inside this Immediately Invoked Function Expressions (IIFE) funcitons.
      
      // But NOW in ES6 --> 
      // Remember: That 'let' and 'const' variables create their own Scope inside a Block (anything between curly braces '{ }' is a Block). So we can only access 'let' and 'const' variables INSIDE the Block. But that does NOT apply to 'var' variables, which are NOT Block-Scoped and can be accessed from outside.
      
      {
        const isPrivate = 23; // Block-Scoped
        var notPrivate = 46; // NOT Block-Scoped
      }
    
    console.log(isPrivate); // Ouput: ERROR
    console.log(notPrivate); // Ouput: 46
    
    
// And because of Block-Scope in Modern JavaScript, Immediately Invoked Function Expressions (IIFE) are not used that much anymore, because if all we want is to create a new scope for data privacy, all we need to do is to just create a Block like the one shown above 👆. There is no need to create a function, in order to create a new scope and make a varaible PRIVATE (unless we want to use 'var' for our variables, but we know we shouldn't use it anymore).
    
    On the otherhand, if we just need to execute a function only ONCE, then Immediately Invoked Function Expressions (IIFE) is STILL THE WAY TO GO, even now with Modern JavaScript.
      
      

// *******************************************************************
  // Closures
    
// One of the HARDEST concepts to understand in JavaScript. Closures bring all the concepts of Exectution Context, Call Stack and Scope Chain (check theory picture notes).
    
    1. Closure is not a feature that we explicitly use. So we dont create Closures manually like we create a new Arrays or a function. So a Closure simply happens automaitcally in certain situations, we just need to recognize these sitauations.
    
    // This example creates a Closure situation --> 
    
    
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
    
booker(); // Output: 1 passengers
booker(); // Output: 2 passengers
booker(); // Output: 3 passengers

    
    [Check theory picture notes for picture slides and old stuff]
     // The 'secureBooking' function returns another function, which has access to the 'let passengerCount = 0;' variable in its parent's scope.
    So what happens when this line of code is executes behind the scenes 'const booker = secureBooking();' --> 
            1. The Global Execution Context is created and added to the Call-Stack, which contains the 'secureBooking' function.
            2. Then when the 'secureBooking' function is executed, a new Execution Context is created and added to Call Stack on top of the Global Execution Context, which contains the 'passengerCount' variable, inside its Variable Environment.
            3. Then the returned function is stored within the 'booker' function and the 'secureBooking' Execution Context is completely removed form the Call Stack (dissapears), it is no longer there. Along with its Variable Environement that contains the 'passengerCount' variable.
            4. After that as we call the 'Booker()' function, we get the correct Outputs 👆. So How is this possible?  HOW is the 'booker' function still able to access its parent's variable 'secureBooking' and update it, when it no longer exists. Well this is due to CLOSURES. 👇
    
    /* ********** Closures makes a function remember all the variables that existed at the function's birth place. ******** */
            
            - A function has access to the Variable Environment (VE) of the Execution Context in which it was created.
            - The CLOSURE is then basically the Variable Environement attached to the function, exactly as it was at the time and place the function was created.
            
    // So the 'booker' function has access to the 'passengerCount' variable, because it is basically defined in the scope inwhich the 'booker' function was actaully created. So in a sense the Scope Chain is actaully preserved, throught the Closure. Even when the scope has already been destroyed, because it execution context is gone. This means that even tho the Exectution Context has actually been destroyed, its Variable Envoronment somehow keeps living in the Engine.
            
            In short --> We can also say that, thanks to the Closure, a function does not lose connections to variables that existed at the function's birth place.
    
  /* What happens after that with the execution of the 'booker' function -->
  So the function attempts to increase the 'passengerCount' variable, However, this variable is NOT in the current scope and so JavaScript will immediatly look into the Closure and see if it can find the variable there, and it does this even BEFORE looking at the Scope Chain. So Closures have priority over the Scope Chain.*/
    
    
    Other defenitions for Closure, to make it easier to grasp --> LOOK AT PICTURE NOTES. 
    
    Remember that we do not have to create closures manually, its a JavaScript feature that happens automatically. And we CAN NOT even access closed-over variables explicitly, BUT we can take a look at this internal property (Closures) in the Console by using this --> 
    
    console.dir(booker); // write the name of the function where Closure happens in between the brackets.
    // Output -->
ƒ anonymous()
arguments: null
caller: null
length: 0
name: ""
prototype: {constructor: ƒ}
[[FunctionLocation]]: script.js:293
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[3] // ********* This is the Variable Environment
    0: Closure (secureBooking) // ********* This is the Closure and where it is coming from
        passengerCount: 3 // ********* This is what the Closure contains.
        [[Prototype]]: Object
    1: Script {secureBooking: ƒ, booker: ƒ}
    2: Global {window: Window, self: Window, document: document, name: "", location:        Location, …}
    
    
    The '[[Scopes]]' property which is the Variable Environement of the 'booker' function. Inside it we can see the 'Closure' and where it is coming from. There we can find the 'passengerCount' variable which is inside the Closure.
    
    
    /* ⭐ Whenever we see double brackets in the console '[[Scopes]]:', it means that this is an INTERNAL property that we CAN NOT access from our code. */
    
    
    
    // Example
// Closure example to show that the functions within the 'boardPassenger' function were able to access all the variables that were in the Variable environment in which these functions were created, even tho the variables are no longer in the Execution Context (See above explanation 👆). ie: to show that Closure works by getting the expected/correct output. A clear sign the a Closure has been created.
const boardPassenger = function (num, wait) {
  const perGroup = num / 3;

  console.log(`Will start boarding in ${wait} seconds ⏳`);

  // this function executes its first parameter function, after set amount of milliseconds thats defined in its second parameter
  setTimeout(function () {
    console.log(`We are now boarding all ${num} passengers 🕺`);
    console.log(`There are 3 groups, each with ${perGroup} passengers 👨‍👨‍👦`);
  }, wait * 1000);
};

const perGroup = 1000; // This line of code is to show that Closures have priority over the Scope Chain, because if they didnt then the 'setTimeout()' call back function would have used this global variable and we would get a different result. But due to the fact that Closure have priority over Scope Chain, we get the same result as below 👇, with or without this line of code.
boardPassenger(180, 3); 
/* Output: Will start boarding in 3 seconds ⏳
           We are now boarding all 180 passengers 🕺
           There are 3 groups, each with 60 passengers 👨‍👨‍👦*/ 
    
    
    
    
/ ****************************************************************************
    // Arrays Section
    
// Why do Arrays have methods? 
    /* Remember that methods are simply functions that we can call on Objects, so basically they are functions attached to Objects. So if we have Array methods, then that means that ARRAYS themselves ARE also OBJECTS.
        And these Array methods are simply functions that are ATTACHED to ALL Arrays we create in JavaScript. */
    
    
// ********************
    // 'slice()' array method
    
// Very similar to the 'slice(start, end)' method thats avaliable on Strings. 
    // With this method we can extract part of any Array, but without changing the original Array. The 'slice()' method retruns a NEW Array (or a copy of the Array but only with the extracted parts), DOES NOT mutate the original Array.
    ******* Does NOT mutate the ORIGINAL Array, instead returns a NEW Array
    
let arr = ['a', 'b', 'c', 'd', 'e'];
    
    console.log(arr.slice(2)); // Output: (3) ["c", "d", "e"]
    console.log(arr.slice(1, 3)); // Output: (2) ["b", "c"]  // end parameter is not included in the output
    
    // just like in 'slice()' for strings, we can define a NEGATIVE start parameter, and it will begin to slice from the END of the Array --> 
    console.log(arr.slice(-2)); // Output: (2) ["d", "e"]
    console.log(arr.slice(-1)); // Output: (1) [e"]
    
    // we can also define a NEGATIVE end parameter, and it will begine slice from the START of the Array
    console.log(arr.slice(1, -2)); // Output: (2) ["b", "c"]
    
    // we can use the 'slice()' to create a shallow COPY of any array. To do that we simply call it WITHOUT any arguments --> 
    console.log(arr.slice()); // Output: (5) ["a", "b", "c", "d", "e"]
// remember previously we used the Spread Operator to also create a Shallow copy of an array, which would give us the same output --> 
    console.log([...arr]); // Output: (5) ["a", "b", "c", "d", "e"]
    
    /* So should we use the 'slice()' or the Spread operator to create shallow Array copies?  Use anything. Just a matter of preference. */
    
   
    
// ********************
    // 'splice()' array method   
    
// Works in almost the same way as the 'slice(start, deleteCount)' array method. But the fundamental difference is that it DOES actually CHANGE or MUTATE the ORIGINAL Array.
     ******* MUTATES/CHANGES the ORIGINAL Array
    // 'splice(start, deleteCount)' --> The first parameter is the same as the 'splice()' method, but the second one is the number of elements in the array that we want to delete, from start parameter.
    // It take a part of the Array and returns it, and then the ORIGINAL array itself loses that oart that was extracted.
    
let arr = ['a', 'b', 'c', 'd', 'e'];
    
console.log(arr.splice(2)); // Output: (3) ["c", "d", "e"]
console.log(arr); // Output: (2) ["a", "b"]  // it mutated the ORIGINAL Array
    
    / In practice, most of the time the value that the 'splice()' returns, doesn't even interest us, all we are ussually interested in is to just DELETE one or more elements from an original Array, using 'splice()'. 
    And common use case is to remove the LAST element of an Array -->
    
console.log(arr.splice(-1)); // Output: ["e"]
console.log(arr); // Output: (4) ["a", "b", "c", "d"]
    
    
    
// ********************
    // 'reverse()' array method   
  
    // Reverses the order of the elements in the Array. 
    ******* The 'reverse()' CHANGES/MUTATES the original Array.
    
let arr = ["a", "b", "c", "d", "e"];
    
console.log(arr.reverse()); // Output: (5) ["e", "d", "c", "b", "a"]
console.log(arr); // Output: (5) ["e", "d", "c", "b", "a"]   // it mutated the ORIGINAL Array

    
    
// ********************
    // 'concat()' array method   

// Used to concatenate/merge two or more Arrays. 
    // Takes in a parameter which is array to concatenate into a new array.
     ******* Does NOT mutate the ORIGINAL Array, instead returns a NEW Array
    
let arr = ["a", "b", "c", "d", "e"];
let arr2 = ["f", "g", "h", "i", "j"];
    
const letters = arr.concat(arr2); 
console.log(letters); // Output: (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    
    // We could also do the same thing using the Spread operator (and also does not mutate any of the involved arrays)--> 
    console.log([...arr, ...arr2]); // Output: (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    
    // Matter of preference wether we use the Spread Operator or the 'concat()' method.
    
    
    
// ********************
    // 'join()' array method 
    
// Workd the same way as with strings. Creates and returns a new STRING by concatenating all of the elements in an array. Its argument specificies what will be between strings in the Array after they join.
    
let arr = ["a", "b", "c", "d", "e"];

    
console.log(arr.join(' - ')); // Output: a - b - c - d - e
    
 
    
    
// **************************************
    // 'forEach()' array method 
    
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    
// lets say we wanted to loop over the movement array, in order to print a message for each movement in the example. Positive values in the array are deposits and negative values are withdrawls.

    // using a 'for-of' loop
for (const movement of movements) {
  movement < 0
    ? console.log(`${Math.abs(movement)} dollars Withdrawn! 💰`)
    : console.log(`${movement} dollars Deposited! 🏧`);
} 
/* Output:200 dollars Deposited! 🏧
          450 dollars Deposited! 🏧
          400 dollars Withdrawn! 💰
          3000 dollars Deposited! 🏧
          650 dollars Withdrawn! 💰
          130 dollars Withdrawn! 💰
          70 dollars Deposited! 🏧
          1300 dollars Deposited! 🏧 */
    
    // using 'forEach()' method to acheive the same thing, but in an easier way
        // 'forEach()' method is a Higher-order function, that takes in a Call-Back function as an argument, in order to tell it what to do. Remember the 'forEach()' method (Higher-order function) is the one that CALLS the Call-Back function.
    // So when does 'forEach' method call the Call-Back function? The 'forEach' function loops over the Array, and in each iteration, it will execute the Call-Back function. Also as the 'forEach' method calls the Call-Back function, in each iteration, it will pass in the current element of the Array, as an ARGUMENT (which we can specify and give it any name we want, just like in the 'for-of' loop) -->

movements.forEach(function (movement) {
  movement < 0
    ? console.log(`${Math.abs(movement)} dollars Withdrawn! 💰`)
    : console.log(`${movement} dollars Deposited! 🏧`);
});
    
    /* Output:200 dollars Deposited! 🏧
          450 dollars Deposited! 🏧
          400 dollars Withdrawn! 💰
          3000 dollars Deposited! 🏧
          650 dollars Withdrawn! 💰
          130 dollars Withdrawn! 💰
          70 dollars Deposited! 🏧
          1300 dollars Deposited! 🏧 */
    
    
    **** Important concept to keep in mind is that --> We use a Call-Back function to tell the Higher-Order function, exactly what it should do.
    So in the above 'forEach' method example 👆, we give the 'forEach' method instructions, by giving it a Call-Back function which contains these intructions.
    
    
    // What if we needed access to a counter variable, so just like we can access the current index of the Array using '.entries', (which returns an array of Arrays, inwhich the first position contains the current index, and then the second position cointains the value itself). Like so-->
    
for (const [index, movement] of movements.entries()) {
  movement < 0
    ? console.log(`Movement number: ${index + 1} --> ${Math.abs(movement)} dollars Withdrawn! 💰`)
    : console.log(`Movement number: ${index + 1} --> ${movement} dollars Deposited! 🏧`);
};
    
    // Using the 'forEach' method. Which is alot easier to get access to the current Index from --> 
      // remember that with each iteration of the Array, the 'forEach' method passes in the current element of the Array, as an ARGUMENT. But thats not all, it also passes in the current Index and the entire Array that we are looping through. Therefore we can specify them in the Parameter list of the 'forEach' method -->
    **** The order MATTERS when specifying the parameter. So the FIRST parameter is for the current element in the Array, the SECOND parameter is for the current Index, and the THIRD parameter is for the Array itself that we are looping through. Because this is the order inwhich the argumments are passed into our Call-Back function.
    so 'forEach(currentElement, currentIndex, wholeArray)'
    
movements.forEach(function (movement, index, array) {
  movement < 0
    ? console.log(
        `Movement number: ${index + 1} --> ${Math.abs(
          movement
        )} dollars Withdrawn! 💰`
      )
    : console.log(
        `Movement number: ${index + 1} --> ${movement} dollars Deposited! 🏧`
      );
});
    /* Output: Movement number: 1 --> 200 dollars Deposited! 🏧
               Movement number: 2 --> 450 dollars Deposited! 🏧
               Movement number: 3 --> 400 dollars Withdrawn! 💰
               Movement number: 4 --> 3000 dollars Deposited! 🏧
               Movement number: 5 --> 650 dollars Withdrawn! 💰
               Movement number: 6 --> 130 dollars Withdrawn! 💰
               Movement number: 7 --> 70 dollars Deposited! 🏧
               Movement number: 8 --> 1300 dollars Deposited! 🏧    */
    
    
    
    // One fundamental difference between the 'for-of' loop and the 'forEach' loop is that, you CANNOT break out of a 'forEach' loop. So the 'continue' and 'break' statements DO NOT WORK in a 'forEach' loop AT ALL. Instead 'forEach' will always loop through the entire array.
    // So if you need to break out of a loop, then use the 'for-of' loop. Other than that its just personal preference.
    
    
    / The 'forEach()' DOES NOT return or create ANY new value. It bascially does some work but DOES NOT produce anything.
   
// **************************************
    // 'forEach()' array method WITH Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);   
    
// 'forEach()' method with MAPS --> 
    
    // Remember Maps are like Objects with Key/Value pairs, difference is that Maps can have any type of Key.
    
    // 'forEach' method with Maps, also has 3 parameter --> FIRST parameter is the current value in the current iteration, SECOND parameter is the Key, and the THIRD parameter is the entire Map that is being looped over.
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
    /* Output: USD: United States dollar
               EUR: Euro
               GBP: Pound sterling */
    
    
    
    // 'forEach()' method with a SET --> 
      // A 'set()' DOES NOT have KEYS nor does it have INDEXES, it only has VALUES. but its Call-Back function, when using the 'forEach' method on it, still take in 3 parameters (even tho the first and second parameters will have the exact same value, which is the VALUE of the current element).
    // People that invented the 'forEach' made it still have 3 parameters when used with a 'set()' method because otherwise they would have had to invent a completely different 'forEach' method specifically for Sets, which would have caused alot of confusion for Devs.
    
    const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Ouput: Set(3) {"USD", "GBP", "EUR"}

currenciesUnique.forEach(function (value, _value, map) {
  console.log(`${value}: ${_value} ${map}`);
});
    /* Output: USD: USD [object Set]
               GBP: GBP [object Set]
               EUR: EUR [object Set] */
    
   *** Side-note: A variable name with an underscore means its a 'throw-away' varaible, or a variable that is completely unneccessary. ie: ('_value')

    

    

    
/ '********************************************************'
  // Array Methods to perform Data Transformations [check picture Notes called 'Array methods - map(), filter(), reduce()']
       
// There are 3 big Array methods that we use to perform Data Transofrmations in Javascript. These are methods that we use to create new Arrays based on tranforming Data from other Arrays.
       // These tools/methods have become really popular, so we'll see them everywhere we look in Modern JavaScript.
       1. 'map()' method --> is yet another method that we can use to loop over Arrays. So 'map()' is actaully similar to the 'forEach()', but with the difference that 'map()' creates a brand NEW Array based on the original Array.
    // So the 'map()' takes an Array, loops over that Array --> and in each iteration it applies a Call-Back function that we specify in our code, to the current Array element.
       // We say that it Maps the values of the original Array, to a new array. Which is why it is called the 'map()' method.
       / ***** This method is extremly useful (ussually way more usefull than the 'forEach()' method), because forEach()' simply allows us to do some work with each Array element, but 'map()' in the other hand builds us a brand NEW Array containing the results of applying an operation to the original array elements.
    
      2. 'filter()' method --> Used to filter for elements in the original Array, which satisfy a certain condition. In other words, elements for which the condition specified is true, will be added to a NEW Array that the 'filter()' method returns. All other elements will get filtered out (not included in the NEW filtered Array)
    
      3. 'reduce()'method --> Used to boil down all the elements of the original array, into ONE SINGLE VALUE.
      // An example of this could be to add all the elements of an Array together.
    // We also say that this process (of reducing an Array), has now reduced the original array, to one single value --> this Reduced Value is what gets returned from the 'reduce()' method in the end, so there is NO new Array in this case, ONLY THE REDUCED VALUE.
    
    
// **********
    // 'map()' Array method - a data transformation method

      //  The new array created from the map method will contain, in each position, the results of applying a Call-Back function, to the original Array elements.
      
      // Just like the 'forEach()', the 'map()' method is a Higher-order function, that takes in a Call-Back function as an argument, in order to tell it what to do. And then the Call-Back function gets three different arguments, the current Array element, the index of the current element, and the whole Array (just like in the 'for-each' method.)
      // *** then inside the Call-Back function, we need to return the value that we want the new Array to have, in the current position.
      
      // We know that the 'map()' will return a brand new Array, so we need to store it in a variable.

// Example: 
      // suppose these movements are in Euros, and we want to convert them to US dollars.
    
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  

const eurToUsd = 1.1;
      
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});
    
console.log(movementsUSD); // Output: (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002] 
    // ignore the decimal places for now.
    
console.log(console.log(movements)); // Ouput: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]  
    // The original array didnt change because we created a Brand new array
    
const movementsUSD2 = movements.map(function(mov) {
  return 23;
});
    
console.log(movementsUSD2);    // Output: (8) [23, 23, 23, 23, 23, 23, 23, 23]
      
      
  // Same example but with a 'for-of' loop
const movementsUSD2 = [];
for (const movement of movements) {
  movementsUSD2.push(movement * eurToUsd);
}
console.log(movementsUSD2); // Output: (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002] 
    // ignore the decimal places for now.
    
    
    // The 'for-of' loop and the 'map()' method have the same results but they are completly two different philosophies or Paradigms. The 'map()' method is more inline with the Functional Programming Paradigm, which is more commonly used nowadays in Modern JavaScript and the way to go.
    
    // 'map()' method using Arrow Function, for the Call-Back function
const movementUSD3 = movements.map((mov) => {
  return mov * eurToUsd;
});
console.log(movementUSD3); // same output

// another way of writing the arrow function (without brackets, 'return' keyword, or the curly braces, since its a one line code and has one argument)
const movementUSD4 = movements.map(mov => mov * eurToUsd);
console.log(movementUSD4); // same output
    
    
    // just like the 'forEach()' method, the 'map()' also has access to the exact same three parameter --> the value, index, and the whole array.
const movementDescriptions = movements.map((mov, i, arr) => {
  return mov < 0
    ? `Transaction ${i + 1}: $${Math.abs(mov)} Withdrawn! 🏧`
    : `Transaction ${i + 1}: $${mov} Deposited! 🤑`;

  // another simpler way of writing the code block
  // return `Transaction ${i + 1}: $${Math.abs(mov)} ${mov > 0 ? `Withdrawn! 🏧` : `Deposited! 🤑`}!`;
});

console.log(movementDescriptions); // Ouput: (8) ["Transaction 1: $200 Withdrawn! 🏧!", "Transaction 2: $450 Withdrawn! 🏧!", "Transaction 3: $400 Deposited! 🤑!", "Transaction 4: $3000 Withdrawn! 🏧!", "Transaction 5: $650 Deposited! 🤑!", "Transaction 6: $130 Deposited! 🤑!", "Transaction 7: $70 Withdrawn! 🏧!", "Transaction 8: $1300 Withdrawn! 🏧!"]
    
    
    / One could say that we did here with 'map()' method is exactly the same as what we did with the 'forEach' method, but in fact there is a BIG difference between these two approaches -->
    So with the 'forEach' method, we printed each line individually to the console, as we were looping over the Array. With each iteration, we performed some action that was then visible in the console. We can call this a SIDE-EFFECT. SIDE-EFFECT simply means to do some work, without returning anything.
                        ****** SO THE 'forEach' method creates SIDE-EFFECTs.
                        
    On the other hand, in the 'map()' method all we did was return each of the strings from the Call-Back function and so basically they got added into a new Array. Then finally we logged that entire Array to the console, AND not each element one by one, like with the 'forEach' method. The map method creates a NEW array which is why we need to RETURN it.
                        ****** SO THE 'map()' method DOES NOT create a SIDE-EFFECT, in each of the itertions. All we did was build a brand NEW Array.
    
    
   
                        
                        
// **********
    // 'filter()' Array method - another data transformation method
    
// As mentioned above, the 'filter()' method is used to filter for elements in an Array, that satisfy a certain condition.    
          // We specify the condition, using a Call-Back funtion. Which also have three arguments --> the value of the current element, the index of the current element, and the whole Array.
                        // 'filter()' needs to be stored in a variable, because it returns a value. If we want to use it. And in the code block --> we need to return a boolean value.
                        
                        
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
    
    // using a function expression for the Call-Back function
const deposits = movements.filter(function(mov) {
  return mov > 0;
})

console.log(deposits); // Output: (5) [200, 450, 3000, 70, 1300]
                        
                        
                        
                        
    // using an Arrow function for the Call-Back function                  
const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals); // Output: (3) [-400, -650, -130]
                        
                        
                        
    // using a for-of loop
const deposits3 = [];
for (const mov of movements) {
  mov > 0 && deposits3.push(mov);
}

console.log(deposits3); // Output: (5) [200, 450, 3000, 70, 1300]
    
    
    // If they have the same output, why not just always use the for-loop? 
      / The reason is because there is a push towards using more Functional code in Modern JavaScipt. And also because it more practical in a way that we can chain different methods together, which would be impossible if using the 'for-of' loop.

    
    
// **********
    // 'reduce()' Array method - another data transformation method    
    
// We use the 'reduce()' method to boil down all the elements in an Array, to one single value.
    // the 'reduce()' method also gets a Call-Back function, but its parameter are different from the ones in 'map()' or 'forEach()' methods. It takes in FOUR parameters. The first parameter in the 'reduce()' method's Call-Back function, is something called the Accumulator, which is like a snowball that keeps accumulating the value that we ultimately want to return. The Second is the current element, Third is the current index, and Fourth the whole Array.
    // As always, the Call-Back function will be called with each iteration of looping over the Array, by the 'reduce()' method (or Higher-Order function since it takes in a Call-Back function)
    
    The 'reduce()' method itself has TWO paramaters. The first parameter is the Call-Back function, and the SECOND parameter is the initial value of the accumulator in the first loop iteration.
    
    // In this example we want to get the sum of all the Array elements.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // using a function expression for the Call-Back function
const accountBalance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration number ${i}: ${acc} + ${curr}`);
  return acc + curr;
}, 0);
console.log(accountBalance); // Output: 3840
    
    // using an arrow function for the Call-Back function
const accountBalance2 = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(accountBalance2); // Output: 3840
    
      // This works because in each call of the Call-Back function, the accumulator will be the current sum of all the previous values. So we will keep adding to the accumulator, in each iteration of the loop. 
    // Finally we need to RETURN the value computed from the Call-Back function, which is how the new accumulator can then be used in the next iteration of the loop. SO BASICALLY, in each loop iteration we return the updated accumulator (so the current accumulator plus the new current value in the Array), like this we can keep adding to it in the next iteration.
    
    
  // same example using 'for' loop
let sum = 0;
for (let i = 0; i < movements.length; i++) {
  sum += movements[i];
}
console.log(sum); // Output: 3840

// same example using 'for-of' loop
let sum2 = 0;
for (const mov of movements) {
  sum2 += mov;
}
console.log(sum2); // Output: 3840
    
    
    // So a common pattern is that we always need an external variable whenever we want to use a for-loop or a 'for-of' loop. Which is fine if we only need one loop, but it starts to become combersome and unpractical when we use many loops for many operations.
    // So the data transformation methods that we have been studying, completely avoids this extra variable, and simply return the value right away.

    
    // example getting the maximum value of the array
// the purpose of the accumulator here is to keep track of the maximum value.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    
const maxValue = movements.reduce((acc, mov) => {
  if (mov > acc) {
    acc = mov;
  }
  return acc;
}, movements[0]); // Initial accumulator value is equal to the first element's value in the Array.

console.log(maxValue); // Ouput: 3000

// more simplified way
const maxValue2 = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
); 

console.log(maxValue2); // Ouput: 3000

    
// Challenge #2 - page 24 (using 'map()', 'filter()', 'reduce()')
    
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  console.log(humanAges);
  const adults = humanAges.filter(function (age) {
    return age >= 18;
  });
  console.log(adults);
  const avgHumanAge = adults.reduce(function (acc, curr, i, arr) {
    return acc + curr / arr.length;
  }, 0);
  return Math.trunc(avgHumanAge);
};

// more simplified way
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  const avgHumanAge = adults.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  return Math.trunc(avgHumanAge);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // Output: 44
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // Output: 47

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])); // Output: 44
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4])); // Output: 47
    
    
    
/ ****************************************************************  
  // Chaining the 'map()', 'filter()' and 'reduce()' methods, one after another.
    
    // lets say we wanted to take all the movement deposits, convert them from euros to dollars, and then add them all up.
    
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
    
    // Chaining the data transofrmation array methods, or doing it all in one go without storing each operation in a variable. (simplified using the Arrow function)
const totalDepositedsUSD = movements.filter((mov) => mov > 0).map((mov) => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);  
    
console.log(totalDepositedsUSD); // Output: 5522.000000000001
    
    
    // So we can only chain another array method after one another, if the one before it returns an Array. 
    / So we can imagine all of this as a sort of PIPELINE, that processes our data. So we put data in at the beginning, and then it goes through all the steps and in the end our input data comes out processed at the other side of the PIPELINE.
    
    
    // debuggin when chaining array methods, using the array parameter in their Call-Back functions --> 
    
      // If we want to check the result of the provious array method operation, we can check out ('console.log(arr)') the next array in the next Array method, that is chained to it.
      
const totalDepositedsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr); // logs to the console the array produced from the 'filter()' method. Inorder to debug. It will be called as much times, as the number of elements on the Array.
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositedsUSD); 
    
    / So we can inspect current Array at any stage of the PIPELINE, using the third parameter of the Call-Back function (which is the whole Array).
    
    
    // *** REMARKS about Chaining Data transformation methods --> 
            1. We should not overuse chaining. So we should try to optimize it because chaining tons of methods one after the other, can cause real performance issues if we have really huge Arrays. So if we have a Huge chain of methods, we should try to compress all the functionality that they do, into as little methods as possible. For example --> sometimes we create way more 'map()' methods than we actually need, where we could just do it all in one 'map()' call.
            2. It is bad practice in JavaScript, to chain methods that mutate the underlying ORIGINAL Array. An example of that is the 'splice()' method. So we should not chain methods like the 'splice()' or the 'reverse()' methods. We can do it small applications, but in huge applications it is always good practice to avoid mutating Arrays.
            
            
// Challenge
    // Same as Challenge #2 but using Chaining

const calcAverageHumanAge = function (ages) {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  return Math.trunc(average);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // Output: 44
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // Output: 47

            
    
    
'/ ***************************************************************' 
  // 'find()' array method
    
// We can use the 'find()' method to retreive one element from an Array, based on a condition.
    // Also accepts a Call-Back function which will then be called as the method loops over the array. The Call-Back function also have three parameters --> the value of the current element, the index of the current element, and the whole Array.
    // Just like the 'filter()' method, the 'find()' method also needs a Call-Back function which takes in a condition and returns a BOOLEAN. 
    The 'find()' method returns the FIRST element in the array, that satisifies the condition. Or simply the first element in the array for which the condition becomes true.
        
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];    
    
    // using a function expression for the Call-Back function
const firstWithdrawal = movements.find(function(mov) {
  return mov < 0 ;
});
    
console.log(firstWithdrawal); // Output: -400
    
    // using an arrow function for the Call-Back function
const firstWithdrawal = movements.find(mov => mov < 0);
    
console.log(firstWithdrawal); // Output: -400
    
    
    // So the 'find()' is a bit similar to the 'filter()' method, but there are two fundamental differences --> 
        1. 'filter()' returns ALL the elements that match the condition, while 'find()' only returns the FIRST element that matches the condition.
        2. More importantly, the 'filter()' method returns a NEW array, while 'find()' only returns the element itself and NOT an Arrray.
        
        
  // *********** When using 'find()' method on an Array that contains Objects --> we can find a WHOLE object in the array, based on some property of that object.  Like so -->
        
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];
    
    // lets say we want to get the account where the owner is 'Jessica Davis'
const account = accounts.find((acc) => acc.owner === 'Jessica Davis');

console.log(account); // Ouput: {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222, userName: "jd"}
    
    // So when one Array contains multiple Objects, which all have a similar structure, we can use the 'find()' method to search the Array to basically to find/return an ENTIRE Object that has a certain property that we already know.
    Can be really powerfull
    
    // Ussually the goal of the 'find()' method is to find exactly one element, so we ussually set up a condition where only one element can satisfy that condition.
   
    
// Same example using the 'for-of' loop
for (const account of accounts) {
  account.owner === 'Jessica Davis' && console.log(account);
}; // Ouput: {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222, userName: "jd"}
    
    
/ **************************************************************** 
   // The 'findIndex()' method 
    
// Works almost the same way as the 'find()' method. Returns the index of the found element, and NOT the element itself.
    
     // Also accepts a Call-Back function which will then be called as the method loops over the array. The Call-Back function also have three parameters --> the value of the current element, the index of the current element, and the whole Array. (we dont really use the index and array parameters tho)
    
    // The 'findIndex()' method will return the INDEX of the first element in the array, that matches the condition in its Call-Back function, or for which its condition return TRUE.
    // So it is similar to 'find()' but it returns the INDEX and NOT the element itself.
    
    
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];    
    
    // using a function expression for the Call-Back function
const index = movements.findIndex(mov => mov < 0);
    console.log(index); // Output: 2 
movements.splice(index, 1); // deletes the array element at the index computed from the 'findIndex()' method 
console.log(movements); // Output: (7) [200, 450, 3000, -650, -130, 70, 1300]
    
    // 'findIndex()' method is also similar to 'indexOf()' method, but the big defference between them is that the 'indexOf()' can ONLY search for a value that is in the Array (ie: 'indexOf(-400)') [alot simpler]. Whereas, with the 'findIndex()' method we can create a complex condition in its Call-Back function, anything thing that returns true or false.
    
  
/ **************************************************************** 
   // 'some()' array method 
       
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
    
// Looking back at the 'includes()' method that we studied earlier. Which tests if an Array includes a certain value, and return a boolean.
    
console.log(movements.includes(-130)); // Ouput: true
    
    // However, with the 'includes()' method, we can really only test for equality. So basically the 'includes()' method, returns true if any value in the Array is exactly equal to the specified value in between the brackets.

     // But what if we wanted to test for a condition instead, thats when the 'some()' method comes into play. 
    
    // Lets say we want know if there is any positive numbers in the movements array --> ['some()' method also takes in a Call-Back function, with the same three parameters --> the currect array element, the current index, and the whole array]
   / [the Call-Back function has to return a boolean value, either True or False]
    

const deposits = movements.some(mov => mov > 0); 
console.log(deposits); // Output: true

console.log(movements.some(mov => mov === -130)); // Output: true  (if we want to check for equality --> then better use the 'includes()' method)
    
    // this example tests if any number is above 5000
const aboveFiveThousand = movements.some(mov => mov > 5000);
console.log(aboveFiveThousand); // Ouput: false
    
    
    SUMMARY --> So the 'includes()' method checks for a EQUALITY. Whereas the 'some()' method checks for a CONDITION.
    So whenever we see or hear the word ANY, then it is probably a good use case for the 'some()' method.
    
    
    
'/ **************************************************************** '
   // 'every()' array method 
    
// Similar to the 'some()' method, but the difference between them is that the 'every()' method ONLY returns true if *ALL* the elements in the array satisfy the condition that we pass in its Call-Back function.
    // In other words, if every element in the array passes the test in our Call-Back function, only then the 'every()' method returns true.
    
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
    
console.log(movements.every(mov => mov > 0)); // Output: false    
    

    
'/ **************************************************************** '
   // Writing the Call-Back function seperatly, and then passing it as a Call-Back function, in an Array method (ie: seperating Call-Back function) --> 
    
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
    
const deposits = mov => mov > 0;

    // now we would re-use the same function for all kinds of different Array methods.
console.log(movements.includes(deposits)); // Output: flase
console.log(movements.some(deposits)); // Output: true
console.log(movements.every(deposits)); // Output: false
console.log(movements.filter(deposits)); // Output: (5) [200, 450, 3000, 70, 1300]

   
    
'/ **************************************************************** '
   // 'flat()' and 'flatMap()' Array method (intreoduced in ES2019)
    
// lets say we have a nested Array (arrays within an Array)
    // and we wanted to take the sub/nested Array's elements and put them into the big array to make one big Array. This is where we can use the 'flat()' method, which removes the nested Arrays, and flattens the array. [Does not take in a Call-Back function] -->
    
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // Output: (8) [1, 2, 3, 4, 5, 6, 7, 8]
    
    / The 'flat()' method only goes one level deep, when flattening the Array.
    
// Lets say now we have a more deeply nested Array (an array inside an array inside an array)

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

    // the 'flat()' method takes in a parameter, which specifies the level of DEPTH that the 'flat()' method should flatten an array from. Depth level of '1' is the default.
console.log(arrDeep.flat()); // Ouput: (6) [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(1)); // Ouput: (6) [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); // (8) [1, 2, 3, 4, 5, 6, 7, 8]
    
    
    
// Example
    // Calculating overall movements in all accounts
    
const account1 = {
  owner: 'Mikel Kamel',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};

const account2 = {
  owner: 'Sandy Kamel',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

const account3 = {
  owner: 'JoJo Juvana',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
};

const accounts = [account1, account2, account3, account4];

const overAllBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

console.log(overAllBalance); // Output: 17840 
    
    
    // Using 'map()' method first and the flattening the result with 'flat()' is common in JavaScript. So to solve having to write them both everytime, there is a new method that was introduced called 'flatMap()' array method.
    
// A 'flatMap()' method combines both a 'map()' and a 'flat()' method, into just one method, which is BETTER FOR PERFORMANCE.
    // Its essentially a 'map()' method, but all it does in the end is Flatten the result.
    Note: 'flatMap()' method ONLY goes one level deep and we CANNOT change it, so if you want to flatten more than 1 level deep, then use the 'flat()' method.
    
    
    // same example but with 'flatMap()' method 
const overAllBalance2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov);
    
console.log(overAllBalance2); // Output: 17840    
    
    
    
    // So keep the 'flat()' and 'flatMap()' methods in mond whenever you have yourself in a situation where you have nested Arrays, and need to work with them.
    
    
    
    
'/ **************************************************************** '
   // Sorting Arrays using 'sort()' array method
    
'/ THE 'sort()' method MUTATES the original Array.'
    
    // 'sort()' with strings
const owners = ['Mikel', 'Adam', 'Zack', 'Jonas'];
console.log(owners.sort()); //Ouput: (4) ["Adam", "Jonas", "Mikel", "Zack"]    // Sorts the string elements alphabetically from A to Z.
console.log(owners); // Ouput: (4) ["Adam", "Jonas", "Mikel", "Zack"]   // MUTATED THE ORIGINAL ARRAY
 
     // 'sort()' with numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
console.log(movements.sort()); // Output: (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]
    
    // The output of sorting 'sort()' numbers does not work, because the 'sort()' method does the sorting based on STRINGS.
    // So it converts everything to strings --> and then it does the sorting itself

    // Inorder to fix this we can pass in a 'compare' Call-Back function into the 'sort()' method. The Call-Back function is called with TWO arguments, the CURRENT VALUE and the NEXT VALUE. Like so -->
      // *** Inorder to understand how the Compare function works, lets think if 'a' and 'b' as being two consecutive numbers in the Array (it doesnt matter which ones) --> and always REMEMBER THIS: 
        1. If we return less than 0 (return ... < 0) [negative value]--> then value 'a' will be put BEFORE 'b' in the sorted output Array. // return < 0 --> A, B [keep order]
        2. Whereas if we return greater than 0 (return ... > 0) [positive value]--> then value 'b' will be put BEFORE 'a' in the sorted output Array. // return > 0 --> B, A [switch order]
        
    // sorting in ASCENDING order example (small to large number)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(
  movements.sort((a, b) => {
    if (a > b) return 1; // the number doesn't matter as long as it greater than 0
    if (a < b) return -1;
  })
); // Ouput: (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]
    
       // sorting in DESCENDING order example (large to small number)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(
  movements.sort((a, b) => {
    if (a > b) return -1; // the number doesn't matter as long as it greater than 0
    if (a < b) return 1;
  })
); // Ouput: (8) [3000, 1300, 450, 200, 70, -130, -400, -650]

    
// simplifying the example by using simple math
console.log(movements.sort((a, b) => a - b)); // Output: (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

console.log(movements.sort((a, b) => b - a)); // Output: (8) [3000, 1300, 450, 200, 70, -130, -400, -650]
    
    
    SUMMARY: **MEMORIZE** If returned Call-Back function value is negative then array values will be sorted in ASCENDING order (small to large number), whereas if returned Call-Back function value is positive the array values will be sorted in DESCENDING order (large to small number). If we return zero then element value position will remain unchanged.
    
    // Tip: if we have an array that has both numbers and strings, then just dont use the 'sort()' method. Use something else.
    
    
    
    
'/ **************************************************************** '
   // Programmatically creating and Filling Arrays using 'new Array()' and 'fill()'
    
    
// Manually creating arrays (like we've been doing)
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
    
// PROGRAMATICALLY creating arrays (without defining all the array elements manually)
    
const x = new Array(7);
console.log(x); // Output: (7) [empty × 7]

      // so the 'new Array()' function does it so that whenever we only pass in ONE argument, then it creates a new empty Array with that length.

console.log(x.map(x => 5)); // Output: (7) [empty × 7]
    // CANNOT USE ANY array methods on the 'x' variable that we created, for example we cant use the 'map()' method on it to fill it up with elements. BUT THERE IS ONE METHOD WHICH WE CAN USE ON IT, which is the 'fill()' method.
    
    // so the 'fill()' method will fill up an entire array, with the specific value.
const x = new Array(7);
x.fill(5); 
console.log(x); // Output: (7) [5, 5, 5, 5, 5, 5, 5]
    
    'The 'fill()' method' MUTATES the ORIGINAL Array.
    
    // So the 'fill()' method is a bit similar to the 'slice()' method. We can also specify which position we want it to start filling in the Array, by specifying a Start parameter, using a SECOND argument. And where we want it to stop filling, by specifying an End parameter, using a THIRD argument. Just like the 'slice()' method, the final index will NOT be included in the array.
const x = new Array(7);
x.fill(5, 3, 5);
console.log(x); // Output: (7) [empty × 3, 5, 5, empty × 2]
    
    // We can also use the 'fill()' method on other arrays, not just empty arrays --> 
    
const arr = [1, 2, 3, 4, 5, 6, 7];  
arr.fill(0, 1, 4);
console.log(arr); // Output: (7) [1, 0, 0, 0, 5, 6, 7]
    
 
// ***********************
    // 'Array.from()' array method
    
    // So this is something new. We are not using the 'from()' as a method on an Array, instead we are using it on the Array CONSTRUCTOR. 'Array' is a function object, and then on this funciton object we call the 'from()'.
      // In the 'from()' --> we can pass in an Argument which is an Object with the 'length' property to specify how many elements will be in the Array, and then the SECOND argument takes in a Call-Back function which its value will be the value of the elements in the Array. 
    // The Call-Back function also has three parameter --> the current element, current Index, and the whole Array.
    
        / 'The Call-Back function in the 'Array.from()' method works exactly the same way as in the 'map()' method.
    
const y = Array.from({ length: 7 }, () => 1); // In the Call-Back function, we dont need any arguments but we still have to write a function.
console.log(y); // Output: (7) [1, 1, 1, 1, 1, 1, 1]
    
   
     // Programattically creating an Array like this --> const arr = [1, 2, 3, 4, 5, 6, 7]; 

const z = Array.from({ length: 7 }, (_curr, i) => i + 1); // '_curr' is a Throw-Away variable because we dont need this variable at all. (thats why we added an underscore to it)
console.log(z); // Output: (7) [1, 2, 3, 4, 5, 6, 7]
    
    
    // Real-life usecase of the 'Array.from()' function

// 'Array.from()' function was originally created with the purpose of creating Arrays from Array-Like structures (iterables which are strings, maps, sets). Thats also the reason for the name of the function, because we can create Arrays from other things.
    // Another great example of Array-like structures (iterables) is the result of using 'querySelectorAll()' which returns something called a Node-list which is something like an Array, which contains all the selected elements. But its not a REAL Array so it doesnt have methods like 'map()' or reduce().
    // So if we wanted to use Array methods on the output of a 'querySelectorAll()' (nodelist), we first need to convert it into an Array, by using the 'Array.from()' --> 
    'Array.from()' --> FIRST parameter is the Array-like structure (not an iterable) that we want to convert to an Array, the SECOND argument is the 'map()' method's Call-Back function. 👇
      
const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(curr.textContent.replace('€', ''))); 
    
    // another way to convert an Array-like structure to an Array, is to use the Spread Operator. But then we would have to use the 'map()' method seperatly.
    
const movementsUI2 = [...document.querySelector('.movements__value')];
movementsUI2.map(el => el.textContent.replace('€', ''));
    
 
    
'/ **************************************************************** '
   // Which Array methods to use for different problems?

// Up until now, we have studied 23 different Array methods in the course.
    
    / CHECKOUT SLIDE PICTURE IN NOTES called 'Which ARRAY METHOD to use of all the 23 we have learned.'
    
    // List out all the 23 Array methods we have learned this far, and their use cases.
    
'/ **************************************************************** '
   // Something I didnt know about the '++' operator
    
let x = 10;
console.log(x++); // Output: 10     // The '++' operator DOES increment the value, but it still returns the provious value
console.log(x); // Output: 11
    
    // An easy solution to this is to use the PREFIXED '++' operator, which is to write it before the operant -->
let y = 10
console.log(++y); // Output: 11

    
'/ **************************************************************** '
   // Array Methods Excercises
    
const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};

const account2 = {
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};

const account4 = {
  movements: [430, 1000, 700, 50, 90],
};

const accounts = [account1, account2, account3, account4];

    
    
// 1. Calculating Total deposits in all accounts
const totalDeposited = function (accounts) {
  const deposits = accounts
    .map(acc => acc.movements)
    .flat()
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  console.log(`Total Deposits in all accounts: $${deposits} 🦋`);
};

totalDeposited(accounts); // Output: Total Deposits in all accounts: $25180 🦋

    
    
// *****
// 2. Count how many deposits have been in the bank with at least 1000 dollars
const numDeposits1000 = function (account) {
  const numDeposits = account
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 1000).length;
  console.log(numDeposits);
};

numDeposits1000(accounts); // Output: 5

// another way using the 'reduce()' to count number of elements
const numDeposits1000Reduce = function (account) {
  const numDeposits = account
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => (mov > 1000 ? ++acc : acc), 0);
  console.log(numDeposits);
};

numDeposits1000Reduce(accounts); // Output:5

    
    
// *****
// 3. Create a new Object using the 'reduce()' method which contains the sum of the deposits and of the withdrawals

const totalDepositsWithdrawals = function (accounts) {
  const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
      (acc, mov) => {
        mov > 0 ? (acc.deposits += mov) : (acc.withdrawals += Math.abs(mov));
        return acc;
      },
      { deposits: 0, withdrawals: 0 }
    );
  console.log(deposits, withdrawals);
};

totalDepositsWithdrawals(accounts); // Output: 25180 7340

    
    
// *****
// 4. Create a simple function to convert any string to a titleCase, which means that all the words in the sentence are capitalized, except for some of them (ie: this is a nice title --> This Is a Nice Title)

const toTitleCase = function (string) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const capitalize = string => string[0].toUpperCase() + string.slice(1);

  const titleCase = string
    .toLowerCase()
    .split(' ')
    .map(string => (!exceptions.includes(string) ? capitalize(string) : string))
    .join(' ');
  console.log(capitalize(titleCase));
};

toTitleCase('this is a nice title'); // Output: This Is a Nice Title
toTitleCase('this is a LONG title, but not too long'); // Output: This Is a Long Title, but Not Too Long
toTitleCase('and is another title with an EXAMPLE'); // Output: And Is Another Title with an Example
    

'/ **************************************************************** '
    // Challenger #4 solution [Array's section]
    
    
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// #1
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// #2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

sarahDog.curFood > sarahDog.recommendedFood
  ? console.log(`Sarah's dog weight is eating too much 🐕`)
  : console.log(`Sarah's dog weight is eating too little 🤏`);

// #3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

console.log(ownersEatTooLittle);

// #4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much! 🐕‍🦺`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little! 🐩`);

// #5
console.log(
  'Exact:',
  dogs.some(dog => dog.curFood === dog.recommendedFood)
);

// #6
const checkOkayFood = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log('Okay:', dogs.some(checkOkayFood));

// #7
console.log(dogs.filter(checkOkayFood));

// #8
const shallowCopy = [...dogs];
console.log(shallowCopy);
console.log(shallowCopy.map(dog => dog.recommendedFood).sort((a, b) => a - b));

// another way
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);
    
    
    
'/ **************************************************************** '
    '/ **************************************************************** '
   // NEW SECTION [Numbers & Dates]
    
    
// In JavaScript, all numbers are represented internally as floating numbers, so always as decimals no matter how we write them as integers or deciamls. Which is also why we only have ONE data type for all numbers.
    // Also numbers are represented internally in a 64 bit format, which means that numbers are always stored in a binary format (composed of 0s and 1s).

    // In the binary form it is very hard to represent fractions, that are very easy to represent in the base 10 system. 
    Based 10 is --> numbers from 0 to 9
    Binary base 2 is --> numbers from 0 to 1
    
    // So there are some numbers that are very difficult to represent in Binary base 2, one example the fraction 0.1
    
console.log(0.1 + 0.2); // Output: 0.30000000000000004
    
    / So keep in mind that you cannot do really precise scientific or financial calculations in JavaScript, because eventually we will run into problems like this --> 
    console.log(0.1 + 0.2 === 0.3); // Output: false    (which should be true. An error in JavaScript that we have to accept)
    
    
// *******
    // Converting a string to a number using 'Number()' and '+' operator

console.log(Number('23'));  // Output: 23
console.log(+'23'); // Output: 23       (remember: type corecion occurs with the '+' operator)

    
// *******
    // Parsing a Number (integer) from a String using 'parseInt()'

// Remember every function is also an Object. And Objects have methods --> thus the 'Number()' function have methods that we can use on it.
    
    // specify a string in its parameter, and javascript will try to figure out the number that in that string. 
    // Inorder for it to work, the string have to start with a number. Similar to type coercion but even more advanced because javascript tries to get rid of unnecessary  that are NOT numbers.
    
    // can be very usefull where we get some kind of unit from css and then we need to get rid of that unit.
    
console.log(Number.parseInt('30px'), 10); // Output: 30
console.log(Number.parseInt('e23'), 10) ; // Output: NaN
 
    // the 'parseInt()' function also accepts a second argument, which is called Radix (the base of the numeral system that we are using) --> most of the time we are using Base 10 numbers so always add an argument of 10 to the second parameter to avoid bugs. Like so: 👆
    
    
/ *******
    // Parsing a Number (float) from a String using 'parseFloat()'   
    
    'parseFloat()' method is the GOTO whenever we need to read a value out of a string, for example coming out of css.
    
// reads the decimal number from our string
    
console.log(Number.parseInt('2.5rem'), 10) ; // Output: 2    [using 'parseInt()']
console.log(Number.parseFloat('2.5rem'), 10); // Output: 2.5     [using 'parseFloat()']
    
    
    // Side Note --> 'parseInt()' and 'parseFloat()' are Global functions which means that we dont have to call them on 'Number'. But it is not encouraged in Modern JavaScript. We can do this --> 
    
console.log(parseInt('2.5rem'), 10) ; // Output: 2    
console.log(parseFloat('2.5rem'), 10); // Output: 2.5 
    
   // **** 'Number' is a namespace
    

/ *******
    // 'isNan()' number function  [DONT USE --> use 'isFinite()']
    
// checks if any value is NOT a Number. Returns a boolean.
    
console.log(Number.isNaN(23)); // Output: false
console.log(Number.isNaN('23')); // Output: false     ['flase' because this isnt not a number, its just a regular value ????]
console.log(Number.isNaN(Number('23X')); // Output: true
console.log(Number.isNaN(23 / 0)); // Output: Infinity        [dividing by 0 gives us a special value in JavaScript called Infinity]
    
    'isNan()' is NOT the BEST way of checking if a value is a number, because it doesnt consider the 'Infinity' use case. Therefore there is a better function to use in order to check if a value is a number which is the --> 'isFinite()' method.
   
'/ *******'
    // 'isFinite()' number function

    ***GOTO METHOD WHENEVER WE WANT TO CHECK IF SOMETHING IS A NUMBER OR NOT*** ignore 'isNan()' and 'isInteger' methods.
// better method to check if something is a number or not.
    
console.log(Number.isFinite(23)); // Output: true
console.log(Number.isFinite('23')); // Output: false     
console.log(Number.isFinite(Number('23X')); // Output: false
console.log(Number.isFinite(+'23X')); // Output: false
console.log(Number.isFinite(23 / 0)); // Output: false        

 
'/ *******'
    // 'isInteger()' number method [use only when you are woking with integers]

// The 'isInteger()' method determines whether the passed value is an integer

console.log(Number.isInteger(23)); // Output: true
console.log(Number.isInteger(23.0)); // Output: true   
console.log(Number.isInteger(+'23X')); // Output: false
    
    

'/ **************************************************************** '
  // Math and Rounding

// ********
    // 'Math.sqrt()' function

console.log(Math.sqrt(25)); // Output: 5
console.log(25 ** (1/2)); // Output: 5    [Same result. Another way]
console.log(25 ** (1/3));  // Output: 2   [only way to calculate Cubic root]
    
// ********
    // 'Math.max()' function
    
// Returns the maximum value of a couple of values.
    
console.log(Math.max(4, 54, 19, 23, 14)); // Output: 54

    // It DOES math Coercion 👇
console.log(Math.max(4, '54', 19, 23, 14)); // Output: 54
    
    // But it does not do Parsing 👇
console.log(Math.max(4, '54px', 19, 23, 14)); // Output: NaN
    

// ********
    // 'Math.min()' function
    
// Returns the minimum value of a couple of values.

console.log(Math.min(4, 54, 19, 23, 14)); // Output: 4

    // It DOES math Coercion 👇
console.log(Math.min('4', 54, 19, 23, 14)); // Output: 4
    
    // But it does not do Parsing 👇
console.log(Math.min('4px', 54, 19, 23, 14)); // Output: NaN
    

// ********
    // 'Math.PI' property
    
// The 'Math.PI' property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:  
    
    
console.log(Math.PI); // Output: 3.141592653589793
    
  // calculating the area of a circle, with a 10 radius
console.log(Math.PI * Number.parseFloat('10px') ** 2); // Output: 314.1592653589793
    

// ********
    // 'Math.random()' function
    
// Only generates random number between 0 - 0.9999999999999999 (16-decimal places).
// CANNOT place parameter/arguments in the "random()" method. Unlike in C#.
    
console.log(Math.trunc(Math.random() * 6) + 1); // Random number between 1 and 6
    
// Generalizing the Math.Random formula so we can use it from now on to always generate a random integers between two values --> 
    const randomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };
    
      // using Arrow Function
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
    
    // A function that will always give a random number between min and max 👆
    
console.log(randomInt(1, 4));    
    
    
// ********
    // Rounding Integers
    
    ALL THESE METHODS DO TYPE COERCION.
    
// 'Math.trunc()' 👇 
    // Removes any decimal part
console.log(Math.trunc(23.9874)); // Output: 23
console.log(Math.trunc(-23.9874)); // Output: 23
  
// 'Math.round()' 👇 
    // Rounds to the nearest integer
console.log(Math.round(23.9874)); // Output: 24
    
 
// 'Math.ceil()' 👇 
    // ALWAYS rounds a number UP to the next LARGEST integer.
console.log(Math.ceil(23.1)); // Output: 24
    
    
// 'Math.floor()' 👇  [USE THIS]
    // Rounds a number DOWN to the next SMALLEST integer.
console.log(Math.floor(23.1)); // Output: 23
console.log(Math.floor(23.987)); // Output: 23  
console.log(Math.floor(-23.987)); // Output: 24     
    
    
 // ********
    // Rounding Floats or Decimals  

// when rounding decimals, we have to specify the number first in between parentheses, and then on that number we call the 'toFixed()' method (ALWAYS returns a string. Its paramater is for how many decimals parts the returned string will have) 👇

console.log((2.7).toFixed(0)); // Output: 3
console.log((2.7).toFixed(3)); // Output: 2.700
console.log((2.345).toFixed(2)); // Output: 2.35   
console.log(Number((2.345).toFixed(2))); // Output: 2.35  [converting from string to number]
console.log(+(2.345).toFixed(2)); // Output: 2.35  [ANOTHER WAY OFconverting from string to number]    
    
  
'/ **************************************************************** '
  // Remainder Operator (%)

// Returns the remainder of a division
    
console.log(5 % 2); // Output: 1
console.log(8 % 3); // Output: 2  
    
// Checking if a given number is Even or Odd

const isEven = num => num % 2 === 0;
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false    
console.log(isEven(514)); // Output: true
    

    
// from the Bankist app 👇
    
labelBalance.addEventListener('click', function () {
  // Returns a nodeList which is an Array-like structure. So we convert it to an Array using the spread operator and then the '.from()' method.
  [...document.querySelectorAll('.movements__row')].forEach(function (mov, i) {
    if (i % 2 === 0) { // changes the color of every other row
      mov.style.backgroundColor = 'orangered';
    }
  });
});
    
    
    
    
'/ **************************************************************** '
  // 'BigInt()' (primitive dataType) [introduced in ES2020] 
    
console.log(2 ** 53 - 1); // Output: 9007199254740991   [The biggest number that JavaScript can represent]
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991   [so importnat that it is stores into the 'Number' namespace as 'MAX_SAFE_INTEGER']
    
    // So any integer that is larger than 9007199254740991, is NOT SAFE, which means it cannot be represented accurately.
    
    // BigInt stands for big integer, and it can be used to store numbers as large as we want. We add 'n' to the end of the number to transform the regualr nummber to a BigInt number.
    
console.log(274921742174891274912074812374087128041); // Output: 2.7492174217489126e+38
    
    // using BigInt by adding an 'n' at the ends of the number
console.log(274921742174891274912074812374087128041n); // Output: 274921742174891274912074812374087128041n
    
    // We can also create BigInt by using the 'BigInt()' function [not as accurate. only use with smaller numbers]
console.log(BigInt(274921742174)); // Output: 274921742174n
    
console.log(1000n + 1000n); // Ouput: 2000n
console.log(10489234793242400n + 4923498324729384374982n); // Ouput: 4923508813964177617382n
    
    
    *** WE CANT MIX BigInt with regular numbers
const huge = 243729749208748217051275n; // BigInt number
const num = 23; // not a BigInt number
console.log(huge * num); // Output: Error
console.log(huge * BigInt(num)); // Output: 5605784231801208992179325n
    
    
    
console.log(typeof 20n); // Output: bigint
console.log(20n === 20); // Output: false   ['===' checks for same datatype]
console.log(20n == 20n); // Output: true
    

// cannot use Math operations on BigInt
console.log(Math.sqrt(20n)); // Output: Error
    
  
    
'/ **************************************************************** '
  // Creating Dates and times 
    
// Steps: 
    1. Create a Date (four different ways)
    
        1a. using 'new Date()' constructor
    const now = new Date();
    console.log(now); // Output: Mon Aug 30 2021 16:47:23 GMT-0400 (Eastern Daylight Time)
     
        2a. Parsing the date from a date string also using 'new Date()' constructor [DONT USE THIS BECAUSE ITS UNRELIABLE, unless the string was created by javascript itself then its pretty safe]
    console.log(new Date('Mon Aug 30 2021 16:47:23')); // Output: Mon Aug 30 2021 16:47:23 GMT-0400 (Eastern Daylight Time)
    console.log(new Date('December 23, 2015')); // Output: Wed Dec 23 2015 00:00:00 GMT-0500 (Eastern Standard Time)
    
    // we can also pass in year, month, day, minute, and sec into the 'Date()' constructor
    console.log(new Date(2037, 10, 19, 15, 23, 5)); // Output: Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
    
    // Side note: the Month in Javascript is 0 based, just like array indexes.
    
// We can also pass into the 'Date()' constructoe function, the amount of milliseconds passed since the beginning of the UNIX time, which is December 31st, 1969. 👇
console.log(new Date(0)); // Output: Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
    
    // creating a date that is 3 days after this --> 
console.log(new Date(3 * 24 * 60* 60 * 1000)) // converting from days to milliseconds
    
    // the argument inside the 'Date()' constructor '3 * 24 * 60* 60 * 1000' is called the Timestamp.
    
    // 'Date()' constructor methods -->
// the 'Date()' is another type of Object, and thus it has its own methods just like Arrays or maps or strings. And we can use these methods to get or set compoents of a date 👇
    
    const future = new Date(2037, 10, 19, 15, 23, 5);
    console.log(future); // Output: Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
    console.log(future.getFullYear()); // Output: 2037
    console.log(future.getMonth()); // Output: 10
    console.log(future.getDate()); // Output: 19 [gets the day]
    console.log(future.getHours()); // Output: 15
    console.log(future.getMinutes()); // Output: 23
    console.log(future.getSeconds()); // Output: 5
    console.log(future.toISOString()); // Output: 2037-11-19T20:23:05.000Z    [an ISO string which follows some kind of international standard]
    console.log(future.getTime()); // Output: 2142274985000      [getting the TimeStamp for a date which is milliseconds that have passed since Dec 31st, 1970.]
    
    // we can also create a new date based on the milliseconds from the timeStamp created from the 'getTime()' method
    console.log(new Date(2142274985000)); // Output: Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
    
    
    / TimeStamps are so IMPORTANT that there is a special method that is used to get the timeStamp for right now 👇
    console.log(Date.now()); // Output: 1630358128201   [milliseconds that have passed since Dec 31st, 1970]
    
    
    // there is also a SET version for all these methods, which SETS/CHANGES rather than just GETTING
    future.setFullYear(2040);
    console.log(future); // Output: Mon Nov 19 2040 15:23:05 GMT-0500 (Eastern Standard Time)
    
    
    
    
'/ **************************************************************** '
      // Operations/Calculations with Dates

// Calculating how many days have passed between the two days
/* Steps --> 1. Create a new Date ('new Date()').
             2. Convert the Date to a number using ('Number()' or '+')
             3. The result will be a TimeStamp in milliseconds, which we can use to perform calculations.
             4. After we perform the calculations using the TimeStamp (which is in milliseconds), we can then convert the milliseconds back to days/hours etc */
const future = new Date();
console.log(Number(future)); // Output: 1630446626979
console.log(+future); // Output: 1630446626979

const calcPassedDays = (date1, date2) =>
  `${Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))} days 🌞`;

console.log(calcPassedDays(new Date(2037, 3, 4), new Date(2037, 3, 14))); // Output: 10 days 🌞

// If we need really precise calculations for example including time changes due to daylight saving changes, or other weird edge cases --> then we can use a Date library like "moment.js". Which available for free.

    
'/ **************************************************************** '
      // Internationalizing API --> DATES using 'intl'

// Correctly formats the code to any user around the world.

// Javascript Internationalization API, which allows us to easily format numbers and strings according to different languages.
// So with this new API, we can make our applications support different languages for users around the world.

// There is alot of things we can do with the Internationalization API, but in the section we are going to only talk about formatting dates and numbers.

// using the Internationalization API 👇
const now = new Date();
const internationalizationDate1 = new Intl.DateTimeFormat('en-US').format(now);
console.log(internationalizationDate1); // Output: 8/31/2021
// all we need to pass into the 'DateTimeFormat()' function is a locale string, which is usually the 'language-country' ie: 'en-US'

/* Different locale strings --> 1. 'en-US'
                                2. 'en-GB'
                                3. 'ar-SY' 
                                  [check bookmarks for all locales] */

    
// We can also display the time using an options object. Like so 👇
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  // month: '2-digit',
  // month: 'numeric',
  year: 'numeric',
  weekday: 'long',
};

// getting the locale from the user's browser, instead of setting it manually
const locale = navigator.language;
console.log(locale); // Output: en-US

// and then add it as a second argument to the 'DateTimeFormat()' function.
const now = new Date();
const internationalizationDate = new Intl.DateTimeFormat(locale, options).format(now); // 'format()' method's argument is what we want to format.
console.log(internationalizationDate); // Output: Tuesday, August 31, 2021, 7:25 PM
    
    
    
'/ **************************************************************** '
      // Internationalizing API --> NUMBERS using 'intl'

const num = 3313213123.32;
   
    
    // 'NumberFormat()' methods takes in locale string. And 'format()' takes in an argument of what we want to format.
console.log('US:', new Intl.NumberFormat('en-US').format(num)); // Output: US: 3,313,213,123.32
console.log('Germany:', new Intl.NumberFormat('DE-de').format(num)); // Output: Germany: 3.313.213.123,32
console.log('Egypt 🐫:', new Intl.NumberFormat('ar-EG').format(num)); // Output: Egypt 🐫: ٣٬٣١٣٬٢١٣٬١٢٣٫٣٢

// using the locale from the browser
const locale = navigator.language;
console.log(locale, new Intl.NumberFormat(locale).format(num)); // Output: en-US 3,313,213,123.32
    
    
// using options Object 👇
const options = {
  // style: 'unit',
  // style: 'percent',
  style: 'currency',
  currency: 'USD', // jave to manually specify the currency
  unit: 'mile-per-hour',
  // unit: 'celsius',
  // useGrouping: false,
}
    
console.log('US:', new Intl.NumberFormat('en-US', options).format(num)); // Output: US: 3,313,213,123.32 mph
console.log('Germany:', new Intl.NumberFormat('DE-de', options).format(num)); // Output: Germany: 3.313.213.123,32 mi/h
console.log('Egypt 🐫:', new Intl.NumberFormat('ar-EG', options).format(num)); // Output: Egypt 🐫:  ميل/س ٣٬٣١٣٬٢١٣٬١٢٣٫٣٢ 
    
    

'/ **************************************************************** '
      // Timers in JavaScript --> 'setTimout()' and 'setInterval()' methods
    
// We have two types of timers in JavaScript -->  
          1. 'setTimeout()' --> which runs just once after a defined time.
          2. 'setInterval()' --> which keeps running basically forever, until                                   we stop it.
          
          
     // **** 'setTimeout()' function
// So we can use 'setTimout()' function to schedule a function to run after a certain amount of time. And the Call-Back function is only executed once.
    // example ordering a pizza 🍕 using the 'setTimout()' method 👇

// The 'setTimeout()' function takes a Call-Back function, as the FIRST argument. The SECOND argument is the amount of milliseconds that will pass until until the Call-Back function is called by the 'setTimeout()' Higher-Order function.
          
          // this function will be called after 3 seconds
setTimeout(() => console.log('Here is your pizza 🍕'), 3000); // Output: Here is your pizza 🍕
    
    // An important things to keep in mind is that the 'setTimeout()' function doesnot delay, stop or affect the execution of anything below it, which is a mechanism called ASYNCHRONOUS JavaScript.
    
    // defining parameters into the Call-Back function inside the 'setTimeout()' Higher-Order function, and setting their argument values, AFTER the second argument in the 'setTimeout()' Higher-Order function 👇

setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, 'pepperoni', 'olives'); 
    // Ouput: Here is your pizza with pepperoni and olives 🍕   [after 3 seconds]
    
    
    // We can also cancel the timeout, before the delay time has passed, using 'clearTimout()', which take in the 'setTimeout()' name (or variable's name) as an argument. Like so 👇
const ingredients = ['pepperoni', 'olives', 'spinach'];

const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients); // we use the spread operator, instead of writing each ingredient as a paramater for the 'setTimeout()' (like before)
    
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // Output: nothing will get looged because ingredients array includes spinach.
    
    
      // **** 'setInterval()' function  
// Runs a function over and over again, like every 5 seconds or 10 minutes.

// executes the Call-Back function EVERY 1 second 👇
setInterval(function() {
  const now = new Date();
  console.log(now)
}, 1000); // console logs the date every 1 second
    
    
    // real-life clock that log the time every second ⏰

const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};
    
const locale = navigator.language;
    
setInterval(() => {
  const now = new Date();
  const internationalizationDate = new Intl.DateTimeFormat(locale,               options).format(now);
 console.log(internationalizationDate);
}, 1000); // Output: logs the time every second like so 👉 3:55:33 PM
          
  
    
// Use 'clearInterval()' to cancel the 'setInterval()' timer.
          
    
// the trick to making the 'setInterval()' start counting immediatly after we load a page, is to export this into a seperate function then call it immediatly, then start calling it every second using the 'setInterval()' funciton. Like so 👇
    
const startLogOutTimer = function () {
  // start timer in seconds
  let time = 10;
  
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(Math.floor(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    time--;
  };

  tick(); // call the external function here
  const timer = setInterval(tick, 1000); // then also place it as an argument for the 'setInterval()' function
};
    
    
    

'/ **************************************************************** '
  '/ **************************************************************** '
    // Advanced DOM manipulation [NEW SECTION]
    

'/ **************************************************************** '
    // How the DOM works behind the scenes
    
Check pictures slide notes in 'DOM' folder

Watch lecture for explanation --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648939#learning-tools

'/ **************************************************************** '
    // Selecting, Creating and Deleting elements with JavaScript
    
// The goal of this part is to be a Reference for the future whever I want to use these methods are very hard to find and understand from the MDN Docs 👇
    // Link to lecture 👉 https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648947#learning-tools
    
'// **************'
    // SELECTING Elements
    
1. 
// A special way of selecting the ENTIRE document
    // 'document' alone is not enough to select the document Element becuase 'document' is NOT the REAL DOM element
    // so for example if we want to apply css styles to the entire page we always need to select 'documentElement' like this 👉 'document.documentElement'. Like this 👇
    
console.log(document.documentElement); 
    
    // We can also select the 'head' and 'body' elements
console.log(document.head);
console.log(document.body);
    
    // So for these special elements we dont need to write any selector (ie: querySelector('...')).
    
2. 
    // Returns the first elements that matches the '.header' selector
document.querySelector('.header');
    
    // Returns ALL elements that matches the '.header' selector
      // Returns a 'NodeLists' doesnt automatically update itself when we delete one of its elements, unlike the 'getElementsbyTagName()' which returns an 'HTMLCollection' which updates automatically.
document.querySelectorAll('.section') 
    
3. 
    // takes in Ids from HTML, without the '#' 
document.getElementById('section--1');
    
    // Gets all the elements HTML buttons that are on the page. 
        // **** Returns an 'HTMLCollection' which is a Live collection, which means that if the DOM changes --> then this collection is also immediatly updated automatically.
document.getElementsbyTagName('button');
    
    // takes in class names from HTML, with the '.'
       // **** Also returns a Live HTMLCollection that updates automatically when we change it.
document.getElementByClassName('btn');
  
    
    
    
'// **************'
    // CREATING and INSERTING Elements

// *********
  1. 'insertAdjacentHTML()' method      // [⭐ USE THIS ONE ⭐ when creating HTML element. The BEST 🌟]
    
    // this method accepts two strings as arguments. The first String is the position inwhich we want to attach the HTML (check MDN for the four different options), and the second argument is the string containing the HTML that we want to insert.
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>`;
    
    document.querySelector('.document').insertAdjacentHTML('afterbegin', html);
    
    // So all we have to do with this method is create a string of HTML, and then we can insert that into the DOM simply with the 'insertAdjacentHTML()' method.
    
    
// *********
  2. 'innerHTML()' method 
    
    // .innerHTML returns ALL of the HTML inside the specified element. Including HTML tags. ie --> <em>...</em>, <strong>...</strong> etc. SO we can add html elements to it using this property.
    // Or we can even remove all the HTML content inside an HTML tag by setting it to an empty string (''). --> 
    
   // In HTML file
    <div class="movements__row">
          <div class="movements__type movements__type--deposit">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">4 000€</div>
    </div>
    
    // In JavaScript file
    document.querSelector('.movements__row').innerHTML = '';
    
    // Now this is what the content of the 'movements__row' class looks like in the HTML file -->
     <div class="movements__row">
       
      </div>
    
    // ie: its empty beacuse we set it to an empty string.
    
    
    
// *********
  3. 'createElement()', 'prepend()', and 'append()' methods
  
//  creates an HTML element specified by tagName as a parameter 
  
  // this example creates a 'div' DOM element and then stores that element into the variable 'msg'.
  // ** that element is not yet anywhere in our DOM, all this is a DOM object that we can now use to do something on it. BUT IT IS NOT YET IN THE DOM ITSELF (ie: no where to be found on the Web Page).
        // if we want it on the Web Page --> then we need to manually insert it on the page.
const message = document.createElement('div');
    
message.classList.add('cookie-message'); // adds the 'cookie-message' class to 'msg' DOM element
    
message.textContent = 'We use cookies for improved functionality and analytics.';
    
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it! 👍</button>';
    
    // Now that we have this element --> all we want to do is INSERT it into the DOM, so that we can see it on the Web Page 👇
    
header.prepend(message); // inserted this element into our HTML, and thus our Web Page too. BEFORE the div element with the class '.header'.
    // In other words 'prepend()' add the element as the FIRST child of the 'header' element.
    
header.append(message); // Adds the element as the LAST child of the 'header' element.
    
    / ***** SIDE NOTE: A DOM element is unique, which means it can only exist at one place at a time. So if we insert a DOM element using 'prepend' (ie: 'header.prepend(message);') and then we use 'append' on the same DOM element (ie: 'header.append(message);') --> it will move that 'message' DOM element to be the LAST child of the 'header' element, AND NOT INSERT A NEW ONE.
    // So bascially if we already have an inserted DOM element (using 'prepend()' for example), and then we use 'append()' on the same element --> it will only move the element and NOT reinsert a new one. 
    // WHCIH MEANS that we cannot only use the 'prepend()' and 'append()' methids to only INSERT elements, but we also use them to MOVE DOM elements, because a DOM element is UNIQUE (can always only exist at one place at a time).
    
  
// ***** 
    4. 'cloneNode()' method 

// what if we wanted to insert multiple COPIES of the same DOM element
    // then we would have to first COPY the original element using 'cloneNode()' method and then 'prepend()' or 'append()' it 👇

header.append(message.cloneNode(true)); 
    // passing in 'true' as an argument to the 'cloneNode()' method, means that all the child elements will also be copied.
 
    
// ***** 
    5. 'before()', and 'after()' methods 

header.before(message); // will insert the 'message' element BEFORE the 'header' element. So as a sibling, not inside it
    
header.after(message); // will insert the 'message' element AFTER the 'header' element. Also as a sibling, not inside it
    
   
    
    
'// **************'
    // DELETING Elements using 'remove()' method
    
header.append(message);
btnCookieMsg.addEventListener('click', function () {
  
  // removes the 'message' DOM element when we click the button [NEW WAY]
  message.remove(); 
  
  // old way of deleting elements 👇
  message.parentElement.removeChild(message);
});

    
'// **************'
    // STYLES, ATTRIBUTES and CLASSES  
    
//******** STYLES ********
    
    // element that we created manually
const message = document.createElement('div');

//*** Setting Styles
    
// to set a style on an element 👇
    // {element name}.style.{property name in camelCase} = '{a string with the value}'
message.style.backgroundColor = 'red'
message.style.width = '120%'
    
    // These styles are set as 'Inline' styles.
    

//*** Reading Styles

1. 
console.log(message.style.height); // Output will be EMPTY because 'style' property ONLY works with 'Inline' styles, and 'height' is NOT an 'Inline' style.
    
console.log(message.style.backgroundColor) // Output: red --> Works because we set the backgroundColor to red using the 'style' property --> which add the style to the element as an 'Inline' style.
    
    // So we cannot get a style that is hidden inside a class in css using the 'style' property, 
  
    
2. 
    // BUT we can get it using the 'getComputedStyle()' function. WHICH returns an object containing the values of all CSS properties of an element. [can ba used on both css and Inline styles]

console.log(getComputedStyle(message).width); // Output: 790.4px
console.log(getComputedStyle(message).color); // Output: red
    

// example 
    
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
    // we use 'Number.parseFloat()' because we want to add the existing height number without the 'px' string.

    
 
3.
  // CSS Custom properties [ussually called CSS Variables] using ':root' selctor
    
    // the CSS variables are defined in the document ':root', which in JavaScript is equivalent to the documentElement.
    
    // an example of DEFINING CSS Variables in the CSS stylesheet 👇
:root {
  --color-primary: #5ec576;
}
    
    // using the CSS variables to style the selectors
.section__description {
  color: var(--color-primary);
}
    
    
// the idea of CSS Variables is very similar to idea of variables in JavaScript, so with CSS Variables we can change a variable in many places all over our CSS files, by simply changing the values of a specific CSS variable.
    // And if we can change the value in CSS file --> then we can change it in JavaScript 👇
    
    // have to use 'documentElement' inorder to change the style of a CSS variable which is definded in the document ':root', which in JavaScript is equivalent to the document element.
document.documentElement.style.setProperty('--color-primary', 'red');
    
    // so with CSS custom properties or CSS variables we can NOT just use '.style.color = 'red'', we HAVE to target the 'documentElement' and then use the 'setProperty()' method --> which takes in the name of the CSS variable as a first argument, and then the value we want to set it to, in the SECOND argument.
    
    // we can use 'setProperty()' method for ALL css properties, not just CSS variables. But it is just easier to use '.style.color = 'red'' for them instead.
    
    
    
 
//******** ATTRIBUTES ********

1.
// Remember 'src', 'alt', and even 'class' are all attributes of the '<img>' HTML element.
<img src="img/logo.png" alt="Bankist logo" class="nav__logo" />
    
 // in javascript we can console.log these attributes' values
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Output: Bankist logo
console.log(logo.src); // Output: http://127.0.0.1:5500/img/logo.png   
    // see below for explanation to why the logged 'src'  value is different from what we have in the HTML file
    
console.log(logo.className); // Output: nav__logo       // 'className' gives us the class name of the element even tho we didnt use 'class', due to historical reasons. Its is an exception.
    
    
    // the reason why this works is because --> on images in HTML, they are suppose to have the 'alt'and the 'src' attributes on them by default, so if we specify them in HTML, then JavaScript will automatically create these properties on the Object.
    / BUT if we add some other property that is NOT a STANDARD property on a specific HTML element (ie: '<img>'), then JavaScript will NOT automatically create a property on the Object. For example 👇

<img src="img/logo.png" alt="Bankist logo" class="nav__logo" designer="mikel"/>

const logo = document.querySelector('.nav__logo');
console.log(logo.designer); // Output: undefined   // 'undefined' because 'designer' is not a standard attribute that is expected to be on the '<img>' HTML element.
    
    // A WAY of READING Non-Standard attributes from the DOM, USING 'getAttribute()' method 👇

const logo = document.querySelector('.nav__logo');
console.log(logo.getAttribute('designer')); // Output: mikel 
    
    
2. 
    // Setting attribute values 👇    

const logo = document.querySelector('.nav__logo');
logo.alt = 'LULULULULULUL';
console.log(logo.alt); // Ouput: LULULULULULUL

    // Another way of setting attribute value using 'setAtrribute()' method 👇

const logo = document.querySelector('.nav__logo');
logo.setAttribute('alt', 'LULULULULULUL'); 
console.log(logo.alt); // Ouput: LULULULULULUL  
    
    // if the attribute specified in the 'setAttribute()' method's first parameter doesn't exist in the specified HTML element, then one will be autimatically created in HTML and given the assigned value in the second parameter.
    
    
3. 
    // 'getAttribute()' method
const logo = document.querySelector('.nav__logo');
    
console.log(logo.src); // Output: http://127.0.0.1:5500/img/logo.png   [Absolute URL]
    // the logged 'src' is different from what we have in HTML because the one logged to the console is the Absolute URL, while the one in the HTML file itself is just the Relative URL (relayive to the folder inwhich the 'index.html' file is located)
    // so inorder to get the same value for the 'src' attribute when logging it, we can use the 'getAttribute()' method
    
console.log(logo.getAttribute('src')); // Output: img/logo.png      // [Relative URL]
    
    
    // SAME THING when working with 'href'
    // HTML
<a class="nav__link nav__link--btn btn--show-modal" href="#">Open account</a
    
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // Output: ttp://127.0.0.1:5500/#       [Absolute URL]
console.log(link.getAttribute('href')); // Output: #            [Relative URL]
    
    
4.
    // Data Attributes --> a special type of attributes that start with the word 'data-', then a dash. ⭐⭐⭐

const logo = document.querySelector('.nav__logo');

<img src="img/logo.png" alt="Bankist logo" class="nav__logo" data-verison-number="3.0"/>      // so the 'data-verison="3.0"' is a Data attribute because it starts with the word 'data-'
  
  // then in order to access that 'data-' attribute from JavaScript --> we use the 'dataset' property followed by the name of the data attribute in camelCase, WITHOUT THE WORD 'data-' 👇
  
console.log(logo.dataset.versionNumber); // Output: 3.0
    
    // we use camelCase in JavaScript, where we have a '-' dash in HTML. WITHOUT THE WORD 'data-' *******
    
    // so for these special 'data' attributes --> they are always stored in the 'dataset' OBJECT.
    
    // We use Data attributes alot when we work with the UI, especially when we need to store data in the User Interface (basically in the HTML code).
    
    
    
  
    
//******** CLASSES ********
    
const logo = document.querySelector('.nav__logo');
    
    // [USE THESE --> doesn't interfere with the already existing classes on the specified HTML element]
    
1. logo.classList.add('...');
2. logo.classList.remove('...');
3. logo.classList.toggle('...');
4. logo.classList.contains('...'); // keep in mind --> this is called 'contains()' and NOT 'includes()' like the method available in Arrays.
    
// keep in mind that we can 'add', 'remove', 'toggle', or check if an element 'contains' multiple classes --> by passing in multiple values 👇
    
logo.classList.add('green', 'huge', 'lul__class');
    
    // [DONT USE]
// Setting a class value using 'className' 👇 [DONT USE -- because it OVERRIDES all the existing classes in the specified HTML element and it only also allows us to have ONE class on that element]
    
logo.className = 'mikel'; // changes the class name assigned to the HTML element.
    
    
    
    
'// **************'
    // Smooth Scrolling in JavaScript
    
// Two ways for doing this [Old way and Modern way] 👇
   
    
    // 1. Select the button and the section that we want to scroll to (using the 'id')
    
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
    
    // 2. Add an event listener to the button
btnScrollTo.addEventListener('click', function(event) {
  
  [DONT USE THIS]
/ 1. ****** FIRST and an Old school way of implementing Smooth Scroll by calculating --> 
  
  // 3. ⭐⭐⭐⭐⭐ get the coordinates of the element that we want to scroll to, using 'getBoundingClientRect()' function. Like so 👇
  const sectionCoords = section1.getBoundingClientRect();
  
    // the 'getBoundingClientRect()' values are relative to the visible viewport in the browser. So if we scroll down then console.log it again, we'll get different coordinates.
  // we can also use this to get the coordinates of the clicked button 👇
console.log(event.target.getBoundingClientRect()); // remember --> 'target' is a reference to the object onto which the event was dispatched.
 
  // ****** VERY USEFULL ***** Side Note --> We can also get the Current Scroll Position --> 
console.log('Current Scroll Position (x/y positions)', window.pageXOffset, window.pageYOffset); 
  
  // or using 
  console.log('Current Scroll Position (x/y positions)', window.scrollX, window.scrollY); 
  
  
  // ****** ⭐⭐ VERY USEFULL ***** Another Side Note --> We can also read the Height and the Width of the current viewport  --> 
  console.log('Current Height & Width of Viewport --> ', document.documentElement.clientHeight, document.documentElement.clientWidth);
  
  // 4a. Scrolling to the section that we got the coordinates for using 'window.scrollTo(x-coord, y-coord)' but WITHOUT ANIMATION 👇 [dont use]
window.scrollTo(sectionCoords.left + window.pageXOffset, sectionCoords.top + window.pageYOffset); // adding the current SCROLL POSITION to the top position since the 'top' coordinates are relative to the current ViewPort, so as we scroll the top coordinates will change. Using 'window.pageYOffset'. SO --> 'current position' plus 'the surrent scroll position'.
  
  // 4b. Scrolling to the section that we got the coordinates for using 'window.scrollTo({})' but WITH ANIMATION 👇
  window.scrollTo({
    left: sectionCoords.left + window.pageXOffset,
    top: sectionCoords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  
  
  [USE THIS 🌟]
/ 2. SECOND and more Modern Way, which only works in super modern browsers using 'scrollIntoView({})' (which takes in an object with a property of behavior that is set to 'smooth') -->
    
section1.scrollIntoView({behavior: 'smooth'});
});
    

    
    
    
    
'// **************'
    // Types of Events and Event Handlers

// An Event is basically a signal that is generated by a certain DOM Node, and a signal means that something has happened, for example a click somehwere, or the mouse moving. Anything of importance that happens on the webpage, generates an event.
     // And then as we already know, we can then listen for thse events in our code using eventListeners, so that we can then handle them if we want to. But no matter if we handle a certain event or not (ie: a click), that event will always happen when the user clicks no matter if we're listening for it or not.
    
// 'mouseenter()' event 👇

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  // just a side note to REMEMBER -->
  console.log(this); // Output: <h1>...</h1>      [same output as 'e.target']
  console.log(e.target); // Output: <h1>...</h1>      [same output as 'this']
  
  this.style.color = 'red';
})
    
    
// ***********
    // SECOND way of attaching an eventListener to an element using the 'on' event property directly on the element 👇   [DONT USE]
    
const h1 = document.querySelector('h1');
    
h1.onmouseenter = function (e) {
  this.style.color = 'red';
};
    
    // This way of listenting to events is OLD school, so dont use. 'addEventListener()' is the more modern way so use that instead. 
    
    // So why is 'addEventListener()' better? 
        1. Because ot allows us to add multiple event listeners to the same event.
        2. Second advantage and even more important is that we can actually REMOVE an eventHandler incase we dont need it anymore. Like so 👇
        
        
        // but to REMOVE an eventHandler, FIRST we have to export the function expression into a named function 
const h1 = document.querySelector('h1');
const changeColor = function (e) {
  this.style.color = 'red';
  // removing the evenlisetener after we listened and handled it ONCE. Takes in the type of eventLisener to remove, and the name of the function as arguments [which is why we hadto export the function into its own function].
  h1.removeEventListener('mouseenter', changeColor);
  
  // we can add an eventLisetener INSIDE another function that is used by an eventListener. This will change color to red everytime we hover overthe h1 element, and then change to blue whe the mouse leaves the element
h1.addEventListener('mouseleave', function() {
  this.style.color='blue'
});
};
    
h1.addEventListener('mouseenter', changeColor);
        
   
// We can even remove the eventListener after a certain amount of time has passed -->  
setTimeout(() => h1.removeEventListener('mouseenter', changeColor), 3000);

    
    
// ***********
    // THIRD way of handling an event, which is by using an HTML attribute 
    [THIS IS SHOULD NOT BE USED]
    
// In HTML 👇
<h1 onclick="alert('HTML alert')">
    
    
    
    
    
'// **************'
    // Event Propagation: Bubbling and Capturing properties  --> MOST important properties of Events
    
    [see slide picture in notes called 'Event Bubbling and Capturing']. 

// JavaScript Events have a very important property. They have a so-called Capturing phase and a Bubbling phase.
    
    // lets say we have an anchor element in HTML. When we click on that anchor element in the browser, the DOM then generates a Click Event right away, however that event is not geterated at the target element (at the element where the event will happen) , instead the event is generated at the ROOT of the Document, so at the VERY TOP of the DOM tree [see slide picture in notes called 'Event Bubbling and Capturing']. 
    // And from there the 'CAPTURING' phase happens, where the event then travels all the way down from the Document Root to the target element (in this case the anchor element). As the event travels down the tree, it will pass through every single parent element of the target element, until the event reaches the target.
    // As soon as the event reaches the target, the 'TARGET PHASE' begins, where events can be handled right at the target using eventListeners (ie: 'addEventHandler()'). So eventLiseteners wait for a certain event to happen on a certain element and as soon as the event occurs, it runs the attached Call-Back function. WHICH HAPPENS IN THE 'TARGET PHASE'
  // After reaching the target, the event then travels all the way up the DOM tree, back to the Document root again, in the 'BUBBLING PHASE'. So we can say that events Bubble up from the Target to the Document Root **. And just like in the Capturing Phase the event passes through all of it parent elements, JUST THE PARENTS, not any sibling elements.
  /* so as an event travels down and up the DOM tree, they pass through all their parent elements, but NOT through any sibling elements */

// So why is this so important? 
    // It is very important because basically its as if the event also happened in each one of the parent elements that the event passed through. So as the event Bubbles through the event elements, its as if the event had happened right in that very element. 
    // What this means is that if we attach the same eventLisetener also to one of the parent elements it passes through, then we would get the same output from the Call-Back function, from that parent element as well. So we would have handled the same exact event TWICE, once at its target and once at one of its parents element. 
      // And this behavior will allow us to implement really powerfull patterns.

// By default, events can only be handled in the TARGET and BUBBLING phases, however we can set up eventListeners in a way that they listen to events in the CAPTURING PHASE instead.

// ALSO --> not all types of event have a Capturing and Bubbling phase, some of them are created right on the target element and thus we can only handle them there.

// We can also say that events PROPAGATE, which is really what Capturing and Bubbling is. Its events propagating from one place to another.
    
    [see slide picture in notes called 'Event Bubbling and Capturing']. 


// Example 👇

// lets say we have 'nav__links' (nav bar) that contain 'nav__link' in html, so the 'nav__links' is the parent of the 'nav__links'.
  // Then we add an eventListenetner to both of these elements --> that look for same type of event (ie: 'click' event), and their Call-Back functions generates a random background color. 👇

// generate random color
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target); // Output: <a class="nav__link" href="#section--1" style="background-color: rgb(164, 121, 156);">Features</a>
  
  // Side Note: VERY IMPORTANT 👆 'event.target' is where the event originated or where the click happened. So it is NOT the element on which the eventHandler was attached to, this would be the 'this' keyword or 'event.currentTarget' 👇.
  
  console.log(event.currentTarget); 
  
  //  Side Note: VERY IMPORTANT 👆 there is also 'event.currentTarget', which is the element onwhich the eventHandler is attached to. SAME as the 'this' keyword
  
  
  // We can also STOP the event propagation, by simply calling on the event 'stopPropagation()' --> 'event.stopPropagation();' 👇
event.stopPropagation(); /* by adding this line of code --> the parent element 'nav__links' background color will NOT change if we click on its child element ('nav__link'). Due to the event never arriving to the parent elements because we STOPpED it here. */ [NOT GOOD PRACTICE TO STOP PROPAGATION. SO DONT USE]
  
});
  
document.querySelector('.nav__links').addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target); // Output: <a class="nav__link" href="#section--1" style="background-color: rgb(164, 121, 156);">Features</a> 
  // Side Note: VERY IMPORTANT 👆 'console.log(event.target)' is the same as that of the 'nav__link' event (child) because we clicked on the child element which triggered the event for both the parent and the child, due to bubbling.  And 'event.target' is where the event originated, NOT the element that the eventHandler is attached to.
  
  console.log(event.currentTarget); // Output:  <ul class="nav__links" style="background-color: rgb(129, 245, 213);">
  
  //  Side Note: VERY IMPORTANT 👆 different output from the one in 'nav__link' (child element) because 'event.currentTarget' is the element onwhich the event is attached to, and NOT where the event originated. 'event.currentTarget' is the same as the 'this' keyword.
});
    
    // IMPORTANT 👉 As we click on the 'nav__link' (child element of the 'nav__links') the background color of the 'nav__link' [CHILD] *AND* the background color of the whole nav bar ('nav__links' [PARENT]) --> CHANGES to a random color, even tho we didnt click on the parent element ('nav__links') --> this is due to BUBBLING and because both elements handle the same type of event ('click' event). It happens from child to parent, but not the opposite way around.

    
    
// Not very important 😕--> eventHandlers dont capture events during the CAPTURE PHASE, on at the TARGET Phase and the during the Bubbling phase, which is the default behavior of the 'addEventListener()' function. The reason for that is that the CAPTURING Phase is just irrelevant or not usefull for us. Whereas the Bubbling phase can be very usefull for something called EVENT DELEGATION. 
    //  But if we want to capture events during the CAPTURING PHASE we can define a THIRD parameter in the 'addEventListener()' function, which would be 'true'. By setting the third parameter to 'true', the 'eventHandler' will no longer listen to bubbling events, instead it will listen to Capturing events. In practive it will be the same but the logged results will be different.
    [Capturing is RARELY used. The only reason why capturing and bubbling actually exist, is due to historical reasons when different browsers implemented different versions of JavaScript].
    
document.querySelector('.nav__link').addEventListener('click', function (event) { 
  this.style.backgroundColor = randomColor(); 
}, true);
    
    
    
    
'// **************'
    // Event DELEGATION
    

// Adding smooth scrolling to links in the Nav bar --> WITHOUT Event delegation (not efficient or clean)
    
document.querySelectorAll('.nav__link').forEach(element =>
  element.addEventListener('click', function (event) {
    event.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  })
);
    
    // this way of implementing onclick smooth scrolling is NOT EFFICIENT, because we are adding/attaching the same event listener Call-Back function once to each element/link, which is unnecessary. Especially if we had like 10000 elements, which we would then attach the same event listener Call-Back function to each of the 10000 elements which would immensly affect the performance and wouldn't be a clean way of implementing smooth scrolling.
    
    
// The better and cleaner solution of implementing Smooth Scrolling, is through EVENT DELEGATION. Like so 👇
    
    // so in Event Delegation we use the fact that events bubble up, and we do that by putting the event listener on a common parent of all the elements that we are interested in.
    // so in the case of a nav bar with the class of 'nav__links', and its child elements with classes of 'nav__link' (which are all the different links we want to navigate to on the web page), we would put our eventHandler on the parent element ('nav__links') and then when the user clicks on one of the links, the event is generated and bubbles up which we could then catch from the common parent element and handle it there. And remember that we can know where the event originated by using the 'event.target' property, which would tell us which link the user clicked.  Like so 👇
    
    
  // So in Event Delegation we need two steps: 
        1. First, we add the eventListener to a common parent element of all the elements that we are interested in.
        2. Second, then in that eventListener, we determine what element originated the event, using 'event.target' property. So that we can then work with that element where the event was actually created (ie: a click on a link)
    
    
    
document.querySelector('.nav__links').addEventListener('click', function (event) {
    // removes the clicked element's default actions
    event.preventDefault();

    // Matching strategy --> which is to check if clicked element contains a certain class that we want to perform the smooth scroll on, ie: by checking if the 'event.target' has a the 'nav__link' class 👇
    if (event.target.classList.contains('nav__link')) {
      // gets the href value of the element we clicked on, which acts as an id selector. And then implements smooth scrolling to it
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
    
    // so now we implemented Event Delegation which is alot more efficient than simply attaching the same eventHandler to multiple elements. Instead we added one big eventHandler function to the parent element of all the elements that we are ineterested in.
    // And then simply deteremined where the click event came from using the 'event.target' property. We also needed the matching strategy because we wanted to ignore clicks that didnt happen right on the elements we are interested in (ie: the child elements of the Parent element that has the eventHandler function attached to). 
    
    

    
    
'// **************'
    // DOM Traversing
    
// DOM traversing is basically walking through the DOM, which means that we can select an element based on another element. This is very important because sometimes we need to select elements relative to a certain other elements.
    
    
const h1 = document.querySelector('h1');

// ***** Going Downwards (selecting Child elements) 👇
      
   1.   // the FIRST way of doing going Downwards is to use 'querySelector()' because we already know that 'querySelector()' also works on elements, not only on the Document.
    //  selects all the elements with the 'highlight' class which are children of the h1 element.
console.log(h1.querySelectorAll('.highlight')); // Output: NodeList(2) [span.highlight, span.highlight]

   2.   // 'childNodes'
// gives us all the nodes children of the h1 element
console.log(h1.childNodes); // Output: NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

    3.  // 'children' 🌟
// gives us the elements that are actually inside the h1
console.log(h1.children); // Output: HTMLCollection(3) [span.highlight, br, span.highlight]

    4.  // 'firstElementChild'
// gets the first element child inside the h1 element
console.log(h1.firstElementChild); // Output: <span class="highlight">banking</span>
h1.firstElementChild.style.color = 'red';

    4.  // 'lastElementChild'
// gets the last element child inside the h1 element
console.log(h1.lastElementChild); // Output: <span class="highlight">minimalist</span>
h1.lastElementChild.style.color = 'white';
    
    
// ***** Going Uppwards (selecting Parent elements) 👇
    
const h1 = document.querySelector('h1');
    
   1.   // 'parentNode'
console.log(h1.parentNode); // Output: <div class="header__title">...</div>
   
    2.  // 'parentElement' 🌟
console.log(h1.parentElement); // Output: <div class="header__title">...</div>
    
    3.  // 'closest()'   [MOST IMPORTANT ONE -- especially for Event Delegation] 🌟🌟 ⭐⭐
// gives us the PARENT element of a specific element
    // receives a query string just like a querySelector and querySelectorAll
console.log(h1.closest('div')); // Output: <div class="header__title">...</div>
h1.closest('header').style.backgroundColor = 'gray';
    
console.log(h1.closest('h1')); // Output: <h1>...</h1>      // will give us back the h1 element itself that we called 'closest' on.
    
    // ****** so we can think of 'closest()' as the OPPOSITE of 'querySelector()'. They both receive a query String as an argument, but 'querySelector()' finds CHILDREN no matter how deep in the DOM tree, whereas 'closest()' finds PARENTS also no matter how far up in the DOM tree. 
    
    
    
// ***** Going Sideways (selecting Siblings elements) 👇 
    
const h1 = document.querySelector('h1');
    
    // In JavaScript we can only access Direct siblings. So bascially only the previous and the next one.
    
  1. // 'previousElementSibling' [USE THIS] 🌟
console.log(h1.previousElementSibling); // Output: null  // 'null' because 'h1' doesnt have any previous siblings. 'h1' is the fist child of the parent element, therefore it doesnt have any previous siblings.
    
  2. // 'nextElementSibling' [USE THIS] 🌟
console.log(h1.nextElementSibling); // Output: <h4>A simpler banking experience for a simpler life.</h4>
    
   3. // 'previousSibling' 
console.log(h1.previousSibling); // Output: #text   // 🤷‍♂️

   4. // 'nextSibling'
console.log(h1.nextSibling); // Output: #text   // 🤷‍
    
    5. // getting ALL the siblings (not just the previous and next) by moving up to the parent element and then reading all the children from there 👇   ⭐⭐⭐
console.log(h1.parentElement.children); // Output: HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]         
    // gives us all of the children of the parent, including itself (the 'h1' element). In the form of an HTMLCollection which is REMEMBER not an Array, but still an iterable that we can use the spread operator on to make it an array and then do something to its children. 👇
    
    // doing something to each sibling except for the h1 element itself
[...h1.parentElement.children].forEach(function(element) {
  if (element !== h1) {
    element.style.transform = 'scale(0.5)';
  }
});
    
    
    
'// **************'
    // Building a TABBED Component --> from Bankit Website
    
    🌟 [CAN REUSE ON ANY WEBSITE] 🌟
    
// A Tabbed can appear in different ways, but what they have in common is that they have some kind of tabs, and when you click on a tab then the content that corresponds to that tab will appear.
    
    [from the Bankit Website]
// ***** Tab Component (Event Delegation) ***** 
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (event) {
  const clickedBtn = event.target.closest('.operations__tab');

  // removes/clears the 'operations__tab--active' class from ALL the tabs
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  // Called a Guard Clause, which will NOT continue with the rest of the code if a condition is met. (prevents us from getting an error if we click on an element that does not contain the 'operations__tab' class).
  /* A more modern way of doing this, better that writing 👇
  'if (clicked) { 
    clickedBtn.classList.add('operations__tab--active');
  } */
  if (!clickedBtn) return;

  // adds the 'operations__tab--active' class to the clicked tab
  clickedBtn.classList.add('operations__tab--active');

  // removes the 'operations__content--active' class from ALL the tabs content elements
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );

  // adds the 'operations__content--active' class to the content element the corresponds to the clicked tab
  const dataTabAttr = clickedBtn.dataset.tab;
  document
    .querySelector(`.operations__content--${dataTabAttr}`)
    .classList.add('operations__content--active');
});
    
    
    
    // ⭐⭐ So the whole idea when we build components like this, is to just add and remove css classes as necessary to manipulate the content to our needs. Inshort, tha main idea is to work with css classes that have styles for showing and hiding different content.
    
    
    
    
'// **************'
    // Passing Arguments into Event Handler functions [Nav Bar Hover Animation]

    🌟 [CAN REUSE ON ANY WEBSITE] 🌟

[Will let us create a fade out animation on all the Nav Bar links when we hover over one of them, except for the link that we hovered over]
    
    
const navBar = document.querySelector('.nav');
    
const handleHover = function (event, opacityValue) {
  if (event.target.classList.contains('nav__link')) {
    const hoveredOverLink = event.target;
    const siblings = hoveredOverLink.closest('nav').querySelectorAll('.nav__link');
    const logo = hoveredOverLink.closest('nav').querySelector('img');

    // console.log(siblings);
    // console.log(logo);

    siblings.forEach(element => {
      // lets us change the color of all the elements except the one we are hovering over.
      if (element !== hoveredOverLink) element.style.opacity = opacityValue;
    });
    logo.style.opacity = opacityValue;
  }
};

'// **** Easy way of doing it [USE THIS]' // --> from Bankit Website
            
        
// 'mouseenter' is similar to 'mouseover', with the exception that mouseenter' does NOT BUBBLE, which is why we are using 'mouseover' here instead.
navBar.addEventListener('mouseover', function (event) {
  handleHover(event, 0.5);
});

// 'mouseleave' does NOT BUBBLE, while 'mouseout' does bubble.
navBar.addEventListener('mouseout', function (event) {
  handleHover(event, 1);
});
    
    
//**
'// ****  Another way using the 'bind()' [unnecessarily confusing. Dont use]'
// Remember the 'bind()' creates a copy of the function that its called on, and it will set the 'this' keyword in that function call to whatever argument that we pass into 'bind()'.
navBar.addEventListener('mouseover', handleHover.bind(0.5));

// the return new function's 'this' keyword will be equal to the argument passed into the bind method, so inother words the 'this' keyword is now equal to 0.5. So we can replace the 'opacityValue' argument in the 'handleHover()' code block --> with 'this'. But I didn't do it because this shit is confusing as fuck. FUCK THIS SHIT.

// 'mouseleave' does NOT BUBBLE, while 'mouseout' does bubble.
navBar.addEventListener('mouseout', handleHover.bind(1));
    
    
    
    
'// **************'
    // Sticky Navigation
     
    // Nav Bar attached to the Top of the page, when we scroll to a certain position. [🔴 DONT USE. Better way of doing same thing below ]
    
// determining the position of the first section -->  inorder to know when to make the navbar 'fixed'/sticky
const navBar = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');
const section1Coords = section1.getBoundingClientRect();

// Using the 'scroll' Event (the 'scroll' Event is NOT efficient, bad for performance and usually should be avoided)
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (window.scrollY > section1Coords.top) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
});

// So using the 'scroll' event to perform a certain action at a certain position of the page, is NOT the way to go. Which is because the 'scroll' fire ALL THE TIME as we scroll through the page, which results in a pretty bad performance especially on mobile devices (on PC we wont notice anything).
    
    
'// ******** Sticky Navigation using --> Intersection Observer API' ⭐⭐⭐ BETTER WAY THAN ABOVE 👆

      🌟 [CAN REUSE ON ANY WEBSITE] 🌟

[lets us do things at certain positions on the page as we scroll through it]
    
  // A better and more efficient tool to implement the Sticky Navigation feature, using the Intersection Observer API.

// What is the Intersection Observer API, and why is it so helpful? 
  // This API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.
        // It is more efficient than the 'scroll' event, because the event only executes when the situation that we are intersted in is met.

// How the Intersection Observer API actally works? 

  // to use the Intersection Observer API, we need to 👇
      1. Start by creating a new Intersection of Server, and storing it in a new variable.
      2. Then pass in a Call-Back function and an Object of OPTIONS, as arguments, in the 'intersectionObserver()' function.
      3. Then, call the 'observe()' method, on the newly created variable ('observer'), and pass in an argument in it of the target that we want to observe.
                👇👇👇👇

const section1 = document.querySelector('#section--1');
    
    // Call-Back function
      // the Call-Back function here will get called each time that the target element (or observed element ['section1' in this example]) is intersecting the 'root' element specified in the 'options' object, at the 'threshold' that we defined, which is also specified in the 'options' object.
      // so in this example --> whenever 'section1' element (target element) is intersecting the viewport ('root: null') at 10 precent ('threshold: 0.1') --> then the Call-Back function 👇 will get called no matter if we are scrolling up or down.
      // the Call-Back function takes in two arguments. The FIRST argument is the 'entries' which is an Array of the 'threshold' property values/entries, and the SECOND argument is the observer object itself (this 👉 'const observer = new intersectionObserver(observerCallBack, observerOptions);').
    👇👇👇👇👇👇👇👇👇
const observerCallBack = function(entries, observer) {
  entries.forEach((entry) => console.log(entry)); // logs an 'IntersectionObserverEntry' object, everytime the viewport intersects the 'section1' element at 10 percent, either by scrolling down or up. Look at the 'intersectionRatio' (which is the 'threshold' that we set) and the 'isIntersecting' properties of the 'IntersectionObserverEntry' object.
};

    // OPTIONS object
const observerOptions = {
  // 🔴 FIRST --> this object needs a 'root' property, which is the element that the target is intersecting. So in this example 'section1' is the target and the root element will be the element that we want our target element ('section1') to intersect.
  // In 'root' property, we can either select an element or as an alternative we can write 'null' which will let us observe our target element intersecting the ENTIRE/CURRENT VIEWPORT.
  root: null, // 'root' will almost always be set to 'null' which is the viewport.
  
  // 🔴 SECOND --> We can then define a 'threshold' property, which is basically the percentage of intersection at which the observer Call-Back function, will be called.
  // we can have multiple 'threshold', so we can have an Array as a value of 'threshold' property.
  threshold: [0, 0.2], // '0' (ie: 0 percent) means that the Call-Back will trigger each time the target element moves completely out of the viewport AND also as soon as it enters the viewport ⭐⭐. This is because the Call-Back function will be called when the 'threshold' is passed when moving INTO the vieport and when moving OUT of the viewport ⭐⭐. 
    // On the otherhand, if we specify '1' (ie: 100 percent) then that means that the Call-Back will only be called when 100 percent of the 'target' element is visible in the view port, so in the case of 'section1' element that would be IMPOSIBLLE because the section itself is bigger then the viewport.
  
  // 🔴 THIRD --> We can add a 'rootMargin' property which in the example below, is a box of 90px that will applied outside or BEFORE of our 'target' element.
  rootMargin: '-90px', // only takes in px as units 
}
    
const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(section1);
  

    🌟 [CAN REUSE ON ANY WEBSITE] 🌟 // --> from Bankit Website
// 🟠🔵 EXAMPLE: Sticky Navigation feature. 
    // Nav Bar attached to the Top of the page, when we scroll out of the header section.
    
    
const header = document.querySelector('.header');
const navBar = document.querySelector('.nav');
const navBarHeight = navBar.getBoundingClientRect().height;

    // Observer Call-Back function
const headerObsCallBack = function (entries) {
  // dont need to loop over 'entries' since we only have one entry/'threshold'.
  // just use destructuring to get the first element out of the 'entries' array
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
};

// Observer Options Object
const headerObsOptions = {
  root: null, // means observe our target element ('header') as it intersects the current viewport.
  threshold: 0,
  // rootMargin: '-90px', // the Call-Back function will trigger 90px before the threshold is reached.
  rootMargin: `${-navBarHeight}px` // makes it dynamic in case we have a responsive website.
};

const headerObserver = new IntersectionObserver(headerObsCallBack, headerObsOptions);

headerObserver.observe(header); // change this argument to whatever the target is.



'// **************'
    // Revealing Elements on Scroll, using the Intersection Observer API --> from Bankit Website
    
        🌟 [CAN REUSE ON ANY WEBSITE] 🌟
    
const allSections = document.querySelectorAll('.section');

const sectionObsCallBack = function (entries, observer) {
  const [entry] = entries;
  console.log(entry.target); // the elements that we intersected

  // called Guard Clause (rememberrrr)
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  // prevents observer from observing the current revealed section after it is revealed. [better for performance]
  observer.unobserve(entry.target);
};

const sectionObsOptions = {
  root: null,
  threshold: 0.15, // greater than '0' because we dont want to show the section right as it enters the viewport, but a little bit later. ⭐Section will be revealed only when it is 15 percent visible.⭐
};

const sectionObserver = new IntersectionObserver(
  sectionObsCallBack,
  sectionObsOptions
);

allSections.forEach(section => {
  section.classList.add('section--hidden'); // hides all the sections at the start when the page loads. Change if necessary
  sectionObserver.observe(section); // Change if necessary
});
    
    
    

'// **************'
    // Lazy Loading Images, using the Intersection Observer API 
    
        🌟 [CAN REUSE ON ANY WEBSITE] 🌟
        
// Performance is one of the most important things when building any website. And Images have by far the biggest impact on page loading, so it is very important that images are optimized on any page. And for that we can use a strategy called LAZY LOADING IMAGES.
        
        // Really impacts how our site works, especially for users with slow internet connection, slow data-plan, or a slow cell-phone.
    
// Inorder to implement the Lazy Loading Images strategy, we do this --> 
        1. We get two versions of each image. One very low resolution which will act as a placeholder for the original image. The placeholder image will be loaded right at the beginning and will be hidden by a css filter class, like this --> 
                                                                       
CSS -->     img {
              transition: filter 0.5s;
            }
    
            .lazy-img {
              filter: blur(20px);
            }
        
          and then as we scroll down, the ORIGINAL image will replace the placeholder low resolution image.
          
          2. In HTML --> the 'src' attribute will have the placeholder image's location, and the data-attribute called 'data-src' will have the ORIGINAL image's location. Then as we scroll down, we will replace the placeholder image with the original one by setting the 'src' attribute's value equal to the 'data-src' attribute's value, and also remove the 'lazy-img' css filter class.
          
HTML -->    <img
              src="img/grow-lazy.jpg"
              data-src="img/grow.jpg"
              alt="Plant"
              class="features__img lazy-img"
            />
    
                
                
                
// 🟠🔵 EXAMPLE Lazy Loading Images --> form Bankit website

// 'img[data-src]' is a HTML feature that lets us select all the images that has the attribute 'data-src'. Could have also used the '.features__img' class which is available on the needed images only.
const featuredImages = document.querySelectorAll('img[data-src]');

const imagesObsCallBack = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

      // Guard Clause
  if (!entry.isIntersecting) return;
  // console.log(entry.target);
  
      // Replace 'src' with 'data-src'
  entry.target.setAttribute('src', entry.target.dataset.src);

  // the problem with just removing the 'lazy-image' class like 👇, is that the 'lazy-image' will instantly be removed when the call-back function is executed, which means that is a user has slow internet connection, they will see the low resolution placeholder image (unblurred) before the original image is loaded, due to slow connection.
  entry.target.classList.remove('lazy-img'); [DONT USE THIS WAY OF REMOVING THE CSS BLUR CLASS FROM IMAGE. USE 👇 INSTEAD]

  // [ALWAYS USE 'load' event WHEN IMPLEMENTING 'LAZY LOADING IMAGES' strategy]
  // so inorder to fix this we can use the 'load' event which executes only when the ORIGINAL image is completely loaded, and thus we can remove the css filter class that blurs the image, then. Like so -->
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  // stops observing after replacing and removing css filter class
  observer.unobserve(entry.target);
};

    
const imagesObsOptions = {
  root: null,
  threshold: 1,
};

const imagesObserver = new IntersectionObserver(
  imagesObsCallBack,
  imagesObsOptions
);

featuredImages.forEach(image => imagesObserver.observe(image)); // change if necessary;
                

    
    
'// **************'
    // Building a SLIDER Component -- from Bankit Website
    
        🌟 [CAN REUSE ON ANY WEBSITE] 🌟  
        
// the idea behind making the slider work is to have all the slides laid next to each other by giving each of their parents a css tranform css property of this --> 'translate: transformX(...)' using JavaScript and setting 'overflow: hidden' in css, and then as we click the left or right buttons JavaScript will deduct or add '100%' from the argument inside of each slide parent ('translate: transformX(...)') to make it move right or left, depending on which button the user clicked.
    
// A function that contains all the slider functionality
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');

  const dotsContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxNumSlides = slides.length - 1;

  // Functionality functions 👇
  // controls the position of each slide
  const goToSlide = function (currentSlide) {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
    );
  };

  // Creates dots elements depending on how many slides we have.
  const createDots = function () {
    // '_slide' underscore before 'slide' is a convention of a Throw Away variable --> a variable that we dont need.
    slides.forEach((_slide, i) =>
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="dots__dot" data-slide="${i}"></div>`
      )
    );
  };

  // highlights current ACTIVE dot that corresponds to the currentSlide.
  const activateDot = function (currentSlide) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      // removes the 'dots__dot--active' from all dot elements
      dot.classList.remove('dots__dot--active');

      // adds 'dots__dot--active' class to the currentSlide [Hardest part]
      document
        .querySelector(`.dots__dot[data-slide="${currentSlide}"]`)
        .classList.add('dots__dot--active');
    });
  };

  // moves slides right
  const nextSlide = function () {
    if (currentSlide === maxNumSlides) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // moves slides left
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxNumSlides;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // Initializing Slider as page loads 👇
  const init = function () {
    // changes the positions of the slides to make them next to each other at the start
    goToSlide(currentSlide);

    // creates the dots elements depending on how many slides we have
    createDots();

    // highlights the current slide
    activateDot(0);
  };

  init();

  /// EVENT HANDLERS 👇

  // 🟠 Move Slider on click
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // 🔵 Move Slider using keyboard
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }

    /// ⭐⭐ can also use short-circuiting to fdo the same thing
    // event.key === 'ArrowRight' && nextSlide();
    // event.key === 'ArrowLeft' && prevSlide();
  });

  // 🟢 Highlights and goes to corresponding slide, when a dot is clicked (Event delegation)
  dotsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('dots__dot')) {
      const clickedDot = event.target.dataset.slide;
      // got to corresponding clicked dot
      goToSlide(clickedDot);
      // highlights clicked dot
      activateDot(clickedDot);
    }
  });
};

slider();
    
    
'// **************'
    // LifeCycle DOM Events
    
// Different Events that occur in the DOM during a web page's Lifecyle. By Lifecyle, we mean right from the moment that the page id first accessed until the user leaves it.
    
1.  'DOMContentLoaded' event
    // This event is fired by the document as soon as the HTML is completely parsed, which means that the HTML has been downloaded and been converted to the DOM tree.
    // Also all scripts must be downaloaded and executed before the 'DOM Content Loaded' event can happen. It does NOT wait for images and other external resources to load, just HTML and JavScript needs to be loaded.
// We can listed to the 'DOM Content Loaded' event, like so 👇
document.addEventListener('DOMContentLoaded', function(event) {
  console.log('HTML parsed and DOM tree built 🙌', event);
});

    // We dont need to wrap our entire code around this eventLlistener, because  we have the script tag which is the one that imports our javascript into the HTML, at the end of the body tag. So basically the browser will only run our script when all the HTML is parsed anyway. ⭐ So when we have the JavaScript script tag at the end of the HTML, then we do NOT need to listen for 'DOM Content Loaded' event.
    
    
2. 'load' Event

// Load Event is fired by the window as soon as, not only the HTML is parsed but also all the images and external resources like css files are loaded. So basically when the complete page has finished loading, the Load Event gets fired.

// We can listen too the load event like so 👇

window.addEventListener('load', function(event) {
  console.log('Page fully Loaded load!', event)
})
    
    
3. 'beforeunload' Event
    
// this venet is created immediatly BEFORE a user is about to leavea page. For example, like after clicking the close button on the browser tab. So in some cases, we can use this event to ask users if they are sure they want to leave the page.

window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  console.log(event)
  // inorder to display a leaving confirmation popup when the user closes the tab, we need to set the return value on the event to an empty string. (weird, but need to do it for historical reasons)
  event.returnValue = '';
})
    
    // Cannot change the text shown on the popup because many people abused it when the feature first came out.
    
    
    
    
    
'// **************'
    // Different ways of loading a JavaScript script in HTML --> using DEFER and ASYNC
    
    [Look at picture slides in notes called --> 'Different ways of Loading a JavaScript script in HTML - ('async' and 'defer' attributes)' ]
    
    https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649011#questions
    
// Regular way of loading a script in HTML
<script src="script.js">
  
// Adding 'async' attribute to the '<script>' tag (with 'async' scripts are not garuanteed to execute in order, so dont use for your own script but for third party scripts that your website dont rely on, like Google Analytics)
<script async src="script.js">
  
  // gets added in the '<head>' tag in HTML. Doesnt make sense to add it in '<body>' tag. Watch video 📺.
   
// Adding 'defer' attribute to the '<script>' tag (the prefered way of loading our OWN scripts, and also when the order matters)
<script defer src="script.js"> // [🌟 use this instead of the Regular way, doesnt support old browsers tho]
  
  // gets added in the '<head>' tag in HTML. Doesnt make sense to add it in '<body>' tag. Watch video 📺.
    
// The 'async' and 'defer' attributes are going to influence the way inwhich JavaScript is fetched (fetched means downloaded) and then executed.
    
    
  
'// *****************************************************************'
    '// *****************************************************************'
   // Object-Oriented Programming SECTION
    
    [Check folder called 'Object-Oriented Programming' for all picture notes slides]
    
// There are two main Paradigms in JavaScript. Object-Orientied programming and Funtional programming.
    // Paradigms is a style of code. How we write and organize code.
  
  
'// **************'
    // Constructor Functions
    
// We can use Constructor functions to build an Object, using a function. 
    
    // A Constructor function is actually a completely nomral function. The ONLY difference between a Constructor function and a regular function is that we CALL the Constructor function with the 'new' operator.
    
    
    // In Object-Oriented programming, there is a convention that Constructor functions ALWAYS start with a capital letter.
    
    // ONLY function declarations and a function expressions work with Constructor functions. Arrow functions DO NOT work as a Constructor function because they dont have their own 'this' keyword, which we need in Constructor functions.
    
// Exmaple --> 
    
    // so this Constructor function will produce an Object, and in this case for a person
    
const Person = function (firstName, birthYear) {
  // the 'this' keyword is the empty object we created when we called the constructor function with the 'new' operator.
  console.log(this); // Output: Person {}    // empty object with type of whatever name we gave the Constructor function.
  
  // we create properties in the empty object, and give them the exact same name as the parameters that we are passing in the constructor function (they could have any other name but its a convention to give them the same name as the parameters).
  // After that we set the newly created properties in the empty object to be equal to whatever we pass in as arguments when calling the constructor function with the 'new' operator.
  // we can also call these the 'Instance properties', since the properties 'firstName' and 'birthYear' will be available on all the instances that are created through this Constructor function.
  this.firstName = firstName;
  this.birthYear = birthYear;
  
  // methods in Constructor functions
      // DONT USE. will work but is BAD practice. Should NEVER create a method inside a Constructor function, because imaging we were going to create thousands of 'Person' objects using this constructor function --> then what would happen is that of this created objects would caryy around this method here which would be terrible for the performance of our code. 
  // the better solution is to use Protoypes and Protoypal Inheritance (LOOK AT NEXT SECTION).
  this.calcAge = funciton() {
    console.log(2037 - this.birthYear);
  }
};

const mikel = new Person('Mikel', 1993);
console.log(mikel); // Ouput: Person {firstName: 'Mikel', birthYear: 1993}
    
    // we can then use the constructor function to create as many objects as we want
const matilda = new Person('Matilda', 1990);
console.log(matilda); // Output: Person {firstName: 'Matilda', birthYear: 1990}

const roberto = new Person('Roberto', 1880);
console.log(roberto); // Output: Person {firstName: 'Roberto', birthYear: 1880}

    
    // ⭐⭐ the 'new' operator is a very special operator because it does not just call the 'Person' function, it does alot more (4 steps behind the scenes) --> 
    1. FIRST 👉 A new empty  '{}' object is created.
    2. SECOND 👉 the function is called. And in this call the ⭐'this'⭐ keyword is set/point to the NEWLY created empty object (the one in the first step 👆).
    // which is why in the Constructor function code we set the 'firstName' and the 'birthYear' properties, to the 'this' keyword. Because doing so will ultimately set them to the new Object (ie: 'mikel').
    3. THIRD 👉 The newly created empty Object is linked to the Constructor function's 'Prototype' property. It sets the *Prototype* on the created Object (ie: 'mikel'), to the * Protoype property * of the Constructor function that created it (ie: 'Person').
    4. FOURTH 👉 The empty Object that was created in the first step, is then automatically returned from the Constructor function.
    
    // so calling a Constructor function with the 'new' operator creates a new empty Object.
    
    
    // Remember that OOP in other programming languages, an object created form a class is called an Instance. We didnt create a Class here because JavaScript does NOT have Classes, in the sense of traditional OOP, however we created objects from a Constructor functions. And Constructor functions have been used since the beginning of JavaScript to simulate Classes so therefore we can still say that the ⭐ The newly created Objects are INSTANCES of the 'Person' Constructor function ⭐
    
    // There is even an operator that we can use to test in an object is an Instance of a certain Constructor function --> 
console.log(mikel instanceof Person); // Ouput:true
    
const jay = 'jay';
console.log(jay instanceof Person); // Output: false   // because we didnt create this variable using any constructor function
    
  
    
    
    
'// **************'
    // Protoypes and Protoypal Inheritance
    
// Each and every *FUNCTION* in JavaScript, automatically has a property called 'Prototype', and that INCLUDES ofcourse Constructor functions.
    // Now, every Object that is created from a certain Constructor function, will get access/inherit all the methods and properties that we define on that Constructor's 'prototype' property.
    
    // ie: this is always how Constructor functions are made
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// 🎫 ADDING a method to the 'protoype' property of the 'Person' Constructor function -->
    // the 'protoype' property is actaully an abject.
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

console.log(Person.prototype); // Log the 'protoype' property inside the Constructor function to see that the 'calcAge()' method has been added to the constructor function.
    
// now each Instance/Object created by the 'Person' Constructor function, will have access/inherit all the methods and properties that the Constructor function has, uncluding methods that are in its 'prototype' property. 
    
const mikel = new Person('Mikel', 1993); // An object created by the 'Person' Constructor function

  // since 'mikel' Instance/Object was created from the 'Person' Constructor function, it now inherits or has access to all the properties and methods that the 'Person' Constructor function has, including the methods created in its prototype property (ie: 'calcAge()') --> 
    // and 'mikel' Instance/Object can use these inherited methods like so --> 
mikel.calcAge(); // Output: 44
    // the 'this' keyword in the 'calcAge()' method, which is in the Contructor function's prototype property object, is as always SET/POINTING TO THE OBJECT THAT IS CALLING THE METHOD, in this case pointing to the 'mikel' Object/Instance.
    
    // even tho the 'mikel' object does not have the 'calcAge()' method inside it, it can still use it and access to it because of ⭐Prototypal Inheritance. 
    
matilda.calcAge(); // Output: 47
    
    
  // ⭐ So why and why does this actaully work?

// It works because any Object, always has access to the methods and properties from its 'prototype' property. And the prototype of 'mikel' and 'matilda', is 'Person.prototype' since they were created by the 'Person' Constructor function and thus inherits its properties and methods.
    
    // we can confirm this by logging the prototype of 'mikel' and 'matilda' like so. Its NOT a prototype property, but it is simply a protoype --> 
console.log(mikel.__proto__); // Output: {calcAge: ƒ, constructor: ƒ} 
    
    // ⭐⭐ So the prototype of the 'mikel' instance/object, is essentially the protoype property of the Constructor function that created it (in this case 'Person'). We can check that like this --> 
console.log(mikel.__proto__ === Person.prototype); // Output: true
    
    
    // 😵 The CONFUSING part is that 'Person.prototype' is NOT the protoype of the 'Person' Constructor function, but instead it is what is going to be used as the 'protoype' of all the objects/Instances that are created with the 'Person' Constructor function (ie: 'mikel' and 'matilda' objects/instances). We can proof this by using the 'console.log(mikel.__proto__ === Person.prototype);' like shown above 👆. Or using a built-in method liek this 👇
console.log(Person.prototype.isPrototypeOf(mikel)); // Output: true
    
    // so this confirms that 'Person.prototype' is indeed the prototype of 'mikel' object.
    
    // 🔴 whereas 'Person.prototype' is NOT the prototype of the 'Person' Constructor function 👇
console.log(Person.prototype.isPrototypeOf(Person)); // Output: false
    
    
    // 🔵🟢 So inshort --> thing to REMEMBER is that the 'Person.prototype' property of the 'Person' Constructor function, is NOT the prototype of the Constructor function itself. INSTEAD, it is the prototype of every Object/Instance created from the that Constructor function.
    
    // This is one of the most difficult things to understand in JavaScript.
    
// We can also set properties on the prototype, not just methods -->
Person.prototype.species = 'Homo Sapiens';
console.log(mikel.species); // Ouput: Homo Sapiens
console.log(matilda.species); // Ouput: Homo Sapiens 
    
    // both 'mikel' and 'matilda' objects inherit or get access to the 'species' property from the prototype. 
      // ⭐ However, the 'species' property is not directly on the 'mikel' object, so its not its OWN property. Own Properties are only the ones that are declared directly on the Object itself, NOT including the inherited properties.
    // We can check for that like this --> 
console.log(mikel.hasOwnProperty('firstName')); // Output: true
console.log(mikel.hasOwnProperty('species')); // Output: false
    // false, because the 'species' property is not really inside of the 'mikel' object. The 'mikel' object simply has access to the 'species' property because of its Prototype, becauae its in the prototype property of 'Person' which is 'mikel' object prototype.
    
    [check out slides pictures in 'Object-Oriented programming' folder for a DIAGRAM explaining all the stuff above. Images called 'How Protoypal Inheritance or Delegation works' and 'Prototype Chain' 👆]
    
    https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649055#questions
    
    
    // The beauty of Prototypal Inheritance is that we can create as many Objects/Instances as we want from a Constructor function, and all of them will inherit the methods and properties from the Contructor function that created them. 
    // So in the example above, we can call the 'calcAge()' method from all the newly created Objects/Instances (ie: 'mikel'), without the method being directly attached to all the Objects themselves, which is essential for code performance. Imaginge if we have the a thousand Objects and each one have to carry the 'calcAge()' methid around, it would certainly impact performance. Instead they can all use the 'calcAge()' method from their common prototype that they get from the Contructor function that created them.
    
    
    
    
'// **************'
    // Protoypal Inheritance and Prototype Chain on Built-In Objects such as ARRAYS
    

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mikel = new Person('Mikel', 1993);
console.log(mikel); // Output: Person {firstName: 'Mikel', birthYear: 1993}
    
    // Adding a method to the 'Person' Constructor function's prototype property (which is an Object, remember).
Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
};
    // Adding a property to the 'Person' Constructor function's prototype property (which is an Object, remember).
Person.prototype.species = 'Home Sapien';

    
console.log(mikel.__proto__); // we already know that this is will log the Prototype of 'mikel', which is exactly the Protoype property of the 'Person' Constructor function ('Person.prototype').
    
    // moving up in the Protoype Chain, and taking a look at the prototype of 'mikel''s prototype. 
console.log(mikel.__proto__.__proto__);  // ⭐ Output will be the the Prototype property of the 'Object' Constructor function.
    // Which is the built-in constructor function for Objects. This is used when we write an Object Literal. 
    
    // moving up even further, the Prototype of the 'Object' Constructor function is 'null' because 'Object.Prototype' (the prototype of the 'Object' Constructor function) is ussually at the ⭐ TOP of the Protoype Chain. There is nothing above it so output is 'null' 👾
console.log(mikel.__proto__.__proto__.__proto__); // Output: null
    
    // will point back to the 'Person' Constructor function itself.
console.dir(Person.prototype.constructor);  // Output is the Constructor function itslef.
    // need to use 'console.dir(..)' if we want to inspect the Constructor function
    
/**********/
    // Prototype of ARRAYS
    
const arr = [1, 2, 4, 5, 5, 6, 7, 8];
console.log(arr.__proto__); // logs the 'Array' Constructor function, which contains ALL the Array methods available in JavaScript. And every Array in JavaScript can use these methods because it inherits them from the 'Array' Constructor function Prototype property through Prototypal Inheritance.
    
    // As with Objects --> the Prototype property of the 'Array' Constructor function, will be the Prototype of the 'arr' Array because it was created by the 'Array' Constructor function. 
console.log(arr.__proto__ === Array.prototype); // Output: true
    
    // just like with Objects, whenever we use brackets like this '[]', it is the same as writing 'new Array', which creates an array (behinf the scenes) from the 'Array' Constructor function and thus can access/inherits all of the methods and properties on the 'Array' Constructor function prototype property object.
    
    // going even further up the Prototypal Chain [REMEMBER that Arrays are Objects behind the scenes]
console.log(arr.__proto__.__proto__);  //  which is why the output is 'Object.prototype' which is the prototype property of the 'Object' Constructor function. This means that Arrays can also use all the methods and properties available to Objects from the 'Object' Cnonstructor function's Prototype property. 
    
    // ⭐ SIDE NOTE: the reason why when we search the MDN docs for any Array method, they are all called 'Array.protoype.filter()' for example, because the 'filter()' method lives in the Protoype property of the 'Array' Constructor function ('Array.protoype') which is how we can use it on any array we create because it inherits that method from the 'Array' Constructor function Protoype property. Same thing with strings (String.protoype) for instance.
    
    
    
    // So Protoypal Inheritance is really just a mechanism for resusing code. So for instance all the Array built-in methods, have to exist only ONCE somehwere in the JavaScript engine and then ALL the Arrays created in our code get access/inherits these methods through the Prototypal Inheritance and Protoype Chain.
    
// We can take this one step further to extend the functionality of Arrays even further, by adding array methods to the 'Array' Constructor function Prototype property ('Array.prototype'), and then all the Arrays in our code will inherit it. 👇
    
    // lets say we wanted to create a method that returns an Array of all the unique elements in an Array -->     
Array.prototype.unique = function () {
  return [...new Set(this)];
  // the 'this' keyword is going to be the Array on which this method will be called.
};

const arr = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.unique()); // Output: (9) [2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    // RECAP: We added a new method to the Prototype property of the 'Array' Constructor function, therefore all Arrays in our code will now inherit this method. We can call that method on ANY Array that we want.
    
    // HOWEVER 😨, what we did here, extending the Prototype of a built-in Object, is generally NOT a good idea, for multiple reasons --> 
            1. First, is that the next version of JavaScript might add a method with the same name that we are adding, but that new method might work in a different way, so our code will use that new method which works differently. Which will probably break our code.
            2. Second reason why we shouldn't extend or add methods to a built-In Constructor function's Protoype property, is because when we work with a team of developers then this is really goig to be a bad idea because if multiple developers implement the same method with a defferent name, then that will create so MANY bugs that it is just not worth it.
            
            ⭐⭐⭐ SO IN SHORT --> DO NOT ADD PROPERTIES OR METHODS TO already built-in Constructor function Protoype properies. (ie: 'Array.prototype.newMethod = function() {...}' ⛔) ⭐⭐⭐
            
            
// Other Built-in Objects in the console (other than 'Array.prototype')

1. DOM Built-in Constructor function
            // REMEMBER that ALL DOM elements are OBJECTS, behind the scenes.
const h1 = document.querySelector('h1');
console.dir(h1); // will log the 'h1' object, where we can find its Prototype which is 'HTMLHeadingElement.prototype', which means that it inherits all the properties and methods of the 'HTMLHeadingElement' Constructor functoin Prototype property. 
    // if we go even further down we can see that the 'HTMLHeadingElement.prototype' itself inherits from 'HTMLElement.prototype' which inherits from 'Element.prototype' which then inherits from 'Node.prototype', which inherits from 'EventTarget.prototype', and then lastly inherits from 'Object.prototype' because REMEMBER that ALL DOM elements are OBJECTS, behind the scenes. So this Prototype Chain has easily 6 or 7 levels which is really deep ✨. 
    
2. Function Built-in Constructor function 
    // functions themselves are also Objects, behind the scenes, therefore they also have a prototype. Whicih is a 'Function.prototype' which itself is an Object that has a prototype of 'Object.prototype'.
    
console.dir((x) => x + 1); // lets us see that the Prototype of this Arrow fucntion is 'function.prototype', which means that all functions in JavaScript inherit properties and methods from the 'Function' Constructor function Prortype property. Which then inherits from 'Object.prototype' (ie" the 'Object' Constructor function Prototype property)
            
    
    
// 🟢🔵 Challenge #1 of Object-Oriented programming Section 👇 
    
const Car = function (make, speed) {
  console.log(this);
  this.make = make;
  this.speed = speed;

  // we will not add the 'accelerate()' and 'brake()' methods in here (ie: this.accelerate = function() {...}) because then it will be in every 'new' Object/Instance we create using this Constructor function. Which is very bad for performance.
  // Instead we will make use Prototypal Inheritance 👇
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h 🚗`);
  // remember the 'this' keyword will be the Object on which this method will be called.
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h 🚙`);
};

const firstCar = new Car('BMW', 120);
const secondCar = new Car('Mercedes', 95);

firstCar.accelerate(); // Output: BMW is going at a speed of 130 km/h 🚗
firstCar.accelerate(); // Output: BMW is going at a speed of 140 km/h 🚗
firstCar.accelerate(); // Output: BMW is going at a speed of 150 km/h 🚗
firstCar.brake(); // Output: BMW is going at a speed of 145 km/h 🚙

secondCar.accelerate(); // Output: Mercedes is going at a speed of 105 km/h 🚗
secondCar.brake(); // Output: Mercedes is going at a speed of 100 km/h 🚙  
    
    
    
'// **************************'
    // ES6 Classes (How to implement Prototypal Inheritance with ES6 Classes)
    
// ES6 Classes allows us to do the exact same thing as implementing Prototypal Inheritance with Constructor functions, and then manually setting methods on Constructor function's Prototype property (as we did above 👆); But using a nicer and more modern syntax.
    
    // As mentioned in the beginning, Classes in JavaScript do NOT work like traditional classes in other languages like Java or C++. Itstead, Classes in JavaScript are just sytatic sugar for implementing Prototypal Inheritance behind the scenes, but with a syntaix that makes more sense to people coming from other programming languages. 
    
// Implementing the same example above, but using ES6 Class --> 
    
    // ⭐ Classes are just a special type of Functions. So behind the scenes Classes are still Functions, therefore we have Class Declarations and Class Expressions.
    
      // Class Expressions (Just like in Functions, we also have Class Expressions, but without the arguments) 👇
const PersonClass = class {
  
}
    
    // Class Declaration  [Prefer to use this] 👇
class PersonClass {
  // 1. Inside the class, the first thing we need to do is to add a ⭐ CONSTRUCTOR METHOD, which is NOT the same as a Constructor Function as the one we used in the previous section. 
  // The 'constructor()' method works in a similar way as a Constructor Function, but the 'constructor()' method is actually a method of the 'PersonClass' class. AND it HAS to be called 'constructor()'.
  // And just like in Constructor Functions, we pass in properties as arguments, basically for the properties that we want the newly created Objects/Instances to have.
  // ⭐⭐ The 'constructor()' method IMMEDIATLY gets called when a new Object is created from this Class
  constructor(firstName, birthYear) {
    // the act of creating a new Object/Instance here, also works in the same   way as with Constructor Functions --> so also using the 'new' operator. Therefore whenever we create a new Object/Instance using the 'new' operator, this 'constructor()' method will automatically be called.
    // Also just like with Constructor Functions, the 'this' keyword inside of the 'constructor()' method will be set to the newly created empty Object/Instance. So we do this --> 
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  // 🔵 adding methods to the 'PersonClass' Class. Added Methods will automatically be added to the Prototype property of the 'PersonClass' Class, which will then be inherited by all newly created Objects/Instances from this Class, through Protoypal Inheritance. Because remember, the Protoype property of this Class will be the Prototype of all newly created Objects/Instances from this Class. 
  // 🔴🔵🟠 HAVE TO ADD BE ADDED OUTSIDE OF THE 'constructor()' method, but inside the Class.
 calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  // 🔴🟢 Whats important to understand here is that all the methods (ie: 'calcAge()') that we write in the 'PersonClass' Class, SO OUTSIDE OF THE 'constructor()' method, will be on the Prototype of the newly created objects/Instances. And NOT on the Objects themselves (nothing new --> Protoypal Inheritance).
  
  // Adding another method to the 'PersonClass' property. 
    // 🟠 NOTICE that there are no commas between the methods.
  greetings() {
    console.log(`Hey ${this.firstName}`)
  }
}
    
    
// creating a new Object from the 'PersonClass' Class --> 
const jessica = new PersonClass('jessica', 1994);
console.log(jessica); // Output: script.js:75 PersonClass {firstName: 'jessica', birthYear: 1994}     /* Looks just like it would with Construction Functions */

    // using the method that we created in the 'PersonClass' Class, which is inherited to this Object/Instance though Prototypal Inheritance.
jessica.calcAge(); // Output: 43
    
    // just to proof like before, that the 'jessica' Object/Instance Prototype, IS the Protoype property of the 'PersonClass' class. [works that the same way as it did with Constructor Functions]
console.log(jessica.__proto__ === PersonClass.prototype); // Output: true

    
    // ⭐⭐⭐ SUMMARY --> So 'PersonClass' Class acts just like any other Constructor Function, with the only difference that the syntax looks a bit nicer. For instance, with ES6 Classes we dont have to manually mess with the Prototype property inorder to add new methods like we do with Constructor Functions (ie: 'Person.prototype.calcAge = function() {...}'). In ES6 classes, all we have to do is to write the methods inside the Class (BUT OUTSIDE OF THE 'constructor()' method) and then the methods will automatically be added to the Prototype property of the Class, which is then inherited to all newly created Object/Instances of that Class, through Prototypal Inheritance.
    
    
    
// We can even add a method manually to the 'PersonClass' Class Prototype property, just like with Construction Functions (instead of adding it in the Class itself). Like so --> 
PersonClass.prototype.greetings = function() {
  console.log(`Hey ${this.firstName}`);
}

jessica.greetings(); // Output: Hey jessica
    
    // 🟠 This is just proof that the ES6 Class, really just hides the true nature of Prototypal Inheritance in JavaScript.
    


// A couple more things about Classes that are important to keep in mind: 

  1. First, classes are not Hoisted, even if they are Class Declarations. Remember function Declarations, on the other hand, are Hoisted which means we can use them BEFORE they are declared in the code. But with Classes that doesnt work.
  
  2. Second, just like Functions, Classes are also First-Class Citizens which means that we can pass them into functions and also return them from functions. And that is because Classes are really just a special kind of function behind the scenes.
  
  3. Third, the body of a Class is ALWAYS executed in 'strict mode'. So even if we didnt activate 'stict mode' ('use strict;') for our entire script, all the code that is inside the Class, will still be execute in 'strict mode'.
  
  
  
// So in the end, Should we use Constructor Functions or ES6 Classes? 
  
  First, Constructor Functions are not old or Deprecated syntax, so it 100% fine to keep using them. So it all comes back to Personal Preference. Just make sure that you understand Protoypal Inheritance BEFORE using ES6 Classes.
  
  Some say that ES6 Classes are bad in general and no one should use them, simply because they hide the true nature of JavaScript. But Jonas doesnt agree with that and says its absolutly okay to use classes as long as you understand all the above stuff about Constructor Functions, Protoype properties, 'new' operator, Protoypes, Protoypal Inheritance, and Protoypal Chain.
  
  What Jonas likes about Classes, is that they vissually put all the code that belongs to a certain ES6 Class (like properties and methods), all into one nice code block. Where as with Constructor functions it all looks like a big mess, since we add methods to a Constructor Function's Prototype property manually OUTSIDE of the Constructor Function (ie: 'Person.prototype.calcAge = function() {...}') which can get out of hand and messy.
    
    
    
    

'// **************************'
    // Setters and Getters
    
    ⭐ WE DONT NEED TO USE 'setters' and 'getters'. AND MANY PEOPLE ACTUALLY DONT USE THEM. ⭐

// A feature that is common to all Objects in JavaScript.
    
// So every Object in JavaScript can have a 'Setter' and 'Getter' properties. And we call these special properties 'Assesor' properties, while the more normal properties are called 'Data' properties.

  // So 'Getters' and 'Setters' are basically functions that GET and SET a value, but on the outside they still look like regular properties.
  
// 🟠🔵 'Getters' and 'Setters' in a simple Object Literal --> 
const account = {
  owner: 'Mikel',
  movements: [200, 400, 75, 9389, 939],

  // A method that gets the latest or last movement in the movements Array.
  // Adding a 'getter' 👇 to this Object -->
    // 1. start by writing a normal method
    // 2. and then to transform this method to a 'getter', we simply prepend the keyword 'get'.
  get latest() {
    return this.movements.slice(-1).pop();
  },
  
  // A method that adds or sets a new moevement to the movements Array.
    // Any 'setter' method need to have exactly ONE parameter.
    // 🔵 it is not mandatory to specify a 'setter' when we have a 'getter' for the same property. So just a 'getter' or just a 'setter' would be enough.
  set latest(mov) {
    this.movements.push(mov);
  },
};

    // using 'getter' property
// now we can use this 'getter' like this
  // we write the method WITHOUT brackets in order to use it as a property. So we dont Call the method, instead we write it as if it was just a property.
console.log(account.latest); // Output: 939

  // So 'getter' 👆 can be very usefull when we want to read something as a property but still need to do some calculations before.
    
    // using 'setter' property
// since 'setters' are like property and not a method so we cant do this 'account.latest(500)'. Instead we can set it, just like we set any property -->
account.latest = 500;
console.log(account.movements); // Output: (6) [200, 400, 75, 9389, 939, 500]
    
    
    
    
// 🟠🔵 'Getters' and 'Setters' in Classes -->     

// Classes also have 'getters' and 'setters' and they work in the exact same way as in Object Literials 👆

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${fullName}`);
  }
  
  // adding a 'getter' for an 'age' property
    // this will basically lets us read the age of any created Object/Instance, using a property.
  get age() {
    return (2037 - this.birthYear);
  }
  
  // 'setters' and 'getters' can actually be very usefull for data validation, as in example below 👇
  
  // this is a 'setter' property that will check if the passed in argument is actually a fullname. A name consisiting of a first and last name.
  
  // 🔵🟠 The pattern below 👇 is important to understand, whenever we try to set a property that already exists. 'set' method --> then 'get' method. 🟠🔵
  
  // whats important to understand here is that we are creating a 'setter' for a property name that already exists which is 'fullName'. So whenever we set the 'fullName' on the 'this' keyword in the 'constructor()' method, then actually the 'setter' method below 👇 will also get executed, and so the 'fullName' property that was set in the 'constructor()' method, is going to be the 'name' in the 'setter' method parameter.
  set fullName(name) {
    console.log(name);
    name.includes(' ')
      ? (this.fullName = name)
      : console.log(`${name} is not a fullName`);
  }
  // ⛔⛔ output 👆 will give us a weird error because the 'constructor()' method and the 'setter' method are both trying to set the exact same property name.
  
  // So the convention for SOLVING that, so when we have a 'setter' which is trying to set a property that already exists --> then as a convention we add an underscore to the already existing property name (ie: 'this._fullName = name').  Its just a convention, NOT a JavaScript feature. So its really just a different variable name to avoid that naming conflict. Like so --> 
  set fullName(name) {
    console.log(name);
    name.includes(' ')
      ? (this._fullName = name)
      : console.log(`${name} is not a fullName`);
  }
  
  // But now there is another FUCKING problem, which is that when log the created Object 'mikel', the fullname property is now '_fullName' (a newly created property from the 'setter' method). So if we log 'mikel.fullName' we'll get 'undefined'. So to fix the fact that we'll get 'undefined' if we log 'mikel.fullName', we create another 'getter' for the fullName property, which will simply return the '_fullName'. So now when we log 'mikel.fullName' we'll get 'Mikel Kamel' and NOT 'undefined'.
  get fullName() {
    return this._fullName;
  }
}

const mikel = new PersonClass('Mikel Kamel', 1993);
console.log(mikel.age); // Output: 44

// so a 'getter' is just like any other regular method that we set on the Prototype of the newly created Object/Instance.


    ⭐ WE DONT NEED TO USE 'setters' and 'getters'. AND MANY PEOPLE ACTUALLY DONT USE THEM. ⭐




'// **************************'
    // Static methods
    
// Lets take the 'Array.from()' method which converts an Array-like structure to a real Array.

// for Example --> 
document.querySelectorAll('h1'); // would return a NodeList - 'NodeList [h1]'
// but --> 
Array.from(document.querySelectorAll('h1')); // would return an Array - '[h1]'

// The point here is that the 'from()' method is really a method that is attached to the Array Constructor, so we could not use the 'from()' method on an Array (ie: '[1, 2, 3].from()' will give us an error ⛔), which is because this 'from()' method is really attached to the entire Array Constructor itself and NOT to its Prototype property, therefore all objects/Instances created from the Array Constructor (ie: arrays) cannot inherit/access the 'from()' method.
  // so 'Array.from()' is basically just a simple function, but its a function that is attached to the Array Constructor, and the reason for that is simply so that Developers know that it is related to Arrays.
  
  // We also say that the '.from()' method is in the Array NAMESPACE.
  
 // Another example is 'Number.parseFloat()' --> so the 'parseFloat()' method is a STATIC method and it is Static on the 'Number' Constructor. So its not available on numbers, only on the 'Number' Constructor itself. Same with the 'from()' method.

    
// ⚪⚫ Implementing Static methods on Constructor functions --> 

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// so to add a static method we do this 👇 
    // 1. create a method on the 'Person' Constructor funciton itself, NOT its Prototype property 
Person.hey = function() {
  console.log('Hey there 🙋‍♀️')
}
// THATS IT 🙌. This is how we create a Static method on a Constructor function.

// then to call it we simply do this 👇
Person.hey(); // Output: Hey there 🙋‍♀️

// 😶 BUT OFCOURSE, keep in mind that the 'hey()' static method CANNOT be inherited because it is attached to the 'Person' Constructor function itself, and NOT it Prototype property.

    
// ⚪⚫ Implementing Static methods on Classes --> 
    
const PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  // so to create a static method in an ES6 Class, all we have to do is add the 'static' keyword --> 
  static hey() {
    console.log('Hey, there 🙋‍♂️'); 
  }
}

PersonClass.hey(); // Output: Hey, there 🙋‍♂️
    
    
    
    
    // ⭐⭐ Side Note: Methods created inside the class, ie: methods that are added to the class's Prototype property and thus can be inherited to created Objects/Instances throught Protoypal Inheritance, are called INSTANCE METHODS.
    // whereas static methods that are only accesible by the Class itself (because it is not added to the Class's prototype property) are called STATIC METHODS.
    
    // so Static methods are not available in the instances, and sometimes it is still usefull to implement somekind of helper function about a class or about a Constructor function.
    
    
    
    
'// **************************'
    // Object.create()
    
//  'Object.create()' is a function which is a THIRD way of implementing Prototypal Inheritance/Delegation, other than Constructor Functions and ES6 Classes.

[In practice in the real-world --> THIS IS ACTUALLY THE LEAST WAY OF IMPLEMENTING PROTOYPAL INHERITANCE so dont bother using it, however it is still very important to know how it works because we might still stumble upon it inthe real world.]

// With 'Object.create()' there is still the idea of Prototypal Inheritance, HOWEVER there are NO ⛔ Protoype properties involved and NO ⛔ Constructor Functions and NO ⛔ 'new' operator.
    
      // ⭐ So instead we can use 'Object.create()' to essentially manually set the Prototype of an Object to ANY other object that we want.
      
// so lets create an Object that we want to be the Prototype of all the 'Person' objects --> 
  
  // Again, This object will be literally the Prototype of all the 'Person' objects. This Prototype is also actually just a simple Object Literal.
const PersonPrototype = {
  // then just write the methods that we want the 'Person' objects to inherit. Like so --> 
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  // programatiically adding properties to the created objects/instances (similar to the 'constructor()' method that we have in classes) [can have any name] 👇
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

// then all we have to do is to actually create a 'Person' object with 'PersonPrototype' as its Prototype using 'Object.create()'👇
    // In 'Object.create()' we pass in the Object that we want to be the Prototype of the newly created Object/Instance, as an argument.
const mikel = Object.create(PersonPrototype);
          // this will now return a brand new Object that is linked to the Protoype that we passed as an argument (ie: the 'PersonPrototype' Prototype).
          
// We can add properties to the 'mikel' instance using the same way as we would add properties to any other Object literal, BUT THIS GOES AGAINST THE SPIRIT OF CREATING objects programatically, so if we're serious about USING 'Object.create()' we should implement a function that basically does this work for us.
mikel.name = 'Mikel';

// instead add a method in the 'PersonPrototype' Object and then use it liek this 👇
    // the 'this' keyword in the 'init' method will simply point to 'mikel' because we explicitly called the 'init()' method on 'mikel'. Has nothing to do with Constructor functions, Constructor methods, and the 'new' keyword.
mikel.init('Mikel', 1993);
mikel.calcAge(); // Output: 44

// We can verify that the 'PersonPrototype' object is the Prototype of the 'mikel' object/instance due to the 'Object.create(PersonPrototype)' funciton, by doiing this -->

console.log(mikel.__proto__); // Output will log the exact 'PersonPrototype' object, becuase by using 'Object.create(PersonPrototype)' we explicitly said the 'PersonPrototype' should be the Prototype of the 'mikel' Object/Instance.
console.log(mikel.__proto__ === PersonPrototype); // Output: true

    
    
    // ⭐⭐ SUMMARY --> is that 'Object.create()' creates a new Object/Instance and the prototype of that new Object/Instance will be the Object that we pass in the 'Object.create()' as an argument. ⭐⭐
    
    
    
'// ***********************************'
    // Inheritance between CLASSES (not just Prototypal Inheritance between Objects/Instances and Prototype property. Like Above 👆)  
    
// Lets say we create a 'Student' Class which will inherit from a Class called 'Person'. This makes 'Student' a CHILD class of the 'Person' which is now a  PARENT class, thats because 'Student' is basically a sub-type of the 'Person' Class. So the 'Student' Class is also a 'Person' Class, but it is more specific type of 'Person' class that can have its own methods but also use more generic methods from its parent Class ('Person').
    
    // Just like Prototypal Inheritance with Objects/Instance, we can also inherit different properties and methods between Classes using Constructor functions, ES6 Classes, or 'Object.create()'.
    


'// ****************************'
    // Inheritance between CLASSES, using CONSTRUCTOR FUNCTIONS
    
// Setting up the Protoype Chain, inorder to allow inheritance between Prototype properties of two different Constructor Functions.
   
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Remember, this is how you add methods to Constructor function's Prototype property which can then be inherited to its newly created Objects/Instances through Prototypal Inheritance.
Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
};

// usually we want the CHILD class 👇 to have the same functionality as the Parent class ('Person'), but with some ADDITIONAL functionality. So we usually pass in the same argument in the Child class as that in the Parent class, but then with some additional arguments.
// 🔴 ⛔ WITHOUT Inheritance between Classes 🔴
const Student = function(firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

// 🟠 ⛔ TRYING to implement Inheritance between Classes 🟠 [WONT WORK]
const Student = function(firstName, birthYear, course) {
  Person(firstName, birthYear); // this will give us an error because we are calling 'Person' constructor function as a regular function call, and remember that in a regular function call, the 'this' keyword is to 'undefined'.
  this.course = course;
};

// 🟢 TRYING to implement Inheritance between Classes 🟢 [WILL WORK 👍]
const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Gets the properties set in the Parent Constructor Function.     // Inorder for it to work we need to use the 'call()' method and then set the 'this' keyword inside that function to the Parent Class ('Person').
  this.course = course;
};

// We want to set the Parent Prototype property to be the Prototype of the Child Class. So in the example above --> we want 'Person.prototype' to be the 'Prototype' of the 'Student', and inorder to do so we can use the 'Object.create()' method, which the will let the define the child's prototype manually. Like so 👇   
// [⭐ Its important that we define the child's prototype, BEFORE we add any methods to the prototype object of the the child 'Student' because 'Object.create(Person.prototype)' will return an empty Object and then on that empty Object we can then add methods like the one shown below 'introduce()'. If we did it the other way around then 'Object.create(Person.prototype)' will basically override or remove any methods we added on the Child's Prototype ('Student.prototype')⭐]
Student.prototype = Object.create(Person.prototype); // with this --> the 'Student.prototype' object is now an object that inherits from 'Person.prototype' prototype. // lets us use methods in the Parent Constructor Function's Prototype property the constructor function
Student.prototype.constructor = Student; // ❓❓❓ then just do this.

// 🎫 SIDE NOTE: 'Student.prototype = Person.prototype' setting both the Child's and Parent's prototype to be equal WOULD NOT WORK ⛔. Check slide picture in 'Object Oriented Programming' folder, called 'Inheritance between CLASSES - Part 3'. [BAD CODE]



Student.prototype.introduce = function () {
  console.log(`Hello my name is ${this.firstName}, and I study ${this.course} 🤓`);
};

const mikel = new Student('Mikel', 1993, 'Computer Science');
mikel.introduce();
   
   
   
   // So the whole idea of Inheritance between Classes, is that Child Classes can share behavior from the Parent Classes.
   
    // checking the Child and Parent prototypes.
console.log(mikel.__proto__); // will log 'mikel' Object Prototype
console.log(mikel.__proto__.__proto__); // will log 'mikel' object's parent prototype (so 'Person.prototype')




// Challenge #3 (OOP section)

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed); // sets the 'this' keyword inside EV Constructor function to the Parent Class ('Person').
  this.charge = charge;
};

// Links the Parent ('Car') and Chile ('EV') Prototypes
EV.prototype = Object.create(Car.prototype); // will create a new Object which has 'Car.prototype' as its prototype, and will set it to be the Child's ('EV') prototype.

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// WHEN there are two 'accelerate' methods with the same (one in the Parent's prototype 'Car' and one in the Child's prototype 'EV'), JavaScript uses the first one that appears, and in this case it is the 'accelerate' method in the Child's prototype.
// With this, a Child class can override a methods it inherited from the Parent Class.  POLYMORPHISM --> one of the 4 fundamentals of OOP (check slide pictures in 'OOP' folder)
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}% 🚗`
  );
};

const tesla = new EV('Tesla', 120, 90);
tesla.brake();
tesla.accelerate(); // Output: script.js:277 Tesla going at 135 km/h, with a charge of 89% 🚗
   
   
   
   
'// ****************************'
    // Inheritance between CLASSES, using ES6 Classes  
   

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

// Creating a 'Student' Class that inherits from the 'Person' Class.
  // ⭐⭐ To implement Inheritance between ES6 Classes, we only need two ingredients --> 
        /* 1. We need the 'extend' keyword (will link the Parent and Child prototypes, behind the scenes).
           2. And we need the 'super()' function (it is basically the Constructor function of the Parent Class. We use it inside the 'constructor() method.') */

class StudentClass extends PersonClass {
  // then the constructor function will recieve the same arguments as the Parent Class, but then some additional arguments too.
  constructor(firstName, birthYear, course) {
    // ⭐ Always have to call the 'super()' function, FIRST thing in the 'constructor()' method, because it is responsible for creating the 'this' keyword in this sub class. Wont be able to access the 'this' keyword otherwise.
    super(firstName, birthYear); // We pass in all the parameters that are specified in the Parent Class ('Person').
    // behind the scenes the 'super()' does that same thing as the Construction function in previous section --> 'Person.call(this, firstName, birthYear);'
    this.course = course;
  }
  
  introduce() {
    console.log(`Hello my name is ${this.firstName}, and I study ${this.course} 🤓`);
  }
  
  // overriding the 'calcAge()' method in the Parent Class ('Person').
  // since the Parent Class ('Person') has the same method name, this method 👇 will OVERRIDE it when called on the 'mikel' object because it is closer to it in the Prototype Chain.
  calcAge() {
    console.log(3037 - this.birthYear);
  }
}

const mikel = new StudentClass('Mikel', 1993, 'Computer Science');

mikel.introduce(); // Output: Hello my name is Mikel, and I study Computer Science 🤓
mikel.calcAge(); // Output: 1044 
   
   
   
   
'// ****************************'
    // Inheritance between CLASSES, using 'Object.create()'
    

const PersonPrototype = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}   
   
const StudentPrototype = Object.create(PersonPrototype);

// Overrides the Parent's 'init()' method
StudentPrototype.init = function(firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentPrototype.introduce = function() {
  console.log(`Hello my name is ${this.firstName}, and I study ${this.course} 🤓`);
}

const jay = Object.create(StudentPrototype);
// So 'jay' Object inherits from 'StudentPrototype' which inturn inherits from 'PersonPrototype', so in short --> 'jay' object will be able to use all the methods and properties that is contained in both 'StudentPrototype' and 'PersonPrototype'.

jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // Output: Hello my name is Jay, and I study Computer Science 🤓
jay.calcAge(); // Output: 27

   
   
   // ES6 Classes are the most used in Moder JavaScript, in comparison to Constructor functions and 'Object.create()', in order to implement Inheritance between Classes.
   
   
   
   
   
'// ****************************'
    // Another ES6 Class example. [Mostly used in Modern JavaScript out of the 3]
   
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // we can create even more properties on any instance. And properties that are not based on any inputs 👇
    this.movements = [];
    this.locale = navigator.language;

    // we can even execute any code in this constructor that we want 👇
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // ⭐ These methods here 👇 ('deposit()' and 'withdraw()') are ✨Public Interface✨ of created Objects/Instances from this Class. And we basically call these API.
  deposit(amount) {
    this.movements.push(amount);
  }

  withdraw(amount) {
    // we can call other methods, inside of a certain method
    this.deposit(-amount);
  }
}

const account1 = new Account('Mikel', 'USD', 1234);
console.log(account1);

// 🔴⛔⛔ Not a good idea to interact with a Class property like at ALL ⛔⛔⛔
// adding deposits to the movement array 👇 
account1.movements.push(300);
// adding withdrawals to the movement array 👇
account1.movements.push(-600);
// 🟢🟢🟢 So instead of creating of interacting with Class properties like this 👆, its alot better to create methods that interact with these properties. (will avoid bugs as the application grows) ['deposit()' and 'withdraw()' methods are in the Class itself]🟢🟢🟢

// We need ENCAPSULATION inorder to not mess with these properties from OUTSIDE the Class, like this 👇
account1.deposit(300);
account1.withdraw(300);




'// ***********************************************'
    // Data Encapsulation and Data Privacy [Protected Properties and Methods.]
            // FAKE ENCAPSULATION. JUST A CONVENTION
   
// Encapsulation means to keep some properties and methods private inside the Class, so that they are not accessible from OUTSIDE of the Class.
    // Then the rest of the methods are basically exposed as a Public Interface, which we can also call API.
    // This is essential to do in anything more than a toy Application.
    
// There are 2 BIG reasons why we need Encapsulation and Data Privacy --> 
    1. First, it is to prevent code from outside of a Class to accidently manipulae our data inside the class.
    2. Second reason, is that when we expose only a small Public Interface or a small API consisiting only of a few public methods, then we can change all the other internal methods with more CONFIDENCE. Because in this case we can be sure that external code does not rely on these private methods, therefore our code will not break when we do internal changes.

// 🟠🔴🟢 JavaScript classes does NOT yet support REAL data privacy and Encapsulation. So below here, we will simplay FAKE encapsulation by using a convention (something that developers agreed to use, and then everyone does it this way) ⭐ Since it is NOT truly private, we call it PROTECTED PROPERTY. 👇
    // The convention is to add an underscore to the property name that we want to be private, just to tell other developers using our code NOT to mess with it. LUL. Much Genius convention. Other developers can still change it tho, by just using the property name with an underscore. But then atleat they will know that it is wrong to access this property.
    // Developers still need to know about this convention, and need to follow it because otherwise everything would still be public.

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // 🥽 Conventional Encasulation (PROTECTED PROPERTIES)--> add an underscore to the property name we want to encapsulate ('_movements'). 
    this._movements = [];
    this._pin = pin;
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  
  // if we want to give access to a private method from the outside, then we would have to implement a public method for it 👇
  // it is very common to have a method called 'get...' or 'set...' instead of implementing a real 'getter' or 'setter' method. like so 👇
  getMovements() {
    return this.movements;
  }
  
  
  deposit(amount) {
    this._movements.push(amount);
  }

  withdraw(amount) {
    // we can call other methods, inside of a certain method
    this.deposit(-amount);
  }
  
  // Protected Method
  _approvedLoan(amount) {
    return true;
  }
  
  requestLoad(amount) {
    if(this._approvedLoan(amount)) {
      this.deposit(amount);
      console.log('Loan Approved');
    }
  }
}

const account1 = new Account('Mikel', 'USD', 1234);

// 🔴 We need ENCAPSULATION inorder to not mess with these properties from OUTSIDE the Class, like this 👇
account1.movements.push(99999);
account1.deposit(300);
account1.withdraw(300);  

// 🟢 Correct way to get the movements array from the outside, if we need it to be private. Everyone can atleast access the movements, but they cannot override or set the movements.
console.log(account1.getMovements());


console.log(account1);
   
   



'// ***********************************************'
    // TRUE Data Encapsulation and Data Privacy [Private Class Fields and Methods]
            // REAL ENCAPSULATION 

[NOT VERY IMPORTANT. STILL NOT AVAIALABLE IN JAVASCRIPT]

// Private Class Fields and Methods are part of a bigger proposal for improving and changing JavaScript Classes which is simply called Class Fields.
// The Class Fields propsoal is currently at stage 3, so its not yet part of the JavaScript language. But being at dtage 3 means that when it gets to stage 4 it will most likely be part of the JavaScript language.

// Why is this proposal called Class Fields? 
In traditional OOP languages like Java and C++, properties are ussually called FIELDS, so with this new proposal JavaScript is moving away from the idea that Classes are just syntatic sugar over Constructor functions. Because with these Class features, Classes start to have abilities that we didnt previously have with Constructor functions [not a big deal for the average JavaScript Developer, as long as you understand how Prorotype Inheritance and Constructor functions work, then its fine].


// There are 8 (but we'll only discuss 4) different kinds of Fields and methods in the Class Fields propsoal --> 
    1. Public Fields  // (remember Fields are properties in tradition OOP languages)
    2. Private Fields
    3. Public Methods
    4. Private Methods
    // there is also the same versions of for Static Fields and Methods.

class Account {
  // 1 - Defining Public Fields (this makes these two properties Public Fields) 👇
  locale = navigator.language; // this is the same as this --> ('this.locale = navigator.language;') [so these Public Fields are also referencable via the 'this' keyword]
  // whats important to understand here is that these Public Fields 👆 are going to be present on all the Instances that we are creating through the 'Account' class, so they are NOT on the Prorotype (they are only on the Instances, unlike the methods below).
  
   // 2 - Defining Private Fields [makes it so the properties are TRULY unaccessible outside the Class] (avaiable only on the Instances themselves and NOT on the Prototype)
  #movements = []; 
  #pin;
  
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // Private Field 
    this.#pin = pin;
    
    console.log(`Thanks for opening an account, ${owner}`);
  }
  
  
  // 3 - Defining Public Methods (nothing new. All the methods we've been writing thus far are Public)
  // Public Interface
  getMovements() {
    return this.#movements;
  }
  
  
  deposit(amount) {
    this.#movements.push(amount);
  }

  withdraw(amount) {
    // we can call other methods, inside of a certain method
    this.deposit(-amount);
  }
  
  requestLoad(amount) {
    if(this.#approvedLoan(amount)) {
      this.deposit(amount);
      console.log('Loan Approved');
    }
  }
  
  // 4 - Defining Private Methods (Are very usefull to hide the implementation details from the outside) [As of now, no Browser supports Private methods]
  #approvedLoan(amount) {
    return true;
  }
}
  
    
const account1 = new Account('Mikel', 'USD', 1234);
 
console.log(account1.#movements); // gives us a syntax error because it is now a Private Field.
    
    
    
    
    
'// ***********************************************'
    //  Chaining Class Methods  
    
class Account {
  // Public Field
  locale = navigator.language;
  
  // Private Fields 
  #movements = []; 
  #pin;
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // Private Field 
    this.#pin = pin;
    
    console.log(`Thanks for opening an account, ${owner}`);
  }
  
  // Public Interface
  getMovements() {
    return this.#movements;
  }
  
  
  deposit(amount) {
    this.#movements.push(amount);
    // Inorder to chain Class methods, we need to return the current Object, like so (makes most sense in methods that SET a property) 👇
    return this;
  }

  withdraw(amount) {
    // we can call other methods, inside of a certain method
    this.deposit(-amount);
    
    // makes the method Chainable 👇
    return this;
  }
  
  requestLoad(amount) {
    if(this._approvedLoan(amount)) {
      this.deposit(amount);
      console.log('Loan Approved');
      
      // makes the method Chainable 👇
      return this;
    }
  }
  
  // Private Methods 
  _approvedLoan(amount) {
    return true;
  }
}
  
    
const account1 = new Account('Mikel', 'USD', 1234);
 
    
//  Chaining Class Methods 👇
    // All we have to do is to return the Object itself, at the end of the method that we want to be chainable. Like so -->
account1.deposit(300).withdraw(600).deposit(1000).withdraw(4000);
    
    
    


'// ***********************************************'
    //  ES6 Classes Summary

[Whever trying to implement Protoypal Inheritance (OOP)--> use ES6 Classes since they are the ones mostly used]

Check last image in JavaScript notes OOP folder

// The whole reason to why Inheritance actually exists, is so that we can have more specific classes that can inherit behavior and common properties that are common to all the child Classes 

'// ***********************************************'
    // Challenge #4 - Final Challenge of Object-Oriented programming Section

// parent class
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  brake() {
    this.speed -= 5;
    console.log(`Speed after Braking is: ${this.speed}`);
    
    // making the method Chainable 👇
    return this;
  }
}

// child class
class EVClass extends CarClass{
  constructor(make, speed, charge) {
    super(make, speed);
    
    this._charge = charge;
  }
  
  chargeBattery(chargeTo) {
    this._charge = chargeTo;
    
    // making the method Chainable
    return this;
  }
  
  accelerate() {
    this.speed += 20;
    this._charge--;
    console.log(`${this.make} going at ${this.speed}km/h, with charge of ${this._charge}%`);
    
    // making the method Chainable 👇
    return this;
  }
} 

const tesla = new EVClass('Tesla', 120, 90);

console.log(tesla);
tesla.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate(); 
/* Output:  Tesla going at 175km/h, with charge of 87%
            Tesla going at 195km/h, with charge of 86%
            Tesla going at 215km/h, with charge of 85%
            Speed after Braking is : 210
            Tesla going at 230km/h, with charge of 49%      */






'// *****************************************************************'
    '// *****************************************************************'
   // Mapty App Section --> [OOP, Geolocation, External Libraries]


'// ******************************'
      // Using the Geolocation API


// The Geolocation API is called an API because its a browser API, just like Internationalization API or timers, really anything that the browser gives us.

  // There are many other Modersn APIs like the Geolocation API, for example like APIs that acceses the User's camera or even to make the user's phone vibrate.


// Geolocation API is very easy to use, all we have to do is this in JavaScript 👇

// the 'getCurrentPosition()' method takes 2 Call-Back functions as arguments --> the FIRST Call-Back funciton is the one that will be called on SUCCESS 🙌, so whenever the browser successfully gets the coordinates of the current position of the User. The FIRST Call-Back function also takes in a parameter which we call the POSITION parameter.

// And the SECOND Call-Back function is the ERROR call-back function, which is the one that is going to be called when an error happens when getting the coordinates.


// if-statement is just to prevent us from getting any errors in an old browser (checks if 'navigator.geolocation' exists)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);

      // Object Destructuring
      const { latitude, longitude } = position.coords;
      // building a URL similar to google map's URL (takes me to my current location on the map)
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      console.log(`Cannot get Current Position 🍁`);
    }
  );
}



'// ******************************'
      // Displaying a Map using a Third-Party Library (Leaflet Library)

// Leaflet is an Open-source JavaScript Library for mobile-friendly interactove maps.

// Whenever we're using a Third-Party library, the first thing to do is to include it on our site, by looking for the 'download' link and then using the 'Hosted Version' which is a link on a CDN [Content Delivery Network] (which means that we can use a version of this Library that is already hosted by someone else),  or we can also use the npm package manager to include the library on our site which is the cleaner way of doing it. 


// Leaflet Hosted CDN. Have to be added before our JavaScript because by the time our JavaScript loads, the browser must already have downloaded, otherwise our code will not be able to work that library. 
//  Add it in the <head> in HTML (⭐ we should also add the 'defer' attribute to the <script> tag since it is in the head, because the order inwhich the scripts are downloaded is very important).

<!-- Leaflet Library (have to be before JavaScript Script) -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossorigin=""
    />
    <script
      defer
      src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
      crossorigin=""
    ></script>



// After including the Leaflet's library into our site, and now we need to use the functions that are defined in this library, inorder to actually use it on our site. By looking at the 'Overview' page which gives us an idea of how to implement the API on our site (each library will be different).


// ⭐ Side Note: Global variables in a script can be accessed from other scripts and from the browser itself. So any variable that is Global in any script, will be available to all the other scripts, AS long as their <script> tag is below the script that HAS that global variable in HTML.
        // so here 'script.js' has access to all the Global variables in 'other.js'. BUT 'other.js' does NOT have access to anything from 'script.js' because it appears afterwards. 👇
<script defer src="other.js"></script>
<script defer src="script.js"></script>


'// ******************************'
      // local Storage API

// stores data locally in the browser so that when the user  refreshes the page the data entered is not lost.

  // Only use local Storage to store small amounts of Data NOT large amounts, because Local Storgae is BLOCKING, which will slow down the application.

// syntax --> 
_setLocalStorage() {
    localStorage.setItem(< name >, < string that we want to store which will be associated with the 'name' key in the first parameter >);
  };

// example from Geolocation App --> 
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }


// ⭐ Can see whats stored in the browser in dev tools by going to the 'Application'tab and chosing 'Local Storage' from the left side.


// gets data stored in local storage API (from Geolocation App)
 _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
});



// Deletes data stored in local storage
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

console.log(
  `Type 'app.reset' in the Console to reset all saved workout data. 🐰`
);







'// *****************************************************************'
    '// *****************************************************************'
   // Asynchronous JavaScript - Promises, Async/Await, and AJAX


'// ******************************'
      // Asynchronous JavaScript --> AJAX and APIs

/* Difference between Synchronous and Asynchronous code in JavaScript
  and what is Asynchronous code? */
        [CHECK IMAGES IN 'Asynchronous JavaScript' FOLDER]

/* What are AJAX Calls? (most important use case of Asynchronous JavaScript) */
        [CHECK IMAGES IN 'Asynchronous JavaScript' FOLDER]

/* What is an API and Web APIs? */
        [CHECK IMAGES IN 'Asynchronous JavaScript' FOLDER]


'// ******************************'
      // Making AJAX Calls: 'XMLHttpRequest()' function

  [OLD SCHOOL WAY OF DOING AJAX CALLS]
// In JavaScript there are multiple ways of doing AJAX calls --> 

  // The most old school way of doing an AJAX call which is called the 'XMLHttpRequest()' function --> 

  1. First call the 'XMLHttpRequest()' function with the 'new' keyword and store it in a variable 👇
  
  const request = new XMLHttpRequest();


  2. Second, we need the URL to which we will make the AJAX call 👇
  the 'open()' method takes in the type of request as a first argument, and the second arguments takes in a string containing the URL to which the AJAX call should actually be made.
  [when getting the URL for an API, look for the 'API Endpoint' which is essentially just another name for the URL that we need]
  
  request.open('GET', 'https://restcountries.com/v3/name/{egypt}');

// with this we basically opened a request.


  3. Third, we need to send off the request to the Web Server which contains the API, which then fetches the data in the background 👇
  
  request.send();
// This AJAX call that we just sent off is being done in the background while the rest of the code keeps running, so this is the Asychronous Non-blocking behavior mentioned in the slide pictures notes.

// if we try to read the fetched data in this step 👆, the console.log output will be NOTHING because we have not received the data yet from the web server
console.log(request.responseText); // Output: nothing ⛔


  4. Fourth, register a Call-Back on the 'request' Object for the 'load' event 👇.
//   Once the data is fetched in the background using the 'send()', it will emit the 'load' event which we use 'addEventListener' to wait for that event and as soon as the data arrives, we call the Call-Back function inside the eventListener.
  
  request.addEventListener('load', function() {
    console.log(this.propertyText); // will log the data in JSON format (which is a big string of text) which we need to convert to an actual JavaScript Object. 
    
    const [data] = JSON.parse(this.responseText); // converts the JSON data into an actual JavaScript Object.
    console.log(data); // will log the destructured 'data' Object
  })
  
  
  
'// ******************************'
      // How Requests and responses work on the Web

// A high level overview of how the web actually works behind the scenes, in regards to Requests and Responses. 

  CHECK URL VIDEO FOR EXPLANATION --> 
https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649297#questions


'// ******************************'
      // Sequencing or Chaining AJAX Calls [an AJAX Call that depends on another AJAX Call]
            // CALL-BACK HELL
      // Creating a sequence of AJAX Calls so that they each run only after the AJAX Call before it is done fetching the data.
// In otherwords, so that the second AJAX Call runs only after the first one is finished.


const getCountryAndNeighbor = function (countryName) {
  //* Country 1
  // 'XMLHttpRequest()' function [OLD SCHOOL WAY OF DOING AJAX CALLS]
  const request = new XMLHttpRequest();

  // Open a request
  request.open('GET', `https://restcountries.com/v3/name/{${countryName}}`);

  // Send off request to Web Server
  request.send();

  // AJAX Call - Country 1
  request.addEventListener('load', function () {
    // convert JSON data format from request to a JavaScript Object
    const [data] = JSON.parse(this.responseText);

    countryData(data);

    //******* Country Neighbors (SEQUENCE AJAX Calls)
      // ⭐ Here the SECOND AJAX Call is really dependant on the FIRST AJAX Call because we are firing the SECOND AJAX Call in the FIRST one's eventListener's Call-Back function. 
    if (!data.borders) return;
    const [neighbor1, neighbor2] = data.borders;
    console.log(neighbor1, neighbor2);

    // AJAX Call - First Neighbor Country
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3/alpha/${neighbor1}`);
    request2.send();

    request2.addEventListener('load', function () {
      const dataNeighbor1 = JSON.parse(this.responseText);
      countryData(dataNeighbor1, 'neighbour');
    });

    // AJAX Call - Second Neighbor Country
    const request3 = new XMLHttpRequest();
    request3.open('GET', `https://restcountries.com/v3/alpha/${neighbor2}`);
    request3.send();

    request3.addEventListener('load', function () {
      const dataNeighbor2 = JSON.parse(this.responseText);
      countryData(dataNeighbor2, 'neighbour');
    });
  });
};



// ⭐ CALL-BACK HELL --> is a term for when we have alot of nested Call-Backs, inorder to execute Asynchronous tasks in sequence. 
  // This happens for all Asynchronous tasks which are handled by Call-Backs, and NOT just AJAX Calls --> 

setTimeout(() => {
  console.log('1 second passed!');
  setTimeout(() => {
    console.log('2 seconds passed!');
    setTimeout(() => {
      console.log('3 seconds passed!');
      setTimeout(() => {
        console.log('4 seconds passed!');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// [Call-Back Hell is easy to identify by this triangular shape 👆]

// 🔴 The problem with Call-Back hell is that it makes our code look very MESSY. But even more importantly, it makes our code hard to maintain and very difficult to understand, which as a result will have more bugs.
// 🟠 So an important thing to remember is that --> Code that is hard to understand, is basically bad code because it will have more bugs. Because the harder it is to understand code, the more difficult it will be to add features and more functionality to the application.

 

'// ******************************'
      // PROMISES and the fetch API --> Escaping Call-Back Hell [USE THIS]
        [handling FULLFILED promises]

// PROMISES is a Modern JavaScript ES6 feature that lets us make AJAX Calls and escape Call-Back Hell. As oppose to using the Old School way ('XMLHttpRequest()' function)


// Same example as above 👆 [Replacing the old way of making AJAX Calls ('XMLHttpRequest()' function), with a more Modern way of making AJAX Calls by using the 'Fetch API']

  1. First, use 'fetch()' function and pass in the URL for the API ('API Endpoint') as an argument. Then store the result into a variable.

// Start a request and Store the result in a variable
const request = fetch(`https://restcountries.com/v3/name/{egypt}`);
console.log(request); // immediately returns a 'Promise' as soon as we started the Request

  
// The 'fetch()' function can also take in an Object of Options which we can specify and pass in as an argument, but to make a simple 'GET' request 👆, all we really need is to pass in the URL and thats it.


// 🟢 What is a Promise and Whats the big advantages of using Promises over 'XMLHttpRequest()' function for AJAX Calls? 

[CHECK IMAGES IN 'Asynchronous JavaScript' FOLDER]



'// ******************************'
      // CONSUMING PROMISES 

      [handling FULLFILED promises]
        
const countryData = function (data, className = '') {
  const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flags[0]}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>🗾</span>${(
                  data.area / 1000000
                ).toFixed(1)} million km²</p>
                <p class="country__row"><span>🗣️</span>${
                  Object.values(data.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                  Object.values(data.currencies)[0].name
                }</p>
            </div>
            </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // In this step 👇 the Promise is still pending because the Asynchronous task of getting the data is still running in the background.

  // After the Promise is SETTLED (assuming the settled type is FULFILLED which means that we have a value available to work with) 👇
  // To Handle this FULFILLED state --> we can use the 'then()' method that is available on all Promises. The 'then()' method takes in 2 Call-Back functions as arguments. The first Call-Back executes as soon as the Promise is FULFILLED or as soon as the result is available. This Call-Back function will receive one argument once its called by JavaScript, that argument is the resulting value of the FULFILLED Promise, which is the data retrieved in JSON format.
  // And the second Call-Back function executes if Promise is REJECTED.


  fetch(`https://restcountries.com/v3/name/{${country}}`).then(function (
    response
  ) {
    console.log(response);

    // converting retrieved data from the response from JSON format --> to a JavaScript Object.
    return response.json().then(function (data) {
      console.log(data);
      const [dataObject] = data;
      countryData(dataObject);
    });

    // 👆👆👆👆👆 Need to call the 'json()' method on the Call-Back function's argument, inorder to be able to read the data. 'json()' method is available on all the response Objects that is coming from the 'fetch()' function (so of all the RESOLVED values). 🔴 The problem here is that the this 'json()' method itself is ALSO an Asynchronous function which means that it ALSO returns a new Promise --> so what we need to do here is to 'return' the 'response.json();' (add the 'return' keyword to it). And then use the 'then()' on it as well with a Call-Back function as argument, and this Call-Back function will take in an argument which will contain the data retreived in a JavaScript Object format.
  });
};

getCountryData('egypt');



// 🟢🟢 simplified version of 👆 (without comments)
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(response => response.json())
    .then(data => {
      const [dataObject] = data;
      countryData(dataObject);
    });
};

getCountryData('egypt');



'// ******************************'
      // CHAINING PROMISES --> chaining togetehr 2 sequential AJAX calls

      [handling FULLFILED promises]

                   'This 👇 is a revision of what we did earlier 👆'
// Just like before, we first fetch the data using the Fetch API ('fetch()' method), then use the 'then()' method's  first argument which takes in a Call-Back function in order to pass in an argument inside it which will be the data retrived from the API in JSON format, which we then convert to a JavaScript Object format using the 'json()' method which returns another Promise which we can then use 'then()' on again with another Call-Back function, which takes in an argument which is the retrived data from the API as a JavaScript Object that we can use.

//   ⭐ The 'then()' method ALWAYS returns another Promise, which if we want to chain 2 sequential AJAX calls together can then do the whole proces again of inserting a Call-Back function in that 'then()' method with an argument which will be the data retreived in JSON format which we will the have to use the 'json()' method on and then use the 'then()' method again .......

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(response => response.json()
    .then(data => countryData(data[0]))
  );
};

getCountryData('egypt');



//**  Chaining together 3 sequential AJAX Calls 👇

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(response => response.json())
    .then(data => {
      countryData(data[0]);

      const [neighbor1, neighbor2] = data[0].borders;

      if (!neighbor1 || !neighbor2) return;

      // Neighbor 1
            // ⭐ remember when chaining add the chained 'fetch()' method inside the SECOND 'then()' method's Call Back function.
      return fetch(`https://restcountries.com/v3/alpha/${neighbor1}`)
        .then(response => response.json())
        .then(data => {
          countryData(data[0], 'neighbour');

          // Neighbor 2
          return fetch(`https://restcountries.com/v3/alpha/${neighbor2}`)
            .then(response => response.json())
            .then(data => countryData(data[0], 'neighbour'));
        });
    });
};

getCountryData('United States');

// Instead of the Call-Back hell (which happens from nested Call-Backs, inorder to execute Asynchronous tasks in sequence when using 'XMLHttprequest()' to make AJAX Calls), we have what we call a Flat-Chain of Promises which is very easy to understand and to read.


// ⭐ Summary --> Promises really are an incredibly powerful and elegant solution to handle Asychronous code.




'// ******************************'
      // Handling REJECTED Promises

      
// The *ONLY* way inwhich the 'fetch()' Promise REJECTS, is when the user loses their internet connection. Which we will lhandle in the example below 👇

// There are two ways of handling AJAX Calls fetch REJECTIONS -->

      1. First one is to pass a Second Call-Back funciton into the 'then()' method. So the FIRST Call-Back is always going to be called for the FULLFULLED Promise (so for one that successfully retreived the Data from the Web API), and the SECOND Call-Back is always going to be called for the REJECTED Promise.
      // The REJECTION Call-Back function is going to be called with an argument which is basically the error itself. Handling the Error is also called Catching the error.
        // 🔴 With this way of Handling error we would have to add a second parameter for each Chained AJAX Call as well, which could be annoying
      
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(
      response => response.json(),
      //  🔵 with this we are Handling the error that might occur in this Promise.
      error => console.log(error) // logs the REJECTED Promise's output
    )
    .then(data => {
      countryData(data[0]);

      const [neighbor1, neighbor2] = data[0].borders;

      if (!neighbor1 || !neighbor2) return;

      // Neighbor 1
      return fetch(`https://restcountries.com/v3/alpha/${neighbor1}`)
        .then(
          response => response.json(),
          error => console.log(error) // 🟠 handling an error (Rejected Promise) in a chained AJAX Call
        )
        .then(data => {
          countryData(data[0], 'neighbour');

          // Neighbor 2
          return fetch(`https://restcountries.com/v3/alpha/${neighbor2}`)
            .then(
              response => response.json(),
              error => console.log(error) // 🟠 handling another error (Rejected Promise) in a chained AJAX Call
            )
            .then(data => countryData(data[0], 'neighbour'));
        });
    });
};

getCountryData('United States');


              ['catch()' method]
    2. Second way which is handling error (Rejected Promises) GLOBALLY, instead of having to add a second argument in the 'then()' method for each chained AJAX Call. So with this we ca handle ALL errors no matter where they appear in the chain, right at the end of the chain by adding a 'catch()' method which the same Call-Back function as an argument like we did in the first way of handling Rejected Promises so like this --> ('.catch((error) => console.log(error));')

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(response => response.json())
    .then(data => {
      countryData(data[0]);

      const [neighbor1, neighbor2] = data[0].borders;

      if (!neighbor1 || !neighbor2) return;

      // Neighbor 1
      return fetch(`https://restcountries.com/v3/alpha/${neighbor1}`)
        .then(response => response.json())
        .then(data => {
          countryData(data[0], 'neighbour');

          // Neighbor 2
          return fetch(`https://restcountries.com/v3/alpha/${neighbor2}`)
            .then(response => response.json())
            .then(data => countryData(data[0], 'neighbour'));
        });
    })
    .catch(error => console.log(`⛔ ${error} ⛔`)); // 🔴🟠⭐ handling ALL AJAX Calls errors (Rejected Promises) GLOBALLY [Catching the error]
};

getCountryData('United States');


                [A real world use case of the 'catch()']    [USE THIS 👇👇]
// 🟠🟢🔵 Usually simply logging the error is not enough in a real a application with a real user interface, so instead of just loggin the error message, lets also display an error message for the user to see.

// So along with logging the error to the console, we are als creating a function that will render some kind of error --> 

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(response => response.json())
    .then(data => {
      countryData(data[0]);

      const [neighbor1, neighbor2] = data[0].borders;

      if (!neighbor1 || !neighbor2) return;

      // Neighbor 1
      return fetch(`https://restcountries.com/v3/alpha/${neighbor1}`)
        .then(response => response.json())
        .then(data => {
          countryData(data[0], 'neighbour');

          // Neighbor 2
          return fetch(`https://restcountries.com/v3/alpha/${neighbor2}`)
            .then(response => response.json())
            .then(data => countryData(data[0], 'neighbour'));
        });
    })
    .catch(error => {
      // ⭐ handling ALL AJAX Calls errors (Rejected Promises) GLOBALLY [Catching all errors]
      console.error(`⛔ ${error} ⛔`);
      // the 'error' generated here 👆 is a real JavaScript object, so we can create errors in JavaScript with a Constructor for example just like a 'map()' or a 'set()'. And being that every error generated is a JavaScript Object, that means that it also has properties, and one property we can use on errors in the 'message' property which only prints the error message and not the whole error itself.
      renderError(`Something Went Wrong! 💀⛔ --> ${error.message} `);
    });
};

getCountryData('United States');



// ⭐⭐⭐⭐ So this is how we handle errors happing in Promises in any 'then()' handler, so basically handling any promise rejections no matter where it happens in the chain by using the 'catch()' method at the end of the chain.




// 🐰🐰 There is one more quick method available on all Promises (besides 'then()' and 'catch()' methods) which is the 'finally()' method. 

// The 'finally()' method also takes in a Call-Back function which will ALWAYS be called no matter what happens to the Promise, so no matter if it was FULLFILLED or REJECTED. NOT ALWAYS USEFULL. One usefull case of this methed is to hide a loading spinner for example. These applications show a loading spinner when an Asynchronous application starts and then hides it once the operation completes. And that happens no matter if the operation (Promise) was FULLFILLED or REJECTED.

// ⭐⭐ so the 'then()' method is only called when the Promise is FULLFILLED, while the 'catch()' method is called when the Promise is REJECTED, and the 'finally()' method is always called no matter the Promise was FULLFILLED or REJECTED.




'// ******************************'
      // Throwing Errors Manully 

// so in the same example above, when we insert a name of a country that des not exist, we get back a 404 error. But the important thing to keep in mind is that the fetch function still gets FULLFILLED and is not rejected, so we have to manually make it REJECT --> 

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649335#questions

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/{${country}}`)
    .then(response => {
      console.log(response);
    
      // 🟠🟢🔵 Manually Reject an AJAX request when the inserted country name is not found 👇
      if (!response.ok) {
        //   the 'throw' keyword immediately terminates the current function just like 'return' keyword
        // 🔴 The effect of creating and throwing an error in any 'then()' method, is that the Promise will immediately get REJECTED. Which will propagate all the way down to the 'catch()' method. Rejects the Promise on purpose so that we can handle it down in the chain with the 'catch()' method.
        throw new Error(`Country not found! (${response.status})`);
      }

      return response.json();
    })
    .then(data => {
      countryData(data[0]);

      const [neighbor1, neighbor2] = data[0].borders;

      if (!neighbor1 || !neighbor2) return;

      // Neighbor 1
      return fetch(`https://restcountries.com/v3/alpha/${neighbor1}`)
        .then(response => response.json())
        .then(data => {
          countryData(data[0], 'neighbour');

          // Neighbor 2
          return fetch(`https://restcountries.com/v3/alpha/${neighbor2}`)
            .then(response => response.json())
            .then(data => countryData(data[0], 'neighbour'));
        });
    })
    .catch(error =>
      // ⭐ handling ALL AJAX Calls errors (Rejected Promises) GLOBALLY [Catching all errors]
      console.error(`⛔ ${error} ⛔`)
    )
    .finally(() => (countriesContainer.style.opacity = 1)); // fades in the container no matter of the state of the Promise
};

getCountryData('United States');



// So why ever handle errors?

/* First, handling these errors is the only way inwhich we can actually display an error message to the user by using the 'catch()' method to handle that error.
But even more importantly, it is just bad practice to leave Rejected promises hangin around without handling them. So always use 'catch()' method to handle them, and if necessary use 'finally()' to handle them. */



//  RECAP --> Whenever we want to create some error that we want to handle in the 'catch()' method, all we need to do is to 'throw new Error('...')' in each chained AJAX Call to create different error for each one. And remember that throwing an error immediatly rejects the promise, which will then propagate down the chain until it gets caught in the 'catch()' method.




'// ******************************'
        // Challenge #1 - from Asynchronous JavaScript section

// renders a country based on GPS coordinates (using geocode coordinates API)

/* This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. */

const whereAmI = function (lat, lng) {
  // reverse geocoding (which mean to convert coordinates to a meaningful location, like a city and country name.)
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `You're internet speed is way too fast. GAAAAAD DAAAMMNN!! 🚄 (${response.status})`
        );
      }
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.state}, ${data.country}`);
      console.log(data);
      getCountryData(data.country);
    })
    .catch(error => console.log(`⛔ ${error} ⛔`));
};

whereAmI(-33.933, 18.474);



'// ******************************'
        // How Asynchronous JavaScript works behind the scenes - the EVENT LOOP
      
      [check slide notes in 'Asynchronous JavaScript' folder]

video link --->  https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649347#questions


// 🟢🟠🔵 An exmaple of what we learned from the 'How Asynchronous JavaScript works behind the scenes' slides -->
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(resolve => console.log(resolve));
console.log('Test end');

/* from what we learned from the 'How Asynchronous JavaScript works behind the scenes' slides the code above 👆 will log to the console in this order
Outputs --> 
            1. Test start
            2. Test End
            3. Resolved promise 1
            4. 0 sec timer */

// Side Not: 'Promise.resolve('Resolved promise 1')' immediatly resovles the Promise. Will be explained in the next section.


// 🟢🟠🔵 Another example that tests what was mentioned in the slides, which is that JavaScript itself has no sense of time and that timers are not guaranteed in JavaScript because their Call-Back functions still have to wait in line in the CallBack Queue for its turn to come after all the Call-Back functions before it gets executed, inorder for it to be transfered by the Event Loop to the Call-Stack (when its empty [excluding the Global Execution Context]) and thus get executed. Remember also that all the Call-Back functions in the  MicroTasks Queue has priority over the Call-Back Queue and thus the timer would have to wait for the Promises' Call-Back functions (MicroTasks) in the MicroTasks Queue, inorder for it to finally get executed -->

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(resolve => console.log(resolve));
// This is a heavy task that will take time to execute
Promise.resolve('Resolved promise 2').then(resolve => {
  for (let i = 0; i < 999999; i++) {
    console.log(i);
  }
  console.log(resolve);
});
console.log('Test end');

/* the 'setTimeout()' will be delayed and not run after 0 seconds because its Call-Back function is waiting in the CallBack Queue for the Promise's heavy Call-Back function (MicroTask) to get executed first, which takes alot of time because its a heavy Call-Back function.*/

// ⭐⭐⭐ This means that we cant do high precision things using JavaScript Timers, so just keep this in mind whenever we are working with Promises (so basically MicroTasks and Timers at the same time)




'// ******************************'
        // Creating/Building our own Promises from scratch

// Up unitl now we have been consuming Promises 👆, but here 👇 we will build our own Promise for the first time -->

// Lottery Example where a FULLFILLED Promise means to win the Lottery while a REJECTED Promise means to lose the lottery.

// We start by creating a new Promise (Object/Instance) using the Promise Constructor function and storeit in a variable. What this means is that Promises are essentially just a special kind of Object in JavaScript.
// The Promise Constructor takes exactly one argument, which is a Call-Back function that is called the 'Executor Function'. As soon as the Promise Constructor function runs, it will execute this 'Executor Function' in its parameter, that we passed in, and as it executes that 'Executor Function' it will do so by passing in two other arguments. And those arguments are the 'resolve' and the 'reject' functions. 

// The 'Executor Function' that we specified is the function that will contain the Asynchronous behavior that we are trying to handle with the Promise. So this 'Executor Function' should eventually produce a resolved value, which is the value that is basically going to be the future value of the Promise.

// Like so -->

const lotteryPromise = new Promise(function(resolve, reject) {
  if (Math.Random() >= 0.5) {
    resolve('You WIN 🤑💰'); 
  } else {
    reject('You LOSE! LUL 🤣🧺')
  }
    // this is the 'resolve()' function that was passed into the 'Executor Function' as a paramater. So in this situation here 👆 we say that we win the Lottery, ie: a FULFILLED Promise, and in order to set the Promise as FULFILLED, we use the 'resolve()' Call-Back function.
          // ⭐ So basically calling the 'resolve()' function like this will mark this Promise as a FULLFILLED Promise (which we can also say that its a resolved Promise as the name of the function inclines).
    // 🔵 Now into the *'resolve()'* Call-Back function itself we pass the FULLFULLED value of the Promise so that it can later be consumed with the 'then()' method. So in other words, whatever value we pass into the 'resolve()' function here, is going to be the result of the Promise that will be available in the 'then()' method/handler.
    // 🟢 On the otherhand, the 'reject()' Call-Back function will mark this Promise as a REJECTED Promise. And into that 'reject()' function we pass in the error message that we later handle in the 'catch()' method/handler.
});

// ⭐⭐⭐ So the 'resolve()' and reject()' functions in the 'Executor function's' parameter, are both used to mark the Promise as either FULFILLED or REJECTED, when the 'Executor function' is called by the Promise Constructor as soon as it runs (ie:immediatly). 🟠 So we always need to make sure that the Promise ends up in one of these states (FULFILLED or REJECTED).

//👇 So 'lotteryPromise' is going to be a Promise Object, which means that we can call the 'then()' method on it.
// the 'then()' method takes in a Call-Back function which is going to be called with the resolved value of the Promise.
lotteryPromise.then(response => console.log(response)).catch(error => console.error(error)); 
// 👆 'response' will be logged in the case that the Promise is FULLFILLED.
   // 👆 'error' will be logged in the case that the Promise is REJECTED.



// ****** Making the example above 👆 Asynchronous by adding a simple Timer (which is the whole point of Promises in the first place, which is to run Asynchronously)

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery Draw Started 👺');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win! 💰');
    } else {
      // creating a new error Object using ('new Error(..)')
      reject(new Error('You Lose! 🤣🧺'));
    }
  }, 2000);
});

lotteryPromise
  .then(response => console.log(response))
  .catch(error => console.dir(error));

// 👆 So this is how we Encapsulate any Asynchronous behavior into a Promise, and then consume the Promise Object using the 'then()' and 'catch()' methods/handler from the outside.

// ******
// 🟢🔵🐫 Now in practice, most of the time all we actually do is to CONSUME promises, and we ussually only build Promises to basically wrap old Call-Back based functions into Promises, which is a process called PROMISIFYING.
      // So PROMISIFYING means to convert Call-Back based Asychronous behavior to Promise based.

// Example PROMISIFYING the 'setTimeout()' from the above example 👆 function --> (Real world example)

//  so inside this function we will create and then return the Promise which will Encapsulate the Asynchronous operation even further 👇 (which is ussually what we always do in practice)

// 🟢 In this case here 👇, we dont even need the 'reject()' Call-Back function and that because its actually impossible for the Timer to fail, therefore we will never mark this Promise as Rejected.
const wait = function (seconds) {
  // we're not going to pass any resolve value into the resolve Call-Back function 👇, because its actually not mandatory and we dont need to wait for a value here in the case of the Timer. So basically all we want to do here is make our code WAIT.
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// consuming the Promise. This will now create a Promise that will wait for 2 seconds, and then after these two seconds it will resolve.
// we are not going to receive any resolved value in the 'then()' method, so we leave it's parameter empty.
wait(2).then(() => console.log('I waited for 2 seconds')); // ⭐ TAKE AWAY --> So in 'then()' methods Call-Back function's code block, we can run any code that we want to be executed after 2 seconds.

// waiting 1 more second by returning a new promise 👇
wait(2)
  .then(() => {
    console.log('waiting for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('Waited for 3 seconds'));

// With this 👆, we now have a nice chain of Asynchronous behavior that happens in a sequence, and all without the Call-Back hell.

// Call-Back Hell 👇👇👇
setTimeout(() => {
  console.log('1 second passed!');
  setTimeout(() => {
    console.log('2 seconds passed!');
    setTimeout(() => {
      console.log('3 seconds passed!');
      setTimeout(() => {
        console.log('4 seconds passed!');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// [Call-Back Hell is easy to identify by this triangular shape 👆]


// Nice Sequence af Asynchronous behavior instead of Call-Back Hell 👇👇👇
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
  });


// ********************* A way to easily create a FULLFILLED or a REJECTED Promise, immediatly --> 

Promise.resolve('Pass in resolved value here').then((x) => console.log(x)); // this is a static method on the Promise Constructor. The difference is that this one will resolve IMMEDIATLY.

Promise.reject(new Error('Pass in rejected value here')).catch((x) => console.error(x));



'// ******************************'
        // Promisifying the Geolocation API from Challenge #1 (Another example of Promisifying)


// Promisifying a Call-Back based API to a Promise based API 👇👇👇👇
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // Gets the user's current position. This is Asynchronous behavior which means that the code below it is not blocked.
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error)
    );

    // ⭐ this 👇is the same as this 👆 ⭐
    // navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(response => console.log(response))
  .catch(error => console.error(error));

console.log('You got this man. You are a beast 😡🏋️‍♂️😤🐍'); // This will log before the Geolocation API's output logs (ie: while the Geolocation API is fetching the data [my location]), which proves that the Geolocation API is Asynchronous, so it offloaded its work to the Web API's environment of the browser while the rest of the code below it got executed.

// from coding challenge #1 👇👇
const whereAmI = function () {
  getPosition()
    .then(response => {
      const { latitude: lat, longitude: lng } = response.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `You're internet speed is way too fast. GAAAAAD DAAAMMNN!! 🚄 (${response.status})`
        );
      }
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.state}, ${data.country}`);
      console.log(data);
      getCountryData(data.country);
    })
    .catch(error => console.log(`⛔ ${error} ⛔`));
};

whereAmI();

// Summary --> with this we saw that we can Promisify all kinds of Asynchronous stuff in JavaScript. Usually, very soon it becomes very difficult to work with callbacks due to callback nesting or callback hells, which Promisyfying helps us prevent.



'// ******************************'
        // Challenge #2 (Difficult)

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let image;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      document.querySelector('.images').append(image);
      resolve(console.log(image));
    });

    image.addEventListener('error', function (event) {
      reject(new Error('Image not Found! ⛔'));
    });
  });
};

createImage('/img/img-1.jpg')
  .then(() => {
    console.log('First Image loaded 📷');
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    console.log('Second Image loaded 📷');
    createImage('/img/img-2.jpg');
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    console.log('Third Image loaded 📷');
    createImage('/img/img-3.jpg');
    return wait(2);
  })
  .then(() => (image.style.display = 'none'))
  .catch(error => console.error(error));




'// ******************************'
        // Consuming Promises with ASYNC/AWAIT  [🌟 USE THIS, instead of 👆]

// Since ES2017, there is an easier and better way to consume Promises called ASYNC/AWAIT.

1. We start by creating a special kind of function, which is an ASYNC function.
    by simply adding the 'async' keyword infront of the function. 
    // ⭐ So this function is now an Asynchronous function. So basically a function that will keep running in the background (which is the Web API Environment) while performing the code thats inside of it. Then when this funciton is done, it automatically returns a Promise. 👇
    
    const whereAmI = async function(country) {
      
    }

2. Inside the 'async' function, we can have one or more 'await' statements. And after the 'await' keyword, we need a Promise. 
// ⭐ So the 'await' keyword basically awaits for the result of the Promise which is fetched using the 'fetch API' ('fetch()'). So basically 'await' keyword will stop the code execution at the point it is used in the function until the Promise is Fullfilled, so until the data has been fetched in this case.

// Stopping the execution in an 'async' funciton is NOT a problem (won't affect execution of code underneath the 'async' funciton), because the whole 'async' function is running Asynchronously in the background, therefore it is not blocking the main thread of execution, ie: not blocking the Call-Stack.
    //⭐⭐ And this is what is so special about ASYNC/AWAIT. Which is the fact that it makes our code look like regular Synchronous code, while behind the scenes, everything is in fact Asynchronous.

    const whereAmI = async function(country) {
      await fetch(`https://restcountries.com/v3/name/{${country}}`)
    }

3. Then as soon as the Promise from the 'fetch()' method/handler is resolved (ie: data is fetched successfully), then the value of the whole await statement/expression is going to be the resolved value of the Promise, and so we can simply store that into a variable.

    const whereAmI = async function (country) {
  const response = await fetch(
    `https://restcountries.com/v3/name/{${country}}`
  );
  console.log(response);
};

whereAmI('Egypt');

console.log('This will log BEFORE the Async function'); // This log is just to proof that the async function is Asynchronous and runs Asynchronously in the background (Web API) without blocking the main thread and thus will not block any code underneath it (ie: this console.log)

// 🐍 So by using Asyn/Await our Asynchronous code looks and feels liek Synchronous code. So before we had to mess with Call-Back functions and consume Promises using the 'then()' method, but now with Async/Await that is completely unneccessary, so we simply use the 'fetch()' method/handler and then use the 'await' keyword to basically wait for the value of the Promise is returned, and then just store that value to a variable.



// 🟠🟢 So Async/Await is simply syntactic sugar over the 'then()' method in Promises. So ofcourse behind the scenes we are still using Promises. We are simply using a different way of consuming them.

const whereAmI = async function (country) {
  const response = await fetch(
    `https://restcountries.com/v3/name/{${country}}`
  );
  console.log(response);
  
// So this 👆, is exactly the same as doing it the OLD way 👇
  fetch(`https://restcountries.com/v3/name/{${country}}`).then((response) => console.log(response));
};

whereAmI('Egypt');


// 🟠🟢 Recreating the same country example using Async/Await
// ES2017 Async/Await

const getCountryData = async function (country) {
  // rendering main Country
  const response = await fetch(
    `https://restcountries.com/v3/name/{${country}}`
  );

  // remember 'response.json()' returns a new Promise, so we just have to consume it again and store it in a new variable. And thats it.
  const [data] = await response.json();
  console.log(data);
  countryData(data);

  // rendering neighbors
  const [neighbor1, neighbor2] = data.borders;
  console.log(neighbor1, neighbor2);

  // Neighbor1
  const neighbor1Response = await fetch(
    `https://restcountries.com/v3/alpha/${neighbor1}`
  );
  const [neighbor1Data] = await neighbor1Response.json();
  countryData(neighbor1Data, 'neighbour');

  //   Neighbor 2
  const neighbor2Response = await fetch(
    `https://restcountries.com/v3/alpha/${neighbor2}`
  );
  const [neighbor2Data] = await neighbor2Response.json();
  countryData(neighbor2Data, 'neighbour');
};

getCountryData('United States');





'// ******************************'
        // Error handling with Async/Await, using 'Try...Catch' statement


// With Async/Await we cant use the 'catch()' method that we used in Promises, because we cant really attach it anywhere (used to be attached to the 'then()' method). Instead weuse something called the 'Try...Catch' statement.

// 'Try...Catch' statement is actually use in regular JavaScript as well. So its been in the language since the begninning. It has nothing to do with Async/Await, but we can still use it to catch error in 'Async' functions.

// Simple example 👇
// so we can wrap all of our code in a 'try' block and so JavaScript will then basically try to execute this code just as normal code. 
        // Then the 'catch' block will have access to whatever error occured in the 'try' block


try {
  let y = 1;
  const x = 2;
  x = 3; // will give us an error because we cant reassign a 'const' variable.
} catch(error) {
  console.log(error.message); // 🐰 Side note --> ALL errors has the 'message' property.
}

// 👆👆👆👆 Doesn't give us an error in the console, so the script no longer dies or stop executing the rest of the code, and instead we can simply catch the error and then handle it accordingly.


// 🍁 Handling 'async' functions error using 'try...Catch' statement 👇 (same country example)

const getCountryData = async function (country) {
  // 'try...catch' statement
  try {
    // rendering main Country
    const response = await fetch(
      `https://restcountries.com/v3/name/{${country}}`
    );

    // manually creating an error to handle any errors in the 'fetch()' method to stop execution of the rest of the code.
    // Remember that 'fetch()' promises only gets rejected when the user has no internet connection.
    if (!response.ok) {
      throw new Error('Problem fetching Country Data!! 🐍');
    }

    const [data] = await response.json();
    console.log(data);
    countryData(data);

    // rendering neighbors
    const [neighbor1, neighbor2] = data.borders;

    // Neighbor1
    const neighbor1Response = await fetch(
      `https://restcountries.com/v3/alpha/${neighbor1}`
    );

    if (!neighbor1Response.ok)
      throw new Error('Problem fetching Neighbor1 Data!!');

    const [neighbor1Data] = await neighbor1Response.json();
    countryData(neighbor1Data, 'neighbour');

    //   Neighbor 2
    const neighbor2Response = await fetch(
      `https://restcountries.com/v3/alpha/${neighbor2}`
    );

    if (!neighbor2Response.ok)
      throw new Error('Problem fetching Neighbor2 Data!!');

    const [neighbor2Data] = await neighbor2Response.json();
    countryData(neighbor2Data, 'neighbour');
  } catch (error) {
    console.error(`⛔ ${error} ⛔`);
    renderError(`⛔ Something went Wrong!! 👺 (${error.message}) ⛔`);
  }
};

getCountryData('United States');




'// ******************************'
        // Returning Values from Async functions

video link --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649389#questions


const getCountry = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3/name/{${country}}`
    );
    //console.log(response); // remember that 'fetch()' returns the fetched data from the Web API is JSON format which we then have to convert to a JavaScript Object using 'response.json()'.

    // 'response.json()' returns a Promise which we then consume using the 'await' keyword
    const [data] = await response.json();
    renderCountry(data);

    // an async function returns a Promise, and its fulfilled value is going to be this string here, because that is the value that we return from the async function 👇
    return `You are in ${data.name.common}`;
  } catch (error) {
    console.error(`⛔ ${error} ⛔`);
  }
};

// Mixing the philosphy of Async/await and handling Promises using 'then()' and 'catch()' (the old way) --> BAAAADDDD 😟 preference
console.log('1: Will log first');
// Successfully returning a value from the async function 👇
// remember 'getCountry('Egypt')' returns a promise with a Fullfilled value of the returned string/response, thus we can log or do something with that returned string/response using the 'then()' method.
getCountry('Egypt')
  .then(response => console.log(`2: ${response}`))
  .catch(error => console.error(error))
  .finally(() => console.log('3: Will log last'));

// returning value while only using Async/Await... same output as above but only using async/await
// ⛔  await can ONLYbe used inside an async function
// using immediately invoked function expression, this is the only use case for it
(async function () {
  console.log('1: Will log first');
  try {
    const response = await getCountry('Egypt');
    console.log(`2: ${response}`);
  } catch (error) {
    console.error(error);
  }
  console.log('3: Will log last');
})();






'// ******************************'
        // Returning Promises in Parallel using 'Promise.all()' combinator function.

// ⭐ Lets us do multiple Asynchronous operations at the same time, and operations that dont depend on one another then we should ALWAYS runc them in parallel by using 'Promise.all()' combinator function, inorder to improve performance.
        // 'Promise.All()' is called the combinator function because it allows us to combine multiple functions.

// Imagine that we wanted to get some data about three countries at the same time, but the order inwhich the data arrives does not matter.

// An async function that will take in three countries, and wil log the capital cities of these three countries as an array.
const capitalCities = async function (country1, country2, country3) {
  // in async functions, we always really need to wrap our code in a 'try...catch' statement.
  try {
    const capitalsArray = [];

          // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // [RUNNING IN SEQUENCE] 🟠 🟢 With this all 3 countries get their data fetched in sequence, one after the other 👇
    // country 1
    const response1 = await fetch(
      `https://restcountries.com/v3/name/{${country1}}`
    );
    const [data1] = await response1.json();
    capitalsArray.push(data1.capital[0]);

    // Country 2
    const response2 = await fetch(
      `https://restcountries.com/v3/name/{${country2}}`
    );
    const [data2] = await response2.json();
    capitalsArray.push(data2.capital[0]);

    // Country 3
    const response3 = await fetch(
      `https://restcountries.com/v3/name/{${country3}}`
    );
    const [data3] = await response3.json();
    capitalsArray.push(data3.capital[0]);

        // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    //[RUNNING IN ASYNCHRONOUSLY, all at once] 🟢🟠 With this all 3 countries get their data fetched in parallel to each other, so all at the same time which lets us save valuable loading time 👇
    // inorder to do that--> we use the 'Promise.all()' [which returns a NEW PROMISE] combination function which is like a helper function on the Promise constructor function, which means its a Static method.
    // the 'all()' function takes in an array of promises and it will return a new Promise, which will then run all the promises in the array ⭐AT THE SAME TIME⭐.
    // check the 'network' tab in devTool in chrome to see that they all load at the same time. Unlike 👆
    // one thing to keep in mind when using 'Promise.all()', is that if one of the Promises rejects then the whole 'Promise.all()' also rejects as well. So we say that 'Promise.all()' short circuits when one Promise rejects.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3/name/{${country1}}`),
      getJSON(`https://restcountries.com/v3/name/{${country2}}`),
      getJSON(`https://restcountries.com/v3/name/{${country3}}`),
    ]);

    console.log(data.map(array => array[0].capital[0]));
    console.log(capitalsArray);
  } catch (error) {
    console.error(`⛔ ${error} ⛔`);
  }
};

capitalCities('Egypt', 'Russia', 'Japan');


'// ******************************'
        // Other Promise Combinator functions --> 'Promice.race()', 'Promise.allSettled()', and 'Promise.any()'

// Remember combinator functions allows us to combine multiple functions.

//  **** 'Promice.race()' [very usefull in the real world to prevent against never ending running Promises]
// Recieves an array of Promises as an argument and also returns a Promise.
// 🟢 The Promise returned by 'Promice.race()', is settled as soon as one of the input Promises, in the array argument, is settled. Settled simply means that a value is available (doesn't matter if the Promise got rejected or Fullfilled because either way the Promise still returns a value).

// In short --> in 'Promice.race()' the first settled Promise wins the race.

(async function () {
  const [response] = await Promise.race([
    getJSON(`https://restcountries.com/v3/name/{egypt}`),
    getJSON(`https://restcountries.com/v3/name/{russia}`),
    getJSON(`https://restcountries.com/v3/name/{japan}`),
  ]);
  console.log(response);
})();

// now all three Promises in the array argument will basically race against each other like in a real race to see who gets settled first. If the winning Promise is then a Fulfilled Promise, then Fulfillment value of the 'Promise.race()' combinator function is going to be the fulfillment value of the winning Promise in the race (out of the three Promises in the argument array).

// so everytime we refresh we're likely to get a different output different Promises will have a value faster than the others

// just keep in mind that a Promise that gets rejected can also win the race, which is why we say that 'Promise.race()' shortcircuits whenever one of the Promises gets settled.


// 🟢🟠🔵 A special timeout Promise that automatically rejects after sometime has passed 👇
const timeout = function (seconds) {
  return new Promise(function (_resolve, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, seconds * 1000);
  });
};

// if the timer happens first then 'Promise.race()' will be rejected, which will abort the fetch method
Promise.race([
  getJSON(`https://restcountries.com/v3/name/{egypt}`),
  timeout(0.1),
])
  .then(response => console.log(response))
  .catch(error => console.error(error));



//  **** 'Promise.allSettled()' (ES2020)

// Also Recieves an array of Promises as an argument but returns an array of all the settled Promise. Never shortcircuits. While 'Promise.all()' shortcicuits if one of the Promises in its Array argument is Rejected.

Promise.allSettled([
  Promise.resolve('Resolved!'),
  Promise.reject('Rejected!'),
  Promise.resolve('Resolved!'),
]).then(response => console.log(response));

// we get three results even tho oneof them rejected 👆 


//  **** 'Promise.any()' (ES2021)

// Also Recieves an array of multiple Promises as an argument and returns the FIRST fullfilled Promise while ignoring all rejected Promises. So the result of 'Promise.any()' is always going to be a Fullfilled Promise, unless al of them rejects.


Promise.any([
  Promise.resolve('Resolved!'),
  Promise.reject('Rejected!'),
  Promise.resolve('Resolved!'),
]).then(response => console.log(response));




'// ******************************'
          // Challenge #3 [FINAL CHALLENGE OF THE COURSE 💃]

let image;

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      document.querySelector('.images').append(this);
      resolve(this);
    });

    image.addEventListener('error', function () {
      reject(console.error(error));
    });
  });
};

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function () {
  try {
    //   load image 1
    const image = await createImage('/img/img-1.jpg');
    await wait(2);
    image.style.display = 'none';

    // load image 2
    await wait(2);
    const image2 = await createImage('/img/img-2.jpg');
    await wait(2);
    image2.style.display = 'none';

    // load image 3
    await wait(2);
    const image3 = await createImage('/img/img-3.jpg');
    await wait(2);
    image3.style.display = 'none';
  } catch (error) {
    console.error(`⛔${error}⛔`);
  }
};

// loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsElements = await Promise.all(imgs);
    console.log(imgsElements);

    imgsElements.forEach(imgElement => {
      console.log(imgElement);
      return imgElement.classList.add('parallel');
    });
  } catch (error) {
    console.log(`⛔${error}⛔`);
  }
};

loadAll(['/img/img-1.jpg', '/img/img-2.jpg', '/img/img-3.jpg']);




'// *************************************************'
        '// *************************************************'
          // Modern JavaScript Development Process: Modules, Tooling and Functional [LAST SECTION OF THE COURSE 💃💃💃💃💃💃💃]


'// *************************************'
      // Overview of Modern JavaScript Development 

// basically how we write Javascipt today

// video URL --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649441#questions

[Look at picture slide in 'Modern JavaScript App Development Process' folder]


'// *************************************'
      // An Overview of ES6 Modules in JavaScript 

// What are Modules and how do they work behind the scenes?

[Look at picture slide in 'Modern JavaScript App Development Process' folder]

// Video URL --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649453#questions


'// *************************************'
      // Exporting and Importing values in ES6 Modules [Native Modules]

1. When creating a new ES6 Module, we simply have to create a new file. (Module file names are Conventionaly in camelCase)  ⭐⭐⭐⭐⭐


// *******
// 'script.js' file  // Importing Module
// we can change the name of imported variables like so 'totalPrice as price' 👇
import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';

console.log('Importing Module');
addToCart('bread', 5);
console.log(price);
console.log(quantity);

// 'Named imports' 👇👇👇
// We can even import all the exports of a Module, at the same time, like so 👇 ('*' means everything, and then give it any name with the first letter capital, which is the convention when we import everything into an Object like so 👇)
// ⭐ This will create an OBJECT containing everything that is exported from the specified module.
// This will basically create a namespace for all of the values exported from that module.
import * as ShoppingCart from './shoppingCart.js'; 🟩🟩🟩🟩🟩🟩🟩🟩

// then this is how we use something that was exported from './shoppingCart.js', just like as if it was an object 👇👇👇👇
console.log(ShoppingCart);
console.log(ShoppingCart.quantity);
ShoppingCart.addToCart('bread', 6);

// 'Default imports'
// when importing 'Default exports' we can give it any name we want
import add from './shoppingCart.js';
add('pizza', 3);
// *******

// *******
// 'shoppingCart.js' file  // Exporting Module

import './script.js';
/* 1. 'import' keyword, adn then a string with the location of the Module we are importing from.
   2. ⭐⭐⭐ './' means the current location (ie: this folder that we are in)
   3. ES6 Modules work without the '.js' at the end of the file's location, it automatically omits it. (we dont need it)
   4. 🐫 Remember that when the JavaScript file that we are importing from, have to have a 'type' attribute with a value of 'Module' in its HTML 'script' tag. (ie:                       '<script defer type="module" src="script.js"></script>'). [ACTUALLY IT WORKS WITHOUT THE 'type="module"', maybe its a new feature in JavaScript]
   5. We didnt use 'strict mode' here because as mentuioned in slides notes, all Modules are executed in 'strict mode' by default. */

// ⭐ 'Exporting Module' from 'script.js' (the file we are exporting from ) is logged first to the console, which means that code in Exported Modules is executed BEFORE code in files that are importing from these Modules. (ie: code in 'script.js' will be executed BEFORE code in this file)

console.log('Exporting Module');

//👇👇👇 Exporting and Importing variables between Modules
// variables that are declared inside a Module, are scoped inside that module. Which means that they can only used in that Module, or are Private inside that Module. Unlike regular JavaScript scripts which would put Global Variables in the Global Scope and thus they can be used by any other script.
const shippingCost = 10;
const cart = [];

// If we wanted to use these variables 👆 in other Modules, we would have to use 'Exports'
// 🟢🟢 In ES6 Modules, there are two types of 'Exports' --> 'Named Exports' and 'Default Exports'
// ------ 'Named Exports' --> is actually the simplest way of exporting something from a Module, because all we have to do is to put 'export' infront of anything that we want to export. Like so:
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart 🥽`);
};

// 👆👆 this creates a 'Named Export' form this module 👆👆  which then we can import in another module like so: 'import {addToCart} from './shoppingCart.js';'

// 🔴 Keep in mind that 'export' always need to be in Top-Level code, so it wouldnt work if it was in an if-else statement

// Exporting multiple things  from a Module using 'Named exports' which is actually the main use case of 'Named exports'. So basically when we want to export multiple things. Like so:
const totalPrice = 323;
const totalQuantity = 26;
// 👆👆 Exporting these variables at the same time using 'Named exports' by using 'export {totalPrice, quantity}' 👇👇
// We can also change the name of the exported variable like so 👇
export { totalPrice, totalQuantity as quantity };

// 'Default exports'
// We usually use 'Default exports' when we only want to export one thing per module. Which is the reason why they are called default. Like so --> WE ONLY EXPORT THE VALUE ITSELF NOT THE VARIABLE, WHEN USING 'Default exports'
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart 🥽`);
}
// *******

// 🐰🐍 Side note to remember from slide notes, is that Imports are a live connection to exports, it DOES NOT create copies. IMPORTS ARE NOT COMPIES OF THE EXPORTS, THEY HAVE A LIVE CONNECTION (they point to the same place in memory)

// ⭐⭐ ANOTHER IMPORTANT NOTE: We cannot access anything from Modules in the console because everything in a Module is that PRIVATE to that very Module.




'// *************************************'
      // The Module Pattern - The OLD way of implementing Modules in JavaScript before ES6 Modules.

// So as in ES6 Modules, the main goal of the Module Pattern is to encapsulate functionality to have private data and to expose a Public API.
      // And the best way to acheive that is to use functions because functions give us Private data by default and allows us to return values, which can be our Public API.

// Implementation of a Module Pattern --> 

// We ussually use an IFFY (Immediatly Invoked Function Expression) because we dont want to resuse the Module Pattern code by running it multiple times, we just want to create a scope and return data just once.


const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 239;
  const totalQuantity = 26;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart 🍕`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier! 🛒`);
  };

  // return a Public API, by creating an object of the stuff that we want to make public.
  return { addToCart, orderStock, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.shippingCost); // Output: undefined (because we didnt return that variable in the IFFY and thus they are Private and not accessible from the outside )


// ⭐⭐ The reason to why we able to manipulte the 'cart' array after the IFFY got executed is due to CLOSURES, which allows a function to have access to all the variables that were present at its birthplace. Never loses connection to the variables in its birth place scope.


// 👆👆👆👆 So this is how developers used to create Modules using the Module Pattern, before ES6 Modules feature existed. The problem with this is that if we wanted one Module per file then we would have to create different script and link all of them in the HTML file, which creates problems because we have to be carefull with the order inwhich we declare them in HTML and we wouldnt be able to bundle them together using the Module Bundler.




'// *************************************'
      // CommonJS Module and AMD Modules --> other Module systems that have been used by JavaScript in the past. They were not Native JavaScript so they relied on some external implementations.


// CommonJS Modules are important because they have been used in Node.js for almost all of its existence, only very recently that ES6 Modules have actually been implemented in NodeJS.

// All the Modules in the NPM repository, still use CommonJS Module system and the reason for that is that NPM was originally only intended for NodeJS which uses CommonJS, only later did NPM become the standard repository for the whole JavaScript world.

// This is what CommonJS looks like (this wont work in the browser but it will WORK in NodeJS) --> 

// Just like in ES6 Modules, in CommonJS one file is one Module.

// Exporting in NodeJS using CommonJS modules
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart 🍕`);
  };

// Importing in NodeJS using CommonJS modules
const { addToCart } = require('./shoppingCart.js');





'// *************************************'
      // Inroduction to NPM (Node Package Manager)

// NPM is a software on our computer and a package repository.

// Why do we need NPM, so a way of managing packages/dependencies in our project? 

Link --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649495#questions

// **** Using the NPM software 👇👇👇

1. We start by checking if we have NPM installed, by using the Command Line and typing --> 'npm -v' [checks for the version]
      if we get an error then we dont have it installed. Go here to install --> https://nodejs.org/en/

2. In each project inwhich we want to use npm, we need to first initialise it by typing 'npm init' in the Command line at the project's directory.
 
3. It will then ask us a some question in order to create a package.json file.
(just use defaults or write something for these question if you want).
After questions, a 'package.json' file is created in the project's directory.
The 'package.json' file stores the entire configuration of our project

4. Installing a library using npm --> using 'npm install {name of package}' or 'npm i {name of package}'
Check the libraries's documentation for the name of the package to install the library using npm. This fetches a local copy of the library, instead of adding the script tag to the HTML file.

5. This will then create a folder for this library in our directory in the 'Node Modules' folder that was also created when we installed the library/package. 
All packages we install will get stored in the 'Node Modules' folder.

6. If we wanted to use this library, it wouldnt be easy without the Module bundler because this library most probably uses the CommonJS module system. So we cannot directly import it into our code. ⭐ So we cant use CommonJS modules without a Module Bundler.
Instead look for packages names that end with '-es' in libraries documentations, which means that they use ES6 Modules and thus does not need a Module Bundler. (ie: 'npm i lodash-es')

// 🔴 VERY IMPORTANT 🔴 --> whenever we want to copy our project to another computer, share it with another developer, or even check it to a version control like git, we should *NEVER EVER* include the 'Node Modules' folder, because there is no reason to beacuse all of these files are already at npm and it will be really really huge especially in real world projects.
So if we copy a project without the 'Node Modules' folder, we can install all of the packages inside it by using 'npm i' in the command line which will install all the 'dependencies' packages in the 'package.json' file.




'// *************************************'
      // Bundling with PARCEL and NPM scripts

// Parcel is way easier than WebPack and doesnt need any configuration. Webpack is more popular tho especially with React.

// LOCAL INSTALLATION
1. Install Parcel with npm -->
// Parcel is a different dependency, so we have to include '--save-dev'. Its a devdependency which is basically like a tool that we need to build our application, but its not a dependency that we actually include in our code. Simply a tool that we can use to develop our project.
// Therfore it appears in a new field in the 'package.json' file called 'devdependencies'.
command line --> 'npm i parcel --save-dev'


2. Start using parcel using the Terminal -->
// 🟠 One way is to use 'npx parcel {entry point}' (npx is an application built into npm). [THIS WAY IS NOT USED IN PRACTICE]
so in the command line --> 'npx parcel index.html' // (the option that we pass into parcel as the entry point is 'index.html' because that is where we include our JavaScript script (ie: 'script.js')).

3. Parcel simply creates a regular script, with all the modules that we had, and that is important because older browsers do not support Modules.
Parcel then creates a 'dist' folder which stands for distribution because it is this folder that will be distributed to the users.

// side note: if we include this in our script 👇, the whole page wont reload when we change something and save, instead the code will magically get injected in to the browser without relaoding the page 👇
if (module.hot) {
  module.hot.accept();
}
// code that only parcel understands 👆

⭐⭐⭐⭐⭐⭐⭐ [👇👇USE THIS 👇👇 instead of step 2 👆👆] // this is how its done in practice
// 🟢 Another way is to add a Parcel Command in the 'package.json' file in the 'scripts' field like so --> 
 "scripts": {
    "start": "parcel index.html"
  }
//  And then run the 'parcel index.html' command in the Terminal by typing 'npm run start' and start is the name of npm script that we defined in the 'package.json' file.


4. Lastly, building the final bundle when we are done developing our project, the bundle that is compressed an has code elemination and all that -->
// Add another Parcel Command in the 'package.json' file in the 'scripts' field like so --> 
"scripts": {
    "build": "parcel build index.html"
  },
// then in the Terminal type --> 'npm run build'    

    
// *********** Installing packages Globally [DONT USE] ⛔
    // in Terminal --> 'npm i parcel -g'

// The difference between Globally and locally installed packages is that we can use the Global tool directly in the Command Line without the intermediate step of an npm script. 
    // However its is adviced to install the packages locally so that they can always stay on the latest version.


// ⭐⭐⭐⭐⭐⭐⭐ Summary (in Terminal) --> 
    1. 'npm init' --> initializes a new Project and creates a package.json file
    2. In package.json file --> "scripts": {
                                    "start": "parcel index.html",
                                    "build": "parcel build index.html"
                                  }
    3. Install latest version of parcel and start server -->  "npm install -g npm"
                                                              "npm i parcel@next -D"
                                                              "npm i sass@next -D"
                                                              "run npm start"






'// *************************************'
      // Configuring BABEL and Polyfilling
    
Video Link --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649505#questions

// After activating Bundling (previous section), now we can use BABEL to transpire our super Modern code from ES6 to ES5 so that old browsers can understand and execute it. 
        // This is because there are still people out there that are still stuck with windows xp or windows 7 computers and cannot upgrade their old internet explorers.


// Parcel actually automatically uses BABEL to transpire our code. It also has default settings for configuring BABEL which we can change if we want to (like what browsers our website/app should work on and so on).

      // Babel works with Plugins and Presets that can both be configured. Presets are a bunch of Plugins bundled together. By default Parcel uses the '@babel/preset-env' which automatically selects which JavaScript features should compiled based on browser support.

    
// Something to keep in mind is that BABEL can only transpire things that have an equivelent way of writing them in ES5 (like ES6 arrow functions which do the same thing as ES5 funcitons [function declarations, function expressions] but just have a different syntax, which is why they can be compiled by BABEL), but on the other hand brand new features like Promise does not have an equivalent in ES5 that does the samething but in different syntax and so BABEL CANNOT compile these brand new features. Only syntax is easy to compile.
    // However for these brand new features we POLIFILL them. Which we need to use a third party library for -->

// 👇 this is for Polyfilling everything
1. install the core-js package 'npm i core-js'

2. then import it in the JavaScript file "'import 'core-js/stable'"  


// 🟢🟢 what Pollyfilling does is that it recreates any brand new feature thats not avaiable in ES5 and makes it available in our Project bundle, so that the code can then use it.
// Pollyfills everything even if we are not using all features.

// 👇 this is specifically for Polyfilling Async functions
3. also install 'npm i regenerator-runtime' 

4. then import it in the JavaScript file "import 'regenerator-runtime/runtime'"


// ⭐⭐ SUMMARY --> 
1. In Terminal --> 'npm i core-js regenerator-runtime'
2. In JavaScript file --> 'import 'core-js/stable'
                          'import 'regenerator-runtime/runtime'
  

'// *************************************'
      // Review: Writing Clean and Modern Javascript

[Checkout notes in 'Modern JavaScript Development Process' folder]

Clean code excersice video ==> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649513#questions


'// *************************************'
      // Declarative programming Paradigm and Functional programming JavaScript principles

// There is a major trend and shift to Declarative code and Functional programming in JavaScript.

[Checkout notes in 'Modern JavaScript Development Process' folder]

video Link --> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/24607008#questions

// Side note: 'Object.freeze()' makes an Object immutable. Behind the scenes an Array is also an Object, so we can use 'Object.freeze()' on Arrays too.
        // 'Object.freeze()' only freezes the first level of an Object, so we can still change Objects inside of the main Object (ie: nested objects).

'// ***********************************************************************************************************************************************************************
'// ***********************************************************************************************************************************************************************
'// ***********************************************************************************************************************************************************************
'// ***********************************************************************************************************************************************************************






// **************************************************************** JavaScript Notes from Bootcamp *******************************************************************

// ***********************************
// This is how you store pieces of data to the memory, by using varables:

var myName ="Robeeerto"; // We dont need this line of code after we run it, because this data has already been committed to the computer's memory.
var yourName = prompt("Please enter your name"); // We also dont need this line of code after we run it, because this data has already been committed to the computer's memory. RETURNS A STRING
alert("Hello, my name is " + myName + ". Welcome to my crib, " + yourName);




// ***********************************
// ".length" counts stuff

var message = prompt("Enter message here: ");
var numOfCharLeft = 280 - message.length;
alert("You have written " + message.length + " characters, you have " + numOfCharLeft + " left."); 



// ***********************************
// "slice(x,y)" method/function   =>   (selector).slice(start,stop)
// to calculate how many characters will be displayed, subtract the "y/stop" from the "x/start".

//Example 1:
var myName = "Mikel Kamel";
myName.slice(0,3);  // this means that it will only show characters in "Mikel Kamel", from position 0 (which is the "M"), all the way to, BUT NOT INCLUDING, the fourth character (which is e); and will cut out/slice the rest. Output will be: "Mik".

//Example 2:
var tweet = prompt("Enter your tweet:");
var slicedTweet = tweet.slice(0,10);
alert(slicedTweet);



// ***********************************
// toUpperCase() & toLowerCase() methods

// Example 1:
var myName = "Mikel";
myName = myName.toUpperCase();

var myName = "MIKEL";
myName = myName.toLowerCase();

// Example 2:
var name = prompt("Enter your name:");
var updatedName = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
alert("Hello, " + updatedName);



// ***********************************
// Equation to calculate dog age in human age
var dogAge = prompt("Please enter do age:");
var ageConversion = ((dogAge - 2) * 4) + 21;
alert("Dog age in human age: " + ageConversion + ".");



// ***********************************
// Functions or Methods

// Function names in JavaScript follow the camelCasing, unlike C#.
function getMilk() {
  Console.log("LUL");
}

//This is how you call the function. 
getMilk();





// ***********************************
// Arguments/Parameters in functions.
// Also Math.round(..) is used to round numbers in javascript.

function getMilk(money) {   
    var bottlePrice = 1.5;
    var numOfBottlesCanBeBought = money/bottlePrice;
    console.log("Robot can buy " + Math.floor(numOfBottlesCanBeBought) + " bottles of milk");
  
}

getMilk(2);


// Example 2: (of functions with arguments. This tells you how much years, months, days you haveleft if you live till 90) .
function lifeLeft(age) {

    var days = (90 * 365) - (age * 365);
    var weeks = (90 * 52) - (age * 52);
    var months = (90 * 12) - (age * 12);
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

};

lifeLeft(51);



// ***********************************
// Return Functions
//Example 1:
function getMilk(money) 
{   
    var costPerBottle = 1.5;
    console.log("Robot can buy " + calcNumOfBottles(money, costPerBottle) + " bottles of milk");
    console.log("Money remaining is " + calcChange(money, costPerBottle));
}

function calcNumOfBottles(startingMoney, costPerBottle)
{
    var numOfBottlesCanBeBought = Math.floor(startingMoney / costPerBottle);
    return numOfBottlesCanBeBought;
}

function calcChange(startingMoney, costPerBottle)
{
    var change = (startingMoney % costPerBottle);
    return change;
}


getMilk(5);


//Example 2: (calculating the BMI)
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height)
{
    var bmi = Math.round(weight / Math.pow(height, 2)); // height^2
    return bmi;
}

// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);

// bmi should equal 20 when it's rounded to the nearest whole number.





// ***********************************
// Math.random()
// Only generates random number between 0 - 0.9999999999999999 (16-decimal places).
// CANNOT place parameter/arguments in the "random()" method. Unlike in C#.

prompt("Please enter you name: "); // We're not saving the "prompt" data from the user into varaiables because we're not going to be using it. It's just there for uthenticity sake.
prompt("Please enter other name: ");

var randomNum = (Math.random() * 100) // This will generate a number between 0 and 99.99999, but NOT including 100.
randomNum = Math.floor(randomNum) + 1; // Math.floor will round to the lowest whole number. And by using "+ 1" we include 100 when generating a random number

alert("Your love score is: " + randomNum + "%");





// ***********************************
// If-Else statement. Also called a Controlled flow.

// WHENEVER OUR "IF" block only has one line of code--> we can ommit the curly braces like so:
const age = 18;
if (age === 18) console.log("Your're old enough");

//Example 1:
prompt("Please enter you name: "); // We're not saving the "prompt" data from the user into varaiables because we're not going to be using it. It's just their forsuthenticity sake.
prompt("Please enter other name: ");

var randomNum = (Math.random() * 100) // This will generate a number between 0 and 99.99999, but NOT including 100.
randomNum = Math.floor(randomNum) + 1; // Math.floor will round to the lowest whole number. And by using "+ 1" we include 100 when generating a random number

if (randomNum > 70)
{
    alert("Your love score is: " + randomNum + "%" + " You love each other so much.");
}
if (randomNum > 30 && randomNum <= 70)
{
    alert("Your love score is: " + randomNum + "%");
}
if (randomNum <= 30)
{
    alert("Your love score is: " + randomNum + "% You Hate Each Other. LUL");
}

//Example 2: (BMI calculator) 
function bmiCalculator (weight, height) {
    var interpretation = (weight / Math.pow(height, 2))
    if (interpretation < 18.5)
{
    return "Your BMI is " + interpretation + ", so you are underweight";
}
else if (interpretation >= 18.5 && interpretation < 25 )
{
    return "Your BMI is " + interpretation + ", so you have a normal weight";
}
else if (interpretation > 24.9)
{
    return "Your BMI is " + interpretation + ", so you are overweight";
}
}

bmiCalculator (60, 2)





// ***********************************
// Array and ".includes()" methods
var guestList = ["Angela", "Jack", "Roberto", "Ismail", "Rodrigo"]; // this is an Array

var yourName = prompt("Please enter your name: ");

// ".includes()" method determines whether an array includes a certain value among its entries. It returns a boolean.
if (guestList.includes(yourName)) // means if true
{
    alert("Welcome!");
}
else // false
{
    alert("Get the Fuck Out!!!")
}







// ***********************************
// FIZZBUZZ Interview Challenge
// Arrays and ".push(...)" , ".pop()" methods
var output = [];
var count = 1;

function fizzBuzz()
{
    output.push(count);
    count++;

    if (output.length % 3 === 0 && output.length % 5 == 0) // Order in which if-else statements are placed MATTERS. If first                                                                   statement is true, then EVERYHTING ELSE BELOW IT WILL BE IGNORED.
    {
        output.pop();  // Removes the LAST element from an array.
        output.push("FIZZBUZZ");  // ADDS one or more elements to the end of an array and returns the new length of the array.
    }
    else if (output.length % 3 === 0)
    {
       output.pop();
       output.push("FIZZ");
    }
    else if (output.length % 5 == 0)
    {
        output.pop();
        output.push("BUZZ");
    }
    console.log(output);
}

fizzBuzz();








// ***********************************
// Who's buying lunch. CODE CHALLENGE:
function whosPaying(names) 
{
    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]; // [0, 1, 2, 3, 4] 
    var randomName = Math.random() * (names.length); // 0 - 4.99999
                                                    // The length property of an array is an unsigned, 32-bit integer that is                                                           always numerically GREATER than the HIGHEST index of the array. (0 to 4) 
    return (names[Math.floor(randomName)] + " is going to buy lunch today!");   
}

whosPaying(); // You don't have to put in a paramter when calling a function that has one, in JavaScript. UNLIKE C# where you                    HAVE TO.

// Explanation: *
// Math.random() ==> 0 - 0.9999
//(names.length) ==> 0 - 4.9999
// Math.floor(randomName) ==> 0 - 4





// ***********************************
// While-Loop
// Bottles of beer song. (MY WAY) 
var bottles = 99;
function beer()
{
    
    
    while (bottles >= 0) // ******* this is where I made a mistake.
    {
        if (bottles === 0) // have to be false for it go to the next if-statement. BUT IF IT IS TRUE THEN IT WON'T GO TO THE                                   NEXT IF-STATEMENT.
        {
            bottles = "No More";
             console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take " + 
                bottles + " down, pass it around, " + bottles + " bottles of beer on the wall.");
        }
        else if (bottles === 1) // have to be false for it go to the next if-statement
        {
             console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. Take " + 
                bottles + " down, pass it around, " + bottles + " bottle of beer on the wall.");
        }
        else if (bottles > 1) // if this is false, then the while-loop will end. But if it is true it wil start again from the first if-statement.
        {
            console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take " + 
                bottles + " down, pass it around, " + bottles + " bottles of beer on the wall.");
        } 
        bottles--;
    }
}


// Example 2: (FIZZBUZZ)
var output = [];
var count = 1;

function fizzBuzz()
{
   
    
    while(count < 101)
    {
          if (output.length % 3 === 0 && output.length % 5 == 0) // Order in which if-else statements are placed MATTERS. If first                                                                   statement is true, then EVERYHTING ELSE BELOW IT WILL BE IGNORED.
      {
          output.pop();  // Removes the LAST element from an array.
          output.push("FIZZBUZZ");  // ADDS one or more elements to the end of an array and returns the new length of the array.
      }
      else if (output.length % 3 === 0)
      {
         output.pop();
         output.push("FIZZ");
      }
      else if (output.length % 5 == 0)
      {
          output.pop();
          output.push("BUZZ");
      }
      output.push(count);
      count++;
      }

      console.log(output);
}

fizzBuzz();






// ***********************************
// For-Loop
// Instead of testing a condition (while-loop), we are specifiying the number of times that we want the loop to run in a For-loop

var output = [];
var count = 1;

function fizzBuzz()
{
   
    
    for (var count = 1; count < 101; count++)
    {
        if (output.length % 3 === 0 && output.length % 5 == 0) // Order in which if-else statements are placed MATTERS. If first                                                                   statement is true, then EVERYHTING ELSE BELOW IT WILL BE IGNORED.
    {
        output.pop();  // Removes the LAST element from an array.
        output.push("FIZZBUZZ");  // ADDS one or more elements to the end of an array and returns the new length of the array.
    }
    else if (output.length % 3 === 0)
    {
       output.pop();
       output.push("FIZZ");
    }
    else if (output.length % 5 == 0)
    {
        output.pop();
        output.push("BUZZ");
    }
    output.push(count);
    }
    
    console.log(output);
}

fizzBuzz();





// ***********************************
// Difference between While-Loop and For-Loop

// While-Loop ==> checks for a state, ie: while player one is alive.
// For-Loop ==> we are iterating, trying to run a piece of code many many times, and we're trying to define how many times




// ***********************************
// Fibonacci Generator CHALLENGE 
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var output = [];
    
    if (n === 1)
    {
        output = [0];
    }
    else if (n === 2)
    {
        output = [0, 1];
    }
    else 
    {
        output = [0, 1];
            for (var i = 2; i < n; i++) // This is how you add values to an array. It makes it do the same action repeatedly
        {
            output.push(output[output.length - 2] + output[output.length - 1]); // ITS ADDS TO THE LOOP THANKS TO THE .PUSH() METHOD  
        }
    }
    
    return output;
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator (2);



// ***************************************
// What is a DOM?
The HTML DOM converts all the elements in the HTML to objects, when the page loads

The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical 
structure of documents and the way a document is accessed and manipulated. ... 

The Document Object Model can be used with any programming language.





// ***************************************
// Difference between functions and Methods()

// A "method" is something that an object can do (the HTML DOM converts all the elements in the HTML to objects, when the page loads) Has to be associated with an object.




// ***************************************
//getElementsByTagName("..."); 

 document.getElementsByTagName("li");  // ==> returns an array ([li.list, li.list, li.list])
//document.getElementsByTagName("li")[1].style.color = "orange";    ==> changes the color of the text in the second li, to orange. (HAVE TO SPECIFY WHICH ITEM IN THE ARRAY WE WANT ITS PROPERTY TO CHANGE USING [..], because this method returns an array {even if it only has one item in the array.})
// we can also use --document.getElementsByTagName("li").length;--  to get the number of li in the whole document. 


 getElementsByClassName("...");      {   Same rules as getElementsByTagName("...");  }

 getElementById("...")  // ==> DOES NOT return an array because there should be only one ID in the HTML Document of the same name.


 document.querySelector("...")  // ==> also returns a single item. Returns the first element with the tag, class or ID specified. Works just like selectors in CSS. CAN TAKE IN IDs, CLASSES, OR ELEMENTS. We can also COMBINE selectors just like in css. THIS ONLY RETURNS THE FIRST selector in the document.
 Examples: document.querySelector("h1").style.color = "purple";              // [element selector]
             document.querySelector(".lul").style.color = "purple";          //  [class selector]
             document.querySelector("#title").style.color = "purple";        //  [id selector] 
             document.querySelector("#title h1").style.color = "purple";     //  [combining selectors] 
     
// document.querySelectorAll("...")  ==> GetS all the selectors in the document with class="example". Returns an array.



// *****  SUMMARY: Which one to use ====> Use: document.querySelector("...")   and   document.querySelectorAll("...") 





// ********************************************
// classList (uses classes only) [adding, removing, toggline classes]

document.querySelector("h1").classList.add("huge"); // adds a class to the HTML document. the "huge" class is created in the styles.css, so by using the classList property, we apply the css properties to the h1 element by adding the "huge" class to it.

document.querySelector("h1").classList.remove("huge"); // removes the "huge" class from the element.

{Using multiple classes}
document.querySelector("h1").classList.remove("huge", "small"); // removes the "huge" class from the element.

document.querySelector("h1").classList.toggle("huge"); // toggles between on/off for the class everytime you run the javaScript code. Return a bool.



//**************************************
// .innerHTML and .textContent properties

document.querySelector("h1").innerHTML; // OUTPUT: "<em>Hello</em>" // .innerHTML returns ALL of the HTML inside the specified element, including ,<em>...</em>, <strong>...</strong> etc. SO we can add html elements to it using this property.
// ex: 
document.querySelector("h1").innerHTML = "<strong>LUL</strong>"; // OUTPUT: "LUL" (but bolded) 


document.querySelector("h1").textContent;  // OUTPUT: "LUL" // .textContent only gets the TEXT inside the element. We CANNOT add html elements to it like in .innerHTML





//**********************************************
// .attributes, .getAttribute, & .setAttribute

document.querySelector("a").attributes; // lets you see all the attributes in that particular tag, class or ID. Returns an Array.

document.querySelector("a").getAttribute("href");
// OUTPUT: "https://www.google.com"        // retreives the current single value of that element's attribute.

document.querySelector("a").setAttribute("href", "https://mikelkamel.com/"); // changes the "href" attribute of the element, to the second argument/parameter in the setAttribute() method.






//**********************************************
// .addEventListener Method

function handleClick() {
  alert("I got clicked");
}

// *****WE ARE PASSING THE FUNCTION HERE AS AN ""INPUT"" (**** WITHOUT PARENTHESES AT THE END OF THE FUNCTION NAME****), SO THAT IT CAN BE CALLED AT A LATER TIME.
document.querySelector("button").addEventListener("click", handleClick); // **IMPORTANT: Here we are passing in the name of the function WITHOUT the parentheses which means we are passing it as an INPUT. This means that we are waiting for the click event to happen, and THEN we call the handleClick function/method.


// **** PASSING THE FUNCTION AS A METHOD, WHICH WILL CAUSE IT BE CALLED AS SOON AS THE JAVASCRIPT SCRIPT IS LOADED.
// ADDING PARENTHESES AT THE END OF THE FUNCTION NAME, WILL CAUSE THE .addEventListener() METHOD TO BE IGNORED, AND THE handleClick() FUNCTION TO BE CALLED AS SOON AS THE JAVASCRIPT SCRIPT IS LOADED. NOT TREATING IT AS AN INPUT.
document.querySelector("button").addEventListener("click", handleClick()); // **IMPORTANT: If we add parentheses to the "handleClick" method/function (like so: "handleClick()") then it will be treated as a straight up METHOD CALL, and the code will be called straight away as the page loads when its adding the eventListener line of code (without waiting for the actual event to happen). 

function handleClick() {
  alert("Got Clicked!!");
}


// Another way which is MORE COMMONLY used ===> **Anonymous Function**   ************ Anonymous Function are Anonymous, they dont have a name.
document. querySelector("button").addEventListener("Click", function () {
  alert("Got Clicked!!");
}); //DONT FORGET TO CLOSE THE PARENTHESES IN THE END.

// Leaves the name of the function blank and writes the function in the addEventListener method itself.
                                                   





// *****************************************************
// HIGHER ORDER FUNCTIONS
// Functions that can take other functions as inputs are called ==> **Higher Order Functions** (ex: addEventListener('click', ...) method) 
// Passing functions as INPUTS to other functions. [arguments/paramters]   *******WHEN YOU PASS FUNCTIONS AS INPUTS IN OTHER FUNCTIONS, YOU DONT ADD PARENTHESES AFTER THIER NAME.*******


// Calculator Example:

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(2, 3, add);
// Output: 5
calculator(2, 3, subtract);
// Output: -1
calculator(2, 3, multiply);
// Output: 6
calculator(2, 3, divide);
// Output: 0.6666666666666666

// Debug Mode
// Shows you all the steps the browser goes through to give you that answer. You can see the process step by step. Great for debugging
debugger;
calculator(2, 3, add); // call the function that you want to debug.








// ******************************************
// "this" in for-loop
// In HTML event handlers, "this" refers to the HTML element that received the event:
for (var i = 0; i < drumArray.length; i++) { // for each element in the Array
  drumArray[i].addEventListener("click", function () { // attaches an eventListener to each button (each item in the array)

      console.log(this.innerHTML);// "this" is the identity of the button that triggered the "eventListener".

  });
  
  
  
  
  
  
// ******************************************
// "Objects" in Javascript
var billBoy1 = {
    name: "Robert",
    age: 19,
    permit: true,
    languages: ["French", "English"],
}

console.log(billBoy1.age);
// output: 19

// When we are creating properties inside objects, effectivlely we are just creating "variables" that are associated within a variable.
// We can assign it any value we want, an int, a string, a bool or anything value type we want.
  
  
  
  
// ******************************************
// "Constructor" functions
  
  // Construction functions name start with a capital letter. This is how you know its a constructor function and not just any function.
  
  function BillBoy (name, age, permit, languages) {
    this.name = name; // this object (BillBoy) is goig to have a name property, and its going to be equal to the name argument/paramter.
    this.age = age;
    this.permit = permit;
    this.languages = languages;
}
  
  var billBoy1 = new BillBoy ("Roberto", 18, true, ["Arabic", "English"]);
  
  billBoy1
// Output: 
/* BillBoy {name: "Roberto", age: 18, permit: true, languages: Array(2)}
   age: 18
   languages: (2) ["Arabic", "English"]
   name: "Roberto"
   permit: true */
  
  
  var billBoy2 = new BillBoy ("Tom", 12, true, ["French"]);
  
  billBoy2
// Output: 
/* BillBoy {name: "Tom", age: 12, permit: true, languages: Array(1)}
   age: 12
   languages: ["French"]
   name: "Tom"
   permit: true */



  
  
  
  
// ******************************************
// Drum Kit's website JavaScript file, using if-else statements
  
var drumArray = document.querySelectorAll(".drum"); // Returns an Array

for (var i = 0; i < drumArray.length; i++) { // for each element in the Array
  drumArray[i].addEventListener("click", function () { //  (Anonymous Function) attaches an eventListener to each button (each item in the array)

    // "this" is the identity of the button that triggered the "eventListener".
    if (this.innerHTML === "w") {
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    }
    else if (this.innerHTML === "a") {
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    }
    else if (this.innerHTML === "s") {
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    }
    else if (this.innerHTML === "d") {
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    }
    else if (this.innerHTML === "j") {
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    }
    else if (this.innerHTML === "k") {
        var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    }
    else {
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    }
  });
  
  
// Drum Kit's website JavaScript file, using switch statements
  
  var drumArray = document.querySelectorAll(".drum"); // returns an array of all the html elements with the class drum

for (var i = 0; i < drumArray.length; i++) {
  drumArray[i].addEventListener("click", function () {

    var drumIndex = this.innerHTML;

    switch (this.innerHTML) {

      case "w":
        var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "a":
        var tom2 = new Audio ("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio ("sounds/tom-3.mp3");
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "j":
        var crash = new Audio ("sounds/crash.mp3");
        crash.play();
      break;

      case "k":
        var kickBass = new Audio ("sounds/kick-bass.mp3");
        kickBass.play();
      break;

      case "l":
        var snare = new Audio ("sounds/snare.mp3");
        snare.play();
      break;

      default: console.log(drumIndex);

    }

  });
}
  
  
  
  
  
// ******************************************
// Adding a method within a Constructor function
  
  // Construction functions name start with a capital letter. This is how you know its a constructor function and not just any function.
  
  function BillBoy(name, age, permit, languages) {
    this.name = name;
    this.age = age;
    this.permit = permit;
    this.languages = languages;
    this.update = function() { // dont need a name for the function
        console.log("Cleaning in progress!");
    } };
  
  var billBoy1 = new BillBoy ("Tim", 40, true, ["French", "Russian"]);
  billBoy1.update();
  // Output: "Cleaning in progress!"
  
 
  
  
  
// ******************************************
// Adding a paramter in the Callback Function of a Higher-Order Function
  // https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384168#questions     ---- Watch this for explanation
  
  // Here .addEventListener is a Higher-Order Function because it takes in another function as an Input
    // The function within the .addEventListener function (Higher-Order Function) is called a Callback Function
    // the parameter within the Callback function refers to what triggered the event
  
  document.addEventListener("keydown", function(event) { // Adds the EventListener to the whole document

  console.log(event); // console logs the actual event that triggered the function.
  var buttonPressedName = event.key;

  makeSound(buttonPressedName);

});
  
  
  
  
  
// ******************************************
// JQuery (JavaScript Library) 
  
  // What is a library?
  // Its a bunch of code that someone else wrote, that we can incorporate into our own projects. (Bootstrap is also a library)
  
  // The main reason to why we use jQuery is to shorten our code and do less typing

  
// Adding jQuery to our webite. 2 ways:
  
  // First way: (add these just before the body closing tag)  [USE THIS]
  <!-- jQuery script. ALWAYS ADD THE JQUERY SCRIPT BEFORE OUR JAVASCRIPT SCRIPT -->
  // Les us tap into and manipulate our HTML and CSS elements AFTER they have been loadedup and rendered on screen. Otherwise our js script will crash and wont work.
  <!-- jQuery  -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- my js Sheet -->
  <script src="index.js" charset="utf-8"></script>
  </body>
  
  // Second way: (add these scripts in between the head tag, just like when adding the css stylesheet BUT have to add this code in our js script)

  // Uses the ready() method. This checks if our jquery library is ready. Once our document is ready, then it will call this code.
$(document).ready(function() { 
  
  // Add all our javaScript code here
  $("h1").css("color", "red");
  
}); 
  
  
  
  
// ******************************************
// Selecting Elements in JQuery 
  
    
document.querySelector("h1");
  // Can be written as: 
  jquery("h1");  // OR
  $("h1"); //[USE THIS]. The "$" selects **ALL** of the HTML elements with h1 tag in them. Works same way with classes, and IDs.
  
  
// ******************************************
// Changing the styles of Elements in JQuery 
  
  $("HTML TAG").css("property we want to change", "value we want to assign to that property");
  
  $("h1").css("color", "green"); // Changes the color of all h1 elements to green, when that javascript is loaded.
  
  // We can get the current value of the css property, by just having the name of the property as a string inside the css() method
  $("h1").css("color"); // Gives the color of all the h1 elements
  console.log($("h1").css("font-size")); // We can also log it in the console.
  
  // Summary: If we have ONE string parameter in the css() method, then we are GETTING the value of that css property. 
  //          And if we have have TWO string parameters in it, then we are SETTING the value of that css property. 
  
  
  // ** Quick Reminder: 
    // Use HTML for --> Content
    // Use CSS for --> Appearance
    // Use JavaScript for --> Behavior
  
  
  
  
  // ******************************************
// Adding and Removing css styles from JQuery (using classes created in css)
  
  // Adds a class that exists in css, to an HTML element, using javaScript.
  $("h1").addClass("bold-title"); // Dont need to add a dot before the class name, since this method is specific for classes
  
  // Removes a class that exists in css, to an HTML element, using javaScript. 
  $("h1").removeClass("bold-title");
  
  
// Can add multiple css classes to the same HTML element, all at once from javaScript, by writing them next to each other.
  $("h1").addClass.("bold-title margin-50");
  
  // Same thing with the removeClass() method.
  $("h1").removeClass("bold-title margin-50");
  
  
  // ******************************************
// Checking whether an HTML element has a particular class in jQuery (returns a bool)
  $("h1").hasClass("bold-title");
  
  
  
   // ******************************************
// Changing TEXT of a selected HTML element in jQuery
  
  // changes ALL of the h1 HTML elements' text, in the document, to the paramtere in the text() method. This is just like "textcontent" in vanilla javaScript without jQuery.
  $("h1").text("Changes the HTML text to this"); 
  
  // changes ALL of the HTML inside the specified element, in the document, to the paramter in the text() method. This is just like "innerHTML" in vanilla javaScript without jQuery.
  $("h1").html("<strong> bolded text </strong>");
  
  
  
  // ******************************************
// "Getting" and "Setting" HTML element attributes in jQuery
  
  // This only "gets" us the href attribute within all of the anchor tag in the HTML document, which we can then console.log
  console.log($("a").attr("href")); 
  
  // This "gets" (first paramter) and "sets" all the values of the property name (in the first parameter) to the value that is within the second parameter in the .attr() method.
  $("a").attr("href", "https://mikelkamel.com/");    
  
  
  // Remember that a "class" of an HTML element is also an attribute, so we can "get" it and even change its value "set" using .attr() method in jQuery
  console.log($("h1").attr("class")) // logs all the classes in all of the HTML elements in the HTML document.
  
  
  
  
  
  // ******************************************
// Adding eventListeners to elements in jQuery
  
  // Adds a "click()" eventListener, and calls the CALLBACK Function within it. (its parameter)
  $("h1").click(function() {
    $("h1").css("color", "red");
  });
  
  
  //*** When we were using vanilla javaScript and adding event liseteners to each button, we had to use a for-loop and use "document.querySelectorAll" to target each one of these buttons, BUT IN jQuery we dont have to beacuse it targets every HTML element, class, or ID by default, Example:
  // THIS targets ALL buttons in the HTML document, so when we click ANY button, ALL of the h1 elements in the document will change their color to Magenta.
  $("button").click(function() {
    $("h1").css("color", "Magenta");
  });
  
  
  // Adds the "keydown" eventListener to the entire document (this does the same thing as the keypress eventListener we did in the Drum Kit website)
  // to select the whole document we can either put *document* or "body", when specifying the element we want to target
  $(document).keydown(function(event) {  // when using *document* dont put it between quations ***
    console.log(event.key);
  });
  
  
  // Challenge:
  // changes the text of ALL the h1 elements in the document, to whatever button I press on the keyboard. And also logs the which key I pressed in the console. 
  $("body").keydown(function(event) { 
    $("h1").text(event.key);
    console.log(event.key);
  });
  
      // ".on()" method
 ****** // Another way of using eventListeners in jQuery is using the ".on()" method
   // ".on()" method takes in two parameters. 
      // The first paramater is what we want to listen for (which event).
      // The second paramater is the CALLBACK Function (what we want to happen when the event happens)
   $("h2").on("click", function() {
    $("h1").css("color", "red");
 });
  
  // Another example:
    // Changes the size of ALL the h1 elements in the document when we hover over them with the mouse, and then returns them back to normal after 0.5 seconds.
    $("h1").on("mouseover", function() {
     $("h1").css("font-size", "3.5rem");

     setTimeout(function() { 
       $("h1").css("font-size", "1rem"); }, 500);
   });
  
  
  
  
  // ******************************************
// Using jQuery to ADD or REMOVE HTML elements on the fly, without changing anything in the HTML document itself.
  
  // Adds an HTML element before the selected HTML element (one after the $ sign)
    // Adds a button BEFORE the "h1" element [outside the h1 element]
  $("h1").before("<button> click me </button>"); //***** have to add the HTML elements, just like we add it in HTML itself. 
  
  // Adds a button AFTER the "h1" element [outide the h1 element] 
  $("h1").after("<button> click me </button>");
  
  // Adds a button BEFORE the content or at the BEGINNING of the "h1" element (on the left side of it) [but inside the h1 element]
  $("h1").prepend("<button> click me </button>");

  // Adds a button AFTER the content or at the END of the "h1" element (on the right side of it) [but inside the h1 element] 
  $("h1").append("<button> click me </button>");
  
  
  // *** Removing elements from the HTML document
  $("h1").remove();  // removes ALL of the h1 elements from the web page.
  
  
  
  
  
  // ******************************************
// Animations using jQuery
  
  // When we click a button, ALL the h1 elements gets HIDDEN (it hides all the h1 elements in the document and also removes the element from the flow of document, so everything beneath it moves up and vice versa)
  $("button").on("click", function() {
    $("h1").hide();
  });
  
  // When we click a button, ALL the h1 elements SHOWS up again, if it was hidden using ".hide()" method (affects the flow of the document)
  $("button").on("click", function() {
    $("h1").show();
  });
  
  // Toggles between ".hide()" and ".show()" methods, when we click the button (affect the flow of the document)
  $("button").on("click", function() {
    $("h1").toggle();
  });
  
  
  //  LOOK UP THE W3 DOCS FOR ALL THE OTHER ANIMATION EFFECTS (SIMILAR TO THIS BUT DOES DIFFERENT THINGS)
  
  // *** ".animate()" allows us to define custom css
  
  // When we click any button, the opacity of h1 changes to 0.5
  $("button").on("click", function() {
    $("h1").animate({opacity: 0.5});
  });
  
// **** Things to remember when we use ".animate()":
    // is that it only take numerical values (so we can't change the color for example)
    // if we want to use a percentage value (for example: {margin: "20%"}) YOU HAVE TO PUT IT IN BETWEEN QUOTATIONS [FOR PERCENTAGES]
  
// ***** Adding more than one animation to an element, by chaining them together ==>
  // If we are targeting the same HTML element and we add multiple animations to it, IT WILL DO IT IN ORDER FROM RIGHT TO LEFT
      $("button").click(function() {
        $("h1").slideUp().slideDown().animate({opacity: "0.3"});
      });
  