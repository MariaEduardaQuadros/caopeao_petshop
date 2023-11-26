// Variável para rastrear o índice do slide atual
var currentSlide = 0;

// Obtém uma lista de todos os elementos de imagem dentro do carrossel
var slides = document.querySelectorAll('#carousel img');

// Função para exibir um slide específico com base no índice
function showSlide(index) {
    // Itera sobre todos os slides
    slides.forEach(function (slide, i) {
        // Verifica se o índice do slide é igual ao índice fornecido
        if (i === index) {
            // Adiciona a classe 'active' para exibir o slide
            slide.classList.add('active');
            // Remove a classe 'inactive' se estiver presente
            slide.classList.remove('inactive');
        } else {
            // Remove a classe 'active' se estiver presente
            slide.classList.remove('active');
            // Adiciona a classe 'inactive' para ocultar outros slides
            slide.classList.add('inactive');
        }
    });
}

// Função para mostrar o próximo slide
function nextSlide() {
    // Atualiza o índice do slide para o próximo no ciclo
    currentSlide = (currentSlide + 1) % slides.length;
    // Chama a função para exibir o novo slide
    showSlide(currentSlide);
}

// Exibe o primeiro slide ao carregar a página
showSlide(currentSlide);
