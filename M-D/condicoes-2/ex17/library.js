let num = Math.random() * 100
let numeroInteiro = Math.trunc(num)
console.log(numeroInteiro)
function jogo() {
    let numRecebido = prompt('qual número eu pensei?')
    let p = document.createElement('p')
 
    if(numRecebido < numeroInteiro){
        let numMaior = prompt('talvez um numero maior..')
        p.innerText = `esta entre ${numRecebido} e ${numeroInteiro + 5}`
        document.body.appendChild(p)
    }else if(numRecebido > numeroInteiro){
        alert('talvez um numero menor..')
        p.innerText = `esta entre ${numRecebido} e 1`
    }else{
        p.innerText = 'parabens, acertou'
    }
    document.body.appendChild(p)
}