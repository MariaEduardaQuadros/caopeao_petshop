function updatePrice(newPrice, button) {
    // Remove a classe 'selected' de todos os botões
    var buttons = document.querySelectorAll('.service-button');
    buttons.forEach(function (btn) {
        btn.classList.remove('selected');
    });
    
    // Adiciona a classe 'selected' ao botão clicado
    button.classList.add('selected');
    
    // Atualiza o preço na página
    var priceElement = document.getElementById('service-price');
    priceElement.textContent = 'R$' + newPrice.toFixed(2);
}

function showEnlargedImage() {
    // Implemente a lógica para exibir a imagem em tamanho grande, se necessário
}
