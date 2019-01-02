//let x =10;
//console.log(x)

//document.getElementById('testParagraph').style.color = "orange"

//console.log(document.querySelectorAll('p.sampleClass'))

//console.log(document.querySelectorAll('p.sampleClass')[0].innerHTML)

//document.querySelectorAll('p.sampleClass')[0].innerText = '<i> My text has changed </i>';

// document.getElementById('clickThisButtom').addEventListener('click',(details) => {
  //  details.target.style.backgroundColor = 'blue'

// })

/*
    challenge:
    make button toggle between red and blue using DOM
    */
//
    //document.getElementById('clickThisButton').addEventListener('click', (details) => {
    //  if(details.target.style.backgroundColor == 'red'){
    //    details.target.style.backgroundColor = 'blue'
    // } else {
    //    details.target.style.backgroundColor = 'red'
    //}
    //});

// console.log(document.getElementById('nameinput')[0].interText)

document.getElementById('nameInput').addEventListener('keyup', e => {
    if(e.target.value == ''){
        document.getElementsByTagName('p')[0].innerText = 'NOTHING HAS CHANGED!!'
    } else {
        document.getElementsByTagName('p')[0].innerText = `Everyone, say hello to ${e.target.value}!`
    }
})
