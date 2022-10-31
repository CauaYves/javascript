/*Array Numerada
Implemente a função ao lado que recebe um valor como parâmetro e retorna um array contendo os elementos de 1 até o valor passado como parâmetro.
Exemplo:
Se for passado como parâmetro n = 5, sua função deve retornar [1, 2, 3, 4, 5]
Se for passado como parâmetro n =10, sua função deve retornar [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
Observação:
Sempre será passado como parâmetro um valor maior ou igual a 1
Dica:
Para adicionar um elemento a um array você pode utilizar o comando “.push”. Então caso tenha um array “arr=[]” e queira inserir o número “3” nesse array basta fazer “arr.push(3)”
*/
function listaNumerada(n) {
    let arr = []

    for(let i = 1 ; i < n+1 ; i ++) {
        arr.push(i)
    }
    console.log(arr)
}
listaNumerada(7)