const botaoAvancar = document.querySelector('.botao-avancar');
const imagensCarrossel = document.querySelectorAll('.imagem');
const botaoRetroceder = document.querySelector('.botao-retroceder');
let imagemAtual = 0;
let maxImagem = 5;

const avancarImagem = () => {
    imagensCarrossel.forEach(imagem => imagem.classList.remove('img-selecionado'));
    imagemAtual = (imagemAtual + 1) % imagensCarrossel.length;
    imagensCarrossel[imagemAtual].classList.add('img-selecionado');

    if (imagemAtual >= imagensCarrossel.length - 1) {
        botaoAvancar.classList.add('botao-com-opacidade');
    } else {
        botaoAvancar.classList.remove('botao-com-opacidade');
    }
};

const retrocederImagem = () => {
    imagensCarrossel.forEach(imagem => imagem.classList.remove('img-selecionado'));
    imagemAtual = (imagemAtual - 1 + imagensCarrossel.length) % imagensCarrossel.length;
    imagensCarrossel[imagemAtual].classList.add('img-selecionado');

    if (imagemAtual === 0) {
        botaoRetroceder.classList.add('botao-com-opacidade');
    } else {
        botaoRetroceder.classList.remove('botao-com-opacidade');
    }
};

[botaoAvancar, botaoRetroceder].forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao === botaoAvancar) {
            avancarImagem();
        } else if (botao === botaoRetroceder) {
            retrocederImagem();
        }
    });
});