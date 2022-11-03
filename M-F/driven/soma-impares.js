/* 
Implemente a função ao lado que recebe um array e retorna a soma de todos os valores ímpares do array.

Exemplo: Se for passado o array [3, 6, 8, 9] a função deve retornar 12, pois apenas os valores 3 e 9 são ímpares e sua soma retorna 12.

observação: todos os arrays terão pelo menos um valor ímpar.

Nos caso em que houver 1 valor ímpar a função deve retornar o seu próprio valor, ou seja se for passado [1, 4, 6] a função deve retornar 1.
*/

function somaDosImpares(arr) {
    let soma = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2 != 0){
            soma += arr[i]
        }
    }
    return soma
}
console.log(SomaDosImpares([2,1,4]))