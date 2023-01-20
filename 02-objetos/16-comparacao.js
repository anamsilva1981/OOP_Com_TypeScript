// PASSANDO REFERÊNCIA DE OBJETO 

// Quando você atribuiu um objeto já criado para uma variavel, você está passando uma referência

// Quando você compara dois objetos do javaScript usando uma referência

function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

let naruto = new Ninja('Naruto','Shirikeen');
console.log(naruto)

let rockLee = new Ninja('Rock Lee','Mãos')
console.log(rockLee)

// Comparando duas instancias
console.log(naruto === rockLee);

let cloneNaruto = naruto;
console.log(cloneNaruto === naruto)
// É verdadeira porque recebe todas as propriedades da instancia