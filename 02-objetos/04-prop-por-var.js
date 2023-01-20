
// PROPRIEDADE POR VARIAVEL 

// Definir uma propriedade em uma variavel e acessá-la

let computador = {
    placa: 'Asus',
    memoria: '8GB',
    hd: '160GB',
    montada: false,
    perifericos: ['Teclado','Mouse','Caixa de Som','WebCam']
}


let a = computador.placa;
console.log(a);

// Encapsular a propriedade em uma variavel para economizar letras
const b = 'placa';
console.log(computador[b]);