// DESTRUCTURING

// // Podemos criar varias variaveis em uma linha só desestruturando um objeto 


// Cria o Objeto
let pessoa = {
    nome: 'Ricardo',
    idade: 20,
    sexo: 'Homem',
    curso: 'Angular',
    profissao: 'Programador'
}
console.log(pessoa);


// Cria variaveis e adiciona novos valores nela
let idade = 40;
console.log(idade);


// Adiciona estas variaveis ao array de pessoa
({idade} = pessoa);
console.log(idade);



let config = {
    ip: '127.0.0.1',
    port: '80',
    blocked: true
}
let ip = '1.2.3.4';
({ ip } = config)
console.log('ip', ip);