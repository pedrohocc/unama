<?php
include_once __DIR__ . '/../db/methods/produtos/produtosMethods.php';

$pm = new ProdutosMethods();
$result = $pm->selectAll();

echo json_encode($result);
?>