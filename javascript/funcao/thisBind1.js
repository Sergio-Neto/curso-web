const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // error
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // define qual é será o this
falarDePessoa()