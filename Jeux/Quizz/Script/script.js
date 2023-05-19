let RepA = document.querySelector('#RA');
let RepB = document.querySelector('#RB');
let RepC = document.querySelector('#RC');
let RepD = document.querySelector('#RC');
let Rep = document.querySelector('.reponse');

console.log(Reponse_quizz)
  

RepA.addEventListener("click", function () {
    if (Reponse_quizz === 'A') {
        RepA.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepA.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})

RepB.addEventListener("click", function () {
    if (Reponse_quizz === 'B') {
        RepB.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepB.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})

RepC.addEventListener("click", function () {
    if (Reponse_quizz === 'C') {
        RepC.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepC.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})

RepD.addEventListener("click", function () {
    if (Reponse_quizz === 'D') {
        RepD.style.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepD.style.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})