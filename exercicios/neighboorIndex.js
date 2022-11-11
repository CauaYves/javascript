function solution(inputArray) {
    let i = 0

    while(i < inputArray.length){
        if(inputArray[i] == i + 1){
            return inputArray[i] * i + 1
        }else{
            i++
        }
    }
}
console.log(solution([3, 6, -2, -5, 7, 3]))