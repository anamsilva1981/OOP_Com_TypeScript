//  O OPERADOR INSTANCEOF

// Uma forma de saber de qual instancia (pai) vem algum objeto 

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

console.log(ricardo.constructor)

console.log(ricardo instanceof Aluno)
console.log(ricardo instanceof Object)

function Carro(cor, marca){
    this.cor = cor;
    this.marca = marca;
}


let honda = new Carro('azul', 'Civic')
console.log(honda)

console.log(honda instanceof Carro)