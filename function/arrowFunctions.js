function coffee(){
    console.log("i always need coffee");
}

coffee();

//fat Arrow Function
let coffee = () => {
    console.log("coffee is GREAT");
}

coffee();

or 

//one-Linefat Arrow Function

let coffee = () => console.log("coffee is GREAT");

coffee();

let name = (fistname) => console.log(`${firstName} is my name`)

name("mel or whatever");


/******************
 * returns
 ****************************/

function captializeName(name) {
    let capName = ' ';
    for (let H in name){
        if (H == 0){
            capName += name[H].toUpperCase();
        } else {
            capName += name[H].toLowerCase();
        } 
    }
   // console.log(capName)
    return capName
}
const newName = captializeName("nahom");

console.log( newName + " how are you?")



// challenge 
//make a tip calculator using a function
// have it return the value 
// capture that returned value in a variable 
// print that variable

function tipCal(bill) {
    tip = (bill * 0.2)
return tip.toFixed(2)
}

let totalTip = tipCal(20.00)
console.log(totalTip)


