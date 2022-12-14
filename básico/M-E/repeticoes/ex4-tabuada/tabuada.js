function tabuada() {
    let inputNumero = document.getElementById('inum').value
    let p = document.createElement('p')
    p = `tabuada do ${inputNumero} <br>`
    let i = 0
    while (i <= 10){
        p += p.innerHTML = `${inputNumero} x ${i} = ${inputNumero * i} <br>`
        i++
    }
    let div = document.getElementById('div')
    div.innerHTML = `${p}`
}