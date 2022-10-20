function tabuada() {
    let numero = Number(document.getElementById('numero'))
    let p = document.getElementById('p')
    for(i = 1 ; i < 11; i++){
        p.innerText = `${i * numero}`
        console.log(i)
    }
}