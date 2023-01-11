let input = document.querySelector("#input")
let valoresSalvos = []
let res = document.querySelector("#res")


function adicionarValor(val) {
    
    valoresSalvos.push(val)
    res.innerText += `valor ${val} adicionado.\n`
    input.value = ""
    input.focus()
}

function validarValor(){

    let valor = Number(input.value)

    for(let i = 0; i < valoresSalvos.length; i++) {
        if(valor == valoresSalvos[i]) {
            alert("numero já existente")
            return
        }
    }
    if(valor <= 0 || valor >= 101){
        alert("digite um valor válido")

    }else{
        adicionarValor(valor)    
    }
}
function finalizar() {
    res.innerHTML = ""

    let maiorNum = valoresSalvos[0]

    for(let i = 0; i < valoresSalvos.length; i++){
        if(valoresSalvos[i] > maiorNum){
            maiorNum = valoresSalvos[i]
        }
    }

    let menorNum = valoresSalvos[0]

    for(let i = 0; i < valoresSalvos.length; i++){
        
    }

    let p = document.createElement("p")
    p.innerText += `o maior valor é ${maiorNum} \n`
    final.appendChild(p)

}



