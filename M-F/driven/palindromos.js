/* 

Implemente a função ao lado que recebe uma string como parâmetro e retorna a string sim caso a string passada seja um palíndromo ou não caso contrário. Palíndromo é a categoria de strings que são escritas da mesma forma de trás para frente, por exemplo “aba”, “arara” e “abcdcba”.

Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:

let palavra = "abcdef";

let tamanho = palavra.length;//Nesse caso a variável tamanho vai receber o valor 6 que é o número de caracteres em palavra

Outra semelhança é que podemos acessar um caractere da string por sua posição, então se quisermos pegar a primeira letra da string palavra acima podemos fazer:

let primeiraLetra = palavra[0]//Com isso, temos que primeiraLetra recebeu a string “a”;

let segundaLetra = palavra[1]//Com isso, temos que segundaLetra recebeu a string “b”;

*/

function ehPalindromo (string) {
    var palindromo = "";

for(var i = string.length - 1; i >= 0; i--) {
   palindromo += string[i]
}

if (string == palindromo) {
   return "sim"
} else {
   return "não"
}
  }
  console.log(ehPalindromo("abc"))

  
  function ehPalindromo (string) {
    let i = 0
    let j = string.length
    let letrasIguais = 0
    while(i < string.length){
        i++
        j--
        if(string[i] == string[j-1]){
            letrasIguais ++
        }
    }
    console.log(letrasIguais + " letras iguais")
    if(letrasIguais == string.length){
        return "palindromo"
    }else{
        return "não é palindromo"
    }
  }
  console.log(ehPalindromo(''))