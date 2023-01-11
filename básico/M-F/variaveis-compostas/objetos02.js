let conta = {
    agencia: '0000',
    banco: {
        cod:112,
        id: 4,
        nome: 'thisbank',
    },
}
    let infoDoBanco = 'banco'

    console.log(conta[infoDoBanco])
    console.log(conta[infoDoBanco]['nome'])

    console.log(conta.agencia)
    console.log(conta.banco.cod)
    console.log(conta.banco.id)