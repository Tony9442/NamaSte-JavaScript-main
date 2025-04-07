const cart = ["God owns everything", "Retire my mum", "invest", "Get some wants"];

/*we have passed api.proceedToPayment() as a callback api.createOrder() meaning that
 we have given api.proceedToPayment() to the api.createOrder() and when the api.createOrder()
 creates and order it retrun the api.proceedToPayment() page as a callback function.
*/

//Invertion of control this a problem we face when using callbacks.

/* Invertion of control is act of lossing control of our code when using callbacks */

/*Whenever we pass in a particular function into another function as callback, 
we have given the control of that function (code) to that code and we really 
don't know what goes on behine seen.*/



//callback hell
api.createOrder(cart, () => {

    api.proceedToPayment(() => {

        api.showOrderDetails(() => {
             
            api.updateWallet()

        })

    })

})


//Invertion of control

api.createOrder(cart, () => {

  api.proceedToPayment();
  
});