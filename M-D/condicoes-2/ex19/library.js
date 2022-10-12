function estacao() {
    let mesAtual = prompt('em qual mês estamos?').toLowerCase()
    let p = document.getElementById('p')
    
    if(mesAtual == 'janeiro' || mesAtual == 'fevereiro' || mesAtual == 'dezembro'){
         p.innerHTML = 'Verão'
    }else if(mesAtual == 'março' || mesAtual == 'abril' || mesAtual == 'maio'){ 
        p.innerHTML = 'outono'
    }else if(mesAtual == 'junho' || mesAtual == `julho` || mesAtual == `agosto`){
        p.innerHTML = 'inverno'
    }else if(mesAtual == 'setembro' || mesAtual == `outubro` || mesAtual == `novembro`){
        p.innerHTML = 'primavera'
    }else{
        alert('usa o negocio direito seu #$@% 😡')
    }
    
} 