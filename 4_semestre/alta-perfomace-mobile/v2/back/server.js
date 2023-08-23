const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 49384;

app.use(express.json());
app.use(cors())

app.get('/media/:valor1/:valor2', function(req, res) {
  numero1 = req.params.valor1
  numero2 = req.params.valor2
  media = (Number(numero1) + Number(numero2)) / 2
  res.send(media.toString())
});


app.listen(PORT, () => {
  console.log(PORT, 'Server ON')
})
