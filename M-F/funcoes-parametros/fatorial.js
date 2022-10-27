function fatorial(n){
    let fat = 1
    for(let i = n ;i > 1 ; i--){
        fat *= i
    }
    return fat
}
console.log(fatorial(5))