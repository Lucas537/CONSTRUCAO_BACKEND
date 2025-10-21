const express = require("express");

const router = express.Router();

// CRIAR
// POST /pessoas
router.post("/pessoas", (req, res, next) => {});

// lista de pessoas para simular db
let pessoas = [
  {
    id: 1,
    nome: "João Pedro",
    cpf: "12345678901",
    email: "joao@pedro.com",
    dataNascimento: "01/01/2000",
  },
  {
    id: 2,
    nome: "bb",
    cpf: "22222222222",
    email: "bb@bb.com",
    dataNascimento: "02/02/2002",
  },
];

// CRIAR
// POST /pessoas
router.post("/pessoas", (req, res, next) => {
  const { nome, cpf, email, dataNascimento } = req.body;
  if (!nome || !cpf || !email || !dataNascimento) {
    return res
      .status(400)
      .json({ error: "nome, cpf, email e dataNascimento sao obrigatorios" });
  }

  // validacao cpf
  const pessoa = pessoas.find((pessoa) => pessoa.cpf == cpf);
  if (pessoa) {
    return res.status(409).json({ error: "cpf ja cadastrado" });
  }

  // cadastrar a nova pessoa na lista
  const novaPessoa = {
    id: Date.now(),
    nome,
    cpf,
    email,
    dataNascimento,
  };

  // inserir nova pessoa na lista
  pessoas.push(novaPessoa);
  res.status(201).json({ message: "pessoa cadastrada -> ", novaPessoa });
});

// LISTAR TODOS
// GET /pessoas
router.get("/pessoas", (req, res, next) => {
  res.status(200).json(pessoas);
});

// BUSCAR UM
// GET /pessoas/{id}
router.get("/pessoas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const pessoaRecebida = pessoas.find((p) => p.id == idRecebido);
  if (!pessoaRecebida) {
    return res.status(404).json({ erro: "Pessoa não encontrada!" });
  }

  res.status(200).json(pessoaRecebida);
});

// EDITAR
// PUT /pessoas/{id}
router.put("/pessoas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const { nome, email, dataNascimento } = req.body;

  if (!nome || !email || !dataNascimento) {
    return res
      .status(400)
      .json({ error: "nome, email e dataNascimento sao obrigatorios" });
  }

  // validar se ID existe na lista
  const pessoa = pessoas.find((p) => p.id == idRecebido);
  if (!pessoa) {
    return res.status(404).json({ error: "pessoa nao encontrado" });
  }

  pessoa.nome = nome;
  pessoa.email = email;
  pessoa.dataNascimento = dataNascimento;

  res.status(200).json({ message: "pessoa atualizada com sucesso" });
});

// DELETAR
// DELETE /pessoas/{id}
router.delete("/pessoas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const pessoa = pessoas.find((p) => p.id == idRecebido);

  if (!pessoa) {
    return res.status(404).json({ error: "pessoa nao encontrada" });
  }

  pessoas = pessoas.filter((pessoa) => pessoa.id != idRecebido);

  res.json({ message: "pessoa excluida com sucesso" });
});

module.exports = router;