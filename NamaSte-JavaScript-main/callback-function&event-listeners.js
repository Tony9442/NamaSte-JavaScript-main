//What is a callback function?

//Ans:Callback function is the ability to pass a function into another function.


/*JavaScript is synchronous and single-threaded language but with the help of callback 
 we can do asynchronous things in javascript
*/

setTimeout(function () {
    var c = 17 * 20;
    console.log(c);
}, 5000);

function b(c){
    console.log('g');
    c();
};
b(function c() {
    console.log('b');
});



//How to print out and count how many times a button was clicked.

//A famous interview question.

//We use closure to hid our data
function attach() {
  let count = 0;
  document.querySelector(".click").addEventListener("click", function cb() {
    setTimeout(function () {
      console.log("Welcome to my page", ++count);
    }, 2000);
  });
}
attach();