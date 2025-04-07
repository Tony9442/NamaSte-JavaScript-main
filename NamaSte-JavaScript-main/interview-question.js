//Interveiw Question: Print in console 1 2 3 4 5 after each and ever second?


//Let version: Here let is a block scope and it create a new copy everytime our loop runs  
function u () {

 for (let i = 1; i <= 5; i++){

        setTimeout(function () {
          console.log(i);
        }, i * 5000);

    }
    console.log('NamaSte JavaScript')
}
u()

//The problem was that it was refering to the same memory space


/*Var version: So using the close function we kinda created a new copy of
 of 'x' everytime the setTimeout was called.
*/

function c (){

    for (var i = 1; i <= 5; i++){

        function close(x){
            setTimeout(function () {
              console.log(x);
            }, i * 5000);
        }
        close(i);
    }
    console.log('Now the var works')
}
c()

setTimeout(() => {
  console.log("I'm the geartest coder ever");
}, 5000);

let startDate = new Date().getDate();
let endDate = startDate;
while(endDate < startDate + 10000){
  endDate = new Date().getDate();
};

console.log('while expires');


//More CRAZY JS INTERVIEW QUESTIONS about Closures.
//if add a parameter in outer() what will happen

function outest(){
  var c = 20;
function outer(b){//add parameter
    
    function inner() {
        console.log(g, b, c)//form closure with it
    }
    let g = 30;//change this from var to let it's still fine

    return inner;
}
return outer;
}

let g = 50;/*Is will not print this one but we don't line 51 it checks other 
local scope and if it doesn't see any the it prints the one in global scope*/

//  outer()()//This just a way to call the inner() OR

//This way
var r = outest()('Hello World');//pass in a value to it
r();



//Advatages of closures

//1. It helps us with Data Hiding & Encapsulation in JavaScript?

//Data hiding is just creating a privcy for our variable so others can't eccess it.


function counter() {
  let count = 0;

   function incrementCounter() {
    count++;
    console.log(count);
  }
  return incrementCounter;
}
var counter1 = counter();
counter1();
counter1();



//This is a better way to create a counter say we should add + and -
function Counter(){
  let count = 0;

  this.incrementCounter = function() {
    count++;
    console.log(count);
  }

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
 var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();





//How are closures and garbage collector related to each other?

function h (){

    var a = 0, z =20;//Both variable are not garbage collected

    return function n(){
        
        console.log(a, z);
    }
}
var u = h();
u();


function h() {

  var a = 0,z = 20;//The second variable is not garbage collected

  return function n() {

    console.log(a);
  };
}
var u = h();
u();


//What can come inside our Micortask Queue?

//Ans: 

// All the callback function which comes through promises will go into Micortask Queue

/*  Mutations observer. The Mutations observer continously checks if there is some mutation
 in the DOM tree or not and if there is, it can create a callback function.*/


 //What is a promise javascript?
 
 //Ans: Promise ia an object that represents an eventual completion of an asynchronous operation.


 //Why is it good to use promise?
 //Ans:

 //With promise we have control over our code and avoid Invertion of control (lossing control over our code to another code).
 
 //It helps us avoid callback hell.