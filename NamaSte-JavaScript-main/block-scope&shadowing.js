// //The curly bracket after if() is called block 


// //Block Scope is simply meaning the variables and functions we can access in the block


// //Shadowing 


// if(true){

//     //Compound Statement

//     var u = 10;
     
//     console.log(u)
// }
// var b = 200;//This var has been shadowed by the var b in the block so even we call it in global scope it still 30

// let e = 300;//Due the let has been shadowed by the let e in the block it still had another scope in the global

// const v = 500;//Due the let has been shadowed by the let e in the block it still had another scope in the global
// {
//     let e = 20;
//     var b = 30;
//     const v = 50;
//     console.log(e);
//     console.log(b);
//     console.log(v);
// }

// console.log(b);
// console.log(e);
// console.log(v);

// //Shadowing in function

// let f = 600;

// function x(){
//     let f = 60
//     console.log(f)
// }
// x()
// console.log(f)

// //illegal shadowing


// //trying use var to access let variable in a block is not allowed.

// //If var is shadowing something it should not corss the boundry of it's scope.

// /*A var is function scope, so it shouldn't cross that function scope if add function
// to it the error goes away and our code is back to working nice because it's now in it's
// boundry and it's not infering with let variable.
// */
// let a = 80;

// function c(){
//   var a = 20;
// }

// //we can use let variable in a block to shadow var variable that is in the global scope.


// var c =80;

// {
//     let c =20;
// }

//



//All this syntax is called lexical scope chain partten


//lexical scope works the same way in block also.
// const o = 70;
// {
//     const o = 9;
//     {
//         const o = 90;
//        console.log(o);
//     }
    
// }

// line 99 and line 103 are referring to the same memory space in the 
// global scope and for that reason it modify the value of b in the global scope to 30.
//  var b = 10;

// {
//         let e = 20;
//         var b = 30;
//         const v = 50;
//         console.log(e);
//         console.log(b);
//         console.log(v);
//     }

//     console.log(b);

//line 108 and line 112 points to a different scope which is the reason why they give different values 10 and 30.

let b = 10;

function x() {
        let e = 20;
        let b = 30;
        const v = 50;
        function y(){
        console.log(e);
        console.log(b);
        console.log(v);
        }
        y();
    }

    x();
    console.log(b);

    const o = 70;
    {
        const o = 9;
        {
            const o = 90;
            console.log(o);
        }
        console.log(o);
        
    }
    console.log(o);
 
