<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="asset/icone.png" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'> -->
    <title>GeekGames - Home</title>
    <link rel="stylesheet" href="styles/style.css">
    <script src="Script/Script.js" defer></script>
    <script src="Script/liste.js" defer></script>
    <script src="Script/error.js" defer></script>


</head>

<body>
    <?php
    require('Registration/config.php');
    session_save_path("./tmp");
    session_start(); ?>

    <header id="test">
        <nav class="home">
            <ul>
                <li><a class="on" href="./index.php">ACCUEIL</a></li>
                <li><a href="./credits/credit.php">CREDITS</a></li>
                <li><a href="./contact/contact.php">NOUS CONTACTER</a></li>
            </ul>
        </nav>


        <div class="right">
            <input id="searchbar" onkeyup="search_jeu()" type="text" name="searchjeu" placeholder="Rechercher un jeu ...">
            <ul class="searchjeu">
                <li class="jeuxhome">
                    <a href="./Jeux/Quizz/Quizz.php">
                        <img src="./asset/jeux1search.jpg" alt="">
                        <article>
                            <h3>QUIZZ GEEK</h3>
                            <p>Êtes-vous un véritable passionné de la culture geek ? Mettez vos connaissances à l'épreuve avec notre quiz geek.</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="./Jeux/SeptDiff/7diff.php">
                        <img src="./asset/jeux2search.jpg" alt="">
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
                    <a href="./Jeux/Juste_Prix/justeprix.php">
                        <img src="./asset/jeux3search.jpg" alt="">
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
                        <img src="./asset/jeux4search.jpg" alt="">
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
                echo '<img class="icone" src="./asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="./profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="design" href="./Registration/deconnexion.php">Deconnexion</a>';
            } else {
            ?>
                <img class="icone" src="./asset/icone-mario.png" alt="">
                <button class="log">
                    <p>Se connecter</p>
                </button>
                <a class="sign" href="./Registration/register.php">S'inscrire</a>

            <?php
            }
            if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
                echo '<a class="btnadmin" href="./admin/admin.php">Admin</a>';
            }
            ?>

        </div>
        <div class="clear"></div>
        <span class="barre"></span>

        <section class="testvideo">
            <div class="rondlogo">
                <article class="span">
                    <span class="rond rondun"></span>
                    <span class="rond ronddeux"></span>
                    <span class="rond rondtrois"></span>
                    <span class="rond rondquatre"></span>
                    <span class="rond rondcinq"></span>
                    <span class="rond rondsix"></span>
                </article>
                <article class="logotexte">
                    <img src="asset/logogeekgame.png" alt="">
                    <p class="textlogo">Bien le bonjour jeune aventurier et bienvenue sur GEEKGAME !<br> Ici tu trouveras plusieurs mini jeux du plus simple comme le Quizz en <br>passant par des jeux plus complexe comme le Flappy bird ou encore le Snake .. <br>
                        Entraîne toi et compare tes scores avec ceux de tes amis et devient le MEILLEUR DES GEEKS !
                        <br>
                    </p>
                </article>

                <article class="textejeu">
                    <h1 id="titrejeu"></h1>
                    <p class="descrijeu" id="descijeuid"></p>
                    <a id="aquizz" href="./Jeux/Quizz/Quizz.php" style="display:block">Jouer au Quizz</a>
                    <a id="a7diff" href="./Jeux/SeptDiff/7diff.php" style="display:none">Jouer au Sept Diff</a>
                    <a id="ajusteprix" href="./Jeux/Juste_Prix/justeprix.php" style="display:none">Jouer au juste prix</a>
                    <a id="aflappybird" href="" style="display:none">Jouer au flappy bird</a>
                    <a id="asnake" href="./index.php" style="display:none">Jouer au snake</a>
                    <a id="apingpong" href="./index.php" style="display:none">Jouer au ping pong</a>
                </article>
            </div>
        </section>

        <section class="minijeu">
            <span></span>
            <h2 class="listejeu">LISTE DES JEUX</h2>
            <span></span>
            <div class="jeux">
                <article id="quiz">
                    <img id="imgquizz" src="asset/backjeuun.jpg" alt="">
                    <h2>QUIZ GEEK</h2>
                </article>

                <article id="septdiff">
                    <img id="imgseptdiff" src="asset/backjeudeux.jpg" alt="">
                    <h2>7 DIFFERENCES</h2>
                </article>

                <article id="justeprix">
                    <img id="imgjusteprix" src="asset/backjeutrois.jpg" alt="">
                    <h2>LE JUSTE PRIX</h2>
                </article>

                <article id="flappybird">
                    <img id="imgflappybird" src="asset/backjeucinq.jpg" alt="">
                    <h2>FLAPPY BIRD</h2>
                </article>

                <article id="snake">
                    <img id="imgsnake" src="asset/backjeuquatrenondispo.jpg" alt="">
                    <h2>SNAKE</h2>
                </article>

                <article id="pingpong">
                    <img id="imgpingpong" src="asset/backjeusixnondispo.jpg" alt="">
                    <h2>PING PONG</h2>
                </article>
            </div>

        </section>

    </header>

    <section class="login">
        <div class="connexion">
            <?php



            if (isset($_POST['Nom_utilisateur'])) {

                $username = stripslashes($_REQUEST['Nom_utilisateur']);
                $username = mysqli_real_escape_string($conn, $username);
                $_SESSION['Nom_utilisateur'] = $username;
                $password = stripslashes($_REQUEST['Mot_de_passe']);
                $password = mysqli_real_escape_string($conn, $password);
                $query = "SELECT * FROM `users` WHERE Nom_utilisateur='$username' 
  and Mot_de_passe='" . hash('sha256', $password) . "'";


                $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
                if (mysqli_num_rows($result) == 1) {
                    $user = mysqli_fetch_assoc($result);
                    $_SESSION['id_users'] = $user['id_users'];
                    $_SESSION['Nom_utilisateur'] = $user['Nom_utilisateur'];
                    $_SESSION['id_users'] = $user['id_users'];
                    $_SESSION['loggedIn'] = true;
                    $_SESSION['Admin'] = $user['Admin'];

            ?>
                    <script>
                        window.location.href = "../index.php"
                    </script>
            <?php
                } else {
                    $message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
                }
            }

            ?>
            <form class="box" action="" method="post" name="login">
                <h2 class="box-title">CONNEXION</h2>
                <input type="text" class="box-input" name="Nom_utilisateur" placeholder="Nom d'utilisateur">
                <input type="password" class="passwordinput" name="Mot_de_passe" placeholder="Mot de passe">
                <p class="mdpoublie">Mot de passe oublié ?</p>
                <input type="submit" value="Se connecter" name="submit" class="connecter">
                <?php if (!empty($message)) { ?>
                    <p class="errorMessage"><?php echo $message; ?></p>
                <?php } ?>
            </form>
            <img src="asset/logogeekgame.png" alt="">
            <p class="inscriptionhome">Vous n’avez pas de compte ?
                <a href="Registration/register.php">Inscrivez vous !</a>
            </p>
        </div>
        <img class="closelogin" src="asset/croix.png" alt="">
    </section>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <section class="mdpperdu">
        <form action="" method="post" class="formmdpperdu">
            <h2>MODIFIER LE MOT DE PASSE</h2>
            <input type="hidden" name="email_from" value="cgeekgames@gmail.com">
            <input type="email" name="email_to" placeholder="Votre adresse mail :">
            <input class="submitmdpmodif" type="submit" value="Modifier le mot de passe">
            <img src="asset/logogeekgame.png" alt="">
            <p class="inscriptionhome">Vous n’avez pas de compte ?
                <a href="Registration/register.php">Inscrivez vous !</a>
            </p>
        </form>
        <img class="closemdpperdu" src="asset/croix.png" alt="">
    </section>
    <?php
    require './asset/PHPMailer-master/src/Exception.php';
    require './asset/PHPMailer-master/src/PHPMailer.php';
    require './asset/PHPMailer-master/src/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    if (isset($_POST['email_to'])) {
        // Création d'une nouvelle instance de PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Configuration du serveur SMTP
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Remplacez par l'adresse de votre serveur SMTP
            $mail->SMTPAuth = true;
            $mail->Username = 'cgeekgames@gmail.com'; // Remplacez par votre nom d'utilisateur SMTP
            $mail->Password = 'ovgohazddioabzfx'; // Remplacez par votre mot de passe SMTP
            $mail->SMTPSecure = 'tls'; // Utilisez 'tls' ou 'ssl' en fonction de votre configuration
            $mail->Port = 587; // Port SMTP

            // Paramètres de l'expéditeur
            $mail->setFrom('cgeekgames@gmail.com', 'GeekGames'); // Remplacez par votre adresse e-mail et votre nom

            // Paramètres du destinataire
            $emailTo = $_POST['email_to'];
            $mail->addAddress($emailTo); // Remplacez par l'adresse e-mail et le nom du destinataire

            // Générer un token aléatoire
            $token = bin2hex(random_bytes(32));

            // Préparer la requête SQL pour remplacer le token dans la base de données
            $sql = "UPDATE users SET token = '$token' WHERE Email = '$emailTo'";

            // Exécution de la requête
            if ($conn->query($sql) === TRUE) {
                // Contenu du mail
                $message = "
                <center><img style='margin:0 auto;width:150px; height:150px;' src=' https://i.ibb.co/zNYLKpP/icone.png' alt=''></center>
                    <h2 style='font-weight:800;font-size:30px; color:#393795; margin-bottom:30px;margin-top:-20px; text-align:center;' >MODIFIER VOTRE MOT DE PASSE</h2>
                    <p style='text-align:center;'>Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre <a style='text-decoration:none; color:#2b2064' href='http://" . $_SERVER['HTTP_HOST'] . "/contact/contact.php'>service client</a>.</p>
                    <p style='margin-bottom:20px;text-align:center;'>Cliquez sur le lien suivant pour réinitialiser votre mot de passe :</p>
                    <center><a style='color:white;background-color:#393795; padding:10px 20px; height:50px;line-height: 5; text-decoration:none;' href='http://" . $_SERVER['HTTP_HOST'] . "/changemdp/changemdp.php?token=" . $token . "'>Réinitialiser le mot de passe</a></center>";


                $mail->isHTML(true);
                $mail->Subject = 'Modification du mot de passe'; // Objet du mail
                $mail->Body = $message;

                // Envoi du mail
                $mail->send();

                echo ' 
      <div class="succes"> '; ?>
                <img src="./asset/iconsucces.png" alt="">
            <?php
                echo "<article>
     <h3>IMPORTANT !</h3>
     <p>Le mail a été envoyé avec succès !</p>
     <button class=\"closesucces\">Fermer la fenêtre</button>
     </article>
</div> ";
            } else {
                echo ' 
      <div class="error"> '; ?>
                <img src="./asset/warningicone.png" alt="">
            <?php
                echo "<article>
     <h3>ATTENTION !</h3>
     <p>Une erreur est survenue lors de l'exécution de la requête</p>
     <button class=\"closeerror\">Fermer la fenêtre</button>
     </article>
</div> ";
            }
        } catch (Exception $e) {
            echo ' 
      <div class="error"> '; ?>
            <img src="./asset/warningicone.png" alt="">
    <?php
            echo "<article>
     <h3>ATTENTION !</h3>
     <p>Une erreur est survenue lors de l'envoi du mail</p>
     <button class=\"closeerror\">Fermer la fenêtre</button>
     </article>
</div> ";
        }
    }
    ?>



</body>

</html>