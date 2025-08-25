const readline = require('readline');
const calc = require('./calculadora');

// Interface para entrada/saída no terminal

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que pergunta ao usuário

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question(`Escolha a operação:
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Ao Quadrado (do primeiro número)
6 - Raiz Quadrada (do primeiro número)
Digite o número da operação: `, (op) => {

      const a = parseFloat(num1);
      const b = parseFloat(num2);

      try {
        let resultado;

        switch (op) {
          case '1':
            resultado = calc.somar(a, b);
            console.log(`${a} + ${b} = ${resultado}`);
            break;
          case '2':
            resultado = calc.subtrair(a, b);
            console.log(`${a} - ${b} = ${resultado}`);
            break;
          case '3':
            resultado = calc.multiplicar(a, b);
            console.log(`${a} * ${b} = ${resultado}`);
            break;
          case '4':
            resultado = calc.dividir(a, b);
            console.log(`${a} / ${b} = ${resultado}`);
            break;
          case '5':
            resultado = calc.aoQuadrado(a);
            console.log(`${a}² = ${resultado}`);
            break;
          case '6':
            resultado = calc.raizQuadrada(a);
            console.log(`√${a} = ${resultado}`);
            break;
          default:
            console.log('Operação inválida.');
        }
      } catch (err) {
        console.log('Erro:', err.message);
      }

      rl.close(); // Fecha a interface após executar
    });
  });
});
