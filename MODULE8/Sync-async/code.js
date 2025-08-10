// Import the file system module
const fs = require('fs');

try {
  // Read the file synchronously (will block until done)
  const data = fs.readFileSync('input.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
//asynchronous
console.log('asynchronous')
console.log('third line')
fs.readFile('file.txt','utf8',f3)
function f3(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log('file3->',data)
    }
    fs.readFile('file.txt','utf8',f4)
}


 function f4(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log('file4->',data)
    }
}

console.log('fourth line')
