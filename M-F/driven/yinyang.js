/*
QUESTÃO 11
Yin Yang
Implemente a função ao lado, que concatena em uma única string todos os números da array fornecida. Porém, com algumas regras:

- Números múltiplos de 2 devem ser substituídos pela string "Yin"

- Números múltiplos de 3 devem ser substituídos pela string "Yang"

- Números múltiplos de 2 e 3 ao mesmo tempo devem ser substituídos pela string "YinYang"

Exemplo: deve retornar "1Yin5YinYang1113Yang" quando passada a array [1,2,5,6,11,13,15]

 */
function yinYang (array) {
    let palavra = ""

    for (let i = 0; i < array.length; i++){
      if(array[i] % 2 == 0 && array[i] % 3 == 0){
        palavra += "YinYang"
      }else if(array[i] % 2 == 0){
        palavra += "Yin"
      }else if(array[i] % 3 == 0){
        palavra += "Yang"
      }else{
        palavra += array[i]
      }
    } 
    return palavra
  }
  console.log("1Yin5YinYang1113Yang")
  console.log(yinYang([1,2,5,6,11,13,15]))
  