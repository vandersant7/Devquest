// let valorBoleto = 100

// console.log(valorBoleto)

let inputTelefone = document.getElementById('telefone')

console.log(inputTelefone)

inputTelefone.disabled = true

function habilitarTelefone() {
    document
        .getElementById('telefone')
        .disabled = false
}