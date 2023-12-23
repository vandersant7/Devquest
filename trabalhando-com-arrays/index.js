let frutas = ['banana', 'maçã', 'laranja', 'pêra']

// let frutasTamanho = frutas.length

/*
for(let i = 0; i < frutasTamanho; i++){
    console.table('Frutas: ' + frutas[i])
}

*/


// frutas.forEach(function(item, indice, array){
//     console.log('Frutas: ' + item)
// })

// frutas.push('manga')
// console.log(frutas)

frutas.pop() //remove o ultimo elemento do array

frutas.shift() // remove o primeiro elemento dentro da array

frutas.unshift('morango') //insere um novo elemento dentro da array

let posicaoLaranja = frutas.indexOf('laranja') 
console.log(posicaoLaranja)
