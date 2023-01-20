// DESTRUCTURING E REST OPERATION

// Passamos o conteudo do array para as variaveis que desejamos, e os demais itens do array será inserindo para a variável seguida de ...

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'preto', 'amarelo', 'Cinza'];
// console.log(array)

let [a, b, c, d,  ...e] = array
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

