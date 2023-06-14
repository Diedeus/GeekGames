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
</head>
<body>

<?php

require('../../Registration/config.php');

session_save_path("../../tmp");
session_start();
if(!isset($_SESSION['id_users'])){ 
    require_once('../../inc/connexionmdp.inc.php');
    }?>



    <header>
    <h1>Flappy Bird</h1>
    <div class="score-container">

    <?php 
if(isset($_SESSION['id_users'])){

  $query = "SELECT Max(Score_Fbirds) AS Max_score FROM score_Fbirds WHERE id_users =" . $_SESSION['id_users'];
  $result = mysqli_query($conn, $query);

  if(mysqli_num_rows($result) === 1){
    $row = mysqli_fetch_assoc($result);
    $scoreMax = $row['Max_score'];
    echo '<div id="bestScore"> Le Best : ' . $scoreMax . '</div>';
  }


}
?>

      <div id="currentScore"></div>

      <form method="POST">
        <input type="hidden" name="scoreFbirds" id="inpCache" value="">
        <input type="submit" value="Enregistrer votre score">
      </form>

      <?php 
      
      if (isset($_POST['scoreFbirds'])){

        $scoreFinal = $_POST['scoreFbirds'];
        $datescore = date('Y-m-d');
        $id = $_SESSION['id_users'];
        $query = "INSERT into `score_fbirds`(Score_Fbirds, Date_ScFbirds, id_users) VALUES ('$scoreFinal', '$datescore', '$id')";
        $result = $conn->query($query);
      }
      
      ?>
    </div>
  </header>

  <canvas id="canvas" width="431" height="768"></canvas>
  <script src="index.js"></script>
</body>
</html>