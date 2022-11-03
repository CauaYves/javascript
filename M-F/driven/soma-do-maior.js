/*    
Soma Dos Maiores
Implemente a função ao lado que recebe 3 números e retorna a soma dos 2 maiores
Exemplo:
Se forem passados num1=2, num2=5 e num3=1, a função deve retornar 7, pois num1 e num2 são os 2 maiores valores que somados dão 7.
Observação:
Todos os valores serão distintos entre si, ou seja, não ocorrerá algo como num1=2, num2=2.
*/
function SomaDosMaiores(num1, num2, num3) {

    if(num1 < num2 && num1 < num3) {
        return num2 + num3
    }else if(num2 < num1 && num2 < num3){
        return num1 + num3
    }else if( num3 < num2 && num3 < num1){
        return num2 + num1
    }
}
console.log(SomaDosMaiores(0, 5, 6))




