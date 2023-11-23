<?php
include_once __DIR__ . '/../connection.php';
include_once __DIR__ . '/../../models/produto.php';
class ProdutosMethods
{
    public function selectAll(): ?array
    {
        $pdo = new Connection();
        $pdo = $pdo->conexao();
        $itens = [];

        try {
            $sql = 'SELECT * FROM produtos where ativo = true';
            $stmt = $pdo->query($sql);

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $novoProd = new Produtos($row['id_produto'], $row['nome'], $row['descricao'], $row['preco'], $row['ativo']);
                $itens[] = $novoProd;
            }
        } catch (PDOException $e) {
            throw new Exception("Error Processing Request" . $e->getMessage());

        }

        return $itens;
    }

    public function delete(int $id)
    {
        $pdo = new Connection();
        $pdo = $pdo->conexao();

        try {
            $sql = 'UPDATE produtos SET ativo = false WHERE id_produto = :id';
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            return 'Excluido';
        } catch (PDOException $e) {
            throw new Exception("Error Processing Request" . $e->getMessage());

        }
    }

    public function create($nome, $descricao, $preco, $ativo)
    {
        $pdo = new Connection();
        $pdo = $pdo->conexao();

        try {
            $sql = 'INSERT INTO produtos (nome, descricao, preco, ativo) VALUES (:nome, :descricao, :preco, :ativo)';
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':descricao', $descricao);
            $stmt->bindValue(':preco', $preco);
            $stmt->bindValue(':ativo', $ativo);
            $stmt->execute();

            return 'Excluido';
        } catch (PDOException $e) {
            throw new Exception("Error Processing Request" . $e->getMessage());

        }
    }

    public function update($id, $nome, $descricao, $preco)
    {
        $pdo = new Connection();
        $pdo = $pdo->conexao();

        try {
            $sql = 'UPDATE produtos SET nome = :nome, descricao = :descricao, preco = :preco WHERE id_produto = :id';
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':id', $id,);
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':descricao', $descricao);
            $stmt->bindValue(':preco', $preco);
            $stmt->execute();

            return 'Editado';
        } catch (PDOException $e) {
            throw new Exception("Error Processing Request" . $e->getMessage());

        }
    }
}
?>