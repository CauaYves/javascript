function gerar() {
    let min = 1
    let max = 100

    let dif = min - max
    let aleatorio = Math.random()
    
    let num = ((min*2) + Math.trunc(aleatorio * dif)) * -1

    var p = document.createElement('p')
    p.innerHTML = `numero gerado foi ${num}`
    document.body.appendChild(p)

}

function limpar(){
    window.location.reload()
    document.body.append()
}