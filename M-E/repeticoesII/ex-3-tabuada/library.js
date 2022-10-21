let numero = document.getElementById('numero')
let p = document.getElementById('p')
function tabuada() {
    for(i = 1 ; i < 11; i++){
        p.innerText = `${i * numero}`
        console.log(i)
    }
}

function limpar() {
   document.getElementById('numero').value=''
}