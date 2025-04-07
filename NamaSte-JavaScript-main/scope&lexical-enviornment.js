//Scope is basically places where we can access a variable of a function in our code


/*Lexical enviornment is the local memeory along 
with the lexical enviornment of it parents.


 Lexical enviornment simply means in sequence or in order, so i can say
 that function c() is lexically sitting inside the a() function and a()
 is lexically seated in global scope.


*/
function a(){
    var b = 20;
    function c(){
      console.log(b);
    }
     c();
};
a();