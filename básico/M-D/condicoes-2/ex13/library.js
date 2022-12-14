function interagir() {
    const hoje = new Date()
    hoje.getHours()
    hoje.toLocaleString

    let p = document.createElement('p')
    p.setAttribute('id', 'p')
    p.innerHTML = `<p>oque eu recebi do sistema foi <mark style = color: yellow;>${hoje}</mark></p>`
    document.body.appendChild(p)
}