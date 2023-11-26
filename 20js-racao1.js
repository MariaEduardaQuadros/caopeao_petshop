var currentSlide = 0;
var slides = document.querySelectorAll('#carousel img');

function showSlide(index) {
    // Função para exibir a imagem correspondente ao índice
    slides.forEach(function (slide, i) {
        if (i === index) {
            slide.classList.add('active');
            slide.classList.remove('inactive');
        } else {
            slide.classList.remove('active');
            slide.classList.add('inactive');
        }
    });
}

function nextSlide() {
    // Função para avançar para a próxima imagem no carrossel
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Exibe a primeira imagem ao carregar a página
showSlide(currentSlide);
