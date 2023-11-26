// Variável para rastrear o índice do slide atual
var currentSlide = 0;

// Seleciona todos os elementos de imagem dentro do elemento com ID 'carousel'
var slides = document.querySelectorAll('#carousel img');

// Função para exibir um slide com base no índice fornecido
function showSlide(index) {
    // Itera sobre todos os slides
    slides.forEach(function (slide, i) {
        // Se o índice do slide atual for igual ao índice fornecido
        if (i === index) {
            // Adiciona a classe 'active' para tornar o slide visível
            slide.classList.add('active');
            // Remove a classe 'inactive' para garantir que o slide esteja ativo
            slide.classList.remove('inactive');
        } else {
            // Remove a classe 'active' para ocultar outros slides
            slide.classList.remove('active');
            // Adiciona a classe 'inactive' para garantir que outros slides estejam inativos
            slide.classList.add('inactive');
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    // Atualiza o índice do slide para o próximo slide usando a operação de módulo
    currentSlide = (currentSlide + 1) % slides.length;
    // Chama a função showSlide para exibir o próximo slide
    showSlide(currentSlide);
}

// Exibe a primeira imagem ao carregar a página
showSlide(currentSlide);
