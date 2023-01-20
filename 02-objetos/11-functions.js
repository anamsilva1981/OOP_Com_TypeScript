// FUNÇÕES QUE RETORNAM OBJETO 
// Parecida com as constructor functions, porem nao precisamos utilizar o NEW
// Objeto é criado dentro da função


// Exemplo utilizando cunstructor function



// function Aluno(nome, curso){
//     this.nome = nome;
//     this.curso = curso;
//     this.estudar = function(){
//         console.log(`O aluno ${this.nome} está estudando ${this.curso}`)
//     }
// }

// let henrique = new Aluno('Henrique', 'JavaScript')

// henrique.estudar();



// Exemplo sem o constructor function
function Aluno(nome, curso, estudar){
    return {
        nome: nome,
        curso: curso,
        imprimir: function(){
            console.log('O ' + nome + ' está cursando ' + curso)
        },
        estudar: this.estudar,
        estudando: function(){
            if(estudar == true){
                console.log('Está estudando agora')
            }else{
                console.log('Ele não está estudando')
            }
        },
    }

}

let ricardo = Aluno('Ricardo','HTML', true);

ricardo.imprimir();
ricardo.estudando();