//This is closure

function x(){
    var g = 200;
function y() {
    var c = 30;
    function b(){
        console.log(c, g);//this returns the function along with the 'refrence' to the variable not the value number
    }
    c = 100;
    b();//This come along with it's lexical scope
}
y();
// n();//ans gives us 100
}
x();

//This is not a closured function.

function createFunction() {
    function multiplyBy2 (num) {
        return num*2
    };

    return multiplyBy2;

}

const generateFunc = createFunction();//here we've been able to change the value name of the function (multiplyBy2) to generateFunc meaning that it has lost it's lexical environment.
const result = generateFunc(3);//And that's the reason we were able to get the right answer here.
//Note: generatedFunc is simple and only a one time result and running of createFunction() function. it has to do with createFunction() after that line it's called or decleared.


function outer() {
    let counter = 0;

    function increasementCount () {
        counter++;
        console.log(counter);
    }
    return increasementCount; // Here, outer() returns the increasementCount function, so you can store it in newFunction and call it later.
}

const newFunction1 = outer();
const newFunction2 = outer();
newFunction1();
newFunction1();
newFunction1(); 
newFunction1();
newFunction1();
newFunction2();
newFunction2();
newFunction2();
newFunction2();


// function outer () {
//     let counter = 0;
//     return function increasementCount () {
//         counter++;
//         return counter;
//     }

//     // no return here!
//     //outer() still defines counter and increasementCount, but doesn't return anything, so it implicitly returns undefined.
// }

// outer()();



function count() {
    for (let i = 1; i <=5; i++){
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    console.log("I am a function");
  }
  count();
  
  //The cb() along with it's lexical scope environment forms or is called a closure.
  function closure () {
    for (var c = 1; c <=5; c++){
      function cb(f){
        setTimeout(function (){
          console.log(f)
        }, c * 1000)
      }
      cb(c)
    }
  }
  closure();
  
  
  //The n() along with it's lexical scope environment forms or is called a closure.
  
  //this  works because n() forms a closure with the m() function and o is also a 
  // part of m() function so it get  the same treatment as a.
  function deFirst() {
    var g = "i have a closure with m()";
    function m (o) {
      console.log(g);
      function n (){
        console.log(a, o)
      }
     let a = 1;
      return n;
    }
    return m;
  }
  
  let a = 1000;
  deFirst()("hello")();

