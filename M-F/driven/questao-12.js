/*

É Número Driven
Um número é chamado “Número Driven” se ele pode ser escrito na forma 3^n - 1 (3 elevado a n menos 1), com n sendo um número natural (1, 2, 3, …). Implemente a função ao lado que recebe um valor como parâmetro e retorna a mensagem “É desse tipo”, caso o número passado seja um Número Driven, ou “Não é desse tipo” caso contrário.

Exemplo: caso o valor seja 8 (3^2 - 1), a função deve retornar "É desse tipo"

Exemplo: caso o número passado seja 80, temos que 80 é a mesma coisa que 3^4-1, logo ele pode ser escrito no formato acima fazendo n=4. Portanto, a função deve retornar “É desse tipo”.

Exemplo: caso o número seja 5, por outro lado, não é um "Número Driven", pois se n for 1, temos que 3^1-1=2 e se n for 2, temos que 3^2-1=8, ou seja, não existe um valor natural de n que faça 3^n-1 chegar em 5. A função deve retornar, então “Não é desse tipo”.

*/