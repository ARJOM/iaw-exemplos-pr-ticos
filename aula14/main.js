// Escreva um programa que receba um numero, um fator e o numero de elementos da PA que devem ser exibidos
let numero = 14
let fator = 3
let numeroElementos = 7

for (let i = 0; i<numeroElementos; i+=1){
    console.log(numero)
    numero += fator
}
// Operadores lógicos
let bool = true && true // and
bool = true || false  // or
bool = !false // not

// Modifique o programa acima para exibir apenas 
// os números ímpares da PA que não sejam 
// divisíveis por 5. Caso o numero e o fator sejam
// pares, deve ser exibido uma mensagem de erro

numero = 14
fator = 2
numeroElementos = 7

if (numero%2==0 && fator%2==0){
    console.log("Erro")
} else {
    while (numeroElementos > 0){
        if (numero%2!=0 && numero%5!=0){
            console.log(numero)
            numeroElementos -= 1
        }
        numero += fator
    }
}   