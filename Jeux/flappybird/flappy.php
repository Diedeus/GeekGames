<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="../../asset/icone.png" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
  <link rel="stylesheet" href="./style/style.css">
  <script src="../../script/error.js" defer></script>
  <script src="../../script/liste.js" defer></script>
</head>
<body>

<?php

require('../../Registration/config.php');

session_save_path("../../tmp");
session_start();
if(!isset($_SESSION['id_users'])){ 
    require_once('../../inc/connexionmdp.inc.php');
    }?>



<section class="container_header">
    <header>
    <div class="score-container">

    <?php 
if(isset($_SESSION['id_users'])){

  $query = "SELECT Max(Score_Fbirds) AS Max_score FROM score_Fbirds WHERE id_users =" . $_SESSION['id_users'];
  $result = mysqli_query($conn, $query);

  if(mysqli_num_rows($result) === 1){
    $row = mysqli_fetch_assoc($result);
    $scoreMax = $row['Max_score'];
    echo '<div id="bestScore"> Best: ' . $scoreMax . '</div>';
  }


}
?>

      <div id="currentScore"></div>

      <form method="POST">
        <input type="hidden" name="scoreFbirds" id="inpCache" value="">
        <input class="subscorefb" type="submit" value="Enregistrer score">
      </form>

      <?php 
      
      if (isset($_POST['scoreFbirds'])){

        $scoreFinal = $_POST['scoreFbirds'];
        $datescore = date('Y-m-d');
        $id = $_SESSION['id_users'];
        $query = "INSERT into `score_fbirds`(Score_Fbirds, Date_ScFbirds, id_users) VALUES ('$scoreFinal', '$datescore', '$id')";
        $result = $conn->query($query);?>
        <script>
                    window.location.href = "http://<?php echo $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'] ; ?>"
        </script>
        <?php
      }
      
      ?>
    </div>
  </header>
  </section>

  <canvas id="canvas" width="431" height="768"></canvas>
  <img id="myImage" src="./asset/logoflappyb.png" alt="">
  <img id="myImage2" src="./asset/btnplay.png" alt="">
  <script src="index.js"></script>
  <div class="navinscri">
        <nav class="home">
            <ul>
                <li><a href="../../index.php">ACCUEIL</a></li>
                <li><a href="../../credits/credit.php">CREDITS</a></li>
                <li><a href="../../contact/contact.php">NOUS CONTACTER</a></li>
            </ul>
            </nav>

        <div class="navright">
            <input id="searchbar" onkeyup="search_jeu()" type="text" name="searchjeu" placeholder="Rechercher un jeu ...">
            <ul class="searchjeu">
                <li class="jeuxhome">
                    <a href="../../Jeux/Quizz/Quizz.php">
                        <img src="../../asset/jeux1search.jpg" alt="">
                        <article>
                            <h3>QUIZZ GEEK</h3>
                            <p>Êtes-vous un véritable passionné de la culture geek ? Mettez vos connaissances à l'épreuve avec notre quiz geek.</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="../../Jeux/SeptDiff/7diff.php">
                        <img src="../../asset/jeux2search.jpg" alt="">
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
                    <a href="../../Jeux/Juste_Prix/justeprix.php">
                        <img src="../../asset/jeux3search.jpg" alt="">
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
                        <img src="../../asset/jeux4search.jpg" alt="">
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
                echo '<img class="icone" src="../../asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="../../profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="design" href="../../Registration/deconnexion.php">Deconnexion</a>';
            } else {
            ?>
                <img class="icone" src="../../asset/icone-mario.png" alt="">
                <button class="user">
                    <p>Se connecter</p>
                </button>
                <a class="sign" href="../../Registration/register.php">S'inscrire</a>

            <?php
            }
            if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
                echo '<a class="btnadmin" href="../../admin/admin.php">Admin</a>';
            }
            ?>

        </div>
        <div class="clear"></div>
        <span class="barre"></span>
        </div>
</body>


</html>