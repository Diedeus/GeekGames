<?php
define('DB_HOST', 'localhost');
define('DB_username', 'root');
define('DB_password', 'Albeedu62&00');
define('DB_name', 'register');


$conn = mysqli_connect(DB_HOST, DB_username, DB_password, DB_name);

if ($conn === false){
    die('erreur de connexion'.mysqli_connect_error());
}

?>