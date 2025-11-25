<?php
// Configurações do Banco de Dados
$host = 'localhost'; // Geralmente 'localhost'
$dbname = 'site_clientes'; // Nome do banco de dados que você criou
$user = 'root'; // Seu usuário do MySQL (geralmente 'root' em ambiente local)
$password = ''; // Sua senha do MySQL (deixe vazio se for XAMPP/WAMP local sem senha)

try {
    // Cria a instância do PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);

    // Configura o PDO para lançar exceções em caso de erro
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo "Conexão estabelecida com sucesso!"; // Remova esta linha após testar

} catch (PDOException $e) {
    // Em caso de falha na conexão, mostra o erro e interrompe a execução
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>