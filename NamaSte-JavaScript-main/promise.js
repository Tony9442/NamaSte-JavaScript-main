const cart = ["Car", "House", "invest"];


//Wrong way to do it and is called a callback hell and it can be solved by promise chain.
// api.createOrder(cart, (orderId) => {
//     proceedToPayment(orderId)
// })


//Perfect way to do it
/*const promise = createOrder(cart);whenever we call this line the createOrder(cart) returns a promise which is just
 an empty object with some data in it and the data will hold whatever createOrder(cart)api return to us it an async operation 
 it takes sometime to execute
 */

//{data: orderId}


//attach a callback function to the promise object and is known as promise chaining.
//  promise.then((data) => {
//   return proceedToPayment(data);
//  })
// .then((data) => {
//     return showOrderSummary(data);
// })
// .then((data) => {
//     return updateWalletBalance(data);
// });

//OR

// createOrder(cart)
// .then((data) => {
//     return proceedToPayment(data);
// })
// .then((data) => {
//     return showOrderSummary(data);
// })
// .then((data) => {
//     return updateWalletBalance(data);
// });



const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);//fetch returns promise

console.log(user);

user.then((data) => {//how we attach callback to promise and this also how we can get the data from our user
    //we can do ever we want with that data here 
    console.log(data); 
});

