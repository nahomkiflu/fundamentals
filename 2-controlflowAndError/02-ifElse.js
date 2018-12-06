let weather = 75;

if (weather <70) {
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary!')
}

let name = "nahom";

if (name == "nahom"){
    console.log("hello, my name is nahom");
} else{
    console.log('hello, whats your name')
}

/*
 challenge:
capitalize the FIRST LETTR of name ONLY
*/

let name = "Nahom";

if(name[0] == name[0].toUppercase()) {
    firstLatter = name[0] + name.slice(1).toLowerCase()
      console.log(firstLetter);
} else{
    otherLetters = name.charAt(0).toUppercase() + name.slice(1).toLowerCase()
      console.log(otherLetters);
}

/*********************************** */

//Else If
let age = 30;

if(age >= 17){
    console.log('sorry, you are to young to do anything,');
}else if(age >= 18){
    console.log('yay! you can vote');
}else if(john >= 21){
    console.log('yay! you can drink')
}else if (age >= 25){
    console.log('yay you can rent a car')
}



/*
switch
switch statements helps us choose between several options for a variable and a default 
four main part to a switch statement
switch the argument being evaluated
case one of the options for the var to be 
breaking
*/


var friend="Dave";

switch (friend) {
    case "Nahom":
      console.log("hey Nahom, when are you going rock climbing");
      break;
    case "Dave":
      console.log("hey Dave, how is Copper?");
      break;
    case "Alecx":
      console.log("hey Alecx, when are we playing DnD?");
      break;
    default:
      console.log(`i am sorry, ${friend}, but do I know you?`);

    
}

var friend="nahom";

switch (friend) {
    case "Bob":
      console.log("hey Nahom, When are you going to the gym");
      break;
    case "john":
      console.log("hey John, hows the family");
      break;
    case "Alex":
      console.log("Hey Alex, how are you");
      break;
    default:
      console.log(`I'm sorry, ${friend}, but do I know you?`);
}


let yep = -8;

switch (true){
  case(yep < 0 && yep > -10):
       console.log('worked');
       break;
  case (yep > 0):
       console.log('worked');
       break;
  default:
        console.log("didnt work");
} 

// what is a ternary? a great way o write a single line for an if/ if else statement//

let x = 6;

(x>0) ? console.log("yes") : console.log("no")


if (x == 0) {
    console.log('hello');
} else if (x <0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

//* shorter ways 
//

let x = 7;
(x == 0) ? console.log("hello") : (x < 0) ? console.log("hi") : console.log("goodbye")


let age = 10;
(age >= 25) ? console.log('you can rent a car') : (age >= 21) ? console.log('you can drink') : (age >= 18) ? console.log('you can vote') : console.log('sorry you cant do anything')