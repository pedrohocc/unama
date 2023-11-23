<?php
include_once __DIR__ . '/../db/methods/login/loginMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $lm = new LoginMethods();
    
    $usuario = $lm->addUser($nome, $endereco, $telefone, $email, $senha);
    
    if ($usuario) {
        echo 'Usuário cadastrado com sucesso!';
    } else {
        echo 'Erro ao cadastrar usuário!';
    }
}
?>