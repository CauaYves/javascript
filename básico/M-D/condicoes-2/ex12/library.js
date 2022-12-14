function maiorValor() {
    let primeiroNumero = Number(prompt('Digite um número:'))
    let segundoNumero = Number(prompt('Digite um número:'))
    let res = document.getElementById('res')
    let maiornumero = ''
    if( primeiroNumero < segundoNumero){
         maiornumero = segundoNumero 
    }else{
    maiornumero = primeiroNumero
    }
    res.innerHTML = `<P>Analisando os valores ${primeiroNumero} e ${segundoNumero}, o maior valor é ${maiornumero}</P>`
}