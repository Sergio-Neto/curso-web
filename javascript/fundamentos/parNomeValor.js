const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Ola' // contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 18,
    peso: 102,
    endereco: {
        numero: 25,
        complemento: 202
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)