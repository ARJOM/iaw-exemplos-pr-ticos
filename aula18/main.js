let div = document.getElementById("anchor")

let passos = [{text: "Primeira parte", proximos: [1]}, {text: "Segunda parte"}]

let parametros = new URL(window.location.href).searchParams

div.textContent = passos[parametros.get("q")||0].text
let link = document.createElement("a")
link.textContent = passos[parametros.get("q")||0].proximos[0]
link.href = `?q=${passos[parametros.get("q")||0].proximos[0]}`
div.appendChild(link)