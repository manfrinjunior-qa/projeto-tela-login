// Seleciona os elementos necessários
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginEmailError = document.getElementById('loginEmailError');
const loginPasswordError = document.getElementById('loginPasswordError');
const loginForm = document.getElementById('login');

const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const confirmPassword = document.getElementById('confirmPassword');
const registerEmailError = document.getElementById('registerEmailError');
const registerPasswordError = document.getElementById('registerPasswordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const registerForm = document.getElementById('register');

const darkModeToggle = document.getElementById('darkModeToggle');
const showRegisterForm = document.getElementById('showRegisterForm');
const showLoginForm = document.getElementById('showLoginForm');

// Validação em tempo real do email de login
loginEmail.addEventListener('input', () => {
    if (!loginEmail.validity.valid) {
        loginEmailError.textContent = 'Por favor, insira um email válido.';
    } else {
        loginEmailError.textContent = '';
    }
});

// Validação em tempo real da senha de login
loginPassword.addEventListener('input', () => {
    if (loginPassword.value.length < 8) {
        loginPasswordError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
    } else {
        loginPasswordError.textContent = '';
    }
});

// Validação de registro - email
registerEmail.addEventListener('input', () => {
    if (!registerEmail.validity.valid) {
        registerEmailError.textContent = 'Por favor, insira um email válido.';
    } else {
        registerEmailError.textContent = '';
    }
});

// Validação de senha no registro
registerPassword.addEventListener('input', () => {
    if (registerPassword.value.length < 8) {
        registerPasswordError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
    } else {
        registerPasswordError.textContent = '';
    }
});

// Verifica se as senhas coincidem
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== registerPassword.value) {
        confirmPasswordError.textContent = 'As senhas não coincidem.';
    } else {
        confirmPasswordError.textContent = '';
    }
});

// Alterna entre os formulários de login e registro
showRegisterForm.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

showLoginForm.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Alternância do modo escuro
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
