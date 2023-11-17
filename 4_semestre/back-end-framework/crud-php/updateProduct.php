<?php
include_once __DIR__ . '/db/methods/ProdutosMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id_produto'];
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    
    try {
        $pm = new ProdutosMethods();
        $resultado = $pm->update($id, $nome, $descricao, $preco);
        header('Location: index.php');
    } catch (Exception $e) {
        throw new Exception("Error Processing Request" . $e->getMessage());
    }
}
?>