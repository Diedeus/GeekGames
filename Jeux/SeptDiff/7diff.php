<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./style/7diff.css">
    <link rel="icon" type="image/png" href="../../asset/icone.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GekkGames - 7 différences</title>
    <script src="./script/7diff.js" defer></script>
</head>
<body>
<?php

require('../../Registration/config.php');

session_save_path("../../tmp");
session_start();

?>

<nav class="home">
            <ul>
                <li><a href="../../index.php">ACCUEIL</a></li>
                <li><a href="../../credits/credit.php">CREDITS</a></li>
                <li><a href="../../contact/contact.php">NOUS CONTACTER</a></li>
            </ul>
        </nav>


        <div class="right">
            <input id="searchbar" type="text" name="search" placeholder="Rechercher un jeu ...">
            <?php
            if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
                echo '<img src="../../asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="../../profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="design" href="../../Registration/deconnexion.php">Deconnexion</a>';
            } else {
            ?>
                <img src="../../asset/icone-mario.png" alt="">
                <button class="log">
                    <p>Se connecter</p>
                </button>
                <a class="sign" href="../../Registration/register.php">S'inscrire</a>

            <?php
            }
            if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
                echo '<a class="btnadmin" href="../admin/admin.php">Admin</a>';
            }
            ?>

        </div>
        <div class="clear"></div>
        <span class="barre"></span>




<?php
    if (isset($_POST['scoreFinal'])) {
        $score7diff = $_POST['scoreFinal'];
        $datescore = date('Y-m-d');
        $id = $_SESSION['id_users'];
        $query = "INSERT into `score_7diff`(Score_7diff, Date_sc7diff, id_users) VALUES ('$score7diff', '$datescore', '$id')";
        $result = $conn->query($query);
    }
    ?>
</body>
</html>