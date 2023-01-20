// OBJETO DENTRO DE OBJETOS

// Como o objeto é um tipo de dado, podemos ter um objeto dentro de outro objeto 

let pessoa = {
    nome: 'Henrique',
    idade: 26,
    profissao: 'Programador',
    hobbies: {
        sky: false,
        assistir: true,
        pescar: 'pesca de lago'
    },
    estudos: {
        linguagens: ['JavaScript','TeypScript','Angular']
    }
    
}

console.log(pessoa.hobbies.sky)
console.log(pessoa.hobbies.assistir)
console.log(pessoa.hobbies.pescar)
console.log(pessoa.estudos.linguagens[2])

// Adicionando propriedades a objetos existentes
pessoa.ferias = false;
console.log(pessoa);

// Adicionando funções a objetos existentes
pessoa.amigos = function(){
    console.log('Sem amigos')
}
pessoa.amigos();
