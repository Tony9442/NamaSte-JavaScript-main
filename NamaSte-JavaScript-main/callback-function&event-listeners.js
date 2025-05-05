//What is a callback function?

//Ans:Callback function is the ability to pass a function into another function.

/*JavaScript is synchronous and single-threaded language but with the help of callback 
 we can do asynchronous things in javascript
*/



function b(c){
    c()
};
b(function c() {
    for (var i = 1; i <= 5; i++){
      function close(i){
        setTimeout(function () {
          console.log(i);
        }, i * 1000);
      }
      close(i);
    }
});

setTimeout(function () {
  var c = 17 * 20;
  console.log(c);
}, 5000);

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

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();

}

console.log("while loop finished");


