function acoes() {
    let primeiroValor = Number(prompt('primeiro valor:'))
    let segundoValor = Number(prompt('segundo valor:'))
    let acao = Number(prompt(`Valores informados: ${primeiroValor} e ${segundoValor}. \n Oque vamos fazer? \n [1] Somar \n[2] subtrair \n [3] multiplicar \n [4] dividir`))
    let p = document.createElement('p')
    switch (acao) {
        case 1:

            let p = document.getElementById(`p`)
            p.innerHTML = `fazendo a soma entre ${primeiroValor} e ${segundoValor} é ${primeiroValor + segundoValor}`

        break

        case 2:
            function subtracao (primeiroValor, segundoValor){
                let subtracao = primeiroValor - segundoValor
                 p.innerText = `${subtracao}`
            }
            subtracao(primeiroValor, segundoValor)
        break

        case 3:
            function multiplicacao (primeiroValor, segundoValor) {
                let produto = primeiroValor * segundoValor
         p.innerText = `${produto}`
            }
            multiplicacao(primeiroValor, segundoValor)
        break
        
        case 4:
            function divisao(primeiroValor,segundoValor){
                let quociente = primeiroValor / segundoValor
                 p.innerText = `${quociente}`
            }
            divisao(primeiroValor, segundoValor)
        break   

        default:
            console.log(`!`)
    }
    document.body.appendChild(p)
}