let alunos = [{nome: "Ricart", nota:90}]

// Captura de elementos

let nome = document.getElementsByName("name")[0]
let nota = document.getElementsByName("nota")[0]

let conteudo = document.getElementById("content")

let botao = document.getElementById("submit")

// Eventos

function imprimeElementos(){
    console.log(nome.value)
    console.log(nota.value)
}

function adicionaLinhaNaTabela(nome, nota){
    // Criando elementos
    const tr = document.createElement("tr")
        
    const td1 = document.createElement("td")
    td1.classList.add("red")
    // td1.className = "red"
    // td1.setAttribute("class", "red")

    td1.textContent = nome
    const td2 = document.createElement("td")
    td2.textContent = nota

    tr.appendChild(td1)
    tr.appendChild(td2)

    conteudo.appendChild(tr)
}

window.addEventListener("load", () => {
    alunos.map(aluno => {
        adicionaLinhaNaTabela(aluno.nome, aluno.nota)
    })
})

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

     // Invoca função que altera o DOM

     adicionaLinhaNaTabela(nomeAluno, notaAluno)

    // Apagar valores
    nota.value=''
    nome.value=''
}

botao.addEventListener("click", adicionaNota)


// let dialog = document.getElementById('dialog')

// dialog.open = false;

// botao.addEventListener("click", () => dialog.open = !dialog.open)