<?php
session_start(); // Inicia a sessão

// Verifica se a variável de sessão 'usuario_id' existe. Se NÃO existir, o usuário não está logado.
if (!isset($_SESSION['usuario_id'])) {
    // Redireciona para a página de login
    header("Location: login.php");
    exit; // É crucial usar exit após um redirecionamento
}

// Se chegou até aqui, o usuário está logado.
$nome_usuario = $_SESSION['nome_usuario']; 
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Página Principal</title>
</head>
<body>
    <h2>Bem-vindo(a), <?php echo htmlspecialchars($nome_usuario); ?>!</h2>
    <p>Esta é a sua área restrita. O acesso está liberado apenas para usuários logados.</p>
    
    <p>
        <a href="logout.php">Sair (Logout)</a>
    </p>
</body>
</html>