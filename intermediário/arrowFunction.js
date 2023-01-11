/*const media = function (n1, n2) {
    return n1 * n2 / 2
}
console.log(media(2, 2))


const media = (n1, n2) => n1 * n2 / 2
console.log(media(4, 8))

function contaPalavras (frase) {
    return frase.split(' '). length
}

console.log(contaPalavras("palavra"))

const contaPalavras= frase => frase.split('').length

console.log(contaPalavras("palavra"))



function objetoPessoa (nome, idade) {
    return {

        nome: nome,
        idade: idade

    }
}
*/


const objPessoa = (nome, idade) => ({nome: nome,idade: idade})

console.log(objPessoa('Joaquim, 25'))