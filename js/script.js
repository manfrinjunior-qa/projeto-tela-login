// Função para alternar o modo escuro
function toggleDarkMode() {
    // Alterna a classe 'dark-mode' no corpo do documento
    document.body.classList.toggle('dark-mode');
    
    // Obtém o botão de alternância do modo escuro
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    // Altera o ícone do botão conforme o modo
    if (document.body.classList.contains('dark-mode')) {
      darkModeBtn.textContent = '🌞'; // Ícone de sol no modo escuro
    } else {
      darkModeBtn.textContent = '🌙'; // Ícone de lua no modo claro
    }
  }
  
  // Função para exibir uma mensagem de sucesso ao tentar o login
  function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Lógica simples de validação de login (pode ser expandida)
    if (email && password) {
      alert('Login bem-sucedido!');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }
  
  // Função para redirecionar para a página de cadastro
  function redirectToRegister() {
    window.location.href = 'https://example.com/register'; // Substitua com o link de cadastro
  }
  
  // Adiciona os ouvintes de evento para os botões
  document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.querySelector('.register-btn').addEventListener('click', redirectToRegister);
  