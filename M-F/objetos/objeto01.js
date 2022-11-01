let amigo = {
    nome: 'Yves',
    sexo: 'M',
    peso: 71.8,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
    }

    amigo.engordar(2)
    console.log(amigo.peso)