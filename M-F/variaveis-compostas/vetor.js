let valores = [1, 4, 5, 9, 8]

for(let pos = 0 ; pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
} 
for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}