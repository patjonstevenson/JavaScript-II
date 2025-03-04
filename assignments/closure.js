// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
const addMaker = num1 => num2 => num1 + num2;

const addOne = addMaker(1);
const addTwo = addMaker(2);
const addThree = addMaker(3);

console.log(`1 + 1 = ${addOne(1)}`);
console.log(`1 + 2 = ${addTwo(1)}`);
console.log(`1 + 3 = ${addThree(1)}`);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  function counter() {
    return ++count;
  }
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();

console.log(`Count 1: ${myCounter()}`);
console.log(`Count 2: ${myCounter()}`);

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
/*const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const counter = {
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    }
  };
  return counter;
};

let counter1 = counterFactory();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
console.log(`Counter1 count: ${counter1.count}`);
*/
