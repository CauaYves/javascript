
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

  function tiraNumeros(string) {
    let numlist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
    for (let i = 0; i < string.length; i++){
        for(let k = 0; k < numlist.length; k++){
            if(string[i] == numlist[k]){
                string = string.replace(string[i], "");
            }
        }
    }
    return string
    }