// DESTRUCTURING

// Podemos criar varias variaveis em uma linha só desestruturando um objeto 

let pessoa = {
    nome: 'Ricardo',
    idade: 20,
    sexo: 'Homem',
    curso: 'Angular',
    profissao: 'Programador',
}

console.log(pessoa);

let {nome, idade, sexo, curso, profissao } = pessoa

console.log(nome)
console.log(idade)
console.log(sexo)
console.log(curso)