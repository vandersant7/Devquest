'use strict'
//console.log(this)
// console.log(window === this)

// this.name = "Evandro"
// function saudar(){
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Evandro',
//     saudar: function () {
//         console.log('this no contexto do metodo', this)

//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

    comida.cozinhar = function (temperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento;
    }

    console.log(comida)

    comida.cozinhar(100)

    console.log(comida)

    // Quando utilizamos o this sem o uso da sintaxe '.' dentro do escopo global, nós estamos rastreando todos os elementos inseridos no escopo global. Como no exemplo acima, o console.log(this) apenas na janela é igual a window. 
    // Dentro do escopo de alguma função, o this sem o uso da sintaxe '.' pega toda a propriedade da função, quando acompanhada da sintaxe '.', estamos dizendo que queremos pegar uma propriedade específica.