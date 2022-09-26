function verificar() {
    let txtv = document.getElementById('txtvel')
    let container = document.getElementById('cont')
    let vel = Number(txtv.value)
    cont.innerHTML = `<p>sua velocidade é de <strong>${vel}</strong></p>`
    if(vel > 60 ){
        cont.innerHTML += '<P>Você está multado por <strong>exesso de velocidade</strong></P>'
    }
    cont.innerHTML += '<p>Dirija sempre com cinto de segurança</p>'
}