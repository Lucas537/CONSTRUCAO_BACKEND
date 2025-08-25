// Soma

function somar(a, b) {
    return a + b;
}

// Subtrair

function subtrair(a, b) {
    return a - b;
}

// Multiplicar

function multiplicar(a, b) {
    return a * b;
}

// Dividir

function dividir(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
}

// Ao Quadrado

function aoQuadrado(a) {
    return a * a;
}

// Raiz Quadrada

function raizQuadrada(a) {
    if (a < 0) {
        throw new Error('Não calcular a raiz quadrada de número negativo');
    }
    return Math.sqrt(a);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada
};
