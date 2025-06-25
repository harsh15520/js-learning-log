// var is function-scoped (not block-scoped) and allows redeclaration
var a = 35;
var b = 25;
console.log(b); // 25

var b = 45; // Redeclaration allowed with var
console.log(b); // 45

if (a === 35) {
    // Hoisting: declaration is moved to top (value undefined until assignment)
    console.log(first_name); // undefined (not ReferenceError)
    var first_name = 'harry'; 
}
console.log(first_name); // 'harry' (var is not block-scoped)

// var is function-scoped
function greet() {
    var last_name = 'brook';
}
// console.log(last_name); // ReferenceError: last_name not defined

// let is block-scoped and disallows redeclaration
let c = 22;
// let c = 44; // SyntaxError: Identifier 'c' has already been declared

if (true) {
    let city = 'newyork';
}
// console.log(city); // ReferenceError: city not defined (block-scoped)
