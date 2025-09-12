const express = require('express');
const app = express();
const port = 3000;

// Importa o router da calculadora
const calculadoraRouter = require('./routes/calculadora');

// Middleware: rota base da calculadora
app.use('/calculadora', calculadoraRouter);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});