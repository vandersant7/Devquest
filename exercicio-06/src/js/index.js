const mostrarFaq = document.querySelectorAll('.content');

const botoesFaq = document.querySelectorAll('.pergunta');

botoesFaq.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const faqSelecionado = document.querySelector('.content.selecionado');
        faqSelecionado.classList.remove('selecionado');
        mostrarFaq[indice].classList.add('selecionado');
    })
})
