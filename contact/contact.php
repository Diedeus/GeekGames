    <!DOCTYPE html>
    <html lang="fr">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        <form action="" method="post">
            <input type="hidden" name="email_to" value="cgeekgames@gmail.com">
            <input type="email" name="email_from" placeholder="Email de l'emetteur">
            <input type="text" name="object" placeholder="Objet de l'email">
            <textarea name="body">

        </textarea>
            <input type="submit" value="Submit">
        </form>

        <?php

        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

        require '../asset/PHPMailer-master/src/Exception.php';
        require '../asset/PHPMailer-master/src/PHPMailer.php';
        require '../asset/PHPMailer-master/src/SMTP.php';

        if(isset($_POST['email_from'], $_POST['object'], $_POST['body'])){
            $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = 'smtp.gmail.com';               //Adresse IP ou DNS du serveur SMTP
        $mail->Port = 587;                          //Port TCP du serveur SMTP
        $mail->SMTPAuth = 1;                        //Utiliser l'identification
        $mail->CharSet = 'UTF-8';

        if ($mail->SMTPAuth) {
            $mail->SMTPSecure = 'tls';               //Protocole de sécurisation des échanges avec le SMTP
            $mail->Username   =  'cgeekgames@gmail.com';    //Adresse email à utiliser
            $mail->Password   =  'ovgohazddioabzfx';         //Mot de passe de l'adresse email à utiliser
        }

        $mail->From       = trim($_POST["email_from"]);                //L'email à afficher pour l'envoi         //L'alias de l'email de l'emetteur

        $mail->AddAddress(trim($_POST["email_to"]));

        $mail->Subject    =  $_POST["object"];                      //Le sujet du mail
        $mail->WordWrap   = 50;                    //Nombre de caracteres pour le retour a la ligne automatique
        $mail->AltBody = $_POST["body"];            //Texte brut
        $mail->IsHTML(false);                                  //Préciser qu'il faut utiliser le texte brut
        $mail->MsgHTML($_POST["body"]);            //Forcer le contenu du body html pour ne pas avoir l'erreur "body is empty' même si on utilise l'email en contenu alternatif

        if (!$mail->send()) {
            echo $mail->ErrorInfo;
        } else {
            echo 'Message bien envoyé';
            header("Location: ../index.php");
            exit;
        }
    } else {
        echo 'cela na pas marché';
    }
        ?>


    </body>

    </html>