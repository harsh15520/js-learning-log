//array stores value of different types
var arr=[12,'hello',true,12.32];
var pop1st=arr.shift();
var push1st=arr.unshift(3);
console.log(pop1st);
console.log('about the array \n',arr);
//object:key value pair, list and object inside object
var person={'first_name':"harry",
    'age':24,
    'friends':['maddy','priest','sammy'],
    'schooling':{'school_name':'IIT','address':'kanauj'}
};
console.log('about the person \n',person);
console.log(person.schooling.school_name);
console.log(person.friends[0]);
person.friends[0]='katty';
console.log(person.friends[0]);
//using functions in the objects,greet() uses the short method syntax introduced in ES6 (ECMAScript 2015).
var person1={'nam':'andy',greet() {console.log(`hello ${this.nam}`);}};
console.log(person1.greet());
console.log(person1);
// bio is older form for function declaration inside object
var person2={'pet_name':'katty',bio: function(){console.log(`hii ${this.pet_name}`);}};
console.log(person2.bio())
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
//looping the object elements
Object.keys(person).forEach(key=>{console.log(`${key} `,person[key])})
//using assign from objects
var merged=Object.assign({},person,person1)
//{...person} creates copy of object, freeze makes object completely immutable(no change/addition)
var frozen=Object.freeze({...person});
//seal allow changes but only in existing elements. no new element can be added
var sealed=Object.seal({...person})
sealed.age=100
console.log(sealed)
//creating a constructor
function Animal(type, sound){
    this.type=type;//attributes
    this.sound=sound;
    //method
    this.speak =function(){
        console.log(`this ${this.type} says ${this.sound}`);
    }
}
//object creation
const Dog= new Animal('Dog','woof');
Dog.speak()
//object at run time on the fly
console.log('my',{age:18})
function color(){
    return {color:'yellow'};
}
console.log(color())
//when we assign object-for multitime use; when we dont assign object:-single time use
//2 objects with same context are still different=>obj1 &obj2 store at different locations in memory.
var obj1={age:18}
var obj2={age:18}
if(obj1==obj2){//why false=>object are compared by (reference->where they lie in memory),not by value
    console.log("contradict");
}
else{
    console.log('different objects')
}
//interesting
if(obj1=={age:18}){//{age:18} this is new obj created on fly.
    console.log("both are same");
}
else{
    console.log("{age:18},here is new obj,thus both are different object")
}
