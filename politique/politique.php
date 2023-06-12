<!DOCTYPE html>
<html lang="en">

<head>
<link rel="icon" type="image/png" href="../asset/icone.png"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style/style.css">
    <title>GekkGames - Politique de confidentialité</title>
</head>

<body>

<?php
    session_save_path("../tmp");
    session_start(); ?>

    <nav class="home">
        <ul>
            <li><a href="../index.php">ACCUEIL</a></li>
            <li><a class="on" href="./credits/credit.php">CREDITS</a></li>
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
            <button class="log">
                <p>Se connecter</p>
            </button>
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

    <section class="container_politiqueconf">
        <div class="politiqueconf">
            <h1>Politique de Confidentialité de GeekGames</h1>

            <h3>Dernière mise à jour : [12 - 06 - 2023]</h3>

            <p>Nous, chez GeekGames, accordons une grande importance à la confidentialité et à la sécurité de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons les données que nous recueillons lorsque vous utilisez notre site web et nos services.</p>

            <h2>1. Collecte des informations</h2>

            <h3>1.1. Informations personnelles identifiables</h3>
            <p>Lors de votre inscription sur GeekGames, nous pouvons collecter certaines informations personnelles telles que votre nom, votre adresse e-mail, votre âge, votre sexe et d'autres informations pertinentes pour vous fournir nos services.</p>

            <h3>1.2. Données de connexion et de navigation</h3>
            <p>Nous pouvons collecter des informations sur votre utilisation de notre site web, y compris votre adresse IP, le type de navigateur que vous utilisez, les pages que vous visitez, les liens sur lesquels vous cliquez et d'autres données de navigation.</p>

            <h3>1.3. Cookies et technologies similaires</h3>
            <p>Nous utilisons des cookies et d'autres technologies similaires pour améliorer votre expérience sur notre site web. Ces technologies peuvent collecter automatiquement des informations vous concernant et votre utilisation de notre site.</p>

            <h2>2. Utilisation des informations</h2>

            <h3>2.1. Fourniture de nos services</h3>
            <p>Nous utilisons les informations collectées pour vous fournir nos services, notamment pour vous permettre d'accéder et d'utiliser nos mini-jeux, d'interagir avec d'autres utilisateurs et de personnaliser votre expérience sur le site.</p>

            <h3>2.2. Communication avec vous</h3>
            <p>Nous pouvons utiliser vos informations pour vous envoyer des communications liées à votre utilisation de notre site web, telles que des notifications sur les mises à jour, les nouveaux jeux, les promotions ou d'autres informations importantes.</p>

            <h3>2.3. Amélioration de nos services</h3>
            <p>Nous utilisons les informations collectées pour analyser et comprendre comment notre site web est utilisé, afin d'améliorer continuellement nos services, de résoudre les problèmes techniques et de développer de nouvelles fonctionnalités.</p>

            <h2>3. Partage des informations</h2>

            <h3>3.1. Partage avec des tiers</h3>
            <p>Nous ne vendons, ne louons ni ne divulguons vos informations personnelles à des tiers, sauf dans les cas suivants :</p>
            <ul>
                <li>Lorsque vous nous avez donné votre consentement explicite pour le partage des informations.</li>
                <li>Lorsque le partage des informations est nécessaire pour fournir nos services (par exemple, avec des prestataires de services tiers qui nous aident à héberger ou à maintenir notre site web).</li>
                <li>Lorsque cela est requis par la loi, une ordonnance du tribunal ou toute autre procédure légale.</li>
            </ul>

            <h3>3.2. Anonymisation des données</h3>
            <p>Nous pouvons agréger et anonymiser certaines informations pour une utilisation statistique ou analytique, de manière à ce qu'elles ne puissent plus être associées à vous personnellement.</p>

            <h2>4. Protection des informations</h2>

            <h3>4.1. Mesures de sécurité</h3>
            <p>Nous avons mis en place des mesures de sécurité appropriées pour protéger vos informations contre tout accès, divulgation, utilisation ou modification non autorisés. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.</p>

            <h3>4.2. Durée de conservation des données</h3>
            <p>Nous conserverons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services, respecter nos obligations légales, résoudre les litiges et faire respecter nos accords.</p>

            <h2>5. Vos droits</h2>
            <p>Vous avez certains droits concernant vos informations personnelles, notamment :</p>
            <ul>
                <li>Le droit d'accéder à vos informations personnelles que nous détenons.</li>
                <li>Le droit de corriger, mettre à jour ou supprimer vos informations personnelles inexactes ou obsolètes.</li>
                <li>Le droit de demander la limitation du traitement de vos informations personnelles.</li>
                <li>Le droit de vous opposer au traitement de vos informations personnelles dans certaines circonstances.</li>
                <li>Le droit de retirer votre consentement à tout moment lorsque nous traitons vos informations sur la base de votre consentement.</li>
            </ul>

            <h2>6. Modifications de cette politique</h2>
            <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de la dernière mise à jour indiquée en haut de la page. Nous vous encourageons à consulter régulièrement cette politique pour vous tenir informé(e) de toute modification.</p>

            <p>Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou notre utilisation de vos informations personnelles, veuillez nous contacter à l'adresse suivante : cgeekgames@gmail.com.</p>
            <img src="../asset/logoblanc.png" alt="">
        </div>
    </section>

</body>

</html>