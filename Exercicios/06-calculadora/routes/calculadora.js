
const express = require('express');
const router = express.Router();

//Soma
router.get('/somar', (req, res) => {
  const a = Number(req.query.numA);
  const b = Number(req.query.numB);
  res.json({ resultado: a + b });
});

//Subtração
router.get('/subtrair', (req, res) => {
  const a = Number(req.query.numA);
  const b = Number(req.query.numB);
  res.json({ resultado: a - b });
});

//Multiplicação
router.get('/multiplicar', (req, res) => {
  const a = Number(req.query.numA);
  const b = Number(req.query.numB);
  res.json({ resultado: a * b });
});

//Divisão
router.get('/dividir', (req, res) => {
  const a = Number(req.query.numA);
  const b = Number(req.query.numB);
  if (b === 0) {
    return res.status(400).json({ erro: "Divisão por zero" });
  }
  res.json({ resultado: a / b });
});

//Ao quadrado
router.get('/aoQuadrado', (req, res) => {
  const a = Number(req.query.numA);
  res.json({ resultado: a * a });
});

//Raiz quadrada
router.get('/raizQuadrada', (req, res) => {
  const a = Number(req.query.numA);
  if (a < 0) {
    return res.status(400).json({ erro: "Não existe raiz quadrada real de número negativo" });
  }
  res.json({ resultado: Math.sqrt(a) });
});

module.exports = router;