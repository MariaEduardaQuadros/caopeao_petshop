// Inicialização do Flatpickr
flatpickr("#datetimePicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

// Função para finalizar e redirecionar
function finalize() {
    // Adicione aqui a lógica para finalizar o processo
    // Redirecionar ao clicar no botão
    window.location.href = "7tele-busca.html";
}
