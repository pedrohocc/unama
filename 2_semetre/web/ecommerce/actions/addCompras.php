<?php
include_once __DIR__ . '/../db/methods/compras/comprasMethods.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_cliente = $_POST['id_cliente'];
    $produtos = $_POST['produtos'];
    $preco_total = $_POST['preco_total'];

    $cm = new ComprasMethod();
    
    $compra = $cm->addCompras($id_cliente, $produtos, $preco_total);

    if ($compra) {
        echo 'Compra cadastrada com sucesso!';
    } else {
        echo $compra;
    }
}
?>