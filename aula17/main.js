const formularioRegistro = document.getElementById("registro")
const inputBusca = document.getElementById("pesquisa")
const conteudoTabela = document.getElementById("conteudo")

let produtos = []
if (window.localStorage){
    produtos = getLocalStorage("produtos")
}

window.addEventListener("load", (() => {
    produtos.forEach((produto, idx) => {
        let linha = criaLinha(produto.nome, produto.preco, produto.quantidade, idx)
        conteudoTabela.appendChild(linha)
    })
}))


function criaLinha(nome, preco, quantidade, indice){
    const linha = document.createElement("tr");
    const colunaNome = document.createElement("td");
    colunaNome.textContent = nome
    const colunaPreco = document.createElement("td");
    colunaPreco.textContent = preco
    const colunaQuantidade = document.createElement("td");
    colunaQuantidade.textContent = quantidade
    
    const colunaAcoes = document.createElement("td");
    const buttonEditar = document.createElement("button")
    buttonEditar.textContent = "Editar"
    buttonEditar.addEventListener("click", () => {
        patchValues(indice)
        setLocalStorage("produto", indice+1)
    })
    colunaAcoes.appendChild(buttonEditar)

    const buttonRemover = document.createElement("button")
    buttonRemover.textContent = "Remover"
    buttonRemover.addEventListener("click", () => {
        removeProduct(indice)
    })
    colunaAcoes.appendChild(buttonRemover)

    linha.appendChild(colunaNome)
    linha.appendChild(colunaPreco)
    linha.appendChild(colunaQuantidade)
    linha.appendChild(colunaAcoes)

    return linha
}


formularioRegistro.addEventListener("submit", (e)=>{
    let nome = document.getElementById("productName")
    let valorNome = nome.value
    let preco = document.getElementById("productPrice")
    let valorPreco = preco.value
    let quantidade = document.getElementById("productQuantity")
    let valorQuantidade = quantidade.value

    const produtoObj = {
        nome: valorNome,
        preco: valorPreco,
        quantidade: valorQuantidade
    }

    const indiceProduto = getLocalStorage("produto")

    if (indiceProduto){
        produtos[indiceProduto-1] = produtoObj
        setLocalStorage("produto", null)
    } else {
        produtos.push(produtoObj)
    }
    
    setLocalStorage('produtos', produtos)
})

inputBusca.addEventListener("input", () => {
        let busca = inputBusca.value
        conteudoTabela.childNodes.forEach(item => {
            if (!item.firstChild.textContent.toLowerCase().includes(busca.toLowerCase())){
                item.classList.add("hide")
            } else {
                item.classList.remove("hide")
            }
            
        })
})  

function patchValues(indice){
    const produto = produtos[indice]
    
    let nome = document.getElementById("productName")
    nome.value = produto.nome
    let preco = document.getElementById("productPrice")
    preco.value = produto.preco
    let quantidade = document.getElementById("productQuantity")
    quantidade.value = produto.quantidade
}

function removeProduct(indice){
    const confirm = window.confirm("Tem certeza que quer remover?")
    if (confirm){
        produtos = produtos.slice(0, indice).concat(produtos.slice(indice+1))
        setLocalStorage("produtos", produtos)
        window.location.reload()
    }
}

function setLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor))
}

function getLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave))
}
