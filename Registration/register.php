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

    if(isset($_REQUEST["username"],$_REQUEST["email"],$_REQUEST["password"],$_REQUEST["birthday"],$_REQUEST["adresse"])){

      
        $username = stripslashes($_REQUEST["username"]);
        $username = mysqli_real_escape_string($conn, $username);

        $email =  stripslashes($_REQUEST["email"]);
        $email = mysqli_real_escape_string($conn, $email);

        $password = stripslashes($_REQUEST["password"]);
        $password = mysqli_real_escape_string($conn, $password);

        $birthday = stripslashes($_REQUEST["birthday"]);
        $birthday = mysqli_real_escape_string($conn, $birthday);

        $adresse = stripslashes($_REQUEST["adresse"]);
        $adresse = mysqli_real_escape_string($conn, $adresse);

        $query = "INSERT into `users` (username, email, type, password, birthday, adresse) 
        VALUES ('$username', '$email', 'user', '".hash('sha256', $password)."','$birthday', '$adresse')";
    
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

        <input type="text" class="nomprenom" name="nom" placeholder="Votre nom :" required />

        <input type="text" class="nomprenom" name="prenom" placeholder="Votre prenom" required />

        <input type="text" class="box-input" name="username" placeholder="Nom d'utilisateur" required />

        <input type="text" class="box-input" name="email" placeholder="Email" required />

        <input type="text" class="box-input" name="birthday" placeholder="Date de naissance" required />

        <input type="text" class="box-input" name="adresse" placeholder="Votre adresse" required />

        <input type="password" class="box-input" name="password" placeholder="Mot de passe" required />

        <input type="submit" name="submit" value="S'inscrire" class="boutonenvoyer" />

        <p class="box-register">Vous êtes déjà inscrit?
          <a href="login.php">Connectez-vous !</a></p>
      </form>
      <?php } ?>
    </section>
    <div class="navinscri">
    <nav class="home">
            <ul>
                <li><a href="../index.php">MINI JEUX</a></li>
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