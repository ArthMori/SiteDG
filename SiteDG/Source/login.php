<?php
session_start(); // INICIA A SESSÃO no começo do script
include 'conexao.php'; // Inclui a conexão com o banco de dados

// Se o usuário já estiver logado, redireciona para a página principal
if (isset($_SESSION['usuario_id'])) {
    header("Location: index.html_entity_decode");
    exit;
}

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome_usuario = trim($_POST['nome_usuario']);
    $senha = $_POST['senha'];

    if (empty($nome_usuario) || empty($senha)) {
        $erro = "Preencha todos os campos.";
    } else {
        try {
            // 1. Busca o usuário e o hash da senha no banco (Prepared Statement)
            $sql = "SELECT id, nome_usuario, senha FROM usuarios WHERE nome_usuario = ? OR email = ?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$nome_usuario, $nome_usuario]); // Busca tanto por nome de usuário quanto por e-mail
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                // 2. Verifica a Senha (Usa o hash armazenado)
                if (password_verify($senha, $usuario['senha'])) {
                    
                    // 3. LOGIN BEM-SUCEDIDO: Armazena dados na sessão
                    $_SESSION['usuario_id'] = $usuario['id'];
                    $_SESSION['nome_usuario'] = $usuario['nome_usuario'];
                    
                    // 4. Redireciona para a Página Principal! (O LINK principal)
                    header("Location: pagina_principal.php");
                    exit; // Encerra o script após o redirecionamento

                } else {
                    $erro = "Credenciais inválidas. Senha incorreta.";
                }
            } else {
                $erro = "Credenciais inválidas. Usuário não encontrado.";
            }

        } catch (PDOException $e) {
            $erro = "Erro no login: " . $e->getMessage();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>Login de Usuário</h2>
    
    <?php if (isset($erro)): ?>
        <p style="color: red;"><?php echo $erro; ?></p>
    <?php endif; ?>

    <form method="POST" action="login.php">
        <label for="nome_usuario">Usuário ou E-mail:</label>
        <input type="text" id="nome_usuario" name="nome_usuario" required><br><br>
        
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br><br>
        
        <button type="submit">Entrar</button>
    </form>
    
    <p>Não tem uma conta? <a href="cadastro.php">Cadastre-se aqui</a>.</p>
</body>
</html>