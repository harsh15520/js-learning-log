const transactions=[1000,-2000,3000,4000]
const InvalidTransaction=transactions.find(function(n){
    return n<0;
})
console.log(InvalidTransaction)
const TransactionIndex=transactions.findIndex(function(n){
    return n<0
})
console.log(TransactionIndex)
//some and every=>return boolean
const validTransactions=transactions.some(function(n){
    return n>0
})
console.log(validTransactions)
const AllValidTransactions=transactions.every(function(n){
    return n>0
})
console.log(AllValidTransactions)
