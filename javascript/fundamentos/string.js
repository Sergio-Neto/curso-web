const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log("Escola ".concat(escola).concat("!"))

console.log("Escola " + escola + "!")
console.log(escola.replace(3, "e"))
console.log("Carla, Júlia, Sérgio".split(","))

const nome = "Sérgio"
const interpolacao = `
    Olá
    ${nome}!`
console.log(interpolacao)
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)