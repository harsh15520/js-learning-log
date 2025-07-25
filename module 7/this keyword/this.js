// --- 1. What is the `this` keyword? ---
// In global scope (Node.js or browser)
console.log("Global this:", this); // Node: {} (module.exports), Browser: window

// Inside a regular function (non-strict mode)
function showThis() {
  console.log("Function this (non-strict):", this);
}
showThis(); // Node: global, Browser: window

// Inside a method (object's own function)
const obj = {
  value: 42,
  show() {
    console.log("Method this:", this.value);
  }
};
obj.show(); // 42

// Arrow function vs. regular function
const obj2 = {
  name: "Scaler",
  regular: function() { console.log("Regular:", this.name); },
  arrow: () => console.log("Arrow:", this.name)
};
obj2.regular(); // "Scaler"
obj2.arrow();   // likely undefined

// --- 2. 'this' in Node.js (non-strict mode) ---
function nodeNonStrict() {
  console.log("Node.js Non-Strict:", this);
}
nodeNonStrict(); // global object in Node

// --- 3. 'this' in Node.js (strict mode) ---
"use strict";
function nodeStrict() {
  console.log("Node.js Strict:", this);
}
nodeStrict(); // undefined

// --- 4. 'this' in the Browser ---
/* In browser console or an HTML file run:
console.log(this); // window

function browserFunc() { console.log(this); }
browserFunc(); // window

document.body.onclick = function() { console.log(this); }; // <body> element

const btn = document.createElement('button');
btn.innerText = "Click Me!";
btn.onclick = function() { console.log(this); }; // the button
document.body.appendChild(btn);
*/

// Constructor function
function Person(name) {
  this.name = name;
}
const p = new Person("Alex");
console.log("Constructor this:", p.name); // Alex
