// PASSANDO REFERÊNCIA DE OBJETO 

// Quando você atribuiu um objeto já criado para uma variavel, você está passando uma referência


let padaria = {
    pao: 5,
}

console.log(padaria.pao)

let confeitaria = padaria;
console.log(confeitaria.pao)

confeitaria.pao = 10;
console.log(confeitaria.pao)
console.log(padaria.pao)