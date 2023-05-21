let demarrer = document.querySelector('#demQuizz')
let ecrdem = document.querySelector('.demarage')
let ecrquestion = document.querySelector('.question1')

demarrer.addEventListener("click", function(){
    ecrdem.style.display = "none"
    ecrquestion.style.display = "block"
})

let RepA = document.querySelector('#RA');
let RepB = document.querySelector('#RB');
let RepC = document.querySelector('#RC');
let RepD = document.querySelector('#RD');
let Rep = document.querySelector('.reponse');
let btnsui = document.querySelector('.reussite')
let btnechec = document.querySelector('.echec')

console.log(Reponse_quizz1)
  

RepA.addEventListener("click", function () {
    if (Reponse_quizz1 === 'A') {
        RepA.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepA.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
}) 

RepB.addEventListener("click", function () {
    if (Reponse_quizz1 === 'B') {
        RepB.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepB.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
})

RepC.addEventListener("click", function () {
    if (Reponse_quizz1 === 'C') {
        RepC.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepC.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
})

RepD.addEventListener("click", function () {
    if (Reponse_quizz1 === 'D') {
        RepD.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepD.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
})

let acc = document.querySelector('.acc')
let reco = document.querySelector('.reco')
let suiv = document.querySelector('.questionSuivante')
let y = 1

acc.addEventListener("click", function(){
    window.location.href = "../../index.php"
})

reco.addEventListener("click", function(){
    location.reload()
})

suiv.addEventListener("click",function(){
    y += 1
    refresh(y)
})

let RepA2 = document.querySelector('#RA2');
let RepB2 = document.querySelector('#RB2');
let RepC2 = document.querySelector('#RC2');
let RepD2 = document.querySelector('#RD2');

RepA2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'A') {
        RepA2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepA2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
}) 

RepB2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'B') {
        RepB2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepB2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
})

RepC2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'C') {
        RepC2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepC2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
})

RepD2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'D') {
        RepD2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
    } else {
        RepD2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
    }
})