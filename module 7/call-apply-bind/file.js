// --- Basic Setup ---
const person = {
  name: "Scaler",
  greet(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
  }
};

const anotherPerson = { name: "Academy" };

// --- .call() ---
// Directly calls a function with a specific 'this' and arguments
person.greet.call(anotherPerson, "Hello", "!"); // Hello, I'm Academy!

// --- .apply() ---
// Like call, but arguments are passed as an array
person.greet.apply(anotherPerson, ["Hi", "!!"]); // Hi, I'm Academy!!

// --- .bind() ---
// Returns a new function permanently bound to a specific 'this'
const boundGreet = person.greet.bind(anotherPerson, "Hey");
boundGreet("?"); // Hey, I'm Academy?

// --- Use Cases with Array Methods ---
function showArgs() {
  console.log(Array.prototype.slice.call(arguments));
}
showArgs(1, 2, 3); // [1,2,3]

// --- Partial Application with bind ---
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5)); // 10

// --- Method Borrowing ---
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // ["a", "b", "c"]

// --- Examples of lost 'this' and recovering it ---
const unboundGreet = person.greet;
unboundGreet("Hi", "!"); // undefined, as 'this' is wrong
unboundGreet.call(person, "Hi", "!"); // Recover 'this' with call
