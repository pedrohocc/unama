<?php
include_once __DIR__ . '/../../connection/connection.php';
include_once __DIR__ . '../../methods/produtos/produtosMethods.php';
class ComprasMethod
{
    public function addCompras($id_cliente, $produtos, $precoTotal): bool
    {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        $sql = "INSERT INTO compras (id_cliente, produtos, preco_total) VALUES (:id_cliente,:produtos,:preco_total)";

        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id_cliente', $id_cliente);
        $stmt->bindParam(':produtos', $produtos);
        $stmt->bindParam(':preco_total', $precoTotal);

        try {
            $stmt->execute();
            return true;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
?>