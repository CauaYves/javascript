function adicionarNumero() {
    let inumber = Number(document.getElementById('inumber').value)
    let p = document.getElementById('div')
    const listaNumeros = []
    
    listaNumeros.push(inumber)
    p.innerText += `valor ${inumber} adicionado\n`

    for(let i = 0 ; i < 10 ; i++){
        console.log(listaNumeros[i])
    }
    console.log(listaNumeros)
    alert(listaNumeros.length)
    document.getElementById('inumber').value = ""
}
function limpar() {
    document.getElementById('inumber').value = ""
    document.getElementById('div').innerText = ''
}
