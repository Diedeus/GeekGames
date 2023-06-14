<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="../asset/icone.png" />
    <link rel="stylesheet" href="style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GeekGames - change mot de passe</title>
</head>
<body>
<?php
require('../Registration/config.php');
session_save_path("../tmp");
session_start();
?>
<section class="container_changemdp">
  <img src="../asset/icone.png" alt="">
  <h1>Bienvenue sur la modification de mot de passe</h1>
<form class="changemdp" method="post">
    <input type="password" name="new_password" placeholder="Nouveau mot de passe" required>
    <input type="password" name="confirm_password" placeholder="Confirmer le nouveau mot de passe" required>
    <input class="subnewmdp" type="submit" value="Changer le mot de passe">
</form>

<?php
// Vérification de la soumission du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Récupération des données du formulaire
  $newPassword = $_POST['new_password'];
  $confirmPassword = $_POST['confirm_password'];
  $token = $_GET['token'];

  // Vérification que les mots de passe correspondent
  if ($newPassword === $confirmPassword) {
    // Vérification du pattern pour le mot de passe
    if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $newPassword)) {
      // Hashage du nouveau mot de passe
      $hashedPassword = hash('sha256', $newPassword);

      // Préparer la requête SQL pour mettre à jour le mot de passe
      $sql = "UPDATE users SET Mot_de_passe = '$hashedPassword' WHERE token = '$token'";

      // Exécuter la requête
      if ($conn->query($sql) === TRUE) {
          echo "
          <section class='succesmdp'><p>Le mot de passe a été changé avec succès !</p>
          <a href='../index.php'>Retour à l'accueil</a></section>";
      } else {
          echo "<section class='errormdp'><p>Erreur lors de la mise à jour du mot de passe </p> </section>";
      }
    } else {
      echo "<section class='errormdp'><p>Le mot de passe ne respecte pas le pattern requis</p> </section>";
    }
  } else {
    // Affichage d'un message d'erreur si les mots de passe ne correspondent pas
    echo "<section class='errormdp'><p>Les mots de passe ne correspondent pas</p> </section>";
  }
}
?>
</section>
</body>
</html>