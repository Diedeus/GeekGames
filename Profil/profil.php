<!DOCTYPE html>
<html lang="fr">

<head>
    <link rel="icon" type="image/png" href="../asset/icone.png" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <title>Geekgame - Profil</title>
    <script src="./script/profil.js" defer></script>
    <script src="./script/update.js" defer></script>
    <script src="../script/liste.js" defer></script>

</head>

<body>

    <?php
    // ON VA CHERCHER LES LOGS DE LA DB DANS LE FICHIER CONFIG.PHP
    require('../Registration/config.php');
    // Initialiser la session
    session_save_path("../tmp");
    session_start();
    if (empty($_SESSION)) {
        header('Location: ../index.php');
        exit();
    }



    ?>

    <section class="container_allprofil">

        <div class="gauche">
            <img src="../asset/logoblanc.png" alt="">
            <span></span>
            <button>Votre compte</button>

            <article>µ
            <a href="../Jeux/Quizz/Quizz.php"><img src="./asset/quizzgeek.jpg" alt=""></a>
                
            </article>
            
            <article>
            <a href="#"><img src="./asset/7diff.jpg" alt=""></a>
                
            </article>

            <article>
            <a href="../Jeux/Juste_Prix/justeprix.php"><img src="./asset/justeprix.jpg" alt=""></a>
                
            </article>

            <article>
            <a href="#"><img src="./asset/flappybird.jpg" alt=""></a>
                
            </article>


        </div>

        <div class="droite">

            <div class="haut">
                <nav class="home">
                    <ul>
                        <li><a href="../index.php">ACCUEIL</a></li>
                        <li><a href="../credits/credit.php">CREDITS</a></li>
                        <li><a href="../contact/contact.php">NOUS CONTACTER</a></li>
                    </ul>
                </nav>
                <div class="navdroite">
            <input id="searchbar" onkeyup="search_jeu()" type="text" name="searchjeu" placeholder="Rechercher un jeu ...">
            <ul class="searchjeu">
                <li class="jeuxhome">
                    <a href="../../Jeux/Quizz/Quizz.php">
                        <img src="../../asset/jeux1search.jpg" alt="">
                        <article>
                            <h3>QUIZZ GEEK</h3>
                            <p>Êtes-vous un véritable passionné de la culture geek ? Mettez vos connaissances à l'épreuve avec notre quiz geek.</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="../../Jeux/SeptDiff/7diff.php">
                        <img src="../../asset/jeux2search.jpg" alt="">
                        <article>
                            <h3>7 DIFFERENCES</h3>
                            <p>Plongez dans un univers geek captivant
avec notre jeu des 7 différences. Mettez votre sens de l'observation à
l'épreuve..</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="../../Jeux/Juste_Prix/justeprix.php">
                        <img src="../../asset/jeux3search.jpg" alt="">
                        <article>
                            <h3>LE JUSTE PRIX</h3>
                            <p>Êtes-vous prêt à estimer la valeur des objets et
à défier votre instinct? Mettez vos talents d'évaluation
à l'épreuve..</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="">
                        <img src="../../asset/jeux4search.jpg" alt="">
                        <article>
                            <h3>FLAPPY BIRD</h3>
                            <p> Préparez-vous à vous envoler dans le monde de Flappy Bird
version DRAGON BALL ! un jeu addictif et plein de défis !</p>
                        </article>
                    </a>
                </li>
            </ul>
            <?php
            if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
                echo '<img class="icone" src="../../asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="../../profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="deco" href="../../Registration/deconnexion.php">Deconnexion</a>';
            } else {
            ?>
                <img class="icone" src="../../asset/icone-mario.png" alt="">
                <button class="log">
                    <p>Se connecter</p>
                </button>
                <a class="sign" href="../../Registration/register.php">S'inscrire</a>

            <?php
            }
            if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
                echo '<a class="btnadmin" href="../../admin/admin.php">Admin</a>';
            }
            ?>

        </div>
                <div class="clear"></div>
                <span class="barre"></span>
            </div>


            <?php

            if (isset($_SESSION['id_users'])) {
                $userupdate = $_SESSION['id_users'];
                $sql = "SELECT * FROM users WHERE id_users = $userupdate ";

                //todo On exécute la requête et renvoie le résultat dans un objet
                $query = mysqli_query($conn, $sql);
                $donnes = mysqli_fetch_array($query, MYSQLI_ASSOC);

            ?>
                <div class="bas">
                    <article>
                        <img src="./asset/avatar.png" alt="">
                        <?php
                        echo "<p>" . $donnes['Nom_utilisateur'] . "</p>";
                        ?>
                    </article>
                    <div class="clear"></div>


                    <div class="update">

                        <div class="titre_update">
                            <p>Votre nom</p>
                            <p>Votre prenom</p>
                            <p>Votre pseudo</p>
                            <p>Votre âge</p>
                            <p>Votre e-mail</p>
                            <p>Votre adresse</p>
                            <p>Votre mot de passe</p>
                            <button class="modif">Modifier les informations</button>
                        </div>

                        <span class="update"></span>



                        <div class="profil_update">
                            <?php
                            echo "<p>" . $donnes['Nom'] . "</p>";
                            echo "<p>" . $donnes['Prenom'] . "</p>";
                            echo "<p>" . $donnes['Nom_utilisateur'] . "</p>";
                            echo "<p>" . date('d-m-Y', strtotime($donnes['Date_de_naissance'])) . "</p>";
                            echo "<p>" . $donnes['Email'] . "</p>";
                            echo "<p>" . $donnes['adresse'] . "</p>";
                            echo "<div class=\"mdp\"><p>****************</p><button class=\"openmodifmdp\">Modifier le mot de passe</button></div>";
                            ?>
                            <button class="supprcompte">Supprimer le compte</button>
                        </div>
                    <?php } ?>



                    <?php if (isset($_SESSION['id_users'])) {
                        $userscore = $_SESSION['id_users'];
                        $scorequizz = "SELECT MAX(Score_Quizz) AS Max_Score FROM Score_quizz WHERE id_users = $userscore";
                        $queryquizz = mysqli_query($conn, $scorequizz);
                        $affichequizz = mysqli_fetch_array($queryquizz, MYSQLI_ASSOC);

                        $score7diff = "SELECT MAX(Score_7diff) AS Max_Score FROM Score_7diff WHERE id_users = $userscore";
                        $query7diff = mysqli_query($conn, $score7diff);
                        $affiche7diff = mysqli_fetch_array($query7diff, MYSQLI_ASSOC);

                        $scorejprix = "SELECT MAX(Score_Jprix) AS Max_Score FROM Score_Jprix WHERE id_users = $userscore";
                        $queryjprix = mysqli_query($conn, $scorejprix);
                        $affichejprix = mysqli_fetch_array($queryjprix, MYSQLI_ASSOC);

                        $scoresnake = "SELECT MAX(Score_Snake) AS Max_Score FROM Score_Snake WHERE id_users = $userscore";
                        $querysnake = mysqli_query($conn, $scoresnake);
                        $affichesnake = mysqli_fetch_array($querysnake, MYSQLI_ASSOC);

                        $scorefbirds = "SELECT MAX(Score_Fbirds) AS Max_Score FROM Score_Fbirds WHERE id_users = $userscore";
                        $queryfbirds = mysqli_query($conn, $scorefbirds);
                        $affichefbirds = mysqli_fetch_array($queryfbirds, MYSQLI_ASSOC);

                        $scorePingpong = "SELECT MAX(Score_Pingpong) AS Max_Score FROM Score_Pingpong WHERE id_users = $userscore";
                        $queryPingpong = mysqli_query($conn, $scorePingpong);
                        $affichePingpong = mysqli_fetch_array($queryPingpong, MYSQLI_ASSOC);


                    ?>
                        <div class="score">
                            <div class="hautscore hautscorequizz">
                                <img src="../asset/backjeuun.jpg" alt="">
                                <article>
                                    <p class="nomjeu">QUIZZ GEEK</p>
                                    <?php if ($affichequizz && isset($affichequizz['Max_Score'])) {
                                        echo "<p class=\"bestscore\">Meilleur score :  <span>" . $affichequizz['Max_Score'] . "</span></p>";
                                    } else {
                                        echo "<p class=\"bestscore\">Meilleur score : 0</p>";
                                    } ?>
                                </article>
                            </div>

                            <div class="hautscore hautscore7diff">
                                <img src="../asset/backjeudeux.jpg" alt="">
                                <article>
                                    <p class="nomjeu">7 DIFFERENCES</p>
                                    <?php if ($affiche7diff && isset($affiche7diff['Max_Score'])) {
                                        echo "<p class=\"bestscore\">Meilleur score :  <span>" . $affiche7diff['Max_Score'] . "</span></p>";
                                    } else {
                                        echo "<p class=\"bestscore\">Meilleur score : 0</p>";
                                    } ?>
                                </article>
                            </div>

                            <div class="hautscore hautscorejprix">
                                <img src="../asset/backjeutrois.jpg" alt="">
                                <article>
                                    <p class="nomjeu">LE JUSTE PRIX</p>
                                    <?php if ($affichejprix && isset($affichejprix['Max_Score'])) {
                                        echo "<p class=\"bestscore\">Meilleur score :  <span>" . $affichejprix['Max_Score'] . "</span></p>";
                                    } else {
                                        echo "<p class=\"bestscore\">Meilleur score : 0</p>";
                                    } ?>
                                </article>
                            </div>

                            <div class="hautscore hautscoresnake">
                                <img src="../asset/backjeuquatre.jpg" alt="">
                                <article>
                                    <p class="nomjeu">SNAKE</p>
                                    <?php if ($affichesnake && isset($affichesnake['Max_Score'])) {
                                        echo "<p class=\"bestscore\">Meilleur score :  <span>" . $affichesnake['Max_Score'] . "</span></p>";
                                    } else {
                                        echo "<p class=\"bestscore\">Meilleur score : 0</p>";
                                    } ?>
                                </article>
                            </div>

                            <div class="hautscore hautscoreflappybird">
                                <img src="../asset/backjeucinq.jpg" alt="">
                                <article>
                                    <p class="nomjeu">FLAPPY BIRD</p>
                                    <?php if ($affichefbirds && isset($affichefbirds['Max_Score'])) {
                                        echo "<p class=\"bestscore\">Meilleur score :  <span>" . $affichefbirds['Max_Score'] . "</span></p>";
                                    } else {
                                        echo "<p class=\"bestscore\">Meilleur score : 0</p>";
                                    } ?>
                                </article>
                            </div>

                            <div class="hautscore hautscorepingpong">
                                <img src="../asset/backjeusix.jpg" alt="">
                                <article>
                                    <p class="nomjeu">PING PONG</p>
                                    <?php if ($affichePingpong && isset($affichePingpong['Max_Score'])) {
                                        echo "<p class=\"bestscore\">Meilleur score :  <span>" . $affichePingpong['Max_Score'] . "</span></p>";
                                    } else {
                                        echo "<p class=\"bestscore\">Meilleur score : 0</p>";
                                    } ?>
                                </article>
                            </div>



                            <div class="clear"></div>
                            <div class="basscore">
                                <img class="btnscorequizz" src="./asset/quizzgeek.jpg" alt="">
                                <img class="btnscore7diff test" src="./asset/7diff.jpg" alt="">
                                <img class="btnscorejprix test" src="./asset/justeprix.jpg" alt="">
                                <img class="btnscoreflappybird test" src="./asset/flappybird.jpg" alt="">
                                <img class="btnscoresnake test" src="./asset/snakenondispo.jpg" alt="">
                                <img class="btnscorepingpong test" src="./asset/pingpongnondispo.jpg" alt="">

                                </a>
                            </div>
                        </div>
                    <?php } ?>

                    </div>

                </div>
        </div>
    </section>
    <div class="clear"></div>





    <?php // Assurez-vous d'appeler session_start() au début du fichier

    // Vérifier si l'utilisateur est connecté et récupérer son ID
    if (isset($_SESSION['id_users'])) {
        $idUtilisateur = $_SESSION['id_users'];

        // Vérifier si le formulaire de suppression a été soumis
        if (isset($_POST['id_users'])) {
            // Suppression des enregistrements liés dans la table `score_quizz`
            $stmt = $conn->prepare("DELETE FROM score_quizz WHERE id_users = ?");
            $stmt->bind_param("i", $idUtilisateur);
            $stmt->execute();

            // Suppression des enregistrements liés dans la table `score_jprix`
            $stmt = $conn->prepare("DELETE FROM score_jprix WHERE id_users = ?");
            $stmt->bind_param("i", $idUtilisateur);
            $stmt->execute();

            // Suppression de l'utilisateur
            $stmt = $conn->prepare("DELETE FROM users WHERE id_users = ?");
            $stmt->bind_param("i", $idUtilisateur);

            if ($stmt->execute()) {
                session_destroy();
                header('Location: ../index.php');
                exit();
            } else {
                echo "<div class='error'>
        <h3>Erreur lors de la suppression de l'utilisateur :</h3>
      </div>" . $stmt->error;
            }
        }
    }
    ?>
    <section class="suppression">
        <div class="supprimcompte">
            <img src="./asset/warningicone.png" alt="">
            <article>
                <h2 class="box-title">ATTENTION !</h2>
                <p class="topsuppr">Vous êtes sur le point de supprimer votre compte</p>
                <p>Êtes vous sur :</p>
                <div class="btnsuppr">
                    <form method="POST" action="">
                        <input type="hidden" name="id_users" value="<?php echo isset($idUtilisateur) ? $idUtilisateur : ''; ?>">
                        <input type="submit" value="OUI, je suis sur !">
                    </form>
                    <button class="closesuppr">NON, je ne veux pas !</button>
                </div>
            </article>
        </div>
    </section>

    <section class="formupdate_profil">
        <img class="closeformupdate" src="./asset/croix.png" alt="">

        <?php
        // Vérification de la soumission du formulaire de sélection
        if (isset($_SESSION['id_users'])) {
            $userupdate2 = $_SESSION['id_users'];
            $sql2 = "SELECT * FROM users WHERE id_users = $userupdate2 ";
            $query2 = mysqli_query($conn, $sql2);
            $donnes2 = mysqli_fetch_array($query2, MYSQLI_ASSOC);

            $idu = $donnes2['id_users'];
            $Nomu = $donnes2['Nom'];
            $Prenomu = $donnes2['Prenom'];
            $Pseudou = $donnes2['Nom_utilisateur'];
            $Emailu = $donnes2['Email'];
            $Birthdayu = $donnes2['Date_de_naissance'];
            $Adresseu = $donnes2['adresse'];
            $Adminu = $donnes2['Admin'];


            // Affichage du formulaire de modification avec les valeurs existantes
            echo '<form method="POST" action="" name="editForm" class="updateform">';
            echo '<h2 class="box-title">Modifier vos informations</h2>';
            echo '<input type="hidden" name="idu" value="' . $idu . '">';
            echo '<div class="box-form"><input type="text" name="Nomu"  value="' . $Nomu . '"><br></div>';
            echo '<div class="box-form"><input type="text"  name="Prenomu" value="' . $Prenomu . '"><br></div>';
            echo '<div class="box-form"><input type="text"  name="Pseudou" value="' . $Pseudou . '"><br></div>';
            echo '<div class="box-form">
            <input type="text"  name="Birthdayu" value="' . $Birthdayu . '"><br></div>';
            echo '<input type="text" name="Emailu" value="' . $Emailu . '"><br>';
            echo '<input type="text"  name="Adresseu" value="' . $Adresseu . '"><br>';
            echo '<input type="submit" value="Modifier" class="submitprofile">';
            echo '</form>';
        }
        ?>
    </section>
    <?php
    if (isset($_POST['idu'], $_POST['Nomu'], $_POST['Prenomu'], $_POST['Pseudou'], $_POST['Emailu'], $_POST['Birthdayu'], $_POST['Adresseu'])) {
        $idu2 = $_POST['idu'];
        $Nomu2 = $_POST['Nomu'];
        $Prenomu2 = $_POST['Prenomu'];
        $Pseudou2 = $_POST['Pseudou'];
        $Emailu2 = $_POST['Emailu'];
        $Birthdayu2 = $_POST['Birthdayu'];
        $Adresseu2 = $_POST['Adresseu'];

        $stmt = $conn->prepare("UPDATE users SET Nom = '$Nomu2', Prenom = '$Prenomu2', Nom_utilisateur = '$Pseudou2', Email = '$Emailu2', Date_de_naissance = '$Birthdayu2', adresse = '$Adresseu2' WHERE id_users = $idu2");


        if (!empty($Nomu2) && !empty($Prenomu2) && !empty($Pseudou2) && !empty($Emailu2) && !empty($Birthdayu2) && !empty($Adresseu2)) {
            $stmt->execute() ?>
            <div class="succes">
                <img src="./asset/iconsucces.png" alt="">
                <article>
                    <h3>IMPORTANT !</h3>
                    <p>Modifications éffectuées avec succès. </p>
                    <button class="closesucces">Fermer la fenêtre</button>
                </article>
            </div>
        <?php } else {
            echo ' 
      <div class="error"> '; ?>
            <img src="./asset/warningicone.png" alt="">
    <?php
            echo "<article>
     <h3>ATTENTION !</h3>
     <p>Erreur lors de la mise à jour de l'enregistrement  </p>
     <button class=\"closeerror\">Fermer la fenêtre</button>
     </article>
</div> " . $stmt->error;
        }
    }
    ?>

    <?php
    if (isset($_SESSION['id_users'])) {
        $userupdatemdp = $_SESSION['id_users'];
        $sqlmdp = "SELECT * FROM users WHERE id_users = $userupdate2 ";
        $querymdp = mysqli_query($conn, $sqlmdp);
        $updatemdp = mysqli_fetch_array($querymdp, MYSQLI_ASSOC);

        $mdpidu = $updatemdp['id_users'];
        $mdpu = $updatemdp['Mot_de_passe'];

        if (isset($_POST['mdpu']) && isset($_POST['mdpu_confirm'])) {
            $newPassword = $_POST['mdpu'];
            $newPasswordhash = hash('sha256', $newPassword);
            $confirmPassword = $_POST['mdpu_confirm'];

            $stmt = $conn->prepare("UPDATE users SET Mot_de_passe = ? WHERE id_users = ?");
            $stmt->bind_param("si", $newPasswordhash, $userupdate2);

            if ($newPassword === $confirmPassword) {
                // Vérification de la complexité du mot de passe
                $passwordPattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/";
                if (preg_match($passwordPattern, $newPassword)) {
                    $stmt->execute();
                    echo "<section class=\"reconnexion\">
                <div class=\"reco\">
                <h2>ATTENTION ! </h2>
                <article>
                <p>Le mot de passe a été modifié avec succès !<br> Veuillez vous reconnecter.</p>
                <a href=\"../Registration/deconnexion.php\">Se reconnecter</a>
                </article>
                </div>
                </section>";
                } else {
                    echo " 
      <div class='error'> "; ?>
                    <img src="./asset/warningicone.png" alt="">
                <?php
                    echo "<article>
     <h3>ATTENTION !</h3>
     <p>Le mot de passe ne respecte pas les critères<br> de complexité.  </p>
     <button class=\"closeerror\">Fermer la fenêtre</button>
     </article>
</div> " . $stmt->error;
                }
            } else {

                echo " 
      <div class='error'> "; ?>
                <img src="./asset/warningicone.png" alt="">
    <?php
                echo "<article>
     <h3>ATTENTION !</h3>
     <p>Les mots de passe ne correspondent pas. </p>
     <button class=\"closeerror\">Fermer la fenêtre</button>
     </article>
</div> " . $stmt->error;
            }
        }



        echo '<section class="container_formmdp none"><div class="formmdp">';
        echo '<form method="POST" action="" name="editMdp">';
        echo '<h2 class="box-title">Modifier votre mot de passe</h2>';
        echo '<input type="hidden" name="mdpu" value="' . $idu . '">';
        echo '<input type="password" name="mdpu" value="" placeholder="Votre nouveau mot de passe">';
        echo '<input type="password" name="mdpu_confirm" value="" placeholder="Confirmer votre mot de passe">';
        echo '<input type="submit" value="Modifier" class="submitmdp">';
        echo '</form>';
        echo '<img class="closemdp" src="./asset/croix.png" alt="">';
        echo '</div></section>';
    } ?>





</body>

</html>