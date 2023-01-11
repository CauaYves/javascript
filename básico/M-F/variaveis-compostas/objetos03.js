let usuario = {
    id: 18,
    email: 'cauayves5@gmail.com',
    infopessoal: {
        nome: 'Cauã',
        sobrenome: 'Yves',
        endereco: {
            rua: "rua da maçã",
            numero: 105,
            bairro: 'Três Poços',
            cidade: 'Volta Redonda',
        }
    }
}

//console.log(usuario.id, usuario.email, usuario.infopessoal.endereco);

for(let index in usuario){
    console.log(index, usuario[index])
}
