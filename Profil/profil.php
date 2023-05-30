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
    <script src="./script/profil.js" defer></script>
</head>
<body>

<?php
  // ON VA CHERCHER LES LOGS DE LA DB DANS LE FICHIER CONFIG.PHP
require('../Registration/config.php');
// Initialiser la session
session_save_path("../tmp");
session_start();
if (empty($_SESSION)) {
    header('Location: ../index.php');
exit();
    
}



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
            <p>Votre e-mail</p>
            <p>Votre adresse</p>
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
    <div class="clear"></div>





    <?php // Assurez-vous d'appeler session_start() au début du fichier

// Vérifier si l'utilisateur est connecté et récupérer son ID
if (isset($_SESSION['id_users'])) {
  $idUtilisateur = $_SESSION['id_users'];

  // Vérifier si le formulaire de suppression a été soumis
  if (isset($_POST['id_users'])) {
    // Suppression des enregistrements liés dans la table `score_quizz`
    $stmt = $conn->prepare("DELETE FROM score_quizz WHERE id_users = ?");
    $stmt->bind_param("i", $idUtilisateur);
    $stmt->execute();

    // Suppression des enregistrements liés dans la table `score_jprix`
    $stmt = $conn->prepare("DELETE FROM score_jprix WHERE id_users = ?");
    $stmt->bind_param("i", $idUtilisateur);
    $stmt->execute();

    // Suppression de l'utilisateur
    $stmt = $conn->prepare("DELETE FROM users WHERE id_users = ?");
    $stmt->bind_param("i", $idUtilisateur);

    if ($stmt->execute()) {
        session_destroy();
        header('Location: ../index.php');
  exit();
        
    } else {
      echo "<div class='error'>
        <h3>Erreur lors de la suppression de l'utilisateur :</h3>
      </div>" . $stmt->error;
    }
  }
}
?>

<form method="POST" action="">
  <h2 class="box-title">Supprimer votre compte</h2>
  <input type="hidden" name="id_users" value="<?php echo isset($idUtilisateur) ? $idUtilisateur : ''; ?>">
  <input type="submit" value="Supprimer" class="id_question">
</form>

    <section class="formupdate_profil">
        <img class="closeformupdate" src="./asset/croix.png" alt="">

    <?php
    // Vérification de la soumission du formulaire de sélection
    if(isset($_SESSION['id_users'])){
        $userupdate2 = $_SESSION['id_users'];
        $sql2 = "SELECT * FROM users WHERE id_users = $userupdate2 ";
        $query2 = mysqli_query($conn, $sql2);
        $donnes2 = mysqli_fetch_array($query2, MYSQLI_ASSOC);

            $idu = $donnes2['id_users'];
            $Nomu = $donnes2['Nom'];
            $Prenomu = $donnes2['Prenom'];
            $Pseudou = $donnes2['Nom_utilisateur'];
            $Emailu = $donnes2['Email'];
            $Birthdayu = $donnes2['Date_de_naissance'];
            $Adresseu = $donnes2['adresse'];
            $Adminu = $donnes2['Admin'];


            // Affichage du formulaire de modification avec les valeurs existantes
            echo '<form method="POST" action="" name="editForm" class="updateform">';
            echo '<h2 class="box-title">Modifier vos informations</h2>';
            echo '<input type="hidden" name="idu" value="' . $idu . '">';
            echo '<div class="box-form"><input type="text" name="Nomu"  value="' . $Nomu .'"><br></div>';
            echo '<div class="box-form"><input type="text"  name="Prenomu" value="' . $Prenomu . '"><br></div>';
            echo '<div class="box-form"><input type="text"  name="Pseudou" value="' . $Pseudou . '"><br></div>';
            echo '<div class="box-form">
            <input type="password"  name="Pseudou" value="' . $Pseudou . '"><br></div>';
            echo '<input type="text" name="Emailu" value="' . $Emailu . '"><br>';
            echo '<input type="text"  name="Birthdayu" value="' . $Birthdayu . '"><br>';
            echo '<input type="text"  name="Adresseu" value="' . $Adresseu . '"><br>';
            echo '<input type="submit" value="Valider les modifications" class="submitprofile">';
            echo '</form>';
        }
        ?>
    </section>
    <?php
        if(isset($_POST['idu'], $_POST['Nomu'], $_POST['Prenomu'], $_POST['Pseudou'], $_POST['Emailu'], $_POST['Birthdayu'], $_POST['Adresseu'])){
            $idu2 = $_POST['idu'];
            $Nomu2 = $_POST['Nomu'];
            $Prenomu2 = $_POST['Prenomu'];
            $Pseudou2 = $_POST['Pseudou'];
            $Emailu2 = $_POST['Emailu'];
            $Birthdayu2 = $_POST['Birthdayu'];
            $Adresseu2 = $_POST['Adresseu'];

            $stmt = $conn->prepare("UPDATE users SET Nom = '$Nomu2', Prenom = '$Prenomu2', Nom_utilisateur = '$Pseudou2', Email = '$Emailu2', Date_de_naissance = '$Birthdayu2', adresse = '$Adresseu2' WHERE id_users = $idu2");
    
    
    if ($stmt->execute()) { ?>
        <div class='succes'>
             <img src="./asset/iconsucces.png" alt="">
             <article>
            <h3>IMPORTANT !</h3>
            <p>Modifications éffectuées avec succès. </p>
            <button class="closesucces">Fermer la fenêtre</button>
            </article>
      </div>
   <?php }else {
      echo " 
      <div class='error'> "; ?>
      <img src="./asset/warningicone.png" alt="">
      <?php
      echo "<article>
     <h3>ATTENTION !</h3>
     <p>Erreur lors de la mise à jour de l'enregistrement  </p>
     <button class=\"closeerror\">Fermer la fenêtre</button>
     </article>
</div> " . $stmt->error;
      
        } 
    }
?>
    
    

    


</body>
</html>