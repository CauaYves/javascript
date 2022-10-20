function contador() { 
    let primeiroNum = Number(document.getElementById('inumprimeiro').value)
    let segundoNum = Number(document.getElementById('inumsegundo').value)
    let p = document.getElementById('p')
    let passo = Number(document.getElementById('ipasso').value)
        while(primeiroNum <= segundoNum){

            if(passo == 0){
                passo = 1
            }

            p.innerText += `${primeiroNum},`
            primeiroNum = primeiroNum + passo
    }
} 
function limpar() {
   window.location.reload(true)
}