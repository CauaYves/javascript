function Celular (bateria, marca, tamanho) { //função de construtor começa com Pascal Case, e as propriedades devem ser passadas como parametros da função
    this.bateria = bateria,  //Usamos o this. para refenciar objetos dentro da função de construtor
    this.marca = marca,
    this.tamanho = tamanho,
    this.ligar = function(){ //usamos o this. para colocar funções dentro de uma função construtor
        console.log("fazendo ligação...")
    }
}
const celular = new Celular(3200, "asus", 12) //aqui criamos o objeto usando a função para construir
console.log(celular)