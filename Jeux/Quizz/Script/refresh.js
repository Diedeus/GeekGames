let ecrquestion2 = document.querySelector('.question2')
let ecrquestion3 = document.querySelector('.question3')
let ecrquestion4 = document.querySelector('.question4')
let ecrquestion5 = document.querySelector('.question5')
let ecrquestion6 = document.querySelector('.question6')
let ecrquestion7 = document.querySelector('.question7')
let ecrquestion8 = document.querySelector('.question8')
let ecrquestion9 = document.querySelector('.question9')
let ecrquestion10 = document.querySelector('.question10')

function refresh(y){
    if ( y === 2 ){
        ecrquestion.style.display = "none"
        ecrquestion2.style.display = "block"
    } if ( y === 3 ){
        ecrquestion2.style.display = "none"
        ecrquestion3.style.display = "block"
    } if ( y === 4){
        ecrquestion3.style.display = "none"
        ecrquestion4.style.display = "block"
    } if ( y === 5) {
        ecrquestion4.style.display = "none"
        ecrquestion5.style.display = "block"
    } if ( y === 6){
        ecrquestion5.style.display = "none"
        ecrquestion6.style.display = "block"
    } if ( y === 7 ){
        ecrquestion6.style.display = "none"
        ecrquestion7.style.display = "block"
    } if ( y === 8 ){
        ecrquestion7.style.display = "none"
        ecrquestion8.style.display = "block"
    } if ( y === 9 ){
        ecrquestion8.style.display = "none"
        ecrquestion9.style.display = "block"
    } if ( y === 10 ){
        ecrquestion9.style.display = "none"
        ecrquestion10.style.display = "block"
    }
}