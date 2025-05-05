//How function works in javaScript

var x = 1;
a();
b();
console.log(x)

function a(){
    var x =10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}



function d(){
    const c = "hello world";
    e();
    function e(){
        console.log(c);
    }
    
}

d();


var u;
let y;

console.log(u);
console.log(y);