// 🧠 Why return matters?
// In JavaScript, functions create their own scope. Variables and functions declared inside a function are not accessible from the outside unless you explicitly return them.

// ✅ When to use return:
// You want to get a value (like a number, string, object) out of a function.

// You want to expose a function defined inside another function (like a closure).

// You want to pass data to another part of your program.

// 📦 Analogy: Think of return as shipping something out of a room
// If you walk into a room (your function), do some work, and don’t carry anything out (return), whatever you created stays in the room — and disappears when you leave.

// But if you pack something in a box and take it out (return), now you have it in the hallway (the outer scope), ready to use! 🎁

// 🔥 Example:
// js
// Copy
// Edit
// function secretBox() {
//   let secret = "🍕";
//   return secret;
// }

// let food = secretBox(); // food now has access to "🍕"
// console.log(food); // "🍕"
// But if you don't return it:

// js
// Copy
// Edit
// function secretBox() {
//   let secret = "🍕";
// }

// let food = secretBox();
// console.log(food); // undefined


//When to use return and the examples:
// You want to get a value (like a number, string, object) out of a function.

// You want to expose a function defined inside another function (like a closure).

// You want to pass data to another part of your program.



//1. You want to get a value out of a function

function getName() {
  let name = "Ada";
  return name;
}

const userName = getName(); // ✅ "Ada" is returned out of the function
console.log(userName); // Output: Ada



//2. You want to expose a function inside another (Closure)

function createCounter() {
  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return increase; // ✅ returning the inner function
}

const counter = createCounter(); // get the inner function
counter(); // Output: 1
counter(); // Output: 2



//3. You want to pass data to another part of your program
function getUserData() {
  return {
    name: "Ada",
    age: 25
  };
}

function greetUser(user) {
  console.log(`Hello, ${user.name}!`);
}

const user = getUserData(); // ✅ fetch data from one place...
user.name = "zara"//incase we want change the name value.
greetUser(user); // ...and pass it to another


//appendValue adds the click button value to the display.