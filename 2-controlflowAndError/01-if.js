let isOn = true;

if (isOn == true) {
    console.log('The light is on!')
}

if (isOn) {
    console.log('The light is on, yay!')
};

let isOff = false;

if(isOff == false){
console.log("it's off")
}


let weather = 65;

if(weather <70 && weather > 65){
    console.log("wear a jacket")
}


for( var i = 0; i <= 100; i++)
    if( i % 15 == 0 ) {
    console.log('fizzBuzz')
}else if((i % 3) == 0 ) {
    console.log('fizz')
}else if((i % 5) == 0 ) {
    console.log('buzz')
}else {
    console.log(i)
}