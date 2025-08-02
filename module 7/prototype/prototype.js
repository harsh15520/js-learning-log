// --- Basic Prototype Example ---
function Person(name, age) {
  this.name = name;
  this.age = age;
  // Instance method (not shared)
  this.sayHello = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}

// Attach a method to the prototype (shared across all instances)
Person.prototype.describe = function() {
  return `${this.name} is ${this.age} years old.`;
};

const alice = new Person('Alice', 25);
const bob = new Person('Bob', 28);

alice.sayHello(); // Hi, I'm Alice
console.log(alice.describe()); // Alice is 25 years old.

bob.sayHello(); // Hi, I'm Bob
console.log(bob.describe()); // Bob is 28 years old.

// --- Demonstrate Prototype Chain ---
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(bob));  // true
console.log(Object.getPrototypeOf(alice) === Person.prototype); // true
console.log(alice.hasOwnProperty('name'));         // true (own property)
console.log(alice.hasOwnProperty('describe'));     // false (on prototype)

// --- Add shared property via prototype ---
Person.prototype.species = "Homo sapiens";
console.log(alice.species); // Homo sapiens
