function contaLetras(string, letra) {
    let quantidade = 0;
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letra) {
        quantidade++;
      }
    }
  
    return quantidade;
  }
  contaLetras('carro', 'r')
  console.log(quantidade)

  function trocaVogais(string) {

    let stringvogal= ''
  
    let a = 'a'
    let e = 'e'
    let i = 'i'
    let o = 'o'
    let u = 'u'
  
    for (let i = 0; i < string.length; i++){
      if (string[i] === a || string[i] === e || string[i] === i || string[i] === o || string[i] === u) {
        stringvogal = 1
      }else{
        stringvogal = string[i]
      }
    }
    console.log(stringvogal)
    return stringvogal

  }