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

require('../Registration/config.php');



   if(isset($_REQUEST["Intitule_question"],$_REQUEST["Reponse_A"],$_REQUEST["Reponse_B"],$_REQUEST["Reponse_C"],$_REQUEST["Reponse_D"],$_REQUEST["Reponse_Quizz"],$_REQUEST["Difficulte_question"])){
    
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

    $query = "INSERT into `jeu_quizz` (Intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question) 
    VALUES ('$Intitule_question', '$Reponse_A', '$Reponse_B','$Reponse_C', '$Reponse_D', '$Reponse_Quizz', '$Difficulte_question')";

    $res = mysqli_query($conn, $query);

    if($res){
      echo "<div class='sucess'>
            <h3>La question a été inscrite avec succès </h3>
      </div>";
   } else {
    echo "<p>Erreur<\p>";
   }}       
?>
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
if ($conn->connect_error) {
        echo "Impossible de se connecter à MySQL: " . $conn->connect_error;
        exit();
      }

    $sql = "SELECT * FROM Jeu_Quizz ORDER BY id_question";
    $reponse = mysqli_query($conn, $sql);
    while($donnees = mysqli_fetch_array($reponse, MYSQLI_ASSOC))
    {
    ?>
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
 
 <form class="box" action="" method="post" name="Jeu_Quizz">
<h2 class="box-title">Suppression des questions</h2>
<input type="text" class="box-input" name="id_question" placeholder="Quelle ligne est à supprimer">
<input type="submit" value="Supprimer" name="submit" class="connecter">
</form>
  

<?php

if(isset($_REQUEST["id_question"])){

    $id_question = stripslashes($_REQUEST["id_question"]);
    $id_question = mysqli_real_escape_string($conn, $id_question);

    $query = "DELETE FROM `Jeu_Quizz`  WHERE id_question = $id_question";
    $reponse2 = mysqli_query($conn, $query);
}

?>

</body>