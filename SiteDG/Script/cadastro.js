// Acessa o formulário e os campos
const cadastroForm = document.getElementById('cadastro-form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirma-senha');
const errorMessage = document.getElementById('error-message');

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Limpa a mensagem de erro anterior
    errorMessage.textContent = ''; 

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const confirmaSenha = confirmaSenhaInput.value;

    // 1. Verifica se todos os campos estão preenchidos
    if (nome === '' || email === '' || senha === '' || confirmaSenha === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        return;
    }

    // 2. Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        errorMessage.textContent = 'As senhas digitadas não coincidem. Verifique e tente novamente.';
        // Limpa o campo de confirmação
        confirmaSenhaInput.value = '';
        return;
    }
    
    // 3. Verifica o formato básico do e-mail
    // Regex simples para verificar a presença de @ e ponto
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage.textContent = 'O formato do e-mail é inválido.';
        return;
    }

    // 4. Verifica o tamanho mínimo da senha (Exemplo: 6 caracteres)
    if (senha.length < 6) {
        errorMessage.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        return;
    }

    // --- Se a validação for um sucesso (Simulação de Envio) ---
    
    // Aqui, em um sistema real, você faria um Fetch/Ajax para enviar os dados para o backend.
    
    alert(`Cadastro bem-sucedido para ${nome}! Redirecionando para o login.`);
    
    // Redireciona de volta para a tela de login após o cadastro
    window.location.href = 'login.html'; 
});