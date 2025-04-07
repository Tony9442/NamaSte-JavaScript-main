//Say we're creating an e-Commerce.

//Let create a new promise and send it to the consumer

//This frist part is the CONSUMER part of the code.
const cart = [];

const promise = createOrder(cart); //returns orderId as promise data value.


//this callback that show if everything is resovled nice.
promise
  .then((orderId) => {//this page takes us to
    console.log(orderId);
    return orderId
    // proceedToPayment(orderId);
  })


  .catch((err) => {//This will only stop the Cart from displaying while the other chains displays
    console.log(err.message);
  })


  .then((orderId) => {//this page and this page takes us to
    return proceedToPayment(orderId);
  })

  .then((paymentInfo) => {//this page
    console.log(paymentInfo);
  })

  .then((come) => {
    console.log("catch error can't stop me ")
  })

  //This will be called if we reject the promise and this is how we can (gracefully handle error) code.

  // Whenever there is an error on any of this our chain the catch will handle the error and display the error message.
//   .catch((err) => {
//     console.log(err.message);
//   });



//This second part is the PRODUCER part of the code.

function proceedToPayment (orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment successful");
    })
}

//let write our own create order function.

function createOrder(cart) {
/* Is already known that the creatOrder will retrun a promise
 so knowing that we create and return a promise.

Question.
How do we create a promise?
Ans:
 To create a promise we use (new Promise((resolve, reject))) which is a promise constructor.

 The (resovle and reject) are function given by javascript to build promises.

How to call the promise constructor?


*/

const pr = new Promise((resolve, reject) => {
  /*inside we write a logic that will handle what we need to do inside our createOrder() function.

    Here we write the logic to create an Order because we don't have any database so here we wirte
    calls to database or we write validate cart when validate the cart, we make an api call to create an order
    and we will get an orderId that will be returned as a success or failure
    */
  //createOrder

  //validateCart

  //orderId promise either retruns (orderId) as success or failure which is to throw an error message.

  //Example

  //validateCart logic
  //Here we reject if something is correct
  if (!validateCart(cart)) {
    //if this function fails then we will reject this promise.

    const err = new Error("Cart is not valid");
    reject(err);
  }

  //createOrder logic
  //Here we approve if everything is nice
  const orderId = "12345";

  if(orderId) {
    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  }

});


return pr;



}

function validateCart(cart){
    return false;
}

