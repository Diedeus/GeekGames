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
    require('../Registration/config.php');

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