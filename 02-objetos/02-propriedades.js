let carro = {
    marca: 'Ford',
    modelo: 'Kd',
    portas: 5,
    cor: 'Vermelho',
}

// Mostrando o objeto com todas as propriedades
console.log(carro);

// Mostrando a propriedade do objeto 
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.portas);
console.log(carro.cor);

// Misturando lógica de JavaScript com a propriedade do objeto
if(carro.portas > 4 ){
    console.log('O carro tem mais de 4 portas')
}

// Criando variavel para receber a propriedade do objeto e utilizar outra propriedade do javascript para executar uma funcao, neste caso , contas a qtde de letras
let nomeCarro = carro.cor;
console.log(`A quantidade de letras na cor são ${nomeCarro.length}`)


