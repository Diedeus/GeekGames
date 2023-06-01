// Création de l'élément <section class="presentation">
const presentationSection = document.createElement('section');
presentationSection.className = 'presentation';

// Création de l'élément <h1>
const title = document.createElement('h1');
title.textContent = 'Le jeu des 7 différences';

// Création de l'élément <p>
const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste neque, magni, id ducimus adipisci veritatis dolor omnis sunt animi voluptas! Ipsa soluta facere architecto modi in, autem earum perspiciatis?';

// Création de la div .basprez
const basprezDiv = document.createElement('div');
basprezDiv.className = 'basprez';

// Création du premier formulaire
const form1 = document.createElement('form');
form1.action = '';
form1.method = 'POST';

// Création de l'input hidden pour recupId1
const recupId1Input = document.createElement('input');
recupId1Input.type = 'hidden';
recupId1Input.id = 'idimgSelect';
recupId1Input.name = 'recupId1';
recupId1Input.value = '';

// Création du bouton "Selectionner"
const selectionnerButton = document.createElement('input');
selectionnerButton.type = 'submit';
selectionnerButton.id = 'idimgsub';
selectionnerButton.value = 'Selectionner';
selectionnerButton.style.display = 'block';

// Ajout de l'input et du bouton au premier formulaire
form1.appendChild(recupId1Input);
form1.appendChild(selectionnerButton);

// Ajout du premier formulaire à la div .basprez
basprezDiv.appendChild(form1);

// Création du deuxième formulaire
const form2 = document.createElement('form');
form2.action = '';
form2.method = 'POST';

// Création de l'input hidden pour recupId2
const recupId2Input = document.createElement('input');
recupId2Input.type = 'hidden';
recupId2Input.id = 'idimgSelect2';
recupId2Input.name = 'recupId2';
recupId2Input.value = '0';

// Création du bouton "Commencer"
const commencerButton = document.createElement('input');
commencerButton.type = 'submit';
commencerButton.id = 'idimgsub2';
commencerButton.value = 'Commencer';
commencerButton.style.display = 'none';

// Ajout de l'input et du bouton au deuxième formulaire
form2.appendChild(recupId2Input);
form2.appendChild(commencerButton);

// Ajout du deuxième formulaire à la div .basprez
basprezDiv.appendChild(form2);

// Ajout des éléments à la section .presentation
presentationSection.appendChild(title);
presentationSection.appendChild(paragraph);
presentationSection.appendChild(basprezDiv);

// Ajout de la section .presentation au body
document.body.appendChild(presentationSection);

// Création de la section .sectImg
const sectImgSection = document.createElement('section');
sectImgSection.className = 'sectImg';

// Récupération des données des images depuis le serveur (exemple)
const images = [
  { id: 1, imagePath: 'image1.jpg' },
  { id: 2, imagePath: 'image2.jpg' },
  // Ajoutez les autres images ici
];

// Parcours des données des images pour créer les éléments correspondants
images.forEach(image => {
  // Création de la div .caseImage
  const caseImageDiv = document.createElement('div');
  caseImageDiv.className = 'caseImage';

  // Création de l'élément <img> pour afficher l'image
  const imgElement = document.createElement('img');
  imgElement.src = image.imagePath;

  // Ajout de l'image à la div .caseImage
  caseImageDiv.appendChild(imgElement);

  // Ajout de la div .caseImage à la section .sectImg
  sectImgSection.appendChild(caseImageDiv);
});

// Ajout de la section .sectImg au body
document.body.appendChild(sectImgSection);

// Création de la section .corps7diff
const corps7diffSection = document.createElement('section');
corps7diffSection.className = 'corps7diff';
corps7diffSection.style.display = 'none';

// Code pour générer le contenu de la section .corps7diff (omis pour concision)

// Ajout de la section .corps7diff au body
document.body.appendChild(corps7diffSection);

// Création de la section .infos
const infosSection = document.createElement('section');
infosSection.className = 'infos';
infosSection.style.display = 'none';

// Code pour générer le contenu de la section .infos (omis pour concision)

// Ajout de la section .infos au body
document.body.appendChild(infosSection);

// Code pour gérer les soumissions des formulaires (omis pour concision)

// Ajout du script 7diff.js
const scriptElement = document.createElement('script');
scriptElement.src = './script/7diff.js';

// Ajout du script au body
document.body.appendChild(scriptElement);
