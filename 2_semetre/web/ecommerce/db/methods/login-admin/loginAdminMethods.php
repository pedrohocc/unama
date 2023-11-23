<?php 
include_once __DIR__ . '/../../connection/connection.php';
class LoginAdminMethods {
    public function login($user, $senha): string {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        $senhaCripto = hash('sha256', $senha);

        $sql = "SELECT * FROM admin WHERE user = :user";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':user', $user);
        $stmt->execute();
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

       if($usuario && $senhaCripto == $usuario['senha']) {
            return "Usuário logado com sucesso";
        } else {
            return "Usuário ou senha incorreto";
        }
    }
}
?>