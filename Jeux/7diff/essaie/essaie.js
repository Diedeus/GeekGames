let element = document.querySelector('.btnAll')
let erreur1 = false
let erreur2 = false
let erreur3 = false
let erreur4 = false
let erreur5 = false
let erreur6 = false
let erreur7 = false

let timer
let startTime
let tour = 0 
 let minuteur = 300
 let chrono = 0
 let chronoseconde = 0
 let chronominute = 0
 let afftimer = document.querySelector('#timer')

function startTimer(){
    startTime = Date.now()       //Enregistre le temps de début du timer
    timer = setTimeout(function(){
        let endTime = Date.now(); //enregistre le temps de fin de timer
        let elapsedTime = endTime - startTime; // calcule le temps écoulé
        
        tour += 1
        console.log(tour)
        chronoS =  minuteur - tour
        console.log(chronoS)
        chronoseconde = chronoS % 60
        chronominute = (chronoS - chronoseconde) / 60
        console.log ("il reste : " + chronominute + "min" + chronoseconde)
        console.log("Temps écoulé :" + elapsedTime + " ms")
        afftimer.textContent= ""
        afftimer.textContent ='il reste : ' + chronominute + 'min' + chronoseconde
        startTimer()
    }, 1000)
}

function stopTimer() {
    clearTimeout(timer); // Arrête le timer
  }


     startTimer()
element.addEventListener("click", function(event){
    let rect = element.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    console.log("Coordonnées du clic: x=", x, ", y=", y)
   
 

    if( x > 40 && x < 80 && y > 0 && y < 30 && erreur1 === false){
        console.log("ceci est l'erreur numero 1")
        erreur1 = true
        let spanerr1 = document.querySelector('#err1')
        spanerr1.style.display = "block"
    }if ( x > 45 && x < 70 && y > 180 && y < 190 && erreur2 === false){
        console.log("ceci est l'erreur numero 2")
        erreur2 = true
        let spanerr2 = document.querySelector('#err2')
        spanerr2.style.display ="block"
    } if (x > 150 && x < 160 && y > 290 && y < 305 && erreur3 === false ){
        console.log("ceci est l'erreur numero 3")
        erreur3 = true
        let spanerr3 = document.querySelector('#err3')
        spanerr3.style.display = "block"
    } if (x > 385 && x < 415 && y > 130 && y < 190 && erreur4 === false ){
        console.log("ceci est l'erreur numero 4")
        erreur4 = true
        let spanerr4 = document.querySelector('#err4')
        spanerr4.style.display = "block"
    } if (x > 460 && x < 480 && y > 180 && y < 250 && erreur5 === false ){
        console.log("ceci est l'erreur numero 5")
        erreur5 = true
        let spanerr5 = document.querySelector('#err5')
        spanerr5.style.display = "block"
    } if (x > 420 && x < 440 && y > 120 && y < 135 && erreur6 === false ){
        console.log("ceci est l'erreur numero 6")
        erreur6 = true
        let spanerr6 = document.querySelector('#err6')
        spanerr6.style.display = "block"
    }if (x > 200 && x < 260 && y > 440 && y < 490 && erreur7 === false ){
        console.log("ceci est l'erreur numero 7")
        erreur7 = true
        let spanerr7 = document.querySelector('#err7')
        spanerr7.style.display = "block"
    } if ( erreur1 === true && erreur2 === true && erreur3 === true && erreur4 === true && erreur5 === true && erreur6 === true && erreur7 === true){
        console.log("tas win bro")
        stopTimer()
    }
    
    
})

