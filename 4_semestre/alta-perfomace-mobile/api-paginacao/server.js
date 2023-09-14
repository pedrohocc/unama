const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors())

const connection = mysql.createConnection(process.env.CONEXAO)

app.get('/pessoas', (req, res) => {
    const page = parseInt(req.query.page) || 1
    const itemsPerPage = 100
    const start = (page - 1) * itemsPerPage     
    const query = `SELECT * FROM pessoa limit ${start},${itemsPerPage} `

    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});


app.listen(PORT, () => {
  console.log(PORT, 'Server ON')
})
