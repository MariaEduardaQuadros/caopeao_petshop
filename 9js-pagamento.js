function selecionarOpcao(opcao) {
    // Remove a classe "selected" de todos os botões
    document.getElementById('simButton').classList.remove('button-selected');
    document.getElementById('naoButton').classList.remove('button-selected');

    // Adiciona a classe "selected" ao botão clicado
    document.getElementById(opcao + 'Button').classList.add('button-selected');
}
