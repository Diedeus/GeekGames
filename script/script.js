let quiz = document.querySelector('#quiz');
let diff = document.querySelector('#septdiff');
let jprix = document.querySelector('#justeprix');
let jeusnake = document.querySelector('#snake');
let flappy = document.querySelector('#flappybird');
let pingpong = document.querySelector('#pingpong');
let x = 1

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
        x = 1
        console.log(x)
        refresh(x)

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
        x = 2
        console.log(x)
        refresh(x)

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
        x = 3
        console.log(x)
        refresh(x)

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
        x = 4
        console.log(x)
        refresh(x)
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
        x = 5
        console.log(x)
        refresh(x)

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
        x = 6
        console.log(x)
        refresh(x)

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

// let aquizz = document.querySelector('#aquizz')
// let a7diff = document.querySelector('#a7diff')
// let ajusteprix = document.querySelector('#ajusteprix')
// let asnake = document.querySelector('#asnake')
// let aflappybird = document.querySelector('#aflappybird')
// let apingpong = document.querySelector('#apingpong')

function refresh(x) {
    let aquizz = document.querySelector('#aquizz')
    let a7diff = document.querySelector('#a7diff')
    let ajusteprix = document.querySelector('#ajusteprix')
    let asnake = document.querySelector('#asnake')
    let aflappybird = document.querySelector('#aflappybird')
    let apingpong = document.querySelector('#apingpong')
    let descijeuid = document.querySelector('#descijeuid')

    if ( x === 1 ){
        aquizz.style.display = "block"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "1) orem Ipsum is simply dummy text of the printing and typesetting <br>" +
  "industry. Lorem Ipsum has been the industry\'s standard dummy text <br>" +
  "ever since the 1500s, when an unknown printer took a galley of type <br>" +
  "and scrambled it to make a type specimen book. It has survived not <br>" +
  "only five centuries, but also the leap into electronic typesetting, <br>" +
  "remaining essentially unchanged. It was popularised in the 1960s <br>" +
  "with the release of Letraset sheets containing Lorem Ipsum passages <br>" +
  "and more recently with desktop publishing software like Aldus <br>" +
  "PageMaker including versions of Lorem Ipsum.";
    }if ( x === 2){
        aquizz.style.display = "none"
        a7diff.style.display = "block"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "2) orem Ipsum is simply dummy text of the printing and typesetting <br>" +
        "industry. Lorem Ipsum has been the industry\'s standard dummy text <br>" +
        "ever since the 1500s, when an unknown printer took a galley of type <br>" +
        "and scrambled it to make a type specimen book. It has survived not <br>" +
        "only five centuries, but also the leap into electronic typesetting, <br>" +
        "remaining essentially unchanged. It was popularised in the 1960s <br>" +
        "with the release of Letraset sheets containing Lorem Ipsum passages <br>" +
        "and more recently with desktop publishing software like Aldus <br>" +
        "PageMaker including versions of Lorem Ipsum.";

    }if ( x === 3 ){
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "block"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "3) orem Ipsum is simply dummy text of the printing and typesetting <br>" +
        "industry. Lorem Ipsum has been the industry\'s standard dummy text <br>" +
        "ever since the 1500s, when an unknown printer took a galley of type <br>" +
        "and scrambled it to make a type specimen book. It has survived not <br>" +
        "only five centuries, but also the leap into electronic typesetting, <br>" +
        "remaining essentially unchanged. It was popularised in the 1960s <br>" +
        "with the release of Letraset sheets containing Lorem Ipsum passages <br>" +
        "and more recently with desktop publishing software like Aldus <br>" +
        "PageMaker including versions of Lorem Ipsum.";

    }if ( x === 4 ){
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "block"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "4) orem Ipsum is simply dummy text of the printing and typesetting <br>" +
        "industry. Lorem Ipsum has been the industry\'s standard dummy text <br>" +
        "ever since the 1500s, when an unknown printer took a galley of type <br>" +
        "and scrambled it to make a type specimen book. It has survived not <br>" +
        "only five centuries, but also the leap into electronic typesetting, <br>" +
        "remaining essentially unchanged. It was popularised in the 1960s <br>" +
        "with the release of Letraset sheets containing Lorem Ipsum passages <br>" +
        "and more recently with desktop publishing software like Aldus <br>" +
        "PageMaker including versions of Lorem Ipsum.";

    }if ( x === 5 ){
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "block"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "5) orem Ipsum is simply dummy text of the printing and typesetting <br>" +
        "industry. Lorem Ipsum has been the industry\'s standard dummy text <br>" +
        "ever since the 1500s, when an unknown printer took a galley of type <br>" +
        "and scrambled it to make a type specimen book. It has survived not <br>" +
        "only five centuries, but also the leap into electronic typesetting, <br>" +
        "remaining essentially unchanged. It was popularised in the 1960s <br>" +
        "with the release of Letraset sheets containing Lorem Ipsum passages <br>" +
        "and more recently with desktop publishing software like Aldus <br>" +
        "PageMaker including versions of Lorem Ipsum.";

    }if ( x === 6 ){
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "block"
        descijeuid.innerHTML = "6) orem Ipsum is simply dummy text of the printing and typesetting <br>" +
        "industry. Lorem Ipsum has been the industry\'s standard dummy text <br>" +
        "ever since the 1500s, when an unknown printer took a galley of type <br>" +
        "and scrambled it to make a type specimen book. It has survived not <br>" +
        "only five centuries, but also the leap into electronic typesetting, <br>" +
        "remaining essentially unchanged. It was popularised in the 1960s <br>" +
        "with the release of Letraset sheets containing Lorem Ipsum passages <br>" +
        "and more recently with desktop publishing software like Aldus <br>" +
        "PageMaker including versions of Lorem Ipsum.";

    }

}

