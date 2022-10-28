function adicionarNumero() {
    let inumber = Number(document.getElementById('inumber').value)
    let p = document.getElementById('div')
    let listaNumeros = [`1,2,2,2`]
    if(listaNumeros.indexOf(inumber)){
        alert('ja tem')
    }else{
        p.innerText += `foi adicionado o numero ${inumber} \n`
        listaNumeros += inumber
    } 

    for(let i = 0 ; i < listaNumeros.length ; i++){
        console.log(`${i}`)
    }
}
function limpar() {
    document.getElementById('inumber').value = ""
    document.getElementById('div').innerText = ''
}