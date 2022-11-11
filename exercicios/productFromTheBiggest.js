function solution(inputArray) {
    let maiorUm = 0
    let maiorDois = 0
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] > maiorUm && inputArray[i] % 3 == 0){
            maiorUm = inputArray[i]
        }
    }
    for (let j = 0; j < inputArray.length; j++){
        if(inputArray[j] > maiorDois && inputArray[j] != maiorUm && inputArray[j] % 3 == 0){
            maiorDois = inputArray[j]
        }
    }
return maiorDois * maiorUm
} 
console.log(solution( [3, 6, -2, -5, 7, 3] )) // 21