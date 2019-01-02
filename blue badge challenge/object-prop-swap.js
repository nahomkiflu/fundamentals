/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2
*/


function Swap(obj, key1, key2) {
    let temp = {};
for (let enumerable in obj){
    temp[enumerable] = obj[enumerable]
}

temp[key1] = obj[key2];
temp[key2] =obj[key1]}

let person = {
  fName: 'Tom',
  lName: 'McClellan'
}
 

console.log(swap(person, 'whatev', 'whatev'))