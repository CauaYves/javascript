/* 
Implemente a função ao lado que recebe como parãmetro 2 números, o valor da parcela e a quantidade de parcelas, e retorna "Vou comprar" ou "Não vou comprar" de acordo com a seguinte regra:

-Valores acima de 1000 e apenas no caso em que se tem 10 ou mais parcelas sempre se compra
-Valores acima de 500 e com 5 ou mais parcelas, também, sempre se compra
-Valores menores ou iguais a 500 sempre se compra
-qualquer outra situação, nunca se compra

Exemplo: deve retornar "Vou comprar" quando passados
preco = 1200 e parcela = 10

Exemplo: deve retornar "Vou comprar" quando passados
preco = 700 e parcela = 6

Exemplo: deve retornar "Vou comprar" quando passados
preco = 400 e parcela = 3

Exemplo: deve retornar "Não vou comprar" quando passados
preco = 1200 e parcela = 6

*/
function decidirCompra (preco, parcelas) {
    if(preco > 1000 && parcelas >= 10){ 
    return "Vou comprar"
  }else if( preco > 500 && parcelas >= 5){
    return "Vou comprar"
  }else if(preco <= 500){ 
    return "Vou comprar"
  }else{
    return "Não vou comprar"
  }
  }  
  console.log(decidirCompra(1200, 0))