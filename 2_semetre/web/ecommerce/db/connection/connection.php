<?php
class Connection {
    public function connect(): ?PDO {
        $host = "185.211.7.154";
        $port = 3306;
        $dbname = 'u835722662_projeto';
        $user = 'u835722662_pedro';
        $password = 'Zurc2004.';

        try {
            $dsn = "mysql:host=$host;port=$port;dbname=$dbname;";
            $pdo = new PDO($dsn, $user, $password);
            
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
            return $pdo;
        } catch (PDOException $e) {
            echo "Erro na conexão: " . $e->getMessage();
        }
    }
}
?>
