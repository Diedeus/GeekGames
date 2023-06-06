<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="../asset/icone.png" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./style/credit.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GeekGames - Crédits</title>
</head>

<body>
    <?php
    session_save_path("../tmp");
    session_start(); ?>

    <nav class="home">
        <ul>
            <li><a href="../index.php">ACCUEIL</a></li>
            <li><a class="on" href="./credits/credit.php">CREDITS</a></li>
            <li><a href="../contact/contact.php">NOUS CONTACTER</a></li>
        </ul>
    </nav>


    <div class="right">
        <input id="searchbar" type="text" name="search" placeholder="Rechercher un jeu ...">
        <?php
        if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
            echo '<img src="../asset/icone-mario.png" alt="">';
            echo '<a  class="user" href="../profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
            echo '<a class="design" href="../Registration/deconnexion.php">Deconnexion</a>';
        } else {
        ?>
            <img src="../asset/icone-mario.png" alt="">
            <button class="log">
                <p>Se connecter</p>
            </button>
            <a class="sign" href="./Registration/register.php">S'inscrire</a>

        <?php
        }
        if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
            echo '<a class="btnadmin" href="../admin/admin.php">Admin</a>';
        }
        ?>

    </div>
    <div class="clear"></div>
    <span class="barre"></span>

    <section class="container_credit">
        <div class="credit">
            <p> <span>GEEKGAMES</span> est un projet réunissant plusieurs mini-jeux simples <br>
                le tout dans un univers geek.<br><br>

                Ce projet a été réalisé dans le but de valider le projet final de la <br>
                formation <span>"Développeur Web et Web Mobile"</span> de l'AFCI de Liévin.<br><br>

                Nous sommes fiers de présenter Geek Games comme un projet résultant <br>
                de notre passion pour le développement Web et mobile.<br><br>

                Rejoignez-nous dès maintenant sur Geek Games et plongez dans l'univers <br>
                captivant de nos mini-jeux. Que vous soyez un joueur occasionnel ou un <br>
                passionné de jeux, Geek Games est là pour vous divertir et mettre votre <br>
                habileté à l'épreuve.<br><br>

                Merci de soutenir notre projet Geek Games et de partager cette aventure <br>
                de jeux avec nous. Préparez-vous à explorer, à vous amuser et à relever <br>
                des défis excitants !<br><br>

                Réalisé par <span>Hugo BOCQUET</span> et <span>Alberick DUPONT</span> , deux développeurs <br>
                juniors passionnés par les jeux vidéo et le développement !</p>
            <img src="../asset/logoblanc.png" alt="">
        </div>
        <div class="dev">
            <article class="gauche">
                <img src="./asset/hugo.jpg" alt="">
                <p>Hugo BOCQUET</p>
                <div class="reseaux">
                    <a href="https://github.com/Diedeus" target="_blank"><img src="./asset/logogit.png" alt=""></a>
                    <a href="https://www.linkedin.com/in/hugo-bocquet-0a4b42272/" target="_blank"><img src="./asset/logolinkedin.png" alt=""></a>
                </div>
            </article>
            <article class="droite">
                <img src="./asset/alberick.jpg" alt="">
                <p>Alberick DUPONT</p>
                <div class="reseaux">
                    <a href="https://github.com/AlberickDupont" target="_blank"><img src="./asset/logogit.png" alt=""></a>
                    <a href="https://www.linkedin.com/in/alberick-dupont-136290269/" target="_blank"><img src="./asset/logolinkedin.png" alt=""></a>
                    <a href="https://twitter.com/ExoDeTV" target="_blank"><img src="./asset/logotwitter.png" alt=""></a>
                </div>
            </article>
        </div>
    </section>
</body>

</html>