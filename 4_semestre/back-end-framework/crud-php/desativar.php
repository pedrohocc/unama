<?php
include __DIR__ . "/db/methods/ProdutosMethods.php";

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $pm = new ProdutosMethods();
    $result = $pm->delete($id);

    if ($result == 'Excluido') {
        header('Location: index.php');
    }
}
?>