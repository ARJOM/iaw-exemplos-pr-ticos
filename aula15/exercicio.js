let elementoInicial = document.getElementById("numeroInicial")
let elementoFinal = document.getElementById("numeroFinal")
let button = document.getElementById("submit")

function calculaNumerosPerfeitos(){
    let lista = []
    let a = elementoInicial.value
    let b = elementoFinal.value

    a = parseInt(a)
    b = parseInt(b)

    for (let i = a; i <= b; i++){
        let n = 0;
        for (let j = 1; j<i;j++){
            if (i%j==0){
                n += j
            }
        }
        if(n==i){
            lista.push(i)
        }
    }
    
    console.log(lista)
}

button.addEventListener("click", calculaNumerosPerfeitos)
