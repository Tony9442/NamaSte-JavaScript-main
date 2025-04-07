/*Hoisting is a process in javaScript by which we can 
access variables or function even before initialling them */

getName();
console.log(x);
console.log(getName);

var x = 7;

function getName(){
    console.log("Tony")
}

var getName = () => {
    console.log('undefined')
}