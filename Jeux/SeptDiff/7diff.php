<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script/7diff.js" defer></script>
</head>
<body>
<?php

require('../../Registration/config.php');

session_save_path("../../tmp");
session_start();

?>




<?php
    if (isset($_POST['scoreFinal'])) {
        $score7diff = $_POST['scoreFinal'];
        $datescore = date('Y-m-d');
        $id = $_SESSION['id_users'];
        $query = "INSERT into `score_7diff`(Score_7diff, Date_sc7diff, id_users) VALUES ('$score7diff', '$datescore', '$id')";
        $result = $conn->query($query);
    }
    ?>
</body>
</html>