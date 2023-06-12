// Sélection de la case à cocher et du bouton d'envoi
let checkbox = document.querySelector('.checkpoli');
let submitButton = document.querySelector('.boutonenvoyer');
let formregister = document.querySelector('.box')

// Désactiver le bouton d'envoi par défaut
submitButton.disabled = true;

// Écouter l'événement de modification de la case à cocher
checkbox.addEventListener('change', function() {
  // Basculer l'état du bouton d'envoi
  if (checkbox.checked) {
    submitButton.disabled = false;
    submitButton.style.pointerEvents = "auto";
    submitButton.style.cursor = "pointer";
    submitButton.style.color = "#3c2d87";
    submitButton.style.backgroundColor = "white";
    checkbox.classList.add('checked');
  } else {
    submitButton.disabled = true;
    submitButton.style.pointerEvents = "none";
    submitButton.style.cursor = "not-allowed";
    submitButton.style.color = "";
    submitButton.style.backgroundColor = "";
    checkbox.classList.remove('checked')
  }
});

// Écouter l'événement mouseover (survol de la souris)
submitButton.addEventListener('mouseover', function() {
  submitButton.style.backgroundColor = "#130546";
  submitButton.style.color = "white";
});

// Écouter l'événement mouseleave (souris quittant le bouton)
submitButton.addEventListener('mouseleave', function() {
  submitButton.style.backgroundColor = "white";
  submitButton.style.color = "#3c2d87";
});