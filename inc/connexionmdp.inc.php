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
                    window.location.href = "http://<?php echo $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'] ; ?>"
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
        <img src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/logogeekgame.png" alt="">
        <p class="inscriptionhome">Vous n’avez pas de compte ?
            <a href="http://<?php echo $_SERVER['HTTP_HOST']; ?>/Registration/register.php">Inscrivez vous !</a>
        </p>
    </div>
    <img class="closelogin" src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/croix.png" alt="">
</section>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<section class="mdpperdu">
    <form action="" method="post" class="formmdpperdu">
        <h2>MODIFIER LE MOT DE PASSE</h2>
        <input type="hidden" name="email_from" value="cgeekgames@gmail.com">
        <input type="email" name="email_to" placeholder="Votre adresse mail :">
        <input class="submitmdpmodif" type="submit" value="Modifier le mot de passe">
        <div class="clear"></div>
        <img src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/logogeekgame.png" alt="">
        <p class="inscriptionhome">Vous n’avez pas de compte ?
            <a href="http://<?php echo $_SERVER['HTTP_HOST']; ?>/Registration/register.php">Inscrivez vous !</a>
        </p>
    </form>
    <img class="closemdpperdu" src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/croix.png" alt="">

</section>

<script>let connexion = document.querySelector('.log');
    let loginuser = document.querySelector('.login');
    let closelogin = document.querySelector('.closelogin');

    connexion.addEventListener("click", function() {
        loginuser.style.visibility = "visible";
    });

    closelogin.addEventListener("click", function() {
        loginuser.style.visibility = "hidden";
    });</script>
<?php
require ($_SERVER['DOCUMENT_ROOT'] . '/asset/PHPMailer-mdp/src/Exception.php');
require ($_SERVER['DOCUMENT_ROOT'] . '/asset/PHPMailer-mdp/src/PHPMailer.php');
require ($_SERVER['DOCUMENT_ROOT'] . '/asset/PHPMailer-mdp/src/SMTP.php');


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
            <img src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/iconsucces.png" alt="">
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
            <img src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/warningicone.png" alt="">
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
        <img src="http://<?php echo $_SERVER['HTTP_HOST']; ?>/asset/warningicone.png" alt="">
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
<script>
    

    let openmdpoublie = document.querySelector('.mdpoublie')
    let formmdpoublie = document.querySelector('.mdpperdu')
    let closemdpperdu = document.querySelector('.closemdpperdu')

    openmdpoublie.addEventListener('click', function() {
        loginuser.style.visibility = "hidden";
        formmdpoublie.style.visibility = "visible";
    })

    closemdpperdu.addEventListener("click", function() {
        formmdpoublie.style.visibility = "hidden";
    });


    let closesucces = document.querySelector('.closesucces')
    let messsucces = document.querySelector('.succes')

    closesucces.addEventListener("click", function() {
        messsucces.style.display = "none"
    });

    
</script>