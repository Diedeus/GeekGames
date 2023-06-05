const presentationSection = document.createElement("section");
presentationSection.className = "presentation";

const title = document.createElement("h1");
title.textContent = "Le jeu des 7 différences";
title.className = "titreJeu";

const paragraph = document.createElement("p");
paragraph.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste neque, magni, id ducimus adipisci veritatis dolor omnis sunt animi voluptas! Ipsa soluta facere architecto modi in, autem earum perspiciatis?";
paragraph.className = "textPres";

const basprezDiv = document.createElement("div");
basprezDiv.className = "basprez";

const btn1 = document.createElement("button");
btn1.id = "btnSelect";
btn1.textContent = "Selectionner";

const btn2 = document.createElement("button");
btn2.id = "btnBegin";
btn2.textContent = "Commencer";
btn2.style.display = "none";

const presImgSelect = document.createElement("div");
presImgSelect.id = "pImgSel";
presImgSelect.style.width = "100px";
presImgSelect.style.height = "100px";
presImgSelect.style.display = "none";

basprezDiv.appendChild(btn1);
basprezDiv.appendChild(btn2);

const corps7diff = document.createElement("section");
corps7diff.className = "corps7diff";
corps7diff.style.display = "none";
corps7diff.style.position = "relative";
corps7diff.style.width = "1000px";
corps7diff.style.height = "500px";

const img1 = document.createElement("img");
img1.className = "ImgJeu";

const imgDiff = document.createElement("img");
imgDiff.className = "ImgJeu";

const btnAll = document.createElement("div");
btnAll.className = "btnAll";
btnAll.style.position = "absolute";
btnAll.style.top = "0";
btnAll.style.right = "0";
btnAll.style.width = "500px";
btnAll.style.height = "500px";
btnAll.style.overflow = "hidden";

corps7diff.appendChild(img1);
corps7diff.appendChild(imgDiff);
corps7diff.appendChild(btnAll);

const infos = document.createElement("section");
infos.className = "infos";
infos.style.display = "none";

const afftimer = document.createElement("p");
afftimer.id = "afftimer";
afftimer.textContent = " il reste 5 minutes ";

const affScore = document.createElement("p");
affScore.id = "affScore";

const gameover = document.createElement("p");
gameover.id = "gameover";
gameover.style.display = "none";
gameover.textContent = "Vous avez echoué";

infos.appendChild(afftimer);
infos.appendChild(affScore);
infos.appendChild(gameover);

presentationSection.appendChild(title);
presentationSection.appendChild(paragraph);
presentationSection.appendChild(presImgSelect);
presentationSection.appendChild(basprezDiv);

document.body.appendChild(presentationSection);
document.body.appendChild(corps7diff);
document.body.appendChild(infos);

const prezImg = document.createElement("section");
prezImg.className = "prezImg";
document.body.appendChild(prezImg);

let erreur1 = false;
let erreur2 = false;
let erreur3 = false;
let erreur4 = false;
let erreur5 = false;
let erreur6 = false;
let erreur7 = false;

let startTime;
let tour = 0;
let minuteur = 300;
let chrono = 0;
let chronoseconde = 0;
let chronominute = 0;

function startTimer() {
  startTime = Date.now(); //Enregistre le temps de début du timer
  timer = setTimeout(function () {
    let endTime = Date.now(); //enregistre le temps de fin de timer
    let elapsedTime = endTime - startTime; // calcule le temps écoulé

    tour += 1;

    console.log(tour);
    chronoS = minuteur - tour;
    console.log(chronoS);
    chronoseconde = chronoS % 60;
    chronominute = (chronoS - chronoseconde) / 60;
    console.log("il reste : " + chronominute + "min" + chronoseconde);
    console.log("Temps écoulé :" + elapsedTime + " ms");
    afftimer.textContent = "";
    afftimer.textContent = "il reste : " + chronominute + "min" + chronoseconde;
    startTimer();
    if (tour === 300) {
      let gameOver = document.querySelector("#gameover");
      gameOver.style.display = "block";
      clearTimeout(timer);
    }
  }, 1000);
}

function stopTimer() {
  clearTimeout(timer); // Arrête le timer
}

fetch("/Jeux/SeptDiff/Asset/7diff.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const el = document.createElement("img");
      el.src = element.url1;
      el.className = "Img";
      el.style.cursor = "pointer";
      prezImg.appendChild(el);
      let Select = false;
      el.addEventListener("click", function () {
        if (Select === false) {
          img1.src = element.url1;
          imgDiff.src = element.url2;

          btnAll.addEventListener("click", function (event) {
            let rect = imgDiff.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            console.log("Coordonnées du clic: x=", x, ", y=", y);

            if (
              x > element.err1x1 &&
              x < element.err1x2 &&
              y > element.err1y1 &&
              y < element.err1y2 &&
              erreur1 === false
            ) {
              erreur1 = true;
              const span1 = document.createElement("span");
              span1.id = "err1";
              span1.classList.add("erreurs");
              span1.style.position = "absolute";
              let moyX =
                (parseInt(element.err1x1) + parseInt(element.err1x2)) / 2;
              let moyY =
                (parseInt(element.err1y1) + parseInt(element.err1y2)) / 2;
              console.log("somme =" + (element.err1x1 + element.err1x2));
              span1.style.left = moyX - 25 + "px";
              span1.style.top = moyY - 25 + "px";
              span1.style.border = "2px solid red";
              span1.style.borderRadius = "50%";
              span1.style.width = "50px";
              span1.style.height = "50px";
              btnAll.appendChild(span1);
            }
            if (
              x > element.err2x1 &&
              x < element.err2x2 &&
              y > element.err2y1 &&
              y < element.err2y2 &&
              erreur2 === false
            ) {
              erreur2 = true;
              const span2 = document.createElement("span");
              span2.id = "err2";
              span2.classList.add("erreurs");
              span2.style.position = "absolute";
              let moyX =
                (parseInt(element.err2x1) + parseInt(element.err2x2)) / 2;
              let moyY =
                (parseInt(element.err2y1) + parseInt(element.err2y2)) / 2;
              span2.style.left = moyX - 25 + "px";
              span2.style.top = moyY - 25 + "px";
              span2.style.border = "2px solid red";
              span2.style.borderRadius = "50%";
              span2.style.width = "50px";
              span2.style.height = "50px";
              btnAll.appendChild(span2);
            }
            if (
              x > element.err3x1 &&
              x < element.err3x2 &&
              y > element.err3y1 &&
              y < element.err3y2 &&
              erreur3 === false
            ) {
              erreur3 = true;
              const span3 = document.createElement("span");
              span3.id = "err3";
              span3.classList.add("erreurs");
              span3.style.position = "absolute";
              let moyX =
                (parseInt(element.err3x1) + parseInt(element.err3x2)) / 2;
              let moyY =
                (parseInt(element.err3y1) + parseInt(element.err3y2)) / 2;
              span3.style.left = moyX - 25 + "px";
              span3.style.top = moyY - 25 + "px";
              span3.style.border = "2px solid red";
              span3.style.borderRadius = "50%";
              span3.style.width = "50px";
              span3.style.height = "50px";
              btnAll.appendChild(span3);
            }
            if (
              x > element.err4x1 &&
              x < element.err4x2 &&
              y > element.err4y1 &&
              y < element.err4y2 &&
              erreur4 === false
            ) {
              erreur4 = true;
              const span4 = document.createElement("span");
              span4.id = "err4";
              span4.classList.add("erreurs");
              span4.style.position = "absolute";
              let moyX =
                (parseInt(element.err4x1) + parseInt(element.err4x2)) / 2;
              let moyY =
                (parseInt(element.err4y1) + parseInt(element.err4y2)) / 2;
              span4.style.left = moyX - 25 + "px";
              span4.style.top = moyY - 25 + "px";
              span4.style.border = "2px solid red";
              span4.style.borderRadius = "50%";
              span4.style.width = "50px";
              span4.style.height = "50px";
              btnAll.appendChild(span4);
            }
            if (
              x > element.err5x1 &&
              x < element.err5x2 &&
              y > element.err5y1 &&
              y < element.err5y2 &&
              erreur5 === false
            ) {
              erreur5 = true;
              const span5 = document.createElement("span");
              span5.id = "err5";
              span5.classList.add("erreurs");
              span5.style.position = "absolute";
              let moyX =
                (parseInt(element.err5x1) + parseInt(element.err5x2)) / 2;
              let moyY =
                (parseInt(element.err5y1) + parseInt(element.err5y2)) / 2;
              span5.style.left = moyX - 25 + "px";
              span5.style.top = moyY - 25 + "px";
              span5.style.border = "2px solid red";
              span5.style.borderRadius = "50%";
              span5.style.width = "50px";
              span5.style.height = "50px";
              btnAll.appendChild(span5);
            }
            if (
              x > element.err6x1 &&
              x < element.err6x2 &&
              y > element.err6y1 &&
              y < element.err6y2 &&
              erreur6 === false
            ) {
              erreur6 = true;
              const span6 = document.createElement("span");
              span6.id = "err6";
              span6.classList.add("erreurs");
              span6.style.position = "absolute";
              let moyX =
                (parseInt(element.err6x1) + parseInt(element.err6x2)) / 2;
              let moyY =
                (parseInt(element.err6y1) + parseInt(element.err6y2)) / 2;
              span6.style.left = moyX - 25 + "px";
              span6.style.top = moyY - 25 + "px";
              span6.style.border = "2px solid red";
              span6.style.borderRadius = "50%";
              span6.style.width = "50px";
              span6.style.height = "50px";
              btnAll.appendChild(span6);
            }
            if (
              x > element.err7x1 &&
              x < element.err7x2 &&
              y > element.err7y1 &&
              y < element.err7y2 &&
              erreur7 === false
            ) {
              erreur7 = true;
              const span7 = document.createElement("span");
              span7.id = "err7";
              span7.classList.add("erreurs");
              span7.style.position = "absolute";
              let moyX =
                (parseInt(element.err7x1) + parseInt(element.err7x2)) / 2;
              let moyY =
                (parseInt(element.err7y1) + parseInt(element.err7y2)) / 2;
              span7.style.left = moyX - 25 + "px";
              span7.style.top = moyY - 25 + "px";
              span7.style.border = "2px solid red";
              span7.style.borderRadius = "50%";
              span7.style.width = "50px";
              span7.style.height = "50px";
              btnAll.appendChild(span7);
            }
            if (
              erreur1 === true &&
              erreur2 === true &&
              erreur3 === true &&
              erreur4 === true &&
              erreur5 === true &&
              erreur6 === true &&
              erreur7 === true
            ) {
              stopTimer();
              let modchronoF = chronoS % 10;
              let chronoF = chronoS - modchronoF;
              let score7diff = (chronoF / 10 + 1) * 100;
              affScore.textContent =
                "votre score est de " + score7diff + " points";
              const formScore = document.createElement("form");
              formScore.method = 'POST'
              const inputScore = document.createElement("input");
              inputScore.type = "hidden";
              inputScore.name = "scoreFinal";
              inputScore.id = "inputScore";
              inputScore.value = score7diff;
              const btnscore = document.createElement("input");
              btnscore.type = "submit";
              btnscore.value = "Enregistrer votre score";
              btnscore.id = "btnscore";
              infos.appendChild(formScore)
              formScore.appendChild(inputScore)
              formScore.appendChild(btnscore)
            }
          });

          el.style.border = "2px solid blue";
          Select = true;
          btn1.style.display = "block";
          btn2.style.display = "none";

          const imgSelect = document.createElement("img");
          imgSelect.src = element.url1;
          imgSelect.style.width = "100px";
          imgSelect.style.height = "100px";
          presImgSelect.innerHTML = "";
          presImgSelect.appendChild(imgSelect);
          presImgSelect.style.display = "block";

          btn1.addEventListener("click", function () {
            btn1.style.display = "none";
            btn2.style.display = "block";
          });

          btn2.addEventListener("click", function () {
            presentationSection.style.display = "none";
            prezImg.style.display = "none";
            corps7diff.style.display = "block";
            infos.style.display = "block";
            startTimer();
          });
        } else if (Select === true) {
          el.style.border = "0";
          Select = false;
          btn1.style.display = "block";
          btn2.style.display = "none";
          presImgSelect.innerHTML = "";
          presImgSelect.style.display = "none";

          btn1.addEventListener("click", function () {
            const para = document.createElement("p");
            para.textContent = "Veuillez sélectionner une image";
            para.style.color = "red";
            basprezDiv.appendChild(para);
          });
        }
      });
    });
  });
