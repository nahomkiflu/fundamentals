/********************* */
/// function (folder)
// - declarations.js


// function are a set of statements that perfom a tast or calculates a value

// declartion


function hi(){
    console.log('hi')
}

// expression

var hi = function hi(){
    console.log("i already said hi!")
}

// declaration = hoisted
// expression != hoisted

//function calling

hi();
hi();
hi();

function hey(){
    console.log('dave,tell cooper i said hey');
}



//challenge : creat a function that, when involke, list out the number 1 through 10



function printNumber(){
    for(let i=1;i<11;i++){
        console.log(i)
    }
}



// challenge: given an array, creat a function that lists out the individual values*/

let arr = ["this", "is", "really", "cool"]

function arrayList(){
  for(list in arry){
       console.log(arr[list]);
   }
}

arrayList();

