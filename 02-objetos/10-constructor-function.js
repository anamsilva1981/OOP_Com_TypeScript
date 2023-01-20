// CONSTUCTOR FUNCTIONS

// Outra forma de curar objeto é pela constructor function
// Uma grande vantagem, é que este metodo aceita oarametros para o obj



function Aluno(nome, curso){
    this.nome = nome;
    this.curso = curso;
    this.estudar = function(){
        console.log(`O aluno ${this.nome} está estudando ${this.curso}`)
    }
}

let henrique = new Aluno('Henrique', 'JavaScript')

henrique.estudar();
