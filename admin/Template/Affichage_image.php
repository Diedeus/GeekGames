<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


<?php
  // ON VA CHERCHER LES LOGS DE LA DB DANS LE FICHIER CONFIG.PHP
require('../../Registration/config.php');
?>
<section class="corpsJprix" style="display:flex;flex-wrap:wrap;justify-content:space-between;">
<?php
    $sql3 = "SELECT * FROM `Jeu_Jprix` ORDER BY id_Jprix";
    $reponseJprix = mysqli_query($conn, $sql3);
    While($donneesJprix = mysqli_fetch_array($reponseJprix, MYSQLI_ASSOC)){
?>

<Article class="ElementJprix" style="width:30%;padding:0 10px;">
    <div class="imgElement">
        <img src="<?php echo $donneesJprix['Element_Jprix']?>" alt="">
        <p><?php echo $donneesJprix['Reponse_Jprix'] ?>€</p>
        <p class="numid"><?php echo $donneesJprix['id_Jprix'] ?></p>
    </div>
    <div class="btnElement">
        <button class="suppJprix" style="display:block;">Supprimer</button>
        <button class="UpdtJprix" style="display:block;">Mettre à Jour</button>
        <form method="POST" action="#">
        <input type="hidden" name="fcsupp" class="fcsupp" value="" >
        <input type="hidden" name="fcupt" class="fcupt" value="">
        <input type="submit" class="confsupp" style="display:none;" value="êtes vous sûr de vouloir supprimer cet élément">
        </form>
        
        
        
    </div>


</Article>


<?php } ?>

<?php 
if(isset($_POST['fcsupp'])){
    $idjp = $_POST['fcsupp'];
    $query10 = "DELETE FROM `Jeu_Jprix` WHERE id_Jprix = $idjp";
    $result10 = mysqli_query($conn, $query10);
}
?>
</section>

<script src="./affichage.js"></script>

</body>
</html>