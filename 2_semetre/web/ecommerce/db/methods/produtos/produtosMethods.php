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
                $novoProd = new Produtos($row['id_produto'], $row['nome'], $row['descricao'], $row['preco'], $row['estoque'], $row['imagem']);
                $itens[] = $novoProd;
            }
        } catch (PDOException $e) {
            echo "Erro na consulta: " . $e->getMessage();
        }

        return $itens;
    }

    public function addProduct($nome, $descricao, $preco, $estoque, $imagem): ?bool {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        try {
            $sql = 'INSERT INTO produtos (nome, descricao, preco, estoque, imagem) VALUES (:nome, :descricao, :preco, :estoque, :imagem)';
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':descricao', $descricao);
            $stmt->bindParam(':preco', $preco);
            $stmt->bindParam(':estoque', $estoque);
            $stmt->bindParam(':imagem', $imagem);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage());
        }
    }

    public function updateEstoque($id_produto, $estoque): bool
    {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        $sql = "UPDATE produtos SET estoque = :estoque WHERE id_produto = :id_produto";

        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id_produto', $id_produto);
        $stmt->bindParam(':estoque', $estoque);

        try {
            $stmt->execute();
            return true;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
?>