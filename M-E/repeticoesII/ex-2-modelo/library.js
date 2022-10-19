function contador() { 
    let primeiroNum = Number(document.getElementById('inumprimeiro').value)
    let segundoNum = Number(document.getElementById('inumsegundo').value)
    let res = document.getElementById('res')
    let passo = Number(document.getElementById('ipasso').value)
        while(primeiroNum <= segundoNum){
            res.innerText += `${primeiroNum %2},`
            primeiroNum++
    }

} 