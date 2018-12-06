/*
what is an array?
    has [] brackets
    can hold multiple datatypes
    great for listing
    */

let students = ['tony', 'marshall','randy', 'ray', 23, true, ['ryan', 'iesha']]
console.log(typeof students)
console.log(students instanceof Array)
console.log(students[6][0])

let name = ['iesha']
    console.log(`hello ${name} you look nice today.`)


let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
for (f in food) {

    console.log(food[f])
}
food.push('porkchop')
for (f in food) {

  console.log(food[f])
}
//console.log(food[f])

food.forEach(f => { console.log(f);})


let movie = ['lion king', 'avangers', 'superman', 'fast five'];
movies.push('force awekens')
movies.slice(3,1,'obi wan')
movies.forEach
for (m in movie) {

    console.log(movie[m])
}


let movie = ['lion king', 'avangers', 'superman', 'fast five'];
for (m in movie) {

movie.forEach(m => { console.log(m);})
movie.forEach((movie, number) => { console.log(number); console.log(movie)})
}


let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length)

let color = ['blue', 'green', 'yellow', 'orange', 'purple'];
console.log(typeof color.toString())
color.forEach(c => console.log(c))

//challenge

let arr = [1,2,3,4,5]
if (arr instanceof array === true) {
    let revarr = arr.reverse()
    revarr.forEach(a => console.log(a))
}