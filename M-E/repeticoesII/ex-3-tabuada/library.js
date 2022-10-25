function tabuada(){ 
    let num = Number(document.getElementById('numero').value)
    let p = document.getElementById('p')
    limpar()
    for(var i = 0; i < 11; i++){

        p.innerHTML += `${num} x ${i} = ${i * num} <br>`
        console.log(p)
    }

} 
function limpar() {
    document.getElementById('p').innerHTML=''
   document.getElementById('numero').value=''
}