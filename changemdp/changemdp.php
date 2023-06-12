<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GeekGames - change mot de passe</title>
</head>
<body>
<?php
require('../Registration/config.php');
// Initialiser la session
session_save_path("../tmp");
session_start();
?>

<form method="post">
    <input type="password" name="new_password" placeholder="Nouveau mot de passe" required>
    <input type="password" name="confirm_password" placeholder="Confirmer le nouveau mot de passe" required>
    <input type="submit" value="Changer le mot de passe">
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
    // Hashage du nouveau mot de passe
    $hashedPassword = hash('sha256', $newPassword);

    // Préparer la requête SQL pour mettre à jour le mot de passe
    $sql = "UPDATE users SET Mot_de_passe = '$hashedPassword' WHERE token = '$token'";

    // Exécuter la requête
    if ($conn->query($sql) === TRUE) {
        echo "Le mot de passe a été changé avec succès pour le token : $token";
    } else {
        echo "Erreur lors de la mise à jour du mot de passe : " . $conn->error;
    }
  } else {
    // Affichage d'un message d'erreur si les mots de passe ne correspondent pas
    echo "Les mots de passe ne correspondent pas.";
  }
}
?>
</body>
</html>