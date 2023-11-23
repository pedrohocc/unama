<?php
include_once __DIR__ . "/../../db/methods/ProdutosMethods.php";

$pm = new ProdutosMethods;
$produtos = $pm->selectAll();
echo json_encode($produtos);
?>