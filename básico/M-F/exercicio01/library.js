var numero = Number(document.getElementById("inumber").value)
let res = document.querySelector('div#div')
let lista = []

function isNumber(n){
    if(numero >=1 && numero <=100){
        return true
    }else{
        return false
    }
}

function onList(list, n) {
    if(list.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
function adicionarNumero(){
    if(isNumber(numero) && !onList(lista, numero)){
        lista.push(numero)
        res.innerHTML = `valor ${numero} adicionado`
    }else{
        alert('!')
    }

}
function limpar() {
document.querySelector("#inumber").value = ""
document.querySelector('div#div').innerHTML = ''

}
