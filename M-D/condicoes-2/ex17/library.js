function jogo() {
    let num = Math.random() * 100
    let numeroInteiro = Math.trunc(num)

    let numRecebido = prompt('qual número eu pensei?')

    let p = document.createElement('p')
 
    if(numeroInteiro === numRecebido){''
        p.innerHTML ='<p><strong>parabens acertou</strong></p>' 
    }else if (numeroInteiro > numRecebido){
        p.innerHTML = '<p><strong>tente um numero maior</strong></p>'
    }else{
        p.innerHTML = '<p><strong>tente um numero menor</strong><p>'
    }
    document.body.appendChild(p)
    console.log(numRecebido,numeroInteiro)
}