// Faça um programa que gera uma lista dos números
// perfeitos existentes entre dois números 
// inteiros a e b. Exemplo: 6 (1+ 2 + 3)

let lista = []
let a = 25
let b = 10000

for (let i = a; i <= b; i++){
    let n = 0;
    for (let j = 1; j<i;j++){
        if (i%j==0){
            n += j
        }
    }
    if(n==i){
        lista.push(i)
    }
}

console.log(lista)