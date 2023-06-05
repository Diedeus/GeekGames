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

    // require('../../Registration/config.php');
    // var_dump(file_get_contents("../Juste_Prix/test.json"));
    // var_dump($conn);
    session_save_path("../../tmp");
    session_start();

    ?>

    <section class="presentation">

        <h1>Le jeu des 7 différences</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste neque, magni, id ducimus adipisci veritatis dolor omnis sunt animi voluptas! Ipsa soluta facere architecto modi in, autem earum perspiciatis?</p>
        <div class="basprez">

            <form action="" method="POST">
                <input type="hidden" id="idimgSelect" name="recupId1" value="">
                <input type="submit" id="idimgsub" value="Selectionner" style="display:block;">
            </form>
            <?php 
            var_dump($_POST['recupId2']);
            var_dump($_POST['recupId1']);
            ?>

            <form action="" method="POST">
                <input type="hidden" id="idimgSelect2" name="recupId2" value="0">
                <input type="submit" id="idimgsub2" value="commencer" style="display:none;">
            </form>

        </div>

    </section>
     
    <?php
    if (isset($_POST['recupId1'])) {

        $idsel = $_POST['recupId1'];
        $query2 = "SELECT Image1 FROM jeu_7diff WHERE id_Imagediff=$idsel ";
        $result2 = $conn->query($query2);

        if ($result2 && $result2->num_rows > 0) {
            $row2 = $result2->fetch_assoc();
            $previImg = $row2['Image1'];

            echo "<img src='$previImg'>";
        }
    }
    ?>

    <section class="sectImg">

        <?php
        $query = "SELECT * FROM jeu_7diff";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $imagePath = $row['Image1'];
                $idimg = $row['id_Imagediff'];
                echo "<div class='caseImage'>";
                echo "<img src='$imagePath'>";
                echo "</div>";
                echo "<input type='hidden' class='idimg' name='iddelimage' value='$idimg'>";
            }
        } else {
            echo "aucune image trouvée";
        }
        ?>


    </section>

    <section class="corps7diff" style="display:none">

        <?php
        var_dump($_POST['recupId2']);
        if (isset($_POST['recupId2'])) {

            $id3 = $_POST['recupId2'];
            $query3 = "SELECT * FROM jeu_7diff WHERE id_Imagediff = $id3";
            $result3 = $conn->query($query3);
            if ($result3->num_rows > 0) {
                $row3 = $result3->fetch_assoc();
                $imageSelect = $row3['Image1'];
                $imageDiffSelect = $row3['Image2'];


                echo "<img id='img1' src='$imageSelect' alt=''>";
                echo "<img id='img2' src='$imageDiffSelect' alt=''>";
            }
        }




        ?>
        <div class="btnAll test" style="display:none">

        </div>
    </section>



    <section class="infos" style="display:none">
        <p id="timer">il reste 5 min</p>
        <p id="affScore"></p>
        <p id="gameover" style="display:none">VOUS AVEZ ECHOUE</p>

        <form method="POST" id="formScore" action="" style="display:none;">
            <input type="hidden" id="inpScore" name="inpscore" value="">
            <input type="submit" value="Enregistrer votre score">
        </form>
    </section>

    <?php
    if (isset($_POST['inpscore'])) {
        $score7diff = $_POST['inpscore'];
        $datescore = date('Y-m-d');
        $id = $_SESSION['id_users'];
        $query = "INSERT into `score_7diff`(Score_7diff, Date_sc7diff, id_users) VALUES ('$score7diff', '$datescore', '$id')";
        $result = $conn->query($query);
    }
    ?>


    <?php
    if (isset($_POST['recupId2'])) {

        $id3 = $_POST['recupId2'];
        $query3 = "SELECT * FROM jeu_7diff WHERE id_Imagediff = $id3";
        $result3 = $conn->query($query3);
        if ($result3->num_rows > 0) {
            $row3 = $result3->fetch_assoc();
            $reponseSelect = $row3['Reponse_7diff'];
            echo "<script src='$reponseSelect'></script>";
        }
    }
    ?>
    
    
</body>

</html>