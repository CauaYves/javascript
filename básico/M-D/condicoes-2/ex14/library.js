
function analisar (){
    let p = document.createElement(`p`)
    p.setAttribute(`id`, `p`)
    document.getElementById(`p`)
    

    let dateObj = new Date()

    let month = dateObj.getUTCMonth() + 1 //months from 1-12
    let day = dateObj.getUTCDate()
    let year = dateObj.getUTCFullYear()
    let minutes = dateObj.getMinutes()
    let seconds = dateObj.getSeconds()
    let miliseconds = dateObj.getMilliseconds()
    

    p.innerHTML = `${miliseconds} milisegundos<br> ${seconds} segundos <br> ${minutes} minutos <br> ${year} ano atual <br> ${month} mês atual<br> ${day} dia de hoje`

    document.body.appendChild(p)
}