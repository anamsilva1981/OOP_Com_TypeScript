// OBJECTS LITERALS 2

// Permite criar metodos dentro de funções de forma mais reduzida

let nome = 'Ricardo';
let idade = 20;
let sexo = 'Homem';
let curso = 'Angular';
let profissao = 'Programador';

let pessoa = {
    nome, 
    idade,
    sexo,
    curso,
    profissao,
    estudo(){
        console.log('Estudando')
    },
    estudar: function(){
        console.log('Estudar mais ainda')
    }
}

console.log(pessoa)
pessoa.estudo();
pessoa.estudar();