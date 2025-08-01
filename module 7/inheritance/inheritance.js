// --- Base Class ---
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  info() {
    return `Animal: ${this.name}`;
  }
}

// --- Subclass (inherits methods & properties) ---
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent (Animal) constructor
    this.breed = breed;
  }
  // Overriding inherited method
  speak() {
    console.log(`${this.name} barks.`);
  }
  // Inherit info() from Animal without redefining
}

const animal = new Animal("Generic");
animal.speak(); // "Generic makes a noise."
console.log(animal.info()); // "Animal: Generic"

const dog = new Dog("Bruno", "Labrador");
dog.speak(); // "Bruno barks." (overridden)
console.log(dog.info()); // Inherited: "Animal: Bruno"
console.log(dog.breed); // "Labrador"

// --- Method Inheritance Chain Example ---
class GuideDog extends Dog {
  constructor(name, breed, skill) {
    super(name, breed);
    this.skill = skill;
  }
  // Add new method, inherit speak() from Dog
  guide() {
    console.log(`${this.name} can guide because of ${this.skill}.`);
  }
}

const guideDog = new GuideDog("Max", "Golden Retriever", "assistance");
guideDog.speak();  // "Max barks." (from Dog)
guideDog.guide();  // "Max can guide because of assistance."
console.log(guideDog.info()); // "Animal: Max" (from Animal)
