// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleTheme');
    
    // Escuta o clique no botão para alternar a classe do modo escuro
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
