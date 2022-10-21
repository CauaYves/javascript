let numero = document.getElementById('numero')
let p = document.getElementById('p')

function tabuada(){ 

    for(var i = 0; i < 11; i++){
        p = `1 x ${i} = ${i * numero} <br>`
        console.log (p)
        console.log(numero)
    }

} 
function limpar() {
    document.getElementById('p').innerHTML=''
   document.getElementById('numero').value=''
}