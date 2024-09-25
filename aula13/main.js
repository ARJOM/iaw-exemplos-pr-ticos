// Equivale ao print
console.log("Olá mundo")


// Exemplo de variável
let numero = 13
let outroNumero = 3.1415

let palavra = "Opa"

let booleano = true
let booleanoFalsy = false

// Exemplo de desvio condicional if
let idade = 17
if (idade >=80){
console.log("Idoso")
} else if (idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}


// Exemplo de desvio condicional switch
let variavelDeControle = 3

switch(variavelDeControle){
    case 1:
        console.log("1")
        break 
    case 2:
        console.log("2")
        console.log("!")
        break
    default:
        console.log("Nenhum")
}

// Laços de repetição for
for (let i =0; i<=3; i+=1){
    console.log("Volta número", i)
}


let a = 5
while (a<5){
    console.log("Valor", a)
    a+=2
}

do {
    console.log("Do Valor", a)
} while (a<5)



