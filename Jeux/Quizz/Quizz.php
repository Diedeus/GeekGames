<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="../../asset/icone.png" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <title>GeekGames - QuizzGeek</title>
    <script src="./Script/script.js" defer></script>
    <script src="./script/refresh.js" defer></script>
    <link rel="stylesheet" href="./style/style.css">


</head>

<body>

    <?php 

require('../../../geekgames/Registration/config.php');
session_save_path("../../tmp");
session_start();

?>

    <header>

        <nav class="home">
            <ul>
                <li><a href="../../index.php">ACCUEIL</a></li>
                <li><a href="#">CREDITS</a></li>
                <li><a href="#">NOUS CONTACTER</a></li>
            </ul>
        </nav>

        <div class="right">
            <input id="searchbar" type="text" name="search" placeholder="Rechercher un jeu ...">
            <?php
            if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
                // echo "<p> bonjour " . $_SESSION['Nom_utilisateur'] . "</p>";
                echo '<img src="../../asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="../../profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="design" href="../../Registration/deconnexion.php">Deconnexion</a>';
                
            } else{
                ?>
                <img src="./asset/icone-mario.png" alt="">
                <button class="log"><p>Se connecter</p></button>
            <!-- <a class="log" href="#">*</a> -->
            <a class="sign" href="../../Registration/register.php">S'inscrire</a>
            
            <?php
            }
            if(isset($_SESSION['Admin'])&& $_SESSION['Admin'] === '1' ){
                echo '<a class="btnadmin" href="../../admin/admin.php">Admin</a>';
            }
            ?>   
            
        </div>
        <div class="clear"></div>
        <span class="barre"></span>

        <section class="container_quizz">
            <h1>QUIZZ GEEK</h1>
            <Section class="demarage">
                <div class="explication">
                    <h2>Bienvenue dans le Quizz Geek</h2>
                    <p> Êtes-vous prêt à tester vos connaissances et à devenir un véritable expert ? Mettez vos compétences à l'épreuve et découvrez si vous avez ce qu'il faut pour relever ce défi passionnant.<br> 
                        Que la force geek soit avec vous !</p>
                    <button id="demQuizz">Démarrer le quizz</button>
                </div>

            </Section>


            <section class="question1">
                <div class="Q1">
                    <?php
        $query1 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
        $result1 = $conn->query($query1);


        if ($result1->num_rows > 0) {
        $question1 = $result1->fetch_assoc();
        $_SESSION['Reponse_Quizz'] = $question1['Reponse_Quizz'];
        displayQuestion($question1);
        } else {
        echo "Aucune question trouvée dans la base de données.";
        }

// Fonction pour afficher une question
        function displayQuestion($question1) {
            echo "<p>Question: " . $question1["intitule_question"] . "</p><br>";
            echo "<div class=\"clear\"></div> ";
            echo "<div class=\"flex\">";
            echo "<input type='submit' id='RA' value='" . $question1["Reponse_A"] . "'><br>";
            echo "<input type='submit' id='RB' value='" . $question1["Reponse_B"] . "'><br>";
            echo "<input type='submit' id='RC' value='" . $question1["Reponse_C"] . "'><br>";
            echo "<input type='submit' id='RD' value='" . $question1["Reponse_D"] . "'><br>";
            echo "</div>";
        }
        ?>
        <p class="reponse"></p>
                    <script>
                        let Reponse_quizz1 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                </div>
            </section>



            <section class="question2">
                <div class="Q2">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query2 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result2 = $conn->query($query2);


if ($result2->num_rows > 0) {
    $question2 = $result2->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question2['Reponse_Quizz'];
    displayQuestion2($question2);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion2($question2) {
    echo "<p>Question: " . $question2["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA2' value='" . $question2["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB2' value='" . $question2["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC2' value='" . $question2["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD2' value='" . $question2["Reponse_D"] . "'><br>";
    echo "</div>";

}


?>
<p class="reponse2"></p>
<script>
    let Reponse_quizz2 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
</script>
</div>
</section>

            <section class="question3">
                <div class="Q3">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query3 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result3 = $conn->query($query3);



if ($result3->num_rows > 0) {
    $question3 = $result3->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question3['Reponse_Quizz'];
    displayQuestion3($question3);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion3($question3) {
    echo "<p>Question: " . $question3["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA3' value='" . $question3["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB3' value='" . $question3["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC3' value='" . $question3["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD3' value='" . $question3["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse3"></p>

                    <script>
                        let Reponse_quizz3 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question4">
                <div class="Q4">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query4 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 1 ORDER BY RAND() LIMIT 1";
$result4 = $conn->query($query4);



if ($result4->num_rows > 0) {
    $question4 = $result4->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question4['Reponse_Quizz'];
    displayQuestion4($question4);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion4($question4) {
    echo "<p>Question: " . $question4["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA4' value='" . $question4["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB4' value='" . $question4["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC4' value='" . $question4["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD4' value='" . $question4["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse4"></p>

                    <script>
                        let Reponse_quizz4 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question5">
                <div class="Q5">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query5 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result5 = $conn->query($query5);



if ($result5->num_rows > 0) {
    $question5 = $result5->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question5['Reponse_Quizz'];
    displayQuestion5($question5);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion5($question5) {
    echo "<p>Question: " . $question5["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA5' value='" . $question5["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB5' value='" . $question5["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC5' value='" . $question5["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD5' value='" . $question5["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse5"></p>

                    <script>
                        let Reponse_quizz5 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question6">
                <div class="Q6">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query6 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result6 = $conn->query($query6);



if ($result6->num_rows > 0) {
    $question6 = $result6->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question6['Reponse_Quizz'];
    displayQuestion6($question6);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion6($question6) {
    echo "<p>Question: " . $question6["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA6' value='" . $question6["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB6' value='" . $question6["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC6' value='" . $question6["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD6' value='" . $question6["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse6"></p>

                    <script>
                        let Reponse_quizz6 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question7">
                <div class="Q7">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query7 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result7 = $conn->query($query7);



if ($result7->num_rows > 0) {
    $question7 = $result7->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question7['Reponse_Quizz'];
    displayQuestion7($question7);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion7($question7) {
    echo "<p>Question: " . $question7["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA7' value='" . $question7["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB7' value='" . $question7["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC7' value='" . $question7["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD7' value='" . $question7["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse7"></p>

                    <script>
                        let Reponse_quizz7 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question8">
                <div class="Q8">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query8 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 2 ORDER BY RAND() LIMIT 1";
$result8 = $conn->query($query8);



if ($result8->num_rows > 0) {
    $question8 = $result8->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question8['Reponse_Quizz'];
    displayQuestion8($question8);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion8($question8) {
    echo "<p>Question: " . $question8["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA8' value='" . $question8["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB8' value='" . $question8["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC8' value='" . $question8["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD8' value='" . $question8["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse8"></p>

                    <script>
                        let Reponse_quizz8 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question9">
                <div class="Q9">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query9 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 3 ORDER BY RAND() LIMIT 1";
$result9 = $conn->query($query9);



if ($result9->num_rows > 0) {
    $question9 = $result9->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question9['Reponse_Quizz'];
    displayQuestion9($question9);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion9($question9) {
    echo "<p>Question: " . $question9["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA9' value='" . $question9["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB9' value='" . $question9["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC9' value='" . $question9["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD9' value='" . $question9["Reponse_D"] . "'><br>";
    echo "</div>";
}


?>
                    <p class="reponse9"></p>

                    <script>
                        let Reponse_quizz9 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>

            <section class="question10">
                <div class="Q10">
                    <?php
unset($_SESSION['Reponse_Quizz']);
$query10 = "SELECT intitule_question, Reponse_A, Reponse_B, Reponse_C, Reponse_D, Reponse_Quizz, Difficulte_question FROM jeu_quizz WHERE Difficulte_question = 3 ORDER BY RAND() LIMIT 1";
$result10 = $conn->query($query10);


if ($result10->num_rows > 0) {
    $question10 = $result10->fetch_assoc();
    $_SESSION['Reponse_Quizz'] = $question10['Reponse_Quizz'];
    displayQuestion10($question10);
    } else {
    echo "Aucune question trouvée dans la base de données.";
}

// Fonction pour afficher une question
function displayQuestion10($question10) {
    echo "<p>Question: " . $question10["intitule_question"] . "</p><br>";
    echo "<div class=\"clear\"></div> ";
    echo "<div class=\"flex\">";
    echo "<input type='submit' id='RA10' value='" . $question10["Reponse_A"] . "'><br>";
    echo "<input type='submit' id='RB10' value='" . $question10["Reponse_B"] . "'><br>";
    echo "<input type='submit' id='RC10' value='" . $question10["Reponse_C"] . "'><br>";
    echo "<input type='submit' id='RD10' value='" . $question10["Reponse_D"] . "'><br>";
    echo "</div>";
}



if(isset($_POST['score'])){
    $score = $_POST['score'];
    $datescore = date( 'Y-m-d' );
    $id = $_SESSION['id_users'];
    $query11 = "INSERT into `Score_quizz`(Score_Quizz, Date_Scquizz, id_users) VALUES ('$score', '$datescore', '$id')";
    $result11 = $conn->query($query11); 
}


?>
                    <p class="reponse10"></p>

                    <script>
                        let Reponse_quizz10 = <?php echo json_encode($_SESSION['Reponse_Quizz']); ?> ;
                    </script>
                    </div>
            </section>
            <section class="reussite">
                <button class="questionSuivante">Question suivante</button>
            </section>
        </section>

    </header>

    <section class="echec">
    <img class="echtop" src="./asset/echectop.png" alt="">
                <div class="affichage_echec">
                    <div class="position_echec">
                    <h2>GAME OVER ...</h2>
                    <p class="titrescore">Votre score</p>
                    <p class="scoreechec"></p>
                    <article class="bouton_echec">
                    <a href="../../index.php">Retour à l'accueil</a> 
                  <a class="reco" href="Quizz.php">Recommencer</a>
                    <form id="scoreForm" method="POST">
                        <input type="hidden" id="scoreInput" name="score2" value="">
                        <input type="submit" id="submitScore" value="Envoyer le score">
                    </form>
                    </article>
                    </div>
                </div>
                <img class="echbot" src="./asset/echecbot.png" alt="">
            </section>



            <section class="win">
                <img class="wintop" src="./asset/wintop.png" alt="">
                <div class="affichage_win">
                    <div class="position_win">
                    <h2>VICTORY !</h2>
                    <p class="titrescore">Votre score</p>
                    <p class="scorewinner"></p>
                    <article class="bouton_win">
                    <a href="../../index.php">Retour à l'accueil</a> 
                    <a class="reco2" href="Quizz.php">Recommencer</a>
                    <form id="scoreForm2" method="POST">
                        <input type="hidden" id="scoreInput2" name="score" value="">
                        <input type="submit" id="submitScore2" value="Envoyer le score">
                    </form>
                    </article>
                    </div>
                </div>
                <img class="winbot" src="./asset/winbottom.png" alt="">
            </section>

            <?php
            
            if(isset($_POST['score2'])){
                $score = $_POST['score2'];
                $datescore = date( 'Y-m-d' );
                $id = $_SESSION['id_users'];
                $query11 = "INSERT into `Score_quizz`(Score_Quizz, Date_Scquizz, id_users) VALUES ('$score', '$datescore', '$id')";
                $result11 = $conn->query($query11); 
            }
            
            ?>




</body>

</html>