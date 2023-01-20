

let carro = {
    tipo: 'suv',
    ligar: function(){
        console.log('Carro ligado')
    },
    parar: function(){
        return 'Carro parou'
    }
}

carro.ligar();
console.log(carro.ligar())

carro.parar();
console.log(carro.parar())


delete carro.ligar
console.log(carro.ligar)
