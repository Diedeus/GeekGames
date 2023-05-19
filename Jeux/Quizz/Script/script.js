let RepA = document.querySelector('#RA')
let RepB = document.querySelector('#RB')
let RepC = document.querySelector('#RC')
let RepD = document.querySelector('#RC')
let Rep = document.querySelector('.reponse')

// Effectuer une requête AJAX pour récupérer les données de session
function getDataFromSession(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../Quizz.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(response);
      }
    };
    xhr.send();
  }
  
  // Utilisation de la fonction pour récupérer les données de session
  getDataFromSession(function(data) {
    console.log(data.Reponse_quizz); // Affiche la valeur de 'maVariable'
    // Utilisez les données de session selon vos besoins
  });
  

RepA.addEventListener("click", function () {
    if (Reponse_quizz === A) {
        RepA.getElementsByClassName.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepA.getElementsByClassName.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})

RepB.addEventListener("click", function () {
    if (Reponse_quizz === B) {
        RepB.getElementsByClassName.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepB.getElementsByClassName.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})

RepC.addEventListener("click", function () {
    if (Reponse_quizz === C) {
        RepC.getElementsByClassName.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepC.getElementsByClassName.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})

RepD.addEventListener("click", function () {
    if (Reponse_quizz === D) {
        RepD.getElementsByClassName.backgroundColor = "green";
        Rep.textContent = "Bien jouer, c'est la bonne Réponse"
    } else {
        RepD.getElementsByClassName.backgroundColor = "red";
        Rep.textContent = "Ce n\'est pas la bonne réponse"
    }
})