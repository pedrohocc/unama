const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
 
 // Configuração do MySQL
 const connection = mysql.createConnection({
   host: 'aws.connect.psdb.cloud',
   user: 'nsyzlpt4mhxshayknxd8',
   password: 'pscale_pw_DkQfRxgMynzRpz7nbRtRmUjyyd3c572UaQPUwy4DEDR',
   database: 'restauranteunama',
   ssl: {"rejectUnauthorized":true}
  });
  
  // Verifica se a conexão foi bem sucedida
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conexão com o banco de dados estabelecida');
  });
  

  app.get('/', (req, res) => {
    res.send('oi');
  });

  // Endpoint GET
  app.get('/clientes', (req, res) => {
    connection.query('SELECT * FROM cliente', (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    });
  });

  app.get('/carrinho', (req, res) => {
    connection.query('SELECT * FROM carrinho', (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    });
  });
  
  app.use(express.json())

  app.post('/cadastro', (req, res) => {
    const { nome, tamanho, preco } = req.body;
    const sql = 'INSERT INTO Carrinho (produto, tamanho, preco) VALUES (?, ?, ?)';
    connection.query(sql, [nome, tamanho, preco], (err, result) => {
      if (err) throw err;
    res.json(result); 
  });
});

app.delete('/excluirCarrinho/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'delete from carrinho where idcarrinho = ?'
  connection.query(sql, [id], (err,result) => {
    if (err) throw err;
    res.json(result); 
  })
})

// Inicia o servidor
app.listen(5500, () => {
  console.log('API rodando na porta 5500');
});