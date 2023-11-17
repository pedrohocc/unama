<?php
include_once __DIR__ . '/db/methods/ProdutosMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $ativo = true;
    
    try {
        $pm = new ProdutosMethods();
        $resultado = $pm->create($nome, $descricao, $preco, $ativo);
        header('Location: index.php');
    } catch (Exception $e) {
        throw new Exception("Error Processing Request" . $e->getMessage());
    }
}
?>