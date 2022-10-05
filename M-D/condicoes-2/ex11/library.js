function calcularMedia() {
    var nomeDoAluno = window.prompt('Qual é o nome do aluno?')
    var primeiraNota = Number(window.prompt(`qual foi a primeira nota de ${nomeDoAluno}?`))
    var segundaNota = Number(window.prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nomeDoAluno}`))
    var media = (primeiraNota + segundaNota) / 2

    var p = document.createElement(`p`)
    p.setAttribute (`id`, `foto`)
    p.innerHTML = `<p>Calculando a média final de <mark>${nomeDoAluno}<mark></p> \n <p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark></p> \n <p> A media final será <mark>${media}</mark></p>`

    document.getElementById(`res`).appendChild(p)


    if(media <= 5){
        p.innerHTML += `<p>A mensagem que temos é: <strong style = 'color: red'>Estude um pouco mais</p></strong>`
    }else{
        p.innerHTML += `<p>A mensagem que temos é: <strong style = 'color: red'>Parabéns</strong></p>`
    }a

}