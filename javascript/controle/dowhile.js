function getInteiroAleatorio(min, max) {
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

let count = 0
do {
    count = getInteiroAleatorio(-1, 10)
    console.log(`Valor aleatório é ${count}`)
} while (count != 6)