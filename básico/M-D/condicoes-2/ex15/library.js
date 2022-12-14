function calcularIdade() {
    let anoDeNascimento = Number(prompt('Em que ano você nasceu?'))

    let agora = new Date()
    let anoAtual = agora.getFullYear()

    let idade =anoAtual - anoDeNascimento 

    var p = document.createElement('p')
    p.innerText = `Quem nasceu em ${anoDeNascimento} vai completar ${idade} anos em ${anoAtual}`

    document.body.appendChild(p)
}