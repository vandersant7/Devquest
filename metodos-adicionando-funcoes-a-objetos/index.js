let usuario = {
    nome: 'Evandro',
    excluirUsuario: function () {
        console.log('O usuário ' + this.nome + ' foi excluído.')
    }
}

usuario.excluirUsuario()