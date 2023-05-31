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
let Rep2 = document.querySelector('.reponse2');
let Rep3 = document.querySelector('.reponse3');
let Rep4 = document.querySelector('.reponse4');
let Rep5 = document.querySelector('.reponse5');
let Rep6 = document.querySelector('.reponse6');
let Rep7 = document.querySelector('.reponse7');
let Rep8 = document.querySelector('.reponse8');
let Rep9 = document.querySelector('.reponse9');
let Rep10 = document.querySelector('.reponse10');

let btnsui = document.querySelector('.reussite')
let btnechec = document.querySelector('.echec')
let winner = document.querySelector('.win')

let scoreechec = document.querySelector('.scoreechec');



console.log(Reponse_quizz1)
let score = 0 
let scoreInput = document.getElementById("scoreInput")
let scoreForm = document.querySelector('#scoreForm')


RepA.addEventListener("click", function () {
    if (Reponse_quizz1 === 'A') {
        RepA.style.backgroundColor = "green";
        RepA.style.color = "white";
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
        RepA.style.color = "white";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;

    }
}) 

RepB.addEventListener("click", function () {
    if (Reponse_quizz1 === 'B') {
        RepB.style.backgroundColor = "green";
        RepB.style.color = "white";
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
        RepB.style.color = "white";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC.addEventListener("click", function () {
    if (Reponse_quizz1 === 'C') {
        RepC.style.backgroundColor = "green";
        RepC.style.color = "white";
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
        RepC.style.color = "white";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD.addEventListener("click", function () {
    if (Reponse_quizz1 === 'D') {
        RepD.style.backgroundColor = "green";
        RepD.style.color = "white";
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
        RepD.style.color = "white";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA.disabled = true
        RepB.disabled = true
        RepC.disabled = true
        RepD.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})


document.addEventListener('DOMContentLoaded', function () {
    let suiv = document.querySelector('.questionSuivante');
    let y = 1;
  
    if (btnsui) {
      btnsui.addEventListener("click", function () {
        y += 1;
        btnsui.style.display = "none";
        refresh(y);
        console.log(y);
      });
    }
  });


let RepA2 = document.querySelector('#RA2');
let RepB2 = document.querySelector('#RB2');
let RepC2 = document.querySelector('#RC2');
let RepD2 = document.querySelector('#RD2');

RepA2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'A') {
        RepA2.style.backgroundColor = "green";
        RepA2.style.color = "white";
        Rep2.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA2.style.backgroundColor = "red";
        RepA2.style.color = "white";
        Rep2.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'B') {
        RepB2.style.backgroundColor = "green";
        RepB2.style.color = "white";
        Rep2.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB2.style.backgroundColor = "red";
        RepB2.style.color = "white";
        Rep2.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'C') {
        RepC2.style.backgroundColor = "green";
        RepC2.style.color = "white";
        Rep2.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC2.style.backgroundColor = "red";
        RepC2.style.color = "white";
        Rep2.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD2.addEventListener("click", function () {
    if (Reponse_quizz2 === 'D') {
        RepD2.style.backgroundColor = "green";
        RepD2.style.color = "white";
        Rep2.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD2.style.backgroundColor = "red";
        RepD2.style.color = "white";
        Rep2.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA2.disabled = true
        RepB2.disabled = true
        RepC2.disabled = true
        RepD2.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA3 = document.querySelector('#RA3');
let RepB3 = document.querySelector('#RB3');
let RepC3 = document.querySelector('#RC3');
let RepD3 = document.querySelector('#RD3');

RepA3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'A') {
        RepA3.style.backgroundColor = "green";
        RepA3.style.color = "white";
        Rep3.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA3.style.backgroundColor = "red";
        RepA3.style.color = "white";
        Rep3.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'B') {
        RepB3.style.backgroundColor = "green";
        RepB3.style.color = "white";
        Rep3.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB3.style.backgroundColor = "red";
        RepB3.style.color = "white";
        Rep3.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'C') {
        RepC3.style.backgroundColor = "green";
        RepC3.style.color = "white";
        Rep3.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC3.style.backgroundColor = "red";
        RepC3.style.color = "white";
        Rep3.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD3.addEventListener("click", function () {
    if (Reponse_quizz3 === 'D') {
        RepD3.style.backgroundColor = "green";
        RepD3.style.color = "white";
        Rep3.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD3.style.backgroundColor = "red";
        RepD3.style.color = "white";
        Rep3.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA3.disabled = true
        RepB3.disabled = true
        RepC3.disabled = true
        RepD3.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA4 = document.querySelector('#RA4');
let RepB4 = document.querySelector('#RB4');
let RepC4 = document.querySelector('#RC4');
let RepD4 = document.querySelector('#RD4');

RepA4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'A') {
        RepA4.style.backgroundColor = "green";
        RepA4.style.color = "white";
        Rep4.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA4.style.backgroundColor = "red";
        RepA4.style.color = "white";
        Rep4.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'B') {
        RepB4.style.backgroundColor = "green";
        RepB4.style.color = "white";
        Rep4.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB4.style.backgroundColor = "red";
        RepB4.style.color = "white";
        Rep4.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'C') {
        RepC4.style.backgroundColor = "green";
        RepC4.style.color = "white";
        Rep4.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC4.style.backgroundColor = "red";
        RepC4.style.color = "white";
        Rep4.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD4.addEventListener("click", function () {
    if (Reponse_quizz4 === 'D') {
        RepD4.style.backgroundColor = "green";
        RepD4.style.color = "white";
        Rep4.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true 
        score += 50
        scoreInput.value = score
    } else {
        RepD4.style.backgroundColor = "red";
        RepD4.style.color = "white";
        Rep4.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA4.disabled = true
        RepB4.disabled = true
        RepC4.disabled = true
        RepD4.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA5 = document.querySelector('#RA5');
let RepB5 = document.querySelector('#RB5');
let RepC5 = document.querySelector('#RC5');
let RepD5 = document.querySelector('#RD5');

RepA5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'A') {
        RepA5.style.backgroundColor = "green";
        RepA5.style.color = "white";
        Rep5.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA5.style.backgroundColor = "red";
        RepA5.style.color = "white";
        Rep5.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'B') {
        RepB5.style.backgroundColor = "green";
        RepB5.style.color = "white";
        Rep5.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB5.style.backgroundColor = "red";
        RepB5.style.color = "white";
        Rep5.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'C') {
        RepC5.style.backgroundColor = "green";
        RepC5.style.color = "white";
        Rep5.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC5.style.backgroundColor = "red";
        RepC5.style.color = "white";
        Rep5.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD5.addEventListener("click", function () {
    if (Reponse_quizz5 === 'D') {
        RepD5.style.backgroundColor = "green";
        RepD5.style.color = "white";
        Rep5.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD5.style.backgroundColor = "red";
        RepD5.style.color = "white";
        Rep5.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA5.disabled = true
        RepB5.disabled = true
        RepC5.disabled = true
        RepD5.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA6 = document.querySelector('#RA6');
let RepB6 = document.querySelector('#RB6');
let RepC6 = document.querySelector('#RC6');
let RepD6 = document.querySelector('#RD6');

RepA6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'A') {
        RepA6.style.backgroundColor = "green";
        RepA6.style.color = "white";
        Rep6.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA6.style.backgroundColor = "red";
        RepA6.style.color = "white";
        Rep6.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'B') {
        RepB6.style.backgroundColor = "green";
        RepB6.style.color = "white";
        Rep6.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB6.style.backgroundColor = "red";
        RepB6.style.color = "white";
        Rep6.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'C') {
        RepC6.style.backgroundColor = "green";
        RepC6.style.color = "white";
        Rep6.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC6.style.backgroundColor = "red";
        RepC6.style.color = "white";
        Rep6.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD6.addEventListener("click", function () {
    if (Reponse_quizz6 === 'D') {
        RepD6.style.backgroundColor = "green";
        RepD6.style.color = "white";
        Rep6.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD6.style.backgroundColor = "red";
        RepD6.style.color = "white";
        Rep6.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA6.disabled = true
        RepB6.disabled = true
        RepC6.disabled = true
        RepD6.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA7 = document.querySelector('#RA7');
let RepB7 = document.querySelector('#RB7');
let RepC7 = document.querySelector('#RC7');
let RepD7 = document.querySelector('#RD7');

RepA7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'A') {
        RepA7.style.backgroundColor = "green";
        RepA7.style.color = "white";
        Rep7.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA7.style.backgroundColor = "red";
        RepA7.style.color = "white";
        Rep7.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'B') {
        RepB7.style.backgroundColor = "green";
        RepB7.style.color = "white";
        Rep7.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB7.style.backgroundColor = "red";
        RepB7.style.color = "white";
        Rep7.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'C') {
        RepC7.style.backgroundColor = "green";
        RepC7.style.color = "white";
        Rep7.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC7.style.backgroundColor = "red";
        RepC7.style.color = "white";
        Rep7.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD7.addEventListener("click", function () {
    if (Reponse_quizz7 === 'D') {
        RepD7.style.backgroundColor = "green";
        RepD7.style.color = "white";
        Rep7.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD7.style.backgroundColor = "red";
        RepD7.style.color = "white";
        Rep7.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA7.disabled = true
        RepB7.disabled = true
        RepC7.disabled = true
        RepD7.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA8 = document.querySelector('#RA8');
let RepB8 = document.querySelector('#RB8');
let RepC8 = document.querySelector('#RC8');
let RepD8 = document.querySelector('#RD8');

RepA8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'A') {
        RepA8.style.backgroundColor = "green";
        RepA8.style.color = "white";
        Rep8.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA8.style.backgroundColor = "red";
        RepA8.style.color = "white";
        Rep8.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'B') {
        RepB8.style.backgroundColor = "green";
        RepB8.style.color = "white";
        Rep8.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB8.style.backgroundColor = "red";
        RepB8.style.color = "white";
        Rep8.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'C') {
        RepC8.style.backgroundColor = "green";
        RepC8.style.color = "white";
        Rep8.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC8.style.backgroundColor = "red";
        RepC8.style.color = "white";
        Rep8.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD8.addEventListener("click", function () {
    if (Reponse_quizz8 === 'D') {
        RepD8.style.backgroundColor = "green";
        RepD8.style.color = "white";
        Rep8.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD8.style.backgroundColor = "red";
        RepD8.style.color = "white";
        Rep8.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA8.disabled = true
        RepB8.disabled = true
        RepC8.disabled = true
        RepD8.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA9 = document.querySelector('#RA9');
let RepB9 = document.querySelector('#RB9');
let RepC9 = document.querySelector('#RC9');
let RepD9 = document.querySelector('#RD9');

RepA9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'A') {
        RepA9.style.backgroundColor = "green";
        RepA9.style.color = "white";
        Rep9.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepA9.style.backgroundColor = "red";
        RepA9.style.color = "white";
        Rep9.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'B') {
        RepB9.style.backgroundColor = "green";
        RepB9.style.color = "white";
        Rep9.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepB9.style.backgroundColor = "red";
        RepB9.style.color = "white";
        Rep9.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'C') {
        RepC9.style.backgroundColor = "green";
        RepC9.style.color = "white";
        Rep9.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepC9.style.backgroundColor = "red";
        RepC9.style.color = "white";
        Rep9.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD9.addEventListener("click", function () {
    if (Reponse_quizz9 === 'D') {
        RepD9.style.backgroundColor = "green";
        RepD9.style.color = "white";
        Rep9.textContent = "Bien jouer, c'est la bonne Réponse"
        btnsui.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        score += 50
        scoreInput.value = score
    } else {
        RepD9.style.backgroundColor = "red";
        RepD9.style.color = "white";
        Rep9.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA9.disabled = true
        RepB9.disabled = true
        RepC9.disabled = true
        RepD9.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

let RepA10 = document.querySelector('#RA10');
let RepB10 = document.querySelector('#RB10');
let RepC10 = document.querySelector('#RC10');
let RepD10 = document.querySelector('#RD10');
let showscore = document.querySelector('.win');

let scorewin = document.querySelector('.scorewinner')
let scoreform2 = document.querySelector('#scoreForm2')
let scoreinput2 = document.querySelector('#scoreInput2')
let submitscore2 = document.querySelector('#submitScore2')

RepA10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'A') {
        RepA10.style.backgroundColor = "green";
        RepA10.style.color = "white";
        Rep10.textContent = "Bien jouer, c'est la bonne Réponse"
       
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        score += 50
        scoreinput2.value = score
        scoreform2.style.display = "block"
        showscore.style.display="block"
        scorewin.innerHTML = score;
    } else {
        RepA10.style.backgroundColor = "red";
        RepA10.style.color = "white";
        Rep10.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
}) 

RepB10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'B') {
        RepB10.style.backgroundColor = "green";
        RepB10.style.color = "white";
        Rep10.textContent = "Bien jouer, c'est la bonne Réponse"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        score += 50
        scoreinput2.value = score
        scoreform2.style.display = "block"
        showscore.style.display="block"
        scorewin.innerHTML = score;
    } else {
        RepB10.style.backgroundColor = "red";
        RepB10.style.color = "white";
        Rep10.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepC10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'C') {
        RepC10.style.backgroundColor = "green";
        RepC10.style.color = "white";
        Rep10.textContent = "Bien jouer, c'est la bonne Réponse"

        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        score += 50
        scoreinput2.value = score
        scoreform2.style.display = "block"
        showscore.style.display="block"
        scorewin.innerHTML = score;
    } else {
        RepC10.style.backgroundColor = "red";
        RepC10.style.color = "white";
        Rep10.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

RepD10.addEventListener("click", function () {
    if (Reponse_quizz10 === 'D') {
        RepD10.style.backgroundColor = "green";
        RepD10.style.color = "white";
        Rep10.textContent = "Bien jouer, c'est la bonne Réponse"

        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        score += 50
        scoreinput2.value = score
        scoreform2.style.display = "block"
        showscore.style.display="block"
        scorewin.innerHTML = score;
    } else {
        RepD10.style.backgroundColor = "red";
        RepD10.style.color = "white";
        Rep10.textContent = "Ce n\'est pas la bonne réponse"
        btnechec.style.display = "block"
        RepA10.disabled = true
        RepB10.disabled = true
        RepC10.disabled = true
        RepD10.disabled = true
        scoreForm.style.display = "block"
        scoreechec.innerHTML = score;
    }
})

