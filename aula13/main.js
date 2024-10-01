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


// Constantes

const NUMERO = 13
console.log(NUMERO)
// NUMERO = 17
// console.log(NUMERO)

// Funções e métodos

// def nome_funcao():
//     return "Olá"
function nomeFuncao(){
    return "Olá"
}
console.log(nomeFuncao())

const nomeFuncao2 = () => {
    return "Olá 2"
}

console.log(nomeFuncao2())


function some(a, b){
    return a+b
}

console.log("Soma:", some(1, 2))

const values = [10,2]

function multiplicaPorFator(valores, divisor=1){
    valores.push((valores[0]* valores[1])/divisor)
}
multiplicaPorFator(values)
console.log("Fator resulta em:", values[2])
multiplicaPorFator(values, 3)
console.log("Fator resulta em:", values[3])

function primo(numero){
    if (numero <= 1){
        return false
    }
    let n = 2
    while (n <= numero/2){
        if(numero%n == 0){
            return false
        }
        n+=1
    }
    return true
}


console.log("2 é primo?", primo(2))
console.log("1 é primo?", primo(1))
console.log("1 é primo?", primo(1))
console.log("4 é primo?", primo(4))
console.log("5 é primo?", primo(5))
console.log("17 é primo?", primo(17))


// Métodos de arrays
for (let item of arrayPreenchido){
    console.log(item)
}

for (let key in {"nome": "Ricart", "idade": 24}){
    console.log(key)
}

arrayPreenchido.forEach(item => {
    console.log(item, "!")
})

function showData (item){
    console.log(item, "!!!")
}

arrayPreenchido.forEach(showData)