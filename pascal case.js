







let c = "i like learning at eleven fifty"

function pascalCaser(longString){
    let broken = longstring.split(' ');
    let newString = '';
    for(i = 0; i< broken.length; i++){
        let rest = broken[i].splice(1)
        let letter = broken[i].charAt(0).toUpperCase();
        newString += letter + rest + ' '
    } 
    return newString:
}
console.log(pascalCaser)):