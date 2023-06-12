<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="../asset/icone.png"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style/register.css">
  <script src="../script/liste.js" defer></script>
  <script src="./script/register.js" defer></script>
  <title>GeekGames - Inscription</title>
</head>

<body>
<header id="inscription">
    <section class="inscriptiondroite">
      <div class="droithaut"></div>
      <div class="droitbas">
      <img src="../asset/logoviolet.png" alt="">
      <p>Design and develop by Hugo BOCQUET & Alberick DUPONT</p>
      </div>
    </section>

    <section class="inscriptiongauche">
      <?php
    require('config.php');

    if(isset($_REQUEST["Nom"],$_REQUEST["Prenom"],$_REQUEST["Nom_utilisateur"],$_REQUEST["Email"],$_REQUEST["Date_de_naissance"],$_REQUEST["adresse"],$_REQUEST["Mot_de_passe"])){


        $Nom = stripslashes($_REQUEST["Nom"]);
        $Nom = mysqli_real_escape_string($conn, $Nom);

        $Prenom = stripslashes($_REQUEST["Prenom"]);
        $Prenom = mysqli_real_escape_string($conn, $Prenom);
      
        $Nom_utilisateur = stripslashes($_REQUEST["Nom_utilisateur"]);
        $Nom_utilisateur = mysqli_real_escape_string($conn, $Nom_utilisateur);

        $Email =  stripslashes($_REQUEST["Email"]);
        $Email = mysqli_real_escape_string($conn, $Email);

        $Date_de_naissance = stripslashes($_REQUEST["Date_de_naissance"]);
        $Date_de_naissance = mysqli_real_escape_string($conn, $Date_de_naissance);

        $adresse = stripslashes($_REQUEST["adresse"]);
        $adresse = mysqli_real_escape_string($conn, $adresse);

        $Mot_de_passe = stripslashes($_REQUEST["Mot_de_passe"]);
        $Mot_de_passe = mysqli_real_escape_string($conn, $Mot_de_passe);


        $query = "INSERT into `users` (Nom, Prenom, Nom_utilisateur, Email, Date_de_naissance, adresse, Mot_de_passe, Admin) 
        VALUES ('$Nom', '$Prenom', '$Nom_utilisateur','$Email', '$Date_de_naissance', '$adresse', '".hash('sha256', $Mot_de_passe)."', 0)";
    
        $res = mysqli_query($conn, $query);
        if($res){
           echo "<div class='sucess'>
                 <h3>Vous êtes inscrit avec succès.</h3>
                 <p>Cliquez ici pour vous <a href='login.php'>connecter</a></p>
           </div>";
        }
    }else{
    ?>
      <form class="box" action="" method="post">
        <h1>PAGE D'INSCRIPTION</h1>

        <div class="nameform">
        <input type="text" class="nomprenom" name="Nom" placeholder="Votre nom :" required />

        <input type="text" class="nomprenom" name="Prenom" placeholder="Votre prenom" required />
        </div>

        <input type="text" class="box-input" name="Nom_utilisateur" placeholder="Nom d'utilisateur" required />

        <input type="text" class="box-input" name="Email" placeholder="Email" required />

        <input type="text" class="box-input" name="Date_de_naissance" placeholder="Date de naissance" required />

        <input type="text" class="box-input" name="adresse" placeholder="Votre adresse" required />

        <input type="password" class="box-input" name="Mot_de_passe" placeholder="Mot de passe" required />

        <div class="politique">

        <input type="submit" name="submit" value="S'inscrire" class="boutonenvoyer" />
    
        <input type="checkbox" class="checkpoli"> <label for=""><a href="../politique/politique.php"><span>J'accepte la </span>politique de confidentialité</a></label></div>

        <p class="box-register">Vous êtes déjà inscrit ?
          <a href="../index.php">Connectez-vous !</a></p>
      </form>
      <?php } ?>
    </section>
    <div class="navinscri">
    <nav class="home">
            <ul>
                <li><a href="../index.php">ACCUEIL</a></li>
                <li><a href="../credits/credit.php">CREDITS</a></li>
                <li><a href="../contact/contact.php">NOUS CONTACTER</a></li>
            </ul>
        </nav>

        <div class="right">
            <input id="searchbar" onkeyup="search_jeu()" type="text" name="searchjeu" placeholder="Rechercher un jeu ...">
            <ul class="searchjeu">
                <li class="jeuxhome">
                    <a href="../Jeux/Quizz/Quizz.php">
                        <img src="../asset/jeux1search.jpg" alt="">
                        <article>
                            <h3>QUIZZ GEEK</h3>
                            <p>Êtes-vous un véritable passionné de la culture geek ? Mettez vos connaissances à l'épreuve avec notre quiz geek.</p>
                        </article>
                    </a>
                </li>
                <span class="spanjeu"></span>
                <li class="jeuxhome">
                    <a href="../Jeux/SeptDiff/7diff.php">
                        <img src="../asset/jeux2search.jpg" alt="">
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
                    <a href="../Jeux/Juste_Prix/justeprix.php">
                        <img src="../asset/jeux3search.jpg" alt="">
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
                        <img src="../asset/jeux4search.jpg" alt="">
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
                echo '<img class="icone" src="../asset/icone-mario.png" alt="">';
                echo '<a  class="user" href="../profil/profil.php">bonjour ' . $_SESSION['Nom_utilisateur'] . '</a>';
                echo '<a class="design" href="../Registration/deconnexion.php">Deconnexion</a>';
            } else {
            ?>
                <img class="icone" src="../asset/icone-mario.png" alt="">
                <a class="log">
                    <p>Se connecter</p>
                </a>
                <a class="sign" href="../Registration/register.php">S'inscrire</a>

            <?php
            }
            if (isset($_SESSION['Admin']) && $_SESSION['Admin'] === '1') {
                echo '<a class="btnadmin" href="../admin/admin.php">Admin</a>';
            }
            ?>

        </div>
        <div class="clear"></div>
        <span class="barre"></span>
    </div>
    </header>

</body>

</html>