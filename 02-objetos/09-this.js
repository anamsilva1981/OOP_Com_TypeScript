// Utilizando THIS no objeto

let aluno = {
    nome: 'Henrique',
    profissao: 'Programador',
    estadoCivil: 'solteiro',
    curso: 'frontend',
    linguagens: ['JavaScript','HTML','CSS',],
    estudar(){
        console.log(`O aluno ${this.nome} está estudando`)
    },
    falar(){
        console.log(' Olá sou  ' + this.nome + ' e estudo ' + this.curso)
    }

}

// console.log('O aluno' + this.nome + 'Estuda' + aluno.linguagens)

aluno.falar();
console.log(aluno)
aluno.estudar();