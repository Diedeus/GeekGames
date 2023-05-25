let commencer = document.querySelector('#comm')
let accueil = document.querySelector('.accueil')
let jeujp = document.querySelector('.jeujp')
let imageprix = document.querySelector('.imageprix')
let Newimg = document.createElement("img")
let trouvezprix = document.querySelector('.trouvezprix')
Newimg.src = Img_Jprix


let scorejp = document.querySelector('.scorejp')
let winjp = document.querySelector('.win')

commencer.addEventListener("click", function(){
    accueil.style.display = "none";
    jeujp.style.display = "flex";
    trouvezprix.style.display = "block"
    imageprix.prepend(Newimg)
})

let submit = document.querySelector('#btt')
const valeur = parseInt(document.querySelector("#prix").value);
let y = 0
const inputfield = document.querySelector("#prix")
let affichescore = document.querySelector('.affichscore')
affichescore.textContent = 0

let i = 1;

inputfield.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const valeur = parseInt(document.querySelector("#prix").value);
    let newp = document.createElement('p');
    let r = document.querySelector(".reponse");
    console.log(valeur);
    let compteur = 0;
    compteur += 1;
    affichescore.textContent = i;

    if (valeur < Reponse_Jprix) {
      newp.textContent = "Votre réponse est en dessous du résultat attendu ==>" + valeur;
      newp.style.backgroundColor = "#ff0000";
      y = ((Reponse_Jprix - valeur) * 100) / Reponse_Jprix;
      console.log(y);
      barrechofroi(y);
    } else if (valeur > Reponse_Jprix) {
      newp.textContent = "votre réponse est au-dessus du résultat attendu ==>" + valeur;
      newp.style.backgroundColor = "#ff8400";
      y = ((Math.abs(Reponse_Jprix - valeur)) * 100) / Reponse_Jprix;
      barrechofroi(y);
    } else if (valeur == Reponse_Jprix) {
      newp.textContent = "WOW gg bro, tu as trouvé la réponse ==>" + valeur;
      newp.style.backgroundColor = "#20de06";
      y = Reponse_Jprix - valeur;
      barrechofroi(y);
      let score = 2000;
      let scorefinal = 0;
      let valeurCacheeInput = document.querySelector("#valeurCacheeInput");
      scorefinal = score - (50 * compteur);
      console.log(scorefinal);
      valeurCacheeInput.value = scorefinal;
      scorejp.textContent= scorefinal
      winjp.style.display="block"
      submit.disabled = true
    }
    r.prepend(newp);
    ++i;
  }
});



let a = document.querySelector('#tou')

function barrechofroi(y) {

    if(1 <= y && y < 5 || 1 > y && y >=5) {
            a.style.width = "80%";
            a.style.backgroundColor = "#ff8400";
            
    
    
    } else if ( 5 <= y && y < 10 || 5> y && y >=10) {
            a.style.width = "60%";
            a.style.backgroundColor = "#ffd800";
    
    
    } else if ( 10 <= y && y < 15 || 10 > y && y >=15) {
            a.style.width = "40%";
            a.style.backgroundColor = "#20de06";
    
    } else if ( 15 <= y && y < 20 || 15> y && y >= 20) {
            a.style.width = "20%";
            a.style.backgroundColor = "#068ade";
    
    } else if ( y === 0 ) {
            a.style.width = "100%";
            a.style.backgroundColor = "#ff0000";
    
    
    } }
    
    

submit.addEventListener("click", function(e) {
  e.preventDefault();
  const valeur = parseInt(document.querySelector("#prix").value);
  let newp = document.createElement('p');
  let r = document.querySelector(".reponse");
  console.log(valeur);
  affichescore.textContent = i;

  if (valeur < Reponse_Jprix) {
    newp.textContent = "Votre réponse est en dessous du résultat attendu ==>" + valeur;
    newp.style.backgroundColor = "#ff0000";
    y = ((Reponse_Jprix - valeur) * 100) / Reponse_Jprix;
    console.log(y);
    barrechofroi(y);
  } else if (valeur > Reponse_Jprix) {
    newp.textContent = "votre réponse est au-dessus du résultat attendu ==>" + valeur;
    newp.style.backgroundColor = "#ff8400";
    y = ((Math.abs(Reponse_Jprix - valeur)) * 100) / Reponse_Jprix;
    barrechofroi(y);
  } else if (valeur == Reponse_Jprix) {
    newp.textContent = "WOW gg bro, tu as trouvé la réponse ==>" + valeur;
    newp.style.backgroundColor = "#20de06";
    y = Reponse_Jprix - valeur;
    barrechofroi(y);
    let score = 2050;
    let scorefinal = 0;
    let valeurCacheeInput = document.querySelector("#valeurCacheeInput");
    scorefinal = score - (50 * i);
    console.log(scorefinal);
    valeurCacheeInput.value = scorefinal;
    scorejp.textContent= scorefinal
    winjp.style.display="block"
    submit.disabled = true
  }
  r.prepend(newp);

  ++i;
});





let acc = document.querySelector('.acc')
let reco = document.querySelector('.reco')

acc.addEventListener("click", function(){
  window.location.href = "../../index.php"
})

reco.addEventListener("click", function(){
  location.reload()
})