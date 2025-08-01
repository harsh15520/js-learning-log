// --- Classic Encapsulation with Closures ---
function BankAccount(owner, initialBalance) {
  let balance = initialBalance; // Private variable via closure
  this.owner = owner;

  this.deposit = function(amount) {
    if (amount > 0) balance += amount;
  };
  this.withdraw = function(amount) {
    if (amount > 0 && amount <= balance) balance -= amount;
  };
  this.getBalance = function() {
    return balance;
  };
}

const acc1 = new BankAccount("Alice", 100);
acc1.deposit(50);
console.log(acc1.getBalance()); // 150
console.log(acc1.balance);      // undefined (private!)

// --- Encapsulation with ES2022+ Private Fields ---
class Employee {
  #salary; // Private field
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  getSalary() {
    return this.#salary;
  }
  giveRaise(amount) {
    if (amount > 0) this.#salary += amount;
  }
}

const emp = new Employee("Bob", 50000);
console.log(emp.getSalary()); // 50000
emp.giveRaise(5000);
console.log(emp.getSalary()); // 55000
// console.log(emp.#salary);  // SyntaxError: Private field
