//Functions act like a value.

//The diffrence between Function Statement and Function Expression is hosting.


//Anonymous functions are functions with no name and they are used in a where function are used as value example (function Expression).


//Frist Class Function is just the ability to use functions as values.
//It can also be known as Frist class Citizens.



//Function Statement aka Function Declaration
function c (){
    console.log('Hello World');
}
c();

//Function Expression
var b = function () {
   console.log("b called");
}
b();

// Anonymous function
// function () {

// }

//Named Function Expression
var b = function xyz() {
  console.log("b called");
};
b();

//Diffrence between Parameters & Argunments?

//The 'param' is the short form of the word parameter

//The param1 and param2 is their to defrencate our two parameters
var b = function xyz(param1, param2) {
  return param1 * param2
};
console.log(b(15, 10));//The numbers in the b(15, 10) are argunment


