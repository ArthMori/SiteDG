// Acessa o formulário e a área de mensagem
const recoveryForm = document.getElementById('recovery-form');
const emailInput = document.getElementById('email');
const messageArea = document.getElementById('message-area');

recoveryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Limpa mensagens anteriores
    messageArea.textContent = '';
    messageArea.className = 'message-area';

    const email = emailInput.value.trim();

    if (email === '') {
        messageArea.textContent = 'O campo e-mail não pode ficar vazio.';
        messageArea.classList.add('error');
        return;
    }
    
    // 1. Verifica o formato básico do e-mail
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messageArea.textContent = 'O formato do e-mail é inválido.';
        messageArea.classList.add('error');
        return;
    }

    // --- Simulação do Processo de Envio ---
    
    // Em um sistema real, você enviaria este e-mail para o backend.
    // A resposta (seja sucesso ou falha na validação do servidor) deve 
    // retornar SEMPRE a mesma mensagem de sucesso, por segurança.
    
    // Simulação de delay para mostrar que o envio está "acontecendo"
    // Desabilitar o botão para evitar cliques duplos
    const btnRecovery = document.querySelector('.btn-recovery');
    btnRecovery.disabled = true;
    btnRecovery.textContent = 'Enviando...';

    setTimeout(() => {
        // Exibe a mensagem de sucesso (independente do e-mail existir ou não, por segurança)
        messageArea.textContent = 'Se este e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha em breve.';
        messageArea.classList.add('success');
        
        // Reativa o botão e limpa o campo
        btnRecovery.disabled = false;
        btnRecovery.textContent = 'Enviar Link de Redefinição';
        emailInput.value = '';

    }, 1500); // 1.5 segundos de delay simulado
});