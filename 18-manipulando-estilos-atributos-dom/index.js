function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');

    console.log(posts);

    let primeiroPost = posts[0];
    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('font-grande')
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = 
}
