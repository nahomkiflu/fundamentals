let colorsArr = ['blue', 'green', 'purple', 'white', 'pink', 'maroon', 'violot', 'mocha' ]
let placeArr = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', ]
let heroArr = ['superman', 'wonder women', 'the flash', 'cyborg', 'aquamen' ]
function colorArray(colors, placement) {
    for(i = 0; i < 10; i++){
        console.log(`${i + 1}${placements[i]} is ${colors[i]}`)
    }
}

colorArray(colorArr,placement)



//object challenges
// creat a function that takes in an abject in the function
//check if the object contains a specific property and return a boolean 
//answer check for color has the value of green 
// for example
// example obj
// color: 'green

let marvel = {
    color: "green",
    smashes: "true",
    name: "hulk",
}

console.log(marvel.smashes)

//


let passobj = {
    color: 'green',
    smashes: true,
    name: 'hulk',
}

let failobj = {
    name: 'alex',
    languages: ['javascript','c#']
}
function colorisGreen(obj) {
    if(obj['color'] === 'green'){
        return true;
    }

    return false;
}



