function soma() {
    let soma = 0;
    for ( i in arguments) {
        soma += arguments[i]
    }
    return soma;
}

console.log(soma(1, 2, 3));
console.log(soma(1.2, 2.7, 3.1));
console.log(soma(1.5, 2, 'Teste'));
console.log(soma('a', 'b', 'c'));