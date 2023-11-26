// Variável que armazena o índice da slide atual
var currentSlide = 0;

// Obtém todas as imagens do carrossel
var slides = document.querySelectorAll('#carousel img');

// Função para exibir uma determinada slide com base no índice
function showSlide(index) {
    // Itera sobre todas as slides
    slides.forEach(function (slide, i) {
        // Verifica se a slide é a que deve ser exibida
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

// Função para avançar para a próxima slide
function nextSlide() {
    // Atualiza o índice da slide atual
    currentSlide = (currentSlide + 1) % slides.length;
    // Chama a função para exibir a nova slide
    showSlide(currentSlide);
}

// Exibe a primeira imagem ao carregar a página
showSlide(currentSlide);
