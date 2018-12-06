//Parameters are like empty storage boxed we can name whatever we want//
//they need to use the same name inside of the functon//

// we can alse have multiple different parameters for a single function.//
// we provide the parameters when we call our function

function pet(animal){
    console.log(`i have a ${animal} for a pet`)
}

pet("dog");
pet("cat");
pet("dragon");

function sport(activity){
    console.log(`i play a ${activity} for a sport`)
}

sport("soccer");
sport("basketball");


function names(firstName, lastName){
    console.log(`hello my name is ${firstName} ${lastName}. `)
}

names("nahom", "kiflu");


// or 
function myName(first, last) {
    let fullName = first + ' ' + last;
    console.log()
}