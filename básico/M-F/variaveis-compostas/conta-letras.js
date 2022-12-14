/*
Implemente a função ao lado que recebe como parâmetros uma string e uma letra e deve retornar a quantidade de ocorrências da letra passada na string passada.

Exemplo: se for passado “carreira” e a letra “r”, a função deve retornar 3

Exemplo: se for passado “ovo” e a letra “s”, a função deve retornar 0

Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:

let palavra = "abcdef";
let tamanho=palavra.length;//Nesse caso a variável tamanho vai receber 6 que é o número de caracteres em palavra
Outra semelhança é que podemos acessar um caractere da string por sua posição. Então, se quisermos acessar a primeria letra da string palavra fazemos:

let primeiraLetra=palavra[0]//Com isso, temos que primeiraLetra vai receber a string "a"
*/
function contaLetras(string, letra) {

    let ocorrencias = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == letra){
            ocorrencias++
        }
    }
    console.log(ocorrencias)
} 
contaLetras('carro' , 'a')
 