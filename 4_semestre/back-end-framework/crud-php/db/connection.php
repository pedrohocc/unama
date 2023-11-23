<?php
class Connection {
    public function conexao() {
        $host = "172.23.0.3"; 
        $port = 5432;
        $dbname = 'dbzin';
        $user = 'user123';
        $password = 'user123';

        try {
            $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";
            $pdo = new PDO($dsn, $user, $password);
            
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
            return $pdo;
        } catch (PDOException $e) {
            throw new Exception($e->getMessage());
        }

    }
}
?>
