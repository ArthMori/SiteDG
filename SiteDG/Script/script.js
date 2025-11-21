document.addEventListener('DOMContentLoaded', () => {
    // Implementação futura para formulário de contato, validações ou navegação suave.
    // O site é leve e usável mesmo sem um script complexo.

    // Exemplo de navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});