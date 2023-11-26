// Variável para rastrear o índice do slide atual
var currentSlide = 0;

// Seleciona todos os elementos de imagem dentro do elemento com o id 'carousel'
var slides = document.querySelectorAll('#carousel img');

// Função para exibir um slide específico com base no índice
function showSlide(index) {
    // Itera sobre todos os slides
    slides.forEach(function (slide, i) {
        // Verifica se o slide é o atual
        if (i === index) {
            // Adiciona a classe 'active' para exibir o slide
            slide.classList.add('active');
            // Remove a classe 'inactive' para garantir que não está inativo
            slide.classList.remove('inactive');
        } else {
            // Remove a classe 'active' para ocultar outros slides
            slide.classList.remove('active');
            // Adiciona a classe 'inactive' para garantir que estão inativos
            slide.classList.add('inactive');
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    // Atualiza o índice do slide para o próximo (circularmente)
    currentSlide = (currentSlide + 1) % slides.length;
    // Chama a função para exibir o novo slide
    showSlide(currentSlide);
}

// Exibe o primeiro slide ao carregar a página
showSlide(currentSlide);
