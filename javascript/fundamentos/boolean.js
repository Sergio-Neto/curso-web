let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Verdadeiros
console.log(!!1)
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Falsos
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))

console.log(!!('' || null || undefined || "uepa"))
let nome = ""
console.log(nome || "Desconhecido")