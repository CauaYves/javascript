/* 

Desenvolva uma função que avance os dias da semana, retornando o dia da semana que corresponda a um dia inicial mais a quantidade de dias avançado por um número inteiro. Tanto o dia inicial quanto a quantidade de dias avançados deverão ser passados por parâmetro.

Neste sentido, tanto o parâmetro de dia inicial como o retorno do dia da semana deverão ser String no formato "Sexta-feira", "Quinta-feira", "Sábado"... Validações de formato não são necessárias.

Por exemplo: Os parâmetros passados são "Terça-feira" e 5. A função deverá avançar cinco dias e retornar "Domingo". Ou então como parâmetro é passado "Quarta-feira" e 8. A função deverá avançar oito dias da semana e retornar "Quinta-feira".
*/

function avancarDias(dia, quantidade) {
  let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
  let indiceDia = diasSemana.indexOf(dia);

  let indiceAtualizado = indiceDia + quantidade;
  while (indiceAtualizado >= diasSemana.length) {
    indiceAtualizado -= diasSemana.length;
  }

  return diasSemana[indiceAtualizado];
}
console.log(avancarDias("Segunda-feira", 2))