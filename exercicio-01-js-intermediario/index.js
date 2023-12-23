let botao = document.getElementById('trocar-de-cor');

botao.addEventListener('click', () => {
    let mudarCor = document.getElementById('azul');
    mudarCor.classList.remove('azul');
    mudarCor.classList.add('amarelo');
})

//aprendizado: Iniciei da forma correta, mas por não tá familiarizado com a forma da escrita correta da sintaxe 'function', o js apresentava erros.

//aprendi a usar corretamente as funções anonimas, os erros function e escrever codigo de forma reduzida.

//fazendo alguns testes percebi que não é necessário criar uma variável para fazer o código funcionar.