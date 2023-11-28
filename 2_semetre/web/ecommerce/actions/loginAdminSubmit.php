<?php
include_once __DIR__ . '/../db/methods/login-admin/loginAdminMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['user'];
    $senha = $_POST['senha'];
    $loginAdmin = new LoginAdminMethods();
    $usuario = $loginAdmin->login($user, $senha);
    echo $usuario;
    }
?>