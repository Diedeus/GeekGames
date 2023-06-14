<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="asset/icone.png" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'> -->
    <title>GeekGames - Home</title>
    <link rel="stylesheet" href="styles/style.css">
    <script src="Script/Script.js" defer></script>
    <script src="Script/liste.js" defer></script>
    <script src="Script/error.js" defer></script>


</head>

<body>
    <?php
    require('Registration/config.php');
    session_save_path("./tmp");
    session_start(); ?>

    <header id="test">
        <nav class="home">
            <ul>
                <li><a class="on" href="./index.php">ACCUEIL</a></li>
                <li><a href="./credits/credit.php">CREDITS</a></li>
                <li><a href="./contact/contact.php">NOUS CONTACTER</a></li>
            </ul>
        </nav>


        <div class="right">
            <input id="searchbar" onkeyup="search_jeu()" type="text" name="searchjeu" placeholder="Rechercher un jeu ...">
            <ul class="searchjeu">
                <li class="jeuxhome">
                    <a href="./Jeux/Quizz/Quizz.php">
                        <img src="./asset/jeux1search.jpg" alt="">
                        <article>
                            <h3>QUIZZ GEEK</h3>
                            <p>Êtes-vous un véritable passionné de la culture geek ? Mettez vos connaissances à l'épreuve avec notre quiz geek.</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="./Jeux/SeptDiff/7diff.php">
                        <img src="./asset/jeux2search.jpg" alt="">
                        <article>
                            <h3>7 DIFFERENCES</h3>
                            <p>Plongez dans un univers geek captivant
                                avec notre jeu des 7 différences. Mettez votre sens de l'observation à
                                l'épreuve..</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="./Jeux/Juste_Prix/justeprix.php">
                        <img src="./asset/jeux3search.jpg" alt="">
                        <article>
                            <h3>LE JUSTE PRIX</h3>
                            <p>Êtes-vous prêt à estimer la valeur des objets et
                                à défier votre instinct? Mettez vos talents d'évaluation
                                à l'épreuve..</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="">
                        <img src="./asset/jeux4search.jpg" alt="">
                        <article>
                            <h3>FLAPPY BIRD</h3>
                            <p> Préparez-vous à vous envoler dans le monde de Flappy Bird
                                version DRAGON BALL ! un jeu addictif et plein de défis !</p>
                        </article>
                    </a>
                </li>
            </ul>
            <?php
            if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
                echo '<img class="icone" src="./asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="./profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="design" href="./Registration/deconnexion.php">Deconnexion</a>';
            } else {
            ?>
                <img class="icone" src="./asset/icone-mario.png" alt="">
                <button class="log">
                    <p>Se connecter</p>
                </button>
                <a class="sign" href="./Registration/register.php">S'inscrire</a>

            <?php
            }
            if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
                echo '<a class="btnadmin" href="./admin/admin.php">Admin</a>';
            }
            ?>

        </div>
        <div class="clear"></div>
        <span class="barre"></span>

        <section class="testvideo">
            <div class="rondlogo">
                <article class="span">
                    <span class="rond rondun"></span>
                    <span class="rond ronddeux"></span>
                    <span class="rond rondtrois"></span>
                    <span class="rond rondquatre"></span>
                    <span class="rond rondcinq"></span>
                    <span class="rond rondsix"></span>
                </article>
                <article class="logotexte">
                    <img src="asset/logogeekgame.png" alt="">
                    <p class="textlogo">Bien le bonjour jeune aventurier et bienvenue sur GEEKGAME !<br> Ici tu trouveras plusieurs mini jeux du plus simple comme le Quizz en <br>passant par des jeux plus complexe comme le Flappy bird ou encore le Snake .. <br>
                        Entraîne toi et compare tes scores avec ceux de tes amis et devient le MEILLEUR DES GEEKS !
                        <br>
                    </p>
                </article>

                <article class="textejeu">
                    <h1 id="titrejeu"></h1>
                    <p class="descrijeu" id="descijeuid"></p>
                    <a id="aquizz" href="./Jeux/Quizz/Quizz.php" style="display:block">Jouer au Quizz</a>
                    <a id="a7diff" href="./Jeux/SeptDiff/7diff.php" style="display:none">Jouer au Sept Diff</a>
                    <a id="ajusteprix" href="./Jeux/Juste_Prix/justeprix.php" style="display:none">Jouer au juste prix</a>
                    <a id="aflappybird" href="" style="display:none">Jouer au flappy bird</a>
                    <a id="asnake" href="./index.php" style="display:none">Jouer au snake</a>
                    <a id="apingpong" href="./index.php" style="display:none">Jouer au ping pong</a>
                </article>
            </div>
        </section>

        <section class="minijeu">
            <span></span>
            <h2 class="listejeu">LISTE DES JEUX</h2>
            <span></span>
            <div class="jeux">
                <article id="quiz">
                    <img id="imgquizz" src="asset/backjeuun.jpg" alt="">
                    <h2>QUIZ GEEK</h2>
                </article>

                <article id="septdiff">
                    <img id="imgseptdiff" src="asset/backjeudeux.jpg" alt="">
                    <h2>7 DIFFERENCES</h2>
                </article>

                <article id="justeprix">
                    <img id="imgjusteprix" src="asset/backjeutrois.jpg" alt="">
                    <h2>LE JUSTE PRIX</h2>
                </article>

                <article id="flappybird">
                    <img id="imgflappybird" src="asset/backjeucinq.jpg" alt="">
                    <h2>FLAPPY BIRD</h2>
                </article>

                <article id="snake">
                    <img id="imgsnake" src="asset/backjeuquatrenondispo.jpg" alt="">
                    <h2>SNAKE</h2>
                </article>

                <article id="pingpong">
                    <img id="imgpingpong" src="asset/backjeusixnondispo.jpg" alt="">
                    <h2>PING PONG</h2>
                </article>
            </div>

        </section>

    </header>
<?php
   require_once('./inc/connexionmdp.inc.php')
   ?>



</body>

</html>