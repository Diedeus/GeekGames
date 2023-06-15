const body = document.querySelector('body')

const contpresentationSection = document.createElement("section");
contpresentationSection.className = "container_presentation";
contpresentationSection.style.width="50%";
contpresentationSection.style.float="left"
contpresentationSection.style.height="80vh"
contpresentationSection.style.display="flex"
contpresentationSection.style.flexDirection="column"
contpresentationSection.style.justifyContent="center"
contpresentationSection.style.alignItems="center"

document.body.appendChild(contpresentationSection)

const presentationSection = document.createElement("div");
presentationSection.className = "presentation";
contpresentationSection.appendChild(presentationSection);

const title = document.createElement("h1");
title.textContent = "Le jeu des 7 différences";
title.className = "titreJeu";
title.style.color= "white";
title.style.marginBottom= "20px";

const paragraph = document.createElement("p");
paragraph.style.color="white"
paragraph.style.marginBottom="10px"
paragraph.innerHTML =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste neque <br> magni, id ducimus adipisci veritatis dolor omnis sunt animi voluptas! Ipsa soluta <br> facere architecto modi in, autem earum perspiciatis?";
paragraph.className = "textPres";

const basprezDiv = document.createElement("div");
basprezDiv.className = "basprez";

const btn1 = document.createElement("button");
btn1.id = "btnSelect";
btn1.style.width="200px"
btn1.style.height="40px"
btn1.style.color="white"
btn1.style.backgroundColor="#2b2064"
btn1.style.border="0"
btn1.style.cursor="pointer"

btn1.textContent = "Selectionner";

const btn2 = document.createElement("button");
btn2.id = "btnBegin";
btn2.style.width="200px"
btn2.style.height="40px"
btn2.style.color="white"
btn2.style.backgroundColor="#2b2064"
btn2.style.border="0"
btn2.style.cursor="pointer"
btn2.textContent = "Commencer";
btn2.style.display = "none";

const presImgSelect = document.createElement("div");
presImgSelect.id = "pImgSel";
presImgSelect.style.width = "200px";
presImgSelect.style.height = "200px";
presImgSelect.style.marginBottom = "10px";
presImgSelect.style.display = "none";

basprezDiv.appendChild(btn1);
basprezDiv.appendChild(btn2);

const corps7diff = document.createElement("div");
corps7diff.className = "corps7diff";
corps7diff.style.display = "flex";
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

const infos = document.createElement("div");
infos.className = "infos";
infos.style.width = "1000px";
infos.style.marginTop = "20px";


const afftimer = document.createElement("p");
afftimer.id = "afftimer";
afftimer.textContent = " il reste 5 minutes ";
afftimer.style.backgroundColor="white"
afftimer.style.textAlign="center"
afftimer.style.lineHeight="50px"
afftimer.style.fontWeight="600"

const affScore = document.createElement("p");
affScore.style.color="white"
affScore.style.fontSize="25px"
affScore.id = "affScore";

infos.appendChild(afftimer);

presentationSection.appendChild(title);
presentationSection.appendChild(paragraph);
presentationSection.appendChild(presImgSelect);
presentationSection.appendChild(basprezDiv);

const contjeu7diff = document.createElement("section")
contjeu7diff.style.display="none"
contjeu7diff.style.height="80vh"
contjeu7diff.style.flexDirection="column"
contjeu7diff.style.justifyContent="center"
contjeu7diff.style.alignItems="center"


document.body.appendChild(contjeu7diff);
contjeu7diff.appendChild(corps7diff);
contjeu7diff.appendChild(infos);

const titreselec = document.createElement("h2");
titreselec.style.color="#3c2d87"
titreselec.style.backgroundColor="white"
titreselec.style.padding="15px 0"
titreselec.style.textAlign="center"
titreselec.style.marginBottom="50px"
titreselec.style.margintop="50px"
titreselec.textContent="Selectionner une image"

const contprezImg = document.createElement("section")
contprezImg.style.margintop="50px"
contprezImg.style.backgroundColor="#2b2064"
contprezImg.style.width="48%";
contprezImg.style.height="75vh"
contprezImg.style.float="left"
contprezImg.style.overflow="auto"

const prezImg = document.createElement("div");
prezImg.className = "prezImg";
prezImg.style.display="flex"
prezImg.style.flexWrap="wrap"
prezImg.style.justifyContent="space-around"
prezImg.style.alignItems="start"

document.body.appendChild(contprezImg);
contprezImg.appendChild(titreselec)
contprezImg.appendChild(prezImg)

const animWin = document.createElement("section")
animWin.className = "sectionwin";
animWin.style.position="absolute"
animWin.style.height="100vh"
animWin.style.width="100%"
animWin.style.top="0"
animWin.style.left="0"
animWin.style.backgroundColor="#0b0b0bf6"
animWin.style.overflow="hidden"
animWin.style.visibility="hidden"
document.body.appendChild(animWin)

const winTop = document.createElement("img")
winTop.src='./Asset/winhaut.png'
winTop.style.position="absolute"
winTop.style.top="0"
winTop.style.left="-100%"
winTop.style.transition="all 0.5s"
animWin.appendChild(winTop)

const winBot = document.createElement("img")
winBot.src='./Asset/winbas.png'
winBot.style.position="absolute"
winBot.style.bottom="0"
winBot.style.right="-100%"
winBot.style.transition="all 0.5s"
animWin.appendChild(winBot)

const divScoreWin = document.createElement("div")
divScoreWin.style.opacity="0%";
divScoreWin.style.display="flex"
divScoreWin.style.flexDirection="column"
divScoreWin.style.height="100vh"
divScoreWin.style.width="100%"
divScoreWin.style.justifyContent="center"
divScoreWin.style.alignItems="center"
divScoreWin.style.top="0"
divScoreWin.style.left="0"
divScoreWin.style.position="absolute"
animWin.appendChild(divScoreWin)

const spany = document.createElement("span")
spany.style.color = "#00c6ff"
spany.style.fontSize = "180px"
spany.style.fontWeight = "800"
spany.textContent="Y"


const spanWin = document.createElement("span")
spanWin.style.color = "white"
spanWin.style.fontSize = "180px"
spanWin.style.fontWeight = "800"
spanWin.textContent="OU WIN"

const titreWin = document.createElement("h2")
titreWin.appendChild(spany)
titreWin.appendChild(spanWin)
divScoreWin.appendChild(titreWin)


const scoreWin = document.createElement("p")
scoreWin.style.color="white"
scoreWin.style.fontSize="65px"
scoreWin.style.fontWeight="600"
scoreWin.style.marginBottom="30px"
divScoreWin.appendChild(affScore)
divScoreWin.appendChild(scoreWin)

const artwin = document.createElement("article")
artwin.style.display="flex"
artwin.style.justifyContent="center"
divScoreWin.appendChild(artwin)

const backHomeWin = document.createElement("a")
backHomeWin.textContent= "Retour à l'accueil"
backHomeWin.style.backgroundColor="white"
backHomeWin.style.cursor="pointer"
backHomeWin.style.width="300px"
backHomeWin.style.height="50px"
backHomeWin.style.lineHeight="50px"
backHomeWin.style.textAlign="center"
backHomeWin.href="../../index.php"
artwin.appendChild(backHomeWin)

const restarWin = document.createElement("a")
restarWin.textContent= "Recommencer"
restarWin.style.backgroundColor="#00c6ff"
restarWin.style.color="white"
restarWin.style.margin="0 20px"
restarWin.style.cursor="pointer"
restarWin.style.width="300px"
restarWin.style.height="50px"
restarWin.style.lineHeight="50px"
restarWin.style.textAlign="center"
restarWin.href="./7diff.php"
artwin.appendChild(restarWin)

const animLoose = document.createElement("section")
animLoose.className = "sectionloose";
animLoose.style.position="absolute"
animLoose.style.height="100vh"
animLoose.style.width="100%"
animLoose.style.top="0"
animLoose.style.left="0"
animLoose.style.backgroundColor="#0b0b0bf6"
animLoose.style.overflow="hidden"
animLoose.style.visibility="hidden"
document.body.appendChild(animLoose)

const looseTop = document.createElement("img")
looseTop.src='./Asset/loosetop.png'
looseTop.style.position="absolute"
looseTop.style.left="-100%"
looseTop.style.top="0"
looseTop.style.transition="all 0.5s"
animLoose.appendChild(looseTop)

const looseBot = document.createElement("img")
looseBot.src='./Asset/loosebot.png'
looseBot.style.position="absolute"
looseBot.style.bottom="0"
looseBot.style.right="-100%"
looseBot.style.transition="all 0.5s"
animLoose.appendChild(looseBot)

const divScoreLoose = document.createElement("div")
divScoreLoose.style.opacity="0%";
divScoreLoose.style.display="flex"
divScoreLoose.style.flexDirection="column"
divScoreLoose.style.height="100vh"
divScoreLoose.style.width="100%"
divScoreLoose.style.justifyContent="center"
divScoreLoose.style.alignItems="center"
divScoreLoose.style.top="0"
divScoreLoose.style.left="0"
divScoreLoose.style.position="absolute"
animLoose.appendChild(divScoreLoose)

const spany2 = document.createElement("span")
spany2.style.color = "#e03332"
spany2.style.fontSize = "180px"
spany2.style.fontWeight = "800"
spany2.textContent="Y"


const spanLoose = document.createElement("span")
spanLoose.style.color = "white"
spanLoose.style.fontSize = "180px"
spanLoose.style.fontWeight = "800"
spanLoose.textContent="OU LOST"

const titreLoose = document.createElement("h2")
titreLoose.appendChild(spany2)
titreLoose.appendChild(spanLoose)
divScoreLoose.appendChild(titreLoose)

const affLoose = document.createElement("p")
affLoose.style.color="white"
affLoose.textContent="Votre score :"
affLoose.style.fontSize="30px"
divScoreLoose.appendChild(affLoose)
const scoreLoose = document.createElement("p")
scoreLoose.style.color="white"
scoreLoose.textContent="00"
scoreLoose.style.fontSize="65px"
scoreLoose.style.fontWeight="600"
scoreLoose.style.marginBottom="30px"
divScoreLoose.appendChild(scoreLoose)

const artLoose = document.createElement("article")
artLoose.style.display="flex"
artLoose.style.justifyContent="center"
divScoreLoose.appendChild(artLoose)

const backHomeLoose = document.createElement("a")
backHomeLoose.textContent= "Retour à l'accueil"
backHomeLoose.style.backgroundColor="white"
backHomeLoose.style.cursor="pointer"
backHomeLoose.style.width="300px"
backHomeLoose.style.height="50px"
backHomeLoose.style.lineHeight="50px"
backHomeLoose.style.textAlign="center"
backHomeLoose.href="../../index.php"
artLoose.appendChild(backHomeLoose)

const restarLoose = document.createElement("a")
restarLoose.textContent= "Recommencer"
restarLoose.style.backgroundColor="#e03332"
restarLoose.style.color="white"
restarLoose.style.margin="0 20px"
restarLoose.style.cursor="pointer"
restarLoose.style.width="300px"
restarLoose.style.height="50px"
restarLoose.style.lineHeight="50px"
restarLoose.style.textAlign="center"
restarLoose.href="./7diff.php"
artLoose.appendChild(restarLoose)




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
      clearTimeout(timer);
      animLoose.style.visibility="visible"
              looseTop.style.left="0"
              looseBot.style.right="0"
              setTimeout(function() {
                divScoreLoose.style.transition = 'opacity 200ms';
                divScoreLoose.style.opacity = "100%";
            }, 500);
      // mettre anim de loose
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
      el.style.width="19%"
      el.style.height="auto"
      el.style.padding="4px"
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
                "votre score :";
                scoreWin.textContent= score7diff
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
              btnscore.style.width="300px"
              btnscore.style.fontFamily="montserrat"
              btnscore.style.cursor="pointer"
              btnscore.style.height="50px"
              btnscore.style.backgroundColor="white"
              btnscore.style.lineHeight="50px"
              btnscore.style.textAlign="center"
              btnscore.style.textIndent="0"
              btnscore.id = "btnscore";
              artwin.appendChild(formScore)
              formScore.appendChild(inputScore)
              formScore.appendChild(btnscore)
              animWin.style.visibility="visible"
              winTop.style.left="0"
              winBot.style.right="0"
              setTimeout(function() {
                divScoreWin.style.transition = 'opacity 200ms';
                divScoreWin.style.opacity = "100%";
            }, 500);
            }
          });

          el.style.border = "2px solid white";
          Select = true;
          btn1.style.display = "block";
          btn2.style.display = "none";

          const imgSelect = document.createElement("img");
          imgSelect.src = element.url1;
          imgSelect.style.width = "200px";
          imgSelect.style.height = "200px";
          presImgSelect.innerHTML = "";
          presImgSelect.appendChild(imgSelect);
          presImgSelect.style.display = "block";

          btn1.addEventListener("click", function () {
            btn1.style.display = "none";
            btn2.style.display = "block";
          });

          btn2.addEventListener("click", function () {
            body.style.backgroundImage="url(./Asset/back.png)"
            body.style.backgroundColor="black"
            contpresentationSection.style.display = "none";
            contprezImg.style.display = "none";
            contjeu7diff.style.display = "flex";
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
