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
    </div>
</section>

</div>


<section class="question2">
<div class="Q2">
<?php
unset($_SESSION['Reponse_Quizz']);
$query2 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result2 = $conn->query($query2);
// session_save_path("../../tmp");
// session_start();


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

<section class="question3">
<div class="Q3">
<?php
unset($_SESSION['Reponse_Quizz']);
$query3 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result3 = $conn->query($query3);
// session_save_path("../../tmp");
// session_start();


if ($result3->num_rows > 0) {
    $question3 = $result3->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question3['Reponse_Quizz'];
    displayQuestion3($question3);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion3($question3) {
    echo "Question: " . $question3["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA3' value='A) " . $question3["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB3' value='B) " . $question3["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC3' value='C) " . $question3["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD3' value='D) " . $question3["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz3 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question4">
<div class="Q4">
<?php
unset($_SESSION['Reponse_Quizz']);
$query4 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result4 = $conn->query($query4);
// session_save_path("../../tmp");
// session_start();


if ($result4->num_rows > 0) {
    $question4 = $result4->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question4['Reponse_Quizz'];
    displayQuestion4($question4);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion4($question4) {
    echo "Question: " . $question4["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA4' value='A) " . $question4["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB4' value='B) " . $question4["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC4' value='C) " . $question4["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD4' value='D) " . $question4["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz4 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question5">
<div class="Q5">
<?php
unset($_SESSION['Reponse_Quizz']);
$query5 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result5 = $conn->query($query5);
// session_save_path("../../tmp");
// session_start();


if ($result5->num_rows > 0) {
    $question5 = $result5->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question5['Reponse_Quizz'];
    displayQuestion5($question5);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion5($question5) {
    echo "Question: " . $question5["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA5' value='A) " . $question5["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB5' value='B) " . $question5["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC5' value='C) " . $question5["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD5' value='D) " . $question5["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz5 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question6">
<div class="Q6">
<?php
unset($_SESSION['Reponse_Quizz']);
$query6 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result6 = $conn->query($query6);
// session_save_path("../../tmp");
// session_start();


if ($result6->num_rows > 0) {
    $question6 = $result6->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question6['Reponse_Quizz'];
    displayQuestion6($question6);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion6($question6) {
    echo "Question: " . $question6["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA6' value='A) " . $question6["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB6' value='B) " . $question6["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC6' value='C) " . $question6["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD6' value='D) " . $question6["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz6 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question7">
<div class="Q7">
<?php
unset($_SESSION['Reponse_Quizz']);
$query7 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result7 = $conn->query($query7);
// session_save_path("../../tmp");
// session_start();


if ($result7->num_rows > 0) {
    $question7 = $result7->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question7['Reponse_Quizz'];
    displayQuestion7($question7);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion7($question7) {
    echo "Question: " . $question7["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA7' value='A) " . $question7["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB7' value='B) " . $question7["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC7' value='C) " . $question7["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD7' value='D) " . $question7["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz7 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question8">
<div class="Q8">
<?php
unset($_SESSION['Reponse_Quizz']);
$query8 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result8 = $conn->query($query8);
// session_save_path("../../tmp");
// session_start();


if ($result8->num_rows > 0) {
    $question8 = $result8->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question8['Reponse_Quizz'];
    displayQuestion8($question8);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion8($question8) {
    echo "Question: " . $question8["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA8' value='A) " . $question8["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB8' value='B) " . $question8["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC8' value='C) " . $question8["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD8' value='D) " . $question8["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz8 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question9">
<div class="Q9">
<?php
unset($_SESSION['Reponse_Quizz']);
$query9 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 3 ORDER BY RAND() LIMIT 1";
$result9 = $conn->query($query9);
// session_save_path("../../tmp");
// session_start();


if ($result9->num_rows > 0) {
    $question9 = $result9->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question9['Reponse_Quizz'];
    displayQuestion9($question9);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion9($question9) {
    echo "Question: " . $question9["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA9' value='A) " . $question9["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB9' value='B) " . $question9["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC9' value='C) " . $question9["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD9' value='D) " . $question9["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz9 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="question10">
<div class="Q10">
<?php
unset($_SESSION['Reponse_Quizz']);
$query10 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 3 ORDER BY RAND() LIMIT 1";
$result10 = $conn->query($query10);
// session_save_path("../../tmp");
// session_start();


if ($result10->num_rows > 0) {
    $question10 = $result10->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question10['Reponse_Quizz'];
    displayQuestion10($question10);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion10($question10) {
    echo "Question: " . $question10["intitule_question"] . "<br>";
    echo "<input type='submit' id='RA10' value='A) " . $question10["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB10' value='B) " . $question10["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC10' value='C) " . $question10["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD10' value='D) " . $question10["Reponse_D"] . "'><br>";
    echo "--------------------<br>";
}


?>
<p class="reponse"></p>

<script>
 let Reponse_quizz10 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?>;
   </script>
</section>

<section class="echec">
    <button class="acc">Retour à l'accueil</button>
    <button class="reco">Recommencer</button>
    <div class="scoreObtenu"></div>

</section>


<section class="reussite">
    <button class="questionSuivante">Question suivante</button>
</section>


   


    

</body>
</html>