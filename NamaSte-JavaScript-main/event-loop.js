//How Dom api works
//How setTimeout() works


//What is a callback queue?

/*The Callback Queue is a mechanism used by the 
JavaScript runtime to handle asynchronous tasks.

The callback queue takes in two apis:
1: setTimeout = (asynchronous tasks) and it registed into our web apis enviornment,
 the setTimeout callback is waiting for timer to expire so it be see the 
 light of the day thought the (callback queue).

2: Dom APIs callbacks = (document.get) and it registed into our web apis enviornment
*/

//Why do we need a CallBack Queue for the Dom APIs?

/*Ans: Say a user clicks out button more than once say five times
 in that case the callback function will be pushed inside our callback 
 five times and they will all be waiting for their to be executed because
 javaScript has only one call stack and everything is executed there only.
*/



//How fetch() works

/* Fetch works diffrent from setTimeout and Dom apis.
  
The Fetch API is a modern JavaScript interface for making
 network requests, primarily designed to replace the older 
 XMLHttpRequest.

 fetch("https://api.netflix.com")
 .then(function cdf(){
    consile.log('CB Netflix');
 })and it registed our callback function into web apis environment.
 

 The fetch function callback is waiting for data to be retruned from the 
 Netflix server and it returns it to fetch() our callback functio will be ready
 to be executed but it won't executed in the (callback queue) instead i will be 
 executed in the (Micortask Queue).

 The Microtask Queue is used for tasks that need to be executed as soon as possible,
  such as promise resolutions and mutations to the DOM.

The Micortask Queue is kinda same with the callback queue but it has (higher priority),
whatever comes inside it, is executed frist and and the (callback queue) will be executed
later.


Say we have more than one micortask in our Micortask Queue and one micortask when executed,
creates a new micortask and that micortask when executed creates another micortask we will see 
that the (callback queue) won't get a time to be executed because the Micortask Queue has (more 
priority) meaning it meant take a longtime for the (callback queue) to execute and this know as 
STARVATION OF CALLBACK QUEUE
 */