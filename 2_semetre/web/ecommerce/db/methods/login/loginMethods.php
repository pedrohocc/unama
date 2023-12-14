<?php 
include_once __DIR__ . '/../../connection/connection.php';
class LoginMethods {
    public function login($email, $senha): string {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        $senhaCripto = hash('sha256', $senha);

        $sql = "SELECT * FROM cliente WHERE email = :email";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

       if($usuario && $senhaCripto == $usuario['senha']) {
            return $usuario['id_cliente'];
        } else {
            return "Usuário ou senha incorreto";
        }
    }

    public function addUser($nome, $endereco, $telefone, $email, $senha):bool {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        $senhaCripto = hash("sha256", $senha);

        $sql = "INSERT INTO cliente (nome, endereco, telefone, email, senha) VALUES (:nome,:endereco,:telefone,:email,:senha)";

        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':endereco', $endereco);
        $stmt->bindParam(':telefone', $telefone);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senhaCripto);

        try {
            $stmt->execute();
            return true;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
?>