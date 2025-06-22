var add=function(a,b){
    return a+b;
}
add(2,3)//will not print
console.log('output1',add(2,3))
//hoisting+initialized->called before declaration->undefined
console.log('output2',first_name)
var first_name='hardy'
//hoisting->called before decl/initiali.. ->temporal dead zone(tdz-restricted)->reference error
//console.log('output3',last_name)
let last_name='dicausta'
//function hoisting->work correct
console.log('output4',subtract(3,4))
function subtract(c,d){
    console.log(c-d)
}
//expression hoisting->reference error
console.log('output5',multiply(5,6))
multiply=function(e,f){
    console.log(e*f)
}
