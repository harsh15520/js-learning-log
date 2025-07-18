//using loop and explicitly creating a new array
let firstArray=[1,2,3,4,5]
let squaredArray1=[]
for(let i=0;i<firstArray.length;i+=1){
    squaredArray1.push(firstArray[i]*firstArray[i]);
}
console.log(squaredArray1)
//map creates a new array itself
const squaredArray2=firstArray.map(function(n){
    return n*n
})
console.log(squaredArray2)
//through arrowfn+map
let squaredArray3=(x)=>x.map(function(n){
        return n*n
    })
console.log(squaredArray3(firstArray))
//arrowfn+foreach=>return squared numbers not array.
let squaredArray4=(x)=>x.forEach((n)=> console.log(n*n))
squaredArray4(firstArray)
