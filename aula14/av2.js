// Faça um programa que gera uma lista dos números
// primos existentes entre dois números inteiros 
// a e b

let lista = []
let a = 25
let b = 254

for(let i = a; i <= b; i++){
    let isPrime = true
    for(let j = 2; j <= i/2 ; j++){
        if (i%j==0){
            isPrime = false
            break;
        }
    }
    if (isPrime){
        lista.push(i)
    }
}

console.log(lista)