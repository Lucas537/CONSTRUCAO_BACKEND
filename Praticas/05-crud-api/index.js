const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log("____# LOG DE REQUISIÇÃO #____");
  console.log("TIME: ", new Date().toLocaleString());
  console.log("METODO: ", req.method);
  console.log("ROTA: ", req.url);

  next();
});

app.get("/hello", (req, res, next) => {
  res.send("Hello!!!!");
});

const PessoaController = require("./routes/Pessoacontroller.js");
app.use(PessoaController);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});