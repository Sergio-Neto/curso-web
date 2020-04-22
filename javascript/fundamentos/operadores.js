console.log('1)', '1' == 1)
console.log('2)', '1' === 1)
console.log('3)', '1' != 3)
console.log('4)', 5 >= 1)
console.log('5)', 5 < 1)

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(8.5))
console.log(resultado(3.5))