<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./essaie.css">
</head>
<body>

<?php 

require('../../../Registration/config.php');
session_save_path("../../../tmp");
session_start();

?>


    <section class="corps7diff">
<img id="img1" src="./image1.jpg" alt="">
    <img id="img2" src="./image1diff.jpg" alt="">
     <section class="btnAll">
     <!-- <span id="err1" class="erreurs" style="left:60px ; top: 10px"></span>
     <span id="err2" class="erreurs" style="left:60px ; top: 185px"></span>
     <span id="err3" class="erreurs" style="left:157.5px ; top: 300px"></span>
     <span id="err4" class="erreurs" style="left:405px ; top:155px"></span>
     <span id="err5" class="erreurs" style="left:460px ; top:200px"></span>
     <span id="err6" class="erreurs" style="left:430px ; top: 125px"></span>
     <span id="err7" class="erreurs" style="left:245px ; top: 470px"></span> -->

    </section>
   
    </section>
    <p id="timer">il reste 5 min</p>
    <script src="./Image1.js"></script>
    <p id="affScore"></p>
    <p id="gameover" style="display:none">VOUS AVEZ ECHOUE</p>

    <form method="POST" id="formScore" action="" style="display:none;">
        <input type="hidden" id="inpScore" name="inpscore" value="">
        <input type="submit" value="Enregistrer votre score">
    </form>

    <?php 
    if ( isset($_POST['inpscore']) ){
        $score7diff = $_POST['inpscore'];
        $datescore = date('Y-m-d');
        $id = $_SESSION['id_users'];
        $query = "INSERT into `score_7diff`(Score_7diff, Date_sc7diff, id_users) VALUES ('$score7diff', '$datescore', '$id')";
        $result = $conn->query($query);
    }
    ?>
</body>
</html>