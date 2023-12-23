// 1 passo: fazer verificacao se possui a classe 'azul'
//se não possuir, devemos adicionar essa classe usando método add do classList

//2 passo: após adiconada classe, ele ficará com a cor azul, só que ao clicar novamente deverá retonar a cor original usando o método remove.

const quadrado = document.getElementById('quadrado');

// quadrado.addEventListener ('click', () => {
//     if(quadrado.classList.contains('azul') === false) {
//         quadrado.classList.remove('preto');
//         quadrado.classList.add('azul')
//     } else if (quadrado.classList.contains('azul') === true) {
//         quadrado.classList.remove('azul');
//         quadrado.classList.add('preto');
//     }
// })

//Resolução proposta pelo curso
quadrado.addEventListener ('click', () => {
    const classeAzulExiste = quadrado.classList.contains('azul');

    if (classeAzulExiste) {
        quadrado.classList.remove('azul');
    } else {
        quadrado.classList.add('azul');
    }
})