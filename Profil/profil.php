<!DOCTYPE html>
<html lang="fr">
<head>
<link rel="icon" type="image/png" href="../asset/icone.png" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <title>Geekgame - Profil</title>
</head>
<body>

<?php
  // ON VA CHERCHER LES LOGS DE LA DB DANS LE FICHIER CONFIG.PHP
require('../Registration/config.php');
// Initialiser la session
session_save_path("../tmp");
session_start();



?>

    <section class="container_allprofil">

        <div class="gauche">
            <img src="../asset/logogeekgame.png" alt="">
            <span></span>
            <button >Votre compte</button>
            <article>
                <img src="../asset/backjeutrois.jpg" alt="">
                <p>Le juste prix</p>
                </article>

                <article>
                <img src="../asset/backjeudeux.jpg" alt="">
                <p>7 differences</p>
            </article>

            <article class="last">
                <img src="../asset/backjeuun.jpg" alt="">
                <p>Quizz geek</p>
            </article>

            <a href="../index.php" class="voirjeux">Tous les jeux</a>

            <div class="btnbas">
                <a href="#">Mentions légales</a>
                <a href="#">Deconnexion</a>
            </div>
        </div>

        <div class="droite">

        <div class="haut">
        <nav class="home">
            <ul>
                <li><a href="../index.php">MINI JEUX</a></li>
                <li><a href="#">CREDITS</a></li>
                <li><a href="#">NOUS CONTACTER</a></li>
            </ul>
        </nav>
        <input id="searchbar" type="text" name="search" placeholder="Rechercher un jeu ...">
        <div class="clear"></div>
        <span class="barre"></span>
        </div>


        <?php

if(isset($_SESSION['id_users'])){
    $userupdate = $_SESSION['id_users'];
    $sql = "SELECT * FROM users WHERE id_users = $userupdate ";

    //todo On exécute la requête et renvoie le résultat dans un objet
    $query = mysqli_query($conn, $sql);
    $donnes = mysqli_fetch_array($query, MYSQLI_ASSOC);

?>
        <div class="bas">
            <article>
            <img src="./asset/avatar.png" alt="">
            <?php
            echo "<p>". $donnes['Nom_utilisateur'] . "</p>";
            ?>
            </article>
            <div class="clear"></div>


            <div class="update">

            <div class="titre_update">
            <p>Votre nom</p>
            <p>Votre prenom</p>
            <p>Votre pseudo</p>
            <p>Votre âge</p>
            <p>Votre adresse mail</p>
            <p>Votre numero de tel</p>
            <p>Votre mot de passe</p>
            <button class="modif">Modifier les informations</button>
            </div>

            <span class="update"></span>



            <div class="profil_update">
                <?php
                echo "<p>". $donnes['Nom'] ."</p>";
                echo "<p>". $donnes['Prenom'] ."</p>";
                echo "<p>". $donnes['Nom_utilisateur'] . "</p>";
                echo "<p>". $donnes['Date_de_naissance'] ."</p>";
                echo "<p>". $donnes['Email'] ."</p>";
                echo "<p>". $donnes['adresse'] ."</p>";
                echo "<p>****************</p>";
                ?>
                <button class="supprcompte">Supprimer le compte</button>
            </div>
            <?php }?>


            <div class="score">
                <div class="hautscore">
                <img src="../asset/backjeuun.jpg" alt="">
                    <article>
                        <p class="nomjeu">QUIZZ GEEK</p>
                        <p class="bestscore">Meilleur score : <span>2000</span></p>
                    </article>
                    
                </div>
                <div class="clear"></div>
                <div class="basscore">
                    <img src="./asset/quizzgeek.jpg" alt="">
                    <img src="./asset/7diffnoirblanc.jpg" alt="">
                    <img src="./asset/justeprixnoirblanc.jpg" alt="">
                    <img src="./asset/quizzgeeknoirblanc.jpg" alt="">
                    <img src="./asset/7diffnoirblanc.jpg" alt="">
                    <img src="./asset/justeprixnoirblanc.jpg" alt="">

                    </a>
                </div>
            </div>

            </div>

        </div>
        </div>
    </section>



</body>
</html>