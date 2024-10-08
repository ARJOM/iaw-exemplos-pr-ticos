// Chico tem 1,50 metro e cresce 2 centímetros por ano, 
// enquanto Zé tem 1,10 metro e cresce 3 centímetros 
// por ano. Construa um algoritmo que calcule e imprima 
// quantos anos serão necessários para que Zé seja maior 
// que Chico.

let c = 150
let z = 110
let anos = 0

while (z<=c){
    c += 2
    z += 3
    anos += 1
}

console.log(`Se passaram ${anos} `)