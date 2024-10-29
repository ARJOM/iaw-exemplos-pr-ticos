// Strings

let exemplo = "arara"

console.log(exemplo)

let exemplo2 = `O Exemplo anterior foi "${exemplo}"`

console.log(exemplo2)

// Funções de strings

exemplo2 = exemplo2.toUpperCase()
console.log(exemplo2)
exemplo2 = exemplo2.toLowerCase()
console.log(exemplo2)

console.log(exemplo2.includes(" Exemplo".toLowerCase()))

let frutas = ["banana", "maçã", "uva"]
console.log(frutas.includes("uva"))

console.log(exemplo2[2])

console.log(exemplo2.charAt(2))

let separados = exemplo2.split("a")
console.log(separados)

let exemploInvertido = ""
for(let letra of exemplo){
    exemploInvertido = letra + exemploInvertido
}

console.log(exemploInvertido)

let ehPalindromo = exemplo == exemploInvertido ? "É palíndromo" : "Não é palíndromo"
console.log(ehPalindromo)

let letras = exemplo.slice(0, 1) + exemplo.slice(2)
console.log(letras)

console.log(frutas.reduce((item, prev) => item+prev))