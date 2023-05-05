let quiz = document.querySelector('#quiz');
let diff = document.querySelector('#septdiff');
let jprix = document.querySelector('#justeprix');
let jeusnake = document.querySelector('#snake');
let flappy = document.querySelector('#flappybird');
let pingpong = document.querySelector('#pingpong');



let articlelogo = document.querySelector('.logotexte');
let articlejeu = document.querySelector('.textejeu');
let titregame = document.querySelector('#titrejeu');
let descri = document.querySelector('#descrijeu');
let header = document.querySelector('#test');
let game = 0;

let rond1 = document.querySelector('.rondun');
let rond2 = document.querySelector('.ronddeux');
let rond3 = document.querySelector('.rondtrois');
let rond4 = document.querySelector('.rondquatre');
let rond5 = document.querySelector('.rondcinq');
let rond6 = document.querySelector('.rondsix');
let allspanrond = document.querySelector('.rond');

quiz.addEventListener("click", function (){
    articlelogo.style.display="none";
        articlejeu.style.display ="block";
        titregame.textContent="QUIZ GEEK";
        header.style.backgroundImage = "url(asset/background-ratchetclank.jpg)";
        rond2.style.backgroundColor="transparent";
        rond2.style.border="2px solid white";
        rond3.style.backgroundColor="transparent";
        rond3.style.border="2px solid white";
        rond4.style.backgroundColor="transparent";
        rond4.style.border="2px solid white";
        rond5.style.backgroundColor="transparent";
        rond5.style.border="2px solid white";
        rond6.style.backgroundColor="transparent";
        rond6.style.border="2px solid white";
        rond1.style.backgroundColor ="white";
        rond1.style.border="none";

});

diff.addEventListener("click", function (){
    header.style.backgroundImage = "url(asset/background-mario.jpg)";
    articlelogo.style.display="none";
        articlejeu.style.display ="block";
        titregame.textContent="7 DIFFERENCES";
        rond1.style.backgroundColor="transparent";
        rond1.style.border="2px solid white";
        rond3.style.backgroundColor="transparent";
        rond3.style.border="2px solid white";
        rond4.style.backgroundColor="transparent";
        rond4.style.border="2px solid white";
        rond5.style.backgroundColor="transparent";
        rond5.style.border="2px solid white";
        rond6.style.backgroundColor="transparent";
        rond6.style.border="2px solid white";
        rond2.style.backgroundColor ="white";
        rond2.style.border="none";
});

jprix.addEventListener("click", function (){
    header.style.backgroundImage = "url(asset/background-zelda.jpg)";
    articlelogo.style.display="none";
        articlejeu.style.display ="block";
        titregame.textContent="LE JUSTE PRIX";
        rond1.style.backgroundColor="transparent";
        rond1.style.border="2px solid white";
        rond2.style.backgroundColor="transparent";
        rond2.style.border="2px solid white";
        rond4.style.backgroundColor="transparent";
        rond4.style.border="2px solid white";
        rond5.style.backgroundColor="transparent";
        rond5.style.border="2px solid white";
        rond6.style.backgroundColor="transparent";
        rond6.style.border="2px solid white";
        rond3.style.backgroundColor ="white";
        rond3.style.border="none";
});

jeusnake.addEventListener("click", function (){
    header.style.backgroundImage = "url(asset/background-metroid.jpg)";
    articlelogo.style.display="none";
        articlejeu.style.display ="block";
        titregame.textContent="LE SNAKE";
        rond1.style.backgroundColor="transparent";
        rond1.style.border="2px solid white";
        rond2.style.backgroundColor="transparent";
        rond2.style.border="2px solid white";
        rond3.style.backgroundColor="transparent";
        rond3.style.border="2px solid white";
        rond5.style.backgroundColor="transparent";
        rond5.style.border="2px solid white";
        rond6.style.backgroundColor="transparent";
        rond6.style.border="2px solid white";
        rond4.style.backgroundColor ="white";
        rond4.style.border="none";
});

flappy.addEventListener("click", function (){
    header.style.backgroundImage = "url(asset/background-sonic.jpg)";
    articlelogo.style.display="none";
        articlejeu.style.display ="block";
        titregame.textContent="FLAPPY BIRD";
        rond1.style.backgroundColor="transparent";
        rond1.style.border="2px solid white";
        rond2.style.backgroundColor="transparent";
        rond2.style.border="2px solid white";
        rond3.style.backgroundColor="transparent";
        rond3.style.border="2px solid white";
        rond4.style.backgroundColor="transparent";
        rond4.style.border="2px solid white";
        rond6.style.backgroundColor="transparent";
        rond6.style.border="2px solid white";
        rond5.style.backgroundColor ="white";
        rond5.style.border="none";
});


pingpong.addEventListener("click", function (){
    header.style.backgroundImage = "url(asset/background-rayman.jpg)";
    articlelogo.style.display="none";
        articlejeu.style.display ="block";
        titregame.textContent="PING PONG";
        rond1.style.backgroundColor="transparent";
        rond1.style.border="2px solid white";
        rond2.style.backgroundColor="transparent";
        rond2.style.border="2px solid white";
        rond3.style.backgroundColor="transparent";
        rond3.style.border="2px solid white";
        rond4.style.backgroundColor="transparent";
        rond4.style.border="2px solid white";
        rond5.style.backgroundColor="transparent";
        rond5.style.border="2px solid white";
        rond6.style.backgroundColor ="white";
        rond6.style.border="none";
});

let connexion = document.querySelector('.log');
let loginuser = document.querySelector('.login');
let closelogin = document.querySelector('.closelogin');

connexion.addEventListener("click", function (){
    loginuser.style.visibility="visible";
});

closelogin.addEventListener("click", function (){
    loginuser.style.visibility="hidden";
});

