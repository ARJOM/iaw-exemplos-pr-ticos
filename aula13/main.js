// Equivale ao print
console.log("Olá mundo")


// Exemplo de variável
let numero = 13
let outroNumero = 3.1415

let palavra = "Opa"

let booleano = true
let booleanoFalsy = false

// Formatação de string
let nome = "Ricart"
let frase = `Olá ${nome}, como vai?`
console.log(frase)

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


// Arrays

let array = []
console.log(array)

let arrayPreenchido = [1, 'String', true, NaN, '']
console.log(arrayPreenchido)

array.push("Palavra")
array.push("Cantada")
console.log(array)

arrayPreenchido.pop()
console.log(arrayPreenchido)

console.log(arrayPreenchido[1])

// Métodos de arrays
for (let item of arrayPreenchido){
    console.log(item)
}

arrayPreenchido.forEach(item => {
    console.log(item, "!")
})

function showData (item){
    console.log(item, "!!!")
}

arrayPreenchido.forEach(showData)