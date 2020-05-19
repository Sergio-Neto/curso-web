const valores = [2.1, 5.4, 6.8, 3.3, 9.7]

for (let i in valores) {
    console.log(`Posição ${i} é ${valores[i]}`);
}

const pessoa = {
    Nome: 'Júlia',
    Idade: 20,
    Altura: 1.65,
    Peso: '58kg'
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}