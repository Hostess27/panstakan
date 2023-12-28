let userData = [
    { username: 'pash.pash22173@gmail.com' },
    { password: '1111111' },
];

function login() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var password = passwordInput.value;

    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !emailFormat.test(username)) {
        document.querySelector('label[for="username"]').classList.add('error');
        document.querySelector('.login-form__name--accent').classList.add('error');
        usernameInput.classList.add('error');
        document.getElementById('username-error').innerText = 'E-mail адресу вказано невірно';
    } else {
        document.querySelector('label[for="username"]').classList.remove('error');
        document.querySelector('.login-form__name--accent').classList.remove('error');
        usernameInput.classList.remove('error');
        document.getElementById('username-error').innerText = '';
    }

    if (!password) {
        document.querySelector('label[for="password"]').classList.add('error');
        document.querySelector('.login-form__name--sec').classList.add('error');
        passwordInput.classList.add('error');
        document.getElementById('password-error').innerText = 'Пароль вказано невірно';
    } else {
        document.querySelector('label[for="password"]').classList.remove('error');
        document.querySelector('.login-form__name--sec').classList.remove('error');
        passwordInput.classList.remove('error');
        document.getElementById('password-error').innerText = '';
    }

    if (username.length < 6 || username.length > 30) {
        document.querySelector('label[for="username"]').classList.add('error');
        document.querySelector('.login-form__name--accent').classList.add('error');
        usernameInput.classList.add('error');
        document.getElementById('username-error').innerText = 'E-mail повинен містити від 6 символів';
    }

    if (password.length < 6 || password.length > 50) {
        document.querySelector('label[for="password"]').classList.add('error');
        document.querySelector('.login-form__name--sec').classList.add('error');
        passwordInput.classList.add('error');
        document.getElementById('password-error').innerText = 'Пароль повинен містити від 6 символів';
    }

    if (checkCredentials(username, password)) {
        
        window.location.href = "../components/account.html";
    } else {
        document.querySelector('label[for="password"]').classList.add('error');
        document.querySelector('.login-form__name--sec').classList.add('error');
        passwordInput.classList.add('error');
        document.getElementById('password-error').innerText = 'Пароль вказано невірно';
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../pictures/svg/eye-hide.svg";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "../pictures/svg/eye.svg";
    }
}

function checkCredentials(username, password) {
    return (
        userData.some(user => user.username === username) &&
        userData.some(user => user.password === password)
    );
}