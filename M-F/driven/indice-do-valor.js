/*
Índice do Valor
Implemente a função ao lado que recebe uma array e um valor e retorna a posição que esse valor se encontra na array (começando em 0).

Exemplo: deve retornar 2 quando passada a array [10, 30, 50, 70, 90] e o valor 50.
*/
function indiceDoValor(list, valor) {
    for(let i = 0; i < list.length; i++){
        if(list[i] == valor){
            return i
        }
    }
}
console.log(indiceDoValor( ['carro', 'gato', 'inacio'], 'inacio'))

function indiceDoValor(list, valor) {
       return list.indexOf(valor)
}
console.log(indiceDoValor( [10, 30, 50, 70, 90], 50))
