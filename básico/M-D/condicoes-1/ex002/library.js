function verificarNacionalidade() {
    let nacionalidade = document.getElementById('nacionalidade')
    let resposta = document.getElementById('resposta')

    if (nacionalidade.value === `brasil`){
        resposta.innerHTML += '<p>você não é estrangeiro, pode passar :D</p>'
    }else{
        resposta.innerHTML += '<p>stop right there stranger!</p>'
    }
    console.log(nacionalidade)
}