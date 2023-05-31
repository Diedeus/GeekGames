<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="asset/icone.png" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
  <title>GeekGames - Home</title>
  <link rel="stylesheet" href="./style/7diff.css">
  <script src="./script/7diff.js" defer></script>


</head>

<body>

<?php 

require('../../Registration/config.php');
session_save_path("../../tmp");
session_start();

?>

<Section class="presentation">

    <h1>Le jeu des 7 différences</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste neque, magni, id ducimus adipisci veritatis dolor omnis sunt animi voluptas! Ipsa soluta facere architecto modi in, autem earum perspiciatis?</p>
    <div class="basprez">
        <img src="" alt="">
        <form action="" method="POST">
            <input type="hidden" id="idimgSelect" name="recupId1" value="">
            <input type="submit" id="idimgsub" value="Selectionner" style="display:block;">
        </form>
        <?php
         if(isset($_POST['recupId1'])){

            $idsel = $_POST['recupId1'];
            $query2 = "SELECT Image1 FROM jeu_7diff WHERE id_Imagediff = $idsel ";
            $result2 = $conn ->query($query2);

            if ($result2 && $result2->num_rows > 0) {
                $row2 = $result2->fetch_assoc();
                $previImg = $row2['Image1'];
        
                echo "<img src='$previImg'>";
            }
        }
        ?>

        <form action="" method="POST">
            <input type="hidden" id="idimgSelect2" name="recupId2" value="">
            <input type="submit" id="idimgsub2" value="commencer" style="display:none;">
        </form>

    </div>

</Section>

<section class="sectImg">

<?php 
    $query = "SELECT * FROM jeu_7diff";
    $result = $conn->query($query);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $imagePath = $row['Image1'];
            $idimg = $row['id_Imagediff'];
            echo "<div class='caseImage'>";
            echo "<img src='$imagePath'>";
            echo "</div>";
            echo "<input type='hidden' class='idimg' name='iddelimage' value='$idimg'>";
        }
    }else {
        echo "aucune image trouvée" ;
    }
?>


</section>







</body>
</html>