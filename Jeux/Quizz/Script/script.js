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
let score = 0 
let scoreInput = document.getElementById("scoreInput")
let scoreForm = document.querySelector('#scoreForm')


RepA.addEventListener("click", function () {
    if (Reponse_quizz1 === 'A') {
        RepA.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        

    }
}) 

RepB.addEventListener("click", function () {
    if (Reponse_quizz1 === 'B') {
        RepB.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
    }
})

RepC.addEventListener("click", function () {
    if (Reponse_quizz1 === 'C') {
        RepC.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
    }
})

RepD.addEventListener("click", function () {
    if (Reponse_quizz1 === 'D') {
        RepD.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
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
    btnsui.style.display = "none"
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
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
    } else {
        RepA2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
    }
}) 

RepB2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'B') {
        RepB2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
    } else {
        RepB2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
    }
})

RepC2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'C') {
        RepC2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
    } else {
        RepC2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
    }
})

RepD2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'D') {
        RepD2.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
    } else {
        RepD2.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
    }
})

let RepA3 = document.querySelector('#RA3');
let RepB3 = document.querySelector('#RB3');
let RepC3 = document.querySelector('#RC3');
let RepD3 = document.querySelector('#RD3');

RepA3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'A') {
        RepA3.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    } else {
        RepA3.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    }
}) 

RepB3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'B') {
        RepB3.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    } else {
        RepB3.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    }
})

RepC3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'C') {
        RepC3.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    } else {
        RepC3.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    }
})

RepD3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'D') {
        RepD3.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    } else {
        RepD3.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
    }
})

let RepA4 = document.querySelector('#RA4');
let RepB4 = document.querySelector('#RB4');
let RepC4 = document.querySelector('#RC4');
let RepD4 = document.querySelector('#RD4');

RepA4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'A') {
        RepA4.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    } else {
        RepA4.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    }
}) 

RepB4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'B') {
        RepB4.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    } else {
        RepB4.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    }
})

RepC4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'C') {
        RepC4.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    } else {
        RepC4.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    }
})

RepD4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'D') {
        RepD4.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    } else {
        RepD4.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
    }
})

let RepA5 = document.querySelector('#RA5');
let RepB5 = document.querySelector('#RB5');
let RepC5 = document.querySelector('#RC5');
let RepD5 = document.querySelector('#RD5');

RepA5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'A') {
        RepA5.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    } else {
        RepA5.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    }
}) 

RepB5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'B') {
        RepB5.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    } else {
        RepB5.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    }
})

RepC5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'C') {
        RepC5.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    } else {
        RepC5.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    }
})

RepD5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'D') {
        RepD5.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    } else {
        RepD5.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
    }
})

let RepA6 = document.querySelector('#RA6');
let RepB6 = document.querySelector('#RB6');
let RepC6 = document.querySelector('#RC6');
let RepD6 = document.querySelector('#RD6');

RepA6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'A') {
        RepA6.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    } else {
        RepA6.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    }
}) 

RepB6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'B') {
        RepB6.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    } else {
        RepB6.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    }
})

RepC6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'C') {
        RepC6.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    } else {
        RepC6.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    }
})

RepD6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'D') {
        RepD6.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    } else {
        RepD6.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
    }
})

let RepA7 = document.querySelector('#RA7');
let RepB7 = document.querySelector('#RB7');
let RepC7 = document.querySelector('#RC7');
let RepD7 = document.querySelector('#RD7');

RepA7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'A') {
        RepA7.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    } else {
        RepA7.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    }
}) 

RepB7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'B') {
        RepB7.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    } else {
        RepB7.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    }
})

RepC7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'C') {
        RepC7.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    } else {
        RepC7.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    }
})

RepD7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'D') {
        RepD7.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    } else {
        RepD7.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
    }
})

let RepA8 = document.querySelector('#RA8');
let RepB8 = document.querySelector('#RB8');
let RepC8 = document.querySelector('#RC8');
let RepD8 = document.querySelector('#RD8');

RepA8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'A') {
        RepA8.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    } else {
        RepA8.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    }
}) 

RepB8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'B') {
        RepB8.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    } else {
        RepB8.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    }
})

RepC8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'C') {
        RepC8.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    } else {
        RepC8.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    }
})

RepD8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'D') {
        RepD8.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    } else {
        RepD8.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
    }
})

let RepA9 = document.querySelector('#RA9');
let RepB9 = document.querySelector('#RB9');
let RepC9 = document.querySelector('#RC9');
let RepD9 = document.querySelector('#RD9');

RepA9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'A') {
        RepA9.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    } else {
        RepA9.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    }
}) 

RepB9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'B') {
        RepB9.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    } else {
        RepB9.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    }
})

RepC9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'C') {
        RepC9.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    } else {
        RepC9.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    }
})

RepD9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'D') {
        RepD9.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    } else {
        RepD9.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
    }
})

let RepA10 = document.querySelector('#RA10');
let RepB10 = document.querySelector('#RB10');
let RepC10 = document.querySelector('#RC10');
let RepD10 = document.querySelector('#RD10');

RepA10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'A') {
        RepA10.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    } else {
        RepA10.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    }
}) 

RepB10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'B') {
        RepB10.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    } else {
        RepB10.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    }
})

RepC10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'C') {
        RepC10.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    } else {
        RepC10.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    }
})

RepD10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'D') {
        RepD10.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    } else {
        RepD10.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
    }
})

