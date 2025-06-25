//truthy,falsy,equality(strict/loose)
//The falsy values in JavaScript are specifically:

//false,0 (and -0),"" (empty string),null,undefined,NaN (Not a Number)
if("" || false || 0){
    console.log('hi');
}
else{
    console.log('bye');
}
var fluke='5';
//loose equality
if(fluke==5){
    console.log("happy");
}
else{
    console.log('angry');
}
//strict equality
if(fluke===5){
    console.log('bad');
}
else{
    console.log('good');
}
//Only 0 (number zero) is falsy.
//All other numbers, strings (except empty string ""), objects, arrays, functions, etc., are truthy.
function add(){
    return 3+4
}
console.log(add(7,9))//even though no arguments use,still allowed
