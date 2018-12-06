var x = 12

function scope() {
    var x = 33
    console.log(x);
}
scope()//33
console.log(x); //12

var x = 12

function scope() {
    const x = 33
    if (true){
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);

/*
    variable grammer    obeys functional scope      obeys block scope       can be mutated (change)
    var                 x                           -                       x
    let                 x                           x                       x
    const               x                           x                       x
*/

