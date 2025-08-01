// --- Basic ES6 Class Declaration ---
class Person {
  // Constructor called with 'new'
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method (on the prototype)
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  // Static method
  static species() {
    return "Homo sapiens";
  }
}

const alice = new Person('Alice', 30);
const bob = new Person('Bob', 28);

alice.greet(); // Hi, I'm Alice and I'm 30 years old.
bob.greet();   // Hi, I'm Bob and I'm 28 years old.

console.log(Person.species()); // Homo sapiens

// --- Class Expression (anonymous/assigned to a variable) ---
const Animal = class {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(`This is a ${this.type}`);
  }
};
const cat = new Animal('cat');
cat.speak(); // This is a cat
