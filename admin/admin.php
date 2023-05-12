<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="asset/icone.png" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
  <title>GeekGames - Home</title>
  <link rel="stylesheet" href="../styles/style.css">
  <script src="../script/script.js" defer></script>


</head>

<body>
  <?php
  // VERIFICATION ADMIN OU UTILISATEUR

  // Initialiser la session
  session_start();
  $id_user = $_SESSION['id_users'];
  $admin = "SELECT admin FROM users WHERE id_users=$id_user" ;
  // Vérifiez si l'utilisateur est connecté, sinon redirigez-le vers la page de connexion
  if(!isset($admin) || $admin === 0){
    header("Location: index.php");
    exit(); 
  }
?>



  <!-- FORMULAIRE CREATION DE QUESTION  -->
  <form class="box" action="" method="post" name="Jeu_Quizz">
    <h2 class="box-title">CREATION DES QUESTIONS DU QUIZZ</h2>
    <input type="text" class="box-input" name="Intitule_question" placeholder="Qu'elle est la question">
    <input type="text" class="box-input" name="Reponse_A" placeholder="Reponse A">
    <input type="text" class="box-input" name="Reponse_B" placeholder="Reponse B">
    <input type="text" class="box-input" name="Reponse_C" placeholder="Reponse C">
    <input type="text" class="box-input" name="Reponse_D" placeholder="Reponse D">
    <input type="text" class="box-input" name="Reponse_Quizz" placeholder="Reponse">
    <input type="text" class="box-input" name="Difficulte_question" placeholder="Qu'elle est la difficulte">
    <input type="submit" value="Creer" name="submit" class="connecter">
    <?php if (! empty($message)) { ?>
    <p class="errorMessage"><?php echo $message; ?></p>
    <?php } ?>
  </form>
  <img src="asset/logogeekgame.png" alt="">


  <?php 
// ON VA CHERCHER LES LOGS DE LA DB DANS LE FICHIER CONFIG.PHP
require('../Registration/config.php');

// On vérifie si les variables  sont définies dans la requête en utilisant la fonction "isset()"
   if(isset($_REQUEST["Intitule_question"],$_REQUEST["Reponse_A"],$_REQUEST["Reponse_B"],$_REQUEST["Reponse_C"],$_REQUEST["Reponse_D"],$_REQUEST["Reponse_Quizz"],$_REQUEST["Difficulte_question"])){
    

    //! On supprime les caractères d'échappement des variables avec la fonction "stripslashes() et on empêche les injections SQL avec la fonction "mysqli_real_escape_string"
    $Intitule_question = stripslashes($_REQUEST["Intitule_question"]);
    $Intitule_question = mysqli_real_escape_string($conn, $Intitule_question);

    $Reponse_A = stripslashes($_REQUEST["Reponse_A"]);
    $Reponse_A = mysqli_real_escape_string($conn, $Reponse_A);

    $Reponse_B = stripslashes($_REQUEST["Reponse_B"]);
    $Reponse_B = mysqli_real_escape_string($conn, $Reponse_B);

    $Reponse_C = stripslashes($_REQUEST["Reponse_C"]);
    $Reponse_C = mysqli_real_escape_string($conn, $Reponse_C);

    $Reponse_D = stripslashes($_REQUEST["Reponse_D"]);
    $Reponse_D = mysqli_real_escape_string($conn, $Reponse_D);

    $Reponse_Quizz = stripslashes($_REQUEST["Reponse_Quizz"]);
    $Reponse_Quizz = mysqli_real_escape_string($conn, $Reponse_Quizz);

    $Difficulte_question = stripslashes($_REQUEST["Difficulte_question"]);
    $Difficulte_question = mysqli_real_escape_string($conn, $Difficulte_question);


    //todo On créer une requete SQL  pour faire une insertion des données recuperé dans notre formulaire
    $query = "INSERT into `jeu_quizz` (Intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question) 
    VALUES ('$Intitule_question', '$Reponse_A', '$Reponse_B','$Reponse_C', '$Reponse_D', '$Reponse_Quizz', '$Difficulte_question')";

//todo On exécute la requête avec la fonction "mysqli_query()
    $res = mysqli_query($conn, $query);


    // Si l'insertion a réussi, il affiche un message de succès, sinon il affiche un message d'erreur
    if($res){
      echo "<div class='sucess'>
            <h3>La question a été inscrite avec succès </h3>
      </div>";
   } else {
    echo "<p>Erreur<\p>";
   }}       
// ?>
//!  <!-- FIN CREATION DE QUESTION -->


//! <!-- Création d'un tableau HTML -->
  <table>
    <tr>
      <td>id_question</td>
      <td>Intitule_question</td>
      <td>Reponse_A</td>
      <td>Reponse_B</td>
      <td>Reponse_C</td>
      <td>Reponse_D</td>
      <td>Reponse_Quizz</td>
      <td>Difficulte_question</td>
    </tr>
    <?php 

    //todo Si la connexion à la DB ne se fais alors il y a un message d'erreur 
if ($conn->connect_error) {
        echo "Impossible de se connecter à MySQL: " . $conn->connect_error;
        exit();
      }

      //todo On sélectionne toutes les colonnes de la table "Jeu_Quizz grace a la requete SQL
    $sql = "SELECT * FROM Jeu_Quizz ORDER BY id_question";

    //todo On exécute la requête et renvoie le résultat dans un objet
    $reponse = mysqli_query($conn, $sql);

    //todo La boucle permet de parcourir chaque ligne du résultat et de stocker les données de chaque colonne dans un tableau
    while($donnees = mysqli_fetch_array($reponse, MYSQLI_ASSOC))
    {
    ?>

//! <!-- chaque valeur du tableau est affichée dans une cellule du tableau -->
    <tr>
      <td><?php echo $donnees["id_question"];?></td>
      <td><?php echo $donnees['Intitule_question'];?></td>
      <td><?php echo $donnees['Reponse_A'];?></td>
      <td><?php echo $donnees['Reponse_B'];?></td>
      <td><?php echo $donnees['Reponse_C'];?></td>
      <td><?php echo $donnees['Reponse_D'];?></td>
      <td><?php echo $donnees['Reponse_Quizz'];?></td>
      <td><?php echo $donnees['Difficulte_question'];?></td>
    </tr>
    <?php
    }
  
    ?>
  </table>
//! <!-- Fin du tableau -->


//! <!-- Formulaire pour supprimer les questions -->
  <form class="box" action="" method="post" name="Jeu_Quizz">
    <h2 class="box-title">Suppression des questions</h2>
    <input type="text" class="box-input" name="id_question" placeholder="Quelle ligne est à supprimer">
    <input type="submit" value="Supprimer" name="submit" class="connecter">
  </form>

  <?php

//todo on vérifie si le champ "id_question" est défini 
if(isset($_REQUEST["id_question"])){

  //todo on récupère la valeur de ce champ et on empeche les injections SQL
    $id_question = stripslashes($_REQUEST["id_question"]);
    $id_question = mysqli_real_escape_string($conn, $id_question);

    $query = "DELETE FROM `Jeu_Quizz`  WHERE id_question = $id_question";

    //todo on exécute une requête de suppression sur la base de données, On supprime la ligne correspondant à l'ID de la question spécifié dans le champ de texte.
    $reponse2 = mysqli_query($conn, $query);
}
?>
//! <!-- Fin du formulaire de suppression -->


//!<!-- Formulaire UPDATE des questions qui demande l'identifiant de la question à mettre à jour -->
  <form class="box" action="" method="post" name="Jeu_Quizz">
    <h2 class="box-title">Mise à jour des questions</h2>
    <input type="text" class="box-input" name="id_question2" placeholder="Quelle ligne est à mettre à jour">
    <input type="submit" value="Sélectionnez" name="submit" class="connecter">
  </form>


  <?php

if(isset($_REQUEST["id_question2"])){
  echo '<br>';
  
//todo On nettoie le code et on empeche l'injection de SQL 
  $id_question2 = $_REQUEST["id_question2"];
  $id_question2 = mysqli_real_escape_string($conn, $id_question2);

  //todo On convertit l'identifiant en integer avec la fonction (int)
  $res = (int) $id_question2;

  echo '<br>';
 
  //* $query2 = "SELECT * FROM `Jeu_Quizz`  WHERE id_question = $res";
  //* $reponse3 = mysqli_real_query($conn, $query2);

  
  //todo  On sélectionne toutes les données de la table
  $result = $conn->query("SELECT * FROM `Jeu_Quizz` WHERE id_question = $res");



 $donnees2 = mysqli_fetch_array($result, MYSQLI_ASSOC);
}

if(isset($donnees2) && count($donnees2) > 0 || isset($_POST['save2D'])){
 
  $idselect = (isset($donnees2["id_question"]) && count($donnees2) > 0)? $donnees2["id_question"]:$_POST['saveID'];
  $intitule = (isset($donnees2["Intitule_question"]) && count($donnees2) > 0)? $donnees2["Intitule_question"]:$_POST['save2D']; 
  echo $intitule;
  echo '<br>';
  echo '<form method="post" action="#" name="Jeu_Quizz">';
  echo '<input type="text" name="majIntitule">';
  echo '<input type="text" name="save2D" value="'.$intitule.'">';
  echo '<input type="text" name="saveID" value="'.$idselect.'">';
  echo '<input type="submit" name="submit2" value="modifier" class="connecter"></form>';
  echo '<br>';
  var_dump($idselect);


  if(isset($_POST["majIntitule"])){
    var_dump($idselect);
    $majIntitule = $_POST["majIntitule"];
    $majIntitule = mysqli_real_escape_string($conn, $majIntitule);
    // $query = "UPDATE `Jeu_Quizz` SET Intitule_question = '$majIntitule' WHERE id_question = $idselect";
    // $reponse4 = mysqli_query($conn, $query);
    $reponse4 = $conn->query("UPDATE `Jeu_Quizz` SET `Intitule_question` = '".$majIntitule."' WHERE id_question = '".$idselect."'");
  }
  

  echo $donnees2["Reponse_A"]; echo '<br>';

  $ReponseA= (isset($donnees2["Reponse_A"]) && count($donnees2) > 0)? $donnees2["Reponse_A"]:$_POST['saveRA']; 
  echo '<br>';
  echo '<form method="post" action="#" name="Jeu_Quizz">';
  echo '<input type="text" name="majReponseA">';
  echo '<input type="text" name="saveRa" value="'.$ReponseA.'">';
  echo '<input type="text" name="saveID" value="'.$idselect.'">';
  echo '<input type="submit" name="submit3" value="modifier" class="connecter"></form>';
  echo '<br>';

  if(isset($_POST["majReponseA"])){
    var_dump($idselect);
    $majReponseA = $_POST["majReponseA"];
    $majReponseA = mysqli_real_escape_string($conn, $majReponseA);
    // $query = "UPDATE `Jeu_Quizz` SET Intitule_question = '$majIntitule' WHERE id_question = $idselect";
    // $reponse4 = mysqli_query($conn, $query);
    $reponse5 = $conn->query("UPDATE `Jeu_Quizz` SET `Reponse_A` = '".$majReponseA."' WHERE id_question = '".$idselect."'");
  }

  echo $donnees2["Reponse_B"]; echo '<br>';
  echo $donnees2["Reponse_C"]; echo '<br>';
  echo $donnees2["Reponse_D"]; echo '<br>';
  echo $donnees2["Reponse_Quizz"]; echo '<br>';
  echo $donnees2["Difficulte_question"]; echo '<br>';
  

}


?>
<!-- Fin du formulaire UPDATE -->




</body>