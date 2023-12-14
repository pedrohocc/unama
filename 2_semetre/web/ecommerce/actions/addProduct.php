<?php
include_once __DIR__ . '/../db/methods/produtos/produtosMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $estoque = $_POST['estoque'];
    $imagem = $_POST['imagem'];

    $pm = new ProdutosMethods();
    
    $produto = $pm->addProduct($nome, $descricao, $preco, $estoque, $imagem);

    if ($produto) {
        header('Location: ../admin/home.html');
    } else {
        echo $produto;
    }
}
?>