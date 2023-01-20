// Metodos são variaçoes dos objetos

// Metodos são ações dos objetos que podem resgatar ou modificar os valores delas, exemplo:

let roboCop = {
    bracos: 2,
    pernas: 2, 
    armas: 2,
    prender: function(){
        console.log('Prender bandidos')
    }
}

console.log(roboCop);
roboCop.prender();