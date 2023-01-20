// METODOS


let pessoa = {
    nome: 'Henrique',
    idade: 26,
    profissao: 'Programador',
    hobbies: ['Passear', 'Estudar', 'Comer', 'Tocar Violão'],
    pontuacao: 1,
    estudar(){
        this.pontuacao += 1;
    },
    estudos: function(){
        if(this.pontuacao < 10){
            console.log('Precisa estudar mais');
        }else{
            console.log('Não precisar estudar ')
        }
    }
}

pessoa.estudar();
pessoa.estudar();
console.log(pessoa.pontuacao);
console.log(pessoa.estudos());


// Calculadora com Metodos 

let calc = {
    soma(a,b){
        this.soma = a + b;
    },
    subtracao(a, b){
        this.subtracao = a - b;
    },
    multiplicacao(a, b){
        this.multiplicacao = a * b;
    },
    divisao(a,b){
        this.divisao = a / b;
    }
}

calc.soma(2,5)
console.log(calc.soma)

calc.subtracao(calc.soma, 1)
console.log(calc.subtracao)

calc.multiplicacao(calc.subtracao, 5)
console.log(calc.multiplicacao);

calc.divisao(calc.subtracao, 2)
console.log(calc.divisao);