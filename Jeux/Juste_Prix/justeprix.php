<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Juste Prix</title>
    <link rel="stylesheet" href="./Style/justeprix.css">
    
</head>
<body>

<?php 

require('../../Registration/config.php');
session_save_path("../../tmp");
session_start();

?>

    <header>
        <section class="accueil corps">
            <div class="startgame">
            <h1>Bienvenue au Juste Prix</h1>
            <p>Trouvez le prix de l'objet demandé avec le moins de tentatives possible !<br>
        </p>
            <button id="comm">Commencer</button>
        </div>
        </section>

        <section class="jeujp corps">
            <?php
                $query = "SELECT Element_Jprix, Reponse_Jprix FROM Jeu_Jprix ORDER BY RAND() LIMIT 1";
                $result = mysqli_query($conn, $query);
               

                if ($result->num_rows > 0) {
                    $question = $result->fetch_assoc();
                    $_SESSION['Element_Jprix'] = $question['Element_Jprix'];
                    $_SESSION['Reponse_Jprix'] = $question['Reponse_Jprix'];

                }
            ?>
            <script>
                    let Img_Jprix = <?php echo json_encode($_SESSION['Element_Jprix']); ?>;
                    let Reponse_Jprix = <?php echo json_encode($_SESSION['Reponse_Jprix']); ?>;
            </script>

            <h1>Le Juste Prix</h1>
            <input type="number" id="prix" placeholder="Proposez votre prix :">
            <button type="submit" id="btt">Vérifier</button>
            <p>Nombre de tentatives : </p>
            <p class="affichscore"></p>

            <span class="chofroi"><span id="tou"></span></span>

        </section>
                    
        <div class="right">
        <section class="imageprix">
            <p class="trouvezprix">Trouvez le prix de :</p>

        </section>
        <section class="reponse">
        
        </section>
        </div>   



        <div class="navinscri">
        <nav class="home">
            <ul>
                <li><a href="../../index.php">MINI JEUX</a></li>
                <li><a href="#">CREDITS</a></li>
                <li><a href="#">NOUS CONTACTER</a></li>
            </ul>
        </nav>

        <div class="navright">
            <input id="searchbar" type="text" name="search" placeholder="Rechercher un jeu ...">
            <img src="../../asset/icone-mario.png" alt="">
            <a class="log" href="../index.php">Se connecter</a>
            <a class="sign" href="register.php">S'inscrire</a>
        </div>
        <div class="clear"></div>
        <span class="barre"></span>
        </div>

       


    </header>
    <section class="win">
    <video autoplay muted loop>
  <source src="./Images/testanimwin.mov">
</video>
        <div class="affichage_win">
            <div class="position_win">
                <img src="./Images/winlogo.png" alt="">
                <p class="titrescore">Votre score</p>
                <p class="scorejp"></p>
                <article class="bouton_win">
                    <button class="acc">Retour à l'accueil</button>
                    <button class="reco">Recommencer</button>
                    <form id="myForm" method="post">
                        <input type="hidden" name="scorefinal" id="valeurCacheeInput">
                        <input type="submit" value="Enregistrer votre Score" style="z-index:10">
                    </form>
                </article>
            </div>
        </div>
    </section>
    
    <!-- <form id="myForm" method="post">
        <input type="hidden" name="scorefinal" id="valeurCacheeInput">
        <input type="submit" value="Enregistrer votre Score" style="z-index:10">
        </form> -->

        <?php
        if(isset($_POST['scorefinal'])){
            $scorefinal = $_POST['scorefinal'];
            $datescore = date('Y-m-d');
            $id = $_SESSION['id_users'];
            $query = "INSERT into `Score_Jprix`(Score_Jprix, Date_ScJprix, id_users) VALUES ('$scorefinal', '$datescore', '$id')";
            $result = $conn->query($query);
        }
        ?>
    <script src="../Juste_Prix/Script/justeprix.js"></script>
</body>