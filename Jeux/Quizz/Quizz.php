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
    <script src="./script/refresh.js" defer></script>
    <link rel="stylesheet" href="./style/style.css">
    

</head>

<body>

<?php 

require('../../../geekgames/Registration/config.php');

?>

<Section class="demarage">
    <div class="explication">
        <h2>Bienvenue dans ce Quizz</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iure amet illum minima eveniet asperiores impedit similique voluptatum! Ipsum ratione atque facere fuga fugit distinctio totam quos impedit ab assumenda!</p>
        <button id="demQuizz">Démarrer le quizz</button>
    </div>
    
</Section>


<section class="question1">
<div class="Q1">
<?php
$query1 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result1 = $conn->query($query1);
session_save_path("../../tmp");
session_start();


if ($result1->num_rows > 0) {
    $question1 = $result1->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question1['Reponse_Quizz'];
    displayQuestion($question1);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion($question1) {
    echo "Question: " . $question1["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA' value='A) " . $question1["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB' value='B) " . $question1["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC' value='C) " . $question1["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD' value='D) " . $question1["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz1 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

</div>

<section class="echec">
    <button class="acc">Retour à l'accueil</button>
    <button class="reco">Recommencer</button>
    <div class="scoreObtenu"></div>

</section>


<section class="reussite">
    <button class="questionSuivante">Question suivante</button>
</section>


<section class="question2">
<div class="Q2">
<?php
$query2 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result2 = $conn->query($query2);
session_save_path("../../tmp");
session_start();


if ($result2->num_rows > 0) {
    $question2 = $result2->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question2['Reponse_Quizz'];
    displayQuestion2($question2);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion2($question2) {
    echo "Question: " . $question2["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA2' value='A) " . $question2["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB2' value='B) " . $question2["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC2' value='C) " . $question2["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD2' value='D) " . $question2["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz2 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

</body>
</html>