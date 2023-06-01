<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="../asset/icone.png"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles/style.css">
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

        <input type="text" class="nomprenom" name="Nom" placeholder="Votre nom :" required />

        <input type="text" class="nomprenom" name="Prenom" placeholder="Votre prenom" required />

        <input type="text" class="box-input" name="Nom_utilisateur" placeholder="Nom d'utilisateur" required />

        <input type="text" class="box-input" name="Email" placeholder="Email" required />

        <input type="text" class="box-input" name="Date_de_naissance" placeholder="Date de naissance" required />

        <input type="text" class="box-input" name="adresse" placeholder="Votre adresse" required />

        <input type="password" class="box-input" name="Mot_de_passe" placeholder="Mot de passe" required />

        <input type="submit" name="submit" value="S'inscrire" class="boutonenvoyer" />

        <p class="box-register">Vous êtes déjà inscrit?
          <a href="../index.php">Connectez-vous !</a></p>
      </form>
      <?php } ?>
    </section>
    <div class="navinscri">
    <nav class="home">
            <ul>
                <li><a href="../index.php">ACCUEIL</a></li>
                <li><a href="#">CREDITS</a></li>
                <li><a href="#">NOUS CONTACTER</a></li>
            </ul>
        </nav>

        <div class="right">
            <input id="searchbar" type="text" name="search" placeholder="Rechercher un jeu ...">
            <img src="../asset/icone-mario.png" alt="">
            <a class="log" href="../index.php">Se connecter</a>
            <a class="sign" href="register.php">S'inscrire</a>
        </div>
        <div class="clear"></div>
        <span class="barre"></span>
    </div>
    </header>

</body>

</html>