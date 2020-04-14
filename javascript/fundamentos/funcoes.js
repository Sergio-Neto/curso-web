function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(5, 7, 14, 2, 45)
imprimirSoma()

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Olá Mundo!')