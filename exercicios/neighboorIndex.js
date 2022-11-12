function solution(inputArray) {
    let nUm = inputArray[0] * inputArray[1]
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] * inputArray[i + 1] > nUm){
            nUm = inputArray[i] * inputArray[i + 1]
        }   
    }
    return nUm
}


console.log(solution([-23, 4, -3, 8, -12])) // -12