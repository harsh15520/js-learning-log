array=[{name:'happy',age:34,gender:'male'},
    {name:'hikki',age:12,gender:'female'},
    {name:'dablu',age:9,gender:'male'}
]
const maleArray=array.filter(function(obj){
    return obj.gender=='male'
}).map(function(n){
    return n.age
})
console.log(maleArray)
