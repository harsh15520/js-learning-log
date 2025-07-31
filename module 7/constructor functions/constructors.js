// --- Basic Constructor Function ---
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const alice = new Person('Alice', 30);
const bob = new Person('Bob', 28);

alice.greet(); // Hi, I'm Alice and I'm 30 years old.
bob.greet();   // Hi, I'm Bob and I'm 28 years old.

// --- Demonstrate that instances are distinct objects ---
alice.age = 31;
console.log(alice.age); // 31
console.log(bob.age);   // 28

// --- Detecting instance type ---
console.log(alice instanceof Person); // true

// --- Best Practice: Capitalize constructor names and always use 'new'
// Omitting 'new' will set 'this' to global object or undefined (in strict mode)

function Animal(type) {
  this.type = type;
}
const dog = new Animal('Dog');
console.log(dog.type); // 'Dog'
