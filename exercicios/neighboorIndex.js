function solution(inputArray) {
    let nUm = 0

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] * inputArray[i + 1] > nUm){
            nUm = inputArray[i] * inputArray[i + 1]
        }
    }
    return nUm
}

console.log(solution([3, 6, -2, -5, 7, 3]))