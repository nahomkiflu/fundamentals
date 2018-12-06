let student = { name: "nahom", awesome: true, course: "javaScript" };

for(item in student){
    console.log(item); //key
    console.log(student[item]);
}

let catArray = [ 'tabby', 'burmese', 'ragdoll', 'tortie' ];
for(cat in catArray){
    console.log(cat);
} 

var name = "nahom";
var capName;

for(var letter in name){
    if(let == 0){
        capName = name[latter].toUpperCase();
    } else {
        capName += name[letter].toLowerCase();
    }
}

console.log(capName);