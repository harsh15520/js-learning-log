let test1=()=>{//this is arrow function
    console.log(1)
}
let test2=a=>{//a is 
    console.log(a+2)
}
let test3=(a,b)=>console.log(a+b)
let test4=sound=>`hello ${sound +',it is of dog'}`;

test1()
test2(2)
test3(3,4)
console.log(test4('woof'));
//backtick use case
//console.log('hi
  //  happy')
console.log(`he is 
    a good
    man`)
var person = {first_name:'harry',
    age:35,nationality:'indian',address:{city:'udaipur',district:'goenke'}
}
//destructng object+nested 
let{first_name:name,age:my_age,nationality:countryman,address:{city}}=person
console.log(countryman)
console.log(city)
