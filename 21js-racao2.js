// Variável para armazenar o índice da slide atual
var currentSlide = 0;

// Obtém todas as imagens dentro do elemento com o id "carousel"
var slides = document.querySelectorAll('#carousel img');

// Função para exibir uma slide com base no índice
function showSlide(index) {
    // Itera sobre todas as slides
    slides.forEach(function (slide, i) {
        // Verifica se a slide é a atual
        if (i === index) {
            // Adiciona a classe 'active' para exibir a slide
            slide.classList.add('active');
            // Remove a classe 'inactive', se existir
            slide.classList.remove('inactive');
        } else {
            // Remove a classe 'active' para ocultar outras slides
            slide.classList.remove('active');
            // Adiciona a classe 'inactive' para ocultar outras slides
            slide.classList.add('inactive');
        }
    });
}

// Função para mostrar a próxima slide
function nextSlide() {
    // Atualiza o índice da slide para a próxima no ciclo
    currentSlide = (currentSlide + 1) % slides.length;
    // Chama a função showSlide para exibir a nova slide
    showSlide(currentSlide);
}

// Exibe a primeira imagem quando a página é carregada
showSlide(currentSlide);
