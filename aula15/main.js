let alunos = []

// Captura de elementos

let nome = document.getElementsByName("name")[0]
let nota = document.getElementsByName("nota")[0]

let botao = document.getElementById("submit")

// Eventos

function imprimeElementos(){
    console.log(nome.value)
    console.log(nota.value)
}

botao.addEventListener("click", imprimeElementos)

// Escrita de elementos
function adicionaNota(){
    // Receber valores
    let nomeAluno = nome.value
    let notaAluno = nota.value
    // Criar elementos
    alunos.push({
        nome: nomeAluno,
        nota: notaAluno
    })

    // Apagar valores
    nota.value=''
    nome.value=''
}

botao.addEventListener("click", adicionaNota)