// Propriedade Constructor

// Permite visualizar como o objeto foi criado 

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