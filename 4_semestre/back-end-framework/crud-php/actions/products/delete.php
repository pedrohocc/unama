<?php
include __DIR__ . "/../../db/methods/ProdutosMethods.php";
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $pm = new ProdutosMethods();
    $result = $pm->delete($id);

    if ($result == 'Excluido') {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false));
    }
}
?>