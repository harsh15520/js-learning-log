// --- Base Class ---
class Shape {
  area() {
    return 0; // By default, Shape has no area
  }
  describe() {
    return "This is a generic shape.";
  }
}

// --- Subclass: Circle ---
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  describe() {
    return `Circle with radius ${this.radius}`;
  }
}

// --- Subclass: Rectangle ---
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  describe() {
    return `Rectangle ${this.width}x${this.height}`;
  }
}

// --- Demonstrate Polymorphism ---
const shapes = [
  new Shape(),
  new Circle(3),
  new Rectangle(4, 5)
];

shapes.forEach(shape => {
  console.log(shape.describe() + " — Area:", shape.area());
});
// Output shows "area" works differently depending on class!

// --- Dynamic Polymorphism: Functions operating on different subclasses ---
function printArea(s) {
  // Works with any Shape or subclass!
  console.log("Area is:", s.area());
}
printArea(new Circle(2));
printArea(new Rectangle(3, 7));
