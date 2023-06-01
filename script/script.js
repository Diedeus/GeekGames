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

quiz.addEventListener("click", function () {
    articlelogo.style.display = "none";
    articlejeu.style.display = "block";
    titregame.textContent = "QUIZ GEEK";
    header.style.backgroundImage = "url(asset/background-ratchetclank.jpg)";
    rond2.style.backgroundColor = "transparent";
    rond2.style.border = "2px solid white";
    rond3.style.backgroundColor = "transparent";
    rond3.style.border = "2px solid white";
    rond4.style.backgroundColor = "transparent";
    rond4.style.border = "2px solid white";
    rond5.style.backgroundColor = "transparent";
    rond5.style.border = "2px solid white";
    rond6.style.backgroundColor = "transparent";
    rond6.style.border = "2px solid white";
    rond1.style.backgroundColor = "white";
    rond1.style.border = "none";
    x = 1
    console.log(x)
    refresh(x)

});

diff.addEventListener("click", function () {
    header.style.backgroundImage = "url(asset/background-mario.jpg)";
    articlelogo.style.display = "none";
    articlejeu.style.display = "block";
    titregame.textContent = "7 DIFFERENCES";
    rond1.style.backgroundColor = "transparent";
    rond1.style.border = "2px solid white";
    rond3.style.backgroundColor = "transparent";
    rond3.style.border = "2px solid white";
    rond4.style.backgroundColor = "transparent";
    rond4.style.border = "2px solid white";
    rond5.style.backgroundColor = "transparent";
    rond5.style.border = "2px solid white";
    rond6.style.backgroundColor = "transparent";
    rond6.style.border = "2px solid white";
    rond2.style.backgroundColor = "white";
    rond2.style.border = "none";
    x = 2
    console.log(x)
    refresh(x)

});

jprix.addEventListener("click", function () {
    header.style.backgroundImage = "url(asset/background-zelda.jpg)";
    articlelogo.style.display = "none";
    articlejeu.style.display = "block";
    titregame.textContent = "LE JUSTE PRIX";
    rond1.style.backgroundColor = "transparent";
    rond1.style.border = "2px solid white";
    rond2.style.backgroundColor = "transparent";
    rond2.style.border = "2px solid white";
    rond4.style.backgroundColor = "transparent";
    rond4.style.border = "2px solid white";
    rond5.style.backgroundColor = "transparent";
    rond5.style.border = "2px solid white";
    rond6.style.backgroundColor = "transparent";
    rond6.style.border = "2px solid white";
    rond3.style.backgroundColor = "white";
    rond3.style.border = "none";
    x = 3
    console.log(x)
    refresh(x)

});

jeusnake.addEventListener("click", function () {
    header.style.backgroundImage = "url(asset/background-metroid.jpg)";
    articlelogo.style.display = "none";
    articlejeu.style.display = "block";
    titregame.textContent = "LE SNAKE";
    rond1.style.backgroundColor = "transparent";
    rond1.style.border = "2px solid white";
    rond2.style.backgroundColor = "transparent";
    rond2.style.border = "2px solid white";
    rond3.style.backgroundColor = "transparent";
    rond3.style.border = "2px solid white";
    rond4.style.backgroundColor = "transparent";
    rond4.style.border = "2px solid white";
    rond6.style.backgroundColor = "transparent";
    rond6.style.border = "2px solid white";
    rond5.style.backgroundColor = "white";
    rond5.style.border = "none";
    x = 4
    console.log(x)
    refresh(x)
});

flappy.addEventListener("click", function () {
    header.style.backgroundImage = "url(asset/background-sonic.jpg)";
    articlelogo.style.display = "none";
    articlejeu.style.display = "block";
    titregame.textContent = "FLAPPY BIRD";
    rond1.style.backgroundColor = "transparent";
    rond1.style.border = "2px solid white";
    rond2.style.backgroundColor = "transparent";
    rond2.style.border = "2px solid white";
    rond3.style.backgroundColor = "transparent";
    rond3.style.border = "2px solid white";
    rond5.style.backgroundColor = "transparent";
    rond5.style.border = "2px solid white";
    rond6.style.backgroundColor = "transparent";
    rond6.style.border = "2px solid white";
    rond4.style.backgroundColor = "white";
    rond4.style.border = "none";
    x = 5
    console.log(x)
    refresh(x)

});


pingpong.addEventListener("click", function () {
    header.style.backgroundImage = "url(asset/background-rayman.jpg)";
    articlelogo.style.display = "none";
    articlejeu.style.display = "block";
    titregame.textContent = "PING PONG";
    rond1.style.backgroundColor = "transparent";
    rond1.style.border = "2px solid white";
    rond2.style.backgroundColor = "transparent";
    rond2.style.border = "2px solid white";
    rond3.style.backgroundColor = "transparent";
    rond3.style.border = "2px solid white";
    rond4.style.backgroundColor = "transparent";
    rond4.style.border = "2px solid white";
    rond5.style.backgroundColor = "transparent";
    rond5.style.border = "2px solid white";
    rond6.style.backgroundColor = "white";
    rond6.style.border = "none";
    x = 6
    console.log(x)
    refresh(x)

});

let connexion = document.querySelector('.log');
let loginuser = document.querySelector('.login');
let closelogin = document.querySelector('.closelogin');

connexion.addEventListener("click", function () {
    loginuser.style.visibility = "visible";
});

closelogin.addEventListener("click", function () {
    loginuser.style.visibility = "hidden";
});





function refresh(x) {
    let aquizz = document.querySelector('#aquizz')
    let a7diff = document.querySelector('#a7diff')
    let ajusteprix = document.querySelector('#ajusteprix')
    let asnake = document.querySelector('#asnake')
    let aflappybird = document.querySelector('#aflappybird')
    let apingpong = document.querySelector('#apingpong')
    let descijeuid = document.querySelector('#descijeuid')

    if (x === 1) {
        aquizz.style.display = "block"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "Quiz Geek : Êtes-vous un véritable passionné de la culture geek ?<br>" +
            " Mettez vos connaissances à l'épreuve avec notre quiz geek captivant.<br>" +
            "Répondez à une série de questions amusantes et stimulantes sur les <br>" +
            "films, les séries, les jeux vidéo, les bandes dessinées et bien plus encore. <br>" +
            "Que vous soyez un fan de Star Wars, un expert en super-héro, un connaisseur <br>" +
            "en jeux rétro ou encore un fan absolu de manga et d'animé, ce quiz vous offrira <br>"+
            "un défi palpitant. Comparez vos scores avec vos amis et montrez qui est <br>" + 
            "le roi ou la reine des geeks !<br>";
            // "and more recently with desktop publishing software like Aldus <br>" +
            // "PageMaker including versions of Lorem Ipsum.";
    }
    if (x === 2) {
        aquizz.style.display = "none"
        a7diff.style.display = "block"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "Les 7 différences : Plongez dans un univers geek captivant  <br>" +
            "avec notre jeu des 7différences. Mettez votre sens de l'observation à  <br>" +
            "l'épreuve en comparant deux images apparemment identiques et trouvez les  <br>" +
            "7 différences dissimulées. Explorez des scènes épiques de films, de séries <br>" +
            " de bandes dessinées et de jeux vidéo emblématiques.Chaque niveau vous présentera<br>" +
            " de nouvelles images et des détails subtils à repérer.Soyez attentif, car le temps <br> " +
            "est limité ! Défiez vos amis et voyez qui peut repérer toutes lesdifférences en premier." ;

    }
    if (x === 3) {
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "block"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "Le Juste Prix : Êtes-vous prêt à estimer la valeur des objets et <br>" +
            "à défier votre instinct de consommateur ? Mettez vos talents d'évaluation <br>" +
            "à l'épreuve avec notre jeu captivant du \"Juste Prix\". Vous serez présenté <br>" +
            "avec une variété de produits, des gadgets aux objets de luxe, et votre objectif <br>" +
            "sera de deviner leur prix avec le moins de tentatives possible. Plus vous faites <br>" +
            "de tentatives, moins vous gagnez de point ! Pouvez-vous deviner le juste prix ? <br>" ;

    }
    if (x === 4) {
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "block"
        aflappybird.style.display = "none"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "Le Snake : Plongez dans la nostalgie des jeux rétro avec notre version <br>" +
            " du classique jeu du Snake ! Contrôlez un serpent affamé et guidez-le à travers <br>" +
            "un terrain de jeu rempli de délicieuses friandises. Le but est de faire grandir <br>" +
            "le serpent en le faisant manger les fruits qui apparaissent, mais attention à  <br>" +
            "ne pas vous mordre la queue ou heurter les murs ! Avec chaque bouchée, le serpent<br>" +
            "s'allonge, rendant la navigation plus difficile. Défiez votre agilité et votre <br>" +
            "réflexe pour voir jusqu'où vous pouvez faire grandir votre serpent et marquer un<br>" +
            "maximum de points. Prêt à relever le défi du Snake et à battre tous les records ?<br>";

    }
    if (x === 5) {
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "block"
        apingpong.style.display = "none"
        descijeuid.innerHTML = "Flappy Bird : Préparez-vous à vous envoler dans le monde de Flappy Bird<br>" +
            "version DRAGON BALL ! un jeu addictif et plein de défis ! Contrôlez le fantome <br>" +
            "de gotrunks et essayez de le faire voler à travers un parcours rempli d'obstacles.<br>" +
            "Appuyez sur les touches pour faire monter et descendre le fantome et maintenez-le <br>" +
            "en l'air tout en évitant les tuyaux. La précision et le timing sont essentiels pour<br>" +
            "survivre et marquer des points. Chaque obstacle franchi est une victoire, mais<br>" +
            "attention à ne pas toucher les murs ! Testez vos réflexes et voyez jusqu'où <br>" +
            "vous pouvez aller dans ce jeu simple, mais incroyablement addictif.<br>" +
            "Alors, prêt à battre tous les records et devenir le maître de Flappy Bird ?";

    }
    if (x === 6) {
        aquizz.style.display = "none"
        a7diff.style.display = "none"
        ajusteprix.style.display = "none"
        asnake.style.display = "none"
        aflappybird.style.display = "none"
        apingpong.style.display = "block"
        descijeuid.innerHTML = "Le Ping Pong : Préparez-vous à une expérience de tennis de table<br>" +
            "classique avec notre jeu du Ping Pong Rétro. Plongez dans l'ère des jeux<br>" +
            "d'arcade des années passées et affrontez l'ordinateur dans un duel passionnant.<br>" +
            "Utilisez votre raquette pour frapper la balle et marquer des points en la  <br>" +
            "faisant rebondir sur le terrain de jeu. Réagissez rapidement aux mouvements <br>" +
            "de votre adversaire et anticipez les rebonds de la balle pour obtenir l'avantage.<br>" +
            "Avec des graphismes rétro et des commandes simples, ce jeu vous ramènera aux débuts des jeux vidéo.<br>" +
            "Défiez-vous et voyez qui sera couronné champion du Ping Pong Rétro !<br>" ;

    }

}