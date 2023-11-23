<?php
include_once __DIR__ . '/../db/methods/login/loginMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $lm = new LoginMethods();
    $usuario = $lm->login($email, $senha);
    echo $usuario;
    }
?>