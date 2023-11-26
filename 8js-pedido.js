function selecionarFormaPagamento(opcao) {
    // Remove a classe "button-selected" de todos os botões
    document.getElementById('pixButton').classList.remove('button-selected');
    document.getElementById('boletoButton').classList.remove('button-selected');

    // Adiciona a classe "button-selected" ao botão clicado
    document.getElementById(opcao + 'Button').classList.add('button-selected');
    
    // Muda a cor do botão para verde
    document.getElementById(opcao + 'Button').style.backgroundColor = '#27ae60';

    // Remove a cor verde do outro botão, caso tenha sido selecionado anteriormente
    const outraOpcao = (opcao === 'pix') ? 'boleto' : 'pix';
    document.getElementById(outraOpcao + 'Button').style.backgroundColor = '';
}

