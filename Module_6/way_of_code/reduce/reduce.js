let sumation=array1.reduce(function(acc,value){
    updatedSum=acc+value
    return updatedSum
},0)
console.log(sumation)

let fruits=['apple','banana','orange','apple','banana']
let uniquefruits=fruits.reduce(function(acc,value){
    if(acc[value]){
        acc[value]+=1
    }
    else{
        acc[value]=1
    }
    return acc

},{})
console.log(uniquefruits)

const array3=[[1,2,3],[4,5,6],[7,8,9]]
let flatArray=array3.reduce(function(acc,value){
    return acc.concat(value)
},[])
console.log(flatArray)
