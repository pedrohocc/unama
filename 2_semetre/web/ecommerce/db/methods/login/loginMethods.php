<?php 
include_once __DIR__ . '/../../connection/connection.php';
class LoginMethods {
    public function login($email, $senha): string {
        $pdo = new Connection();
        $pdo = $pdo->connect();

        $sql = "SELECT * FROM cliente WHERE email = :email  AND senha = crypt(:senha, senha)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senha);
        $stmt->execute();
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

       if($usuario) {
            return "Usuário logado com sucesso";
        } else {
            return "Usuário ou senha incorreto";
        }
    }
}
?>