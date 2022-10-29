function adicionarNumero() {
    let inumber = Number(document.getElementById('inumber').value)
    let p = document.getElementById('div')
    let listaNumeros = []
    
    p.innerText += `foi adicionado o numero ${inumber} \n`
    listaNumeros.push(`${inumber}`)

    for(let i = 0 ; i < 3 ; i++){
        console.log(listaNumeros[i])
    }
}
function limpar() {
    document.getElementById('inumber').value = ""
    document.getElementById('div').innerText = ''
}
