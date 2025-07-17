//higher order function,example 1
function firstFunction(first,second){
    second('hello')
    console.log(first)
}
function secondFunction(argument){
    console.log(argument +'happy')
}

firstFunction('hey,',secondFunction)

//example 2,higher order function but with arrow function
const thirdFunction=(number)=>{
    return number%2===0
}

const fourthFunction=(number1,number2)=>{
    const number3=number1(number2)
    console.log(number3)
}

fourthFunction(thirdFunction,9)
//asynchronous callback
const delay=()=>{
    console.log('this message will be dis[layed after delay')
}
setTimeout(delay,2000)
