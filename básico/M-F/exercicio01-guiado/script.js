var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

// adição dos elementos. Recebe um número e uma lista, cada um com parâmetros distintos
function isNumber(n) { // recebe um parâmetro
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l) { // recebe dois parâmetros
    if (l.indexOf(Number(n)) != -1) { // o -1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}
// ! significa "não" para o javascript
function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)) { // só vai adicionar se for um número (isNumber) e só vai adicionar se estiver na lista (inList)
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')   
    }
    num.value = '' // limpa o campo dos números
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média entre os valores foi de ${media.toFixed(2)}.`
    }
}