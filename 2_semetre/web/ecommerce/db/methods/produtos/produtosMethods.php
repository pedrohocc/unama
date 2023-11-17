<?php
include_once __DIR__ . '/../../connection/connection.php';
include_once __DIR__ . '/../../../models/Produtos.php';
class ProdutosMethods
{
    public function selectAll(): ?array
    {
        $pdo = new Connection();
        $pdo = $pdo->connect();
        $itens = [];

        try {
            $sql = 'SELECT * FROM produtos where estoque > 0';
            $stmt = $pdo->query($sql);

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $novoProd = new Produtos($row['id_produto'], $row['nome'], $row['descricao'], $row['preco'], $row['estoque']);
                $itens[] = $novoProd;
            }
        } catch (PDOException $e) {
            echo "Erro na consulta: " . $e->getMessage();
        }

        return $itens;
    }
}
?>