//Como somar todos os valores de uma array

let array = [14, 5, 8, 7] //34

let inicialValor = 0

let somaComInicial = array.reduce((accumulator, currentValue) => accumulator + currentValue, inicialValor)

console.log(somaComInicial)