// let jogo1 = {
//     nome: 'Final fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Evandro',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido)