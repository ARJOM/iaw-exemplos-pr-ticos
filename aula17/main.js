const formularioRegistro = document.getElementById("registro")
const inputBusca = document.getElementById("pesquisa")
const conteudoTabela = document.getElementById("conteudo")

let produtos = []
if (window.localStorage){
    produtos = getLocalStorage("produtos")
}

window.addEventListener("load", (() => {
    produtos.forEach((produto) => {
        let linha = criaLinha(produto.nome, produto.preco, produto.quantidade)
        conteudoTabela.appendChild(linha)
    })
}))


function criaLinha(nome, preco, quantidade){
    const linha = document.createElement("tr");
    const colunaNome = document.createElement("td");
    colunaNome.textContent = nome
    const colunaPreco = document.createElement("td");
    colunaPreco.textContent = preco
    const colunaQuantidade = document.createElement("td");
    colunaQuantidade.textContent = quantidade

    linha.appendChild(colunaNome)
    linha.appendChild(colunaPreco)
    linha.appendChild(colunaQuantidade)

    return linha
}


formularioRegistro.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nome = document.getElementById("productName")
    let valorNome = nome.value
    let preco = document.getElementById("productPrice")
    let valorPreco = preco.value
    let quantidade = document.getElementById("productQuantity")
    let valorQuantidade = quantidade.value

    produtos.push({
        nome: valorNome,
        preco: valorPreco,
        quantidade: valorQuantidade
    })
    setLocalStorage('produtos', produtos)
    
    let linha = criaLinha(valorNome, valorPreco, valorQuantidade)
    conteudoTabela.appendChild(linha)

    nome.value = ""
    preco.value = ""
    quantidade.value = ""

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

function setLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor))
}

function getLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave))
}
