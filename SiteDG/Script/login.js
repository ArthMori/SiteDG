// Acessa o formulário e a área de mensagem
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Adiciona um listener para o evento de submissão do formulário
loginForm.addEventListener('submit', (event) => {
    // Impede o envio padrão do formulário (para evitar recarregar a página)
    event.preventDefault();

    // Limpa qualquer mensagem de erro anterior
    errorMessage.textContent = ''; 

    const username = usernameInput.value;
    const password = passwordInput.value;

    // --- Lógica de Validação e Simulação de Login ---

    if (username === 'admin@dg.com' && password === '12345') {
        // Sucesso: Redireciona para a página principal (index.html)
        alert('Login bem-sucedido! Redirecionando...');
        window.location.href = '../index.html'; 
    } else if (username === '' || password === '') {
        // Campos Vazios
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
    } else {
        // Falha no Login
        errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
    }
});