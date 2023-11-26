// Este bloco de código jQuery é executado quando o DOM está completamente carregado.
$(document).ready(function(){

    // Seleciona elementos dentro da classe "status" que contenham determinados textos em suas tags <h2> e <p>.
    // Se o texto for "Em separação", "Em transporte", "Última atualização" ou "Entregue", a cor do texto será definida como azul.
    $(".status h2:contains('Em separação'), .status p:contains('Em separação'), .status h2:contains('Em transporte'), .status p:contains('Em transporte'), .status h2:contains('Última atualização'), .status p:contains('Última atualização'), .status h2:contains('Entregue'), .status p:contains('Entregue')").css("color", "blue");

});

