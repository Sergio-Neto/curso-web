const pessoa = {
    nome: 'Fábio',
    idade: 4,
    estuda: false,
    endereco: {
        numero: 26,
        complemento: 145
    }
}
const { nome, idade } = pessoa
console.log(nome, idade)
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, estuda = true} = pessoa
console.log(sobrenome, estuda)
const { endereco: { numero, cep } } = pessoa
console.log(numero, cep)

const [a] = [10]
console.log(a)
const [n1, , n3, n4, n5 = 0] = [4, 1, 9, 7]
console.log(n1, n3, n4, n5)
const [, [, nota]] = [[, 8, 2], [0, 7, 0]]
console.log(nota)

function rand( {min = 0, max = 1000} ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const parametros = {min:12, max: 50}
console.log(rand({}))
console.log(rand({min: 150}))
console.log(rand(parametros))

function rand2( [min = 0, max = 1000] ) {
    if (min > max) [min, max] [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([992]))
console.log(rand2([, 80]))
console.log(rand2([50, 40]))
console.log(rand2([]))