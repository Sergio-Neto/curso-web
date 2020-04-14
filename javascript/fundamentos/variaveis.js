{
    var numero = 1
    {
        var numero = 2
        console.log('Dentro: ' + numero)
    }
}
console.log('Fora: ' + numero)

var numero2 = 1
{
    let numero2 = 2
    console.log('Dentro: ' + numero2)
}
console.log('Fora: ' + numero2)