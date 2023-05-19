<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="asset/icone.png" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <title>GeekGames - Home</title>
    <script src="./Script/script.js" defer></script>
    

</head>

<body>
<?php 

require('../../../geekgames/Registration/config.php');

?>

<?php
$query = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz ORDER BY RAND() LIMIT 1";
$result = $conn->query($query);
session_save_path("../../tmp");
session_start();


if ($result->num_rows > 0) {
    // Générer et afficher le quiz
    $question = $result->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question['Reponse_Quizz'];
    // header('content-type: application/json');
    json_encode($_SESSION['Reponse_Quizz']);
    displayQuestion($question);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion($question) {
    echo "Question: " . $question["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA' value='A) " . $question["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB' value='B) " . $question["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC' value='C) " . $question["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD' value='D) " . $question["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>



</body>