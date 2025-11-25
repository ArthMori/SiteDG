<?php
include 'conexao.php'; // Inclui a conexão com o banco de dados

// Verifica se o formulário foi submetido (método POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome_usuario = trim($_POST['nome_usuario']);
    $email = trim($_POST['email']);
    $senha = $_POST['senha'];
    $confirmar_senha = $_POST['confirmar_senha'];

    // 1. Validação Server-Side Básica
    if (empty($nome_usuario) || empty($email) || empty($senha) || empty($confirmar_senha)) {
        $erro = "Todos os campos são obrigatórios.";
    } elseif ($senha !== $confirmar_senha) {
        $erro = "As senhas não coincidem.";
    } elseif (strlen($senha) < 6) {
        $erro = "A senha deve ter pelo menos 6 caracteres.";
    } else {
        // 2. Cria o HASH da Senha (Segurança CRÍTICA!)
        $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

        try {
            // 3. Verifica se o usuário ou e-mail já existem
            $stmt_check = $pdo->prepare("SELECT COUNT(*) FROM usuarios WHERE nome_usuario = ? OR email = ?");
            $stmt_check->execute([$nome_usuario, $email]);
            if ($stmt_check->fetchColumn() > 0) {
                $erro = "Nome de usuário ou e-mail já cadastrado.";
            } else {
                // 4. Prepara e Executa a Inserção (Prepared Statement - Prevenção de SQL Injection)
                $sql = "INSERT INTO usuarios (nome_usuario, email, senha) VALUES (?, ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$nome_usuario, $email, $senha_hash]);
                
                $sucesso = "Cadastro realizado com sucesso! Você será redirecionado para a tela de Login.";
                // Redireciona após 3 segundos para a página de login
                header("Refresh: 3; URL=login.php");
            }

        } catch (PDOException $e) {
            $erro = "Erro ao cadastrar: " . $e->getMessage();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Usuário</title>
</head>
<body>
    <h2>Cadastro</h2>
    
    <?php if (isset($erro)): ?>
        <p style="color: red;"><?php echo $erro; ?></p>
    <?php endif; ?>
    <?php if (isset($sucesso)): ?>
        <p style="color: green;"><?php echo $sucesso; ?></p>
    <?php endif; ?>

    <form method="POST" action="cadastro.php">
        <label for="nome_usuario">Usuário:</label>
        <input type="text" id="nome_usuario" name="nome_usuario" required><br><br>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br><br>
        
        <label for="confirmar_senha">Confirme a Senha:</label>
        <input type="password" id="confirmar_senha" name="confirmar_senha" required><br><br>
        
        <button type="submit">Cadastrar</button>
    </form>
    
    <p>Já tem uma conta? <a href="login.php">Faça Login aqui</a>.</p>
</body>
</html>