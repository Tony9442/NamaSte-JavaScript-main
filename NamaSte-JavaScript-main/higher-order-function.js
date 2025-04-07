/* A function which takes another function as an argument or returns
another function from it is know as HIGHER ORDER FUNCTION
*/

//EXAMPLE

function x(){//Callback function
    console.log("Hello");
};

function y(x){//Higher order function
 x();
}


const radius = [3, 1, 2, 4];

//calculate the area of the radius number circle?

const area = function (radius){
    return Math.PI * radius * radius;
};

//calculate the cicumference of the radius number circle?

const cicumference = function (radius) {
  return 2 * Math.PI * radius;
};

//calculate the diameter of the radius number circle?

const diameter = function (radius) {
  return 2 * radius;
};


const calculate = function (radius, logic) {
  //calculate is a higher function and area, cicumfrence and diameter are call back function.
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i])); //the area,cicumference and diameter function will called again and again with the radius[i] for each and every element in this radius array and pushed inside the output.
  }
  return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));

// const calculate = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculate(radius, area));