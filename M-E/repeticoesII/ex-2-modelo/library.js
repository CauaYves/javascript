function contador() { 
    let primeiroNum = Number(document.getElementById('inumprimeiro').value)
    let segundoNum = Number(document.getElementById('inumsegundo').value)
    let p = document.getElementById('p')
    let passo = Number(document.getElementById('ipasso').value)   

    if(primeiroNum == 0 || segundoNum == 0 || passo == 0){
        alert('faltam dados')
    }else{
        while(primeiroNum < segundoNum){
        primeiroNum = primeiroNum + passo
        p.innerText += `${primeiroNum } >`
        }
    }
    if (segundoNum < primeiroNum){
        while (primeiroNum > segundoNum) {
            primeiroNum = primeiroNum - passo
            p.innerText += `${primeiroNum} >`
        }
    }
}



function limpar() {
   window.location.reload(true)
}