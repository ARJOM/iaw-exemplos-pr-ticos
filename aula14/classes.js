class Aluno{

    #nome;
    #matricula;

    constructor(nome, matricula){
        this.#nome = nome;
        this.#matricula = matricula
    }

    formata() {
        return `${this.matricula} - ${this.nome}`
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }
}


let aluno = new Aluno("Ricart", 1)
aluno.nome = "antônio ricart"
console.log(aluno.nome)



let estudante = {
    nome: "Antônio",
    matricula: 2,
}