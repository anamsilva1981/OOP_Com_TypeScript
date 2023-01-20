// Tipos de dados

// Criar objeto com várias propriedades dentro 
let computador = {
    placa: 'Asus',
    memoria: '8GB',
    hd: '160GB',
    montada: false,
    perifericos: ['Teclado','Mouse','Caixa de Som','WebCam']
}

// Imprimindo todas as propriedades do objeto
console.log(computador);
console.log(computador.placa);
console.log(computador.memoria);
console.log(computador.hd);
console.log(computador.perifericos);
console.log(computador.perifericos[2]);
console.log(computador.montada);


// Vai acessar todos as propriedades de perifericos e enquanto i for menor do que a quantidade, vai imprimir todos 
for(let i = 0; i < computador.perifericos.length; i++){
    console.log(computador.perifericos[i])
}


if(computador.montada == false){
    console.log( 'Maquina não vai montada')
}

// Criar um if informando se a maquina vai montada