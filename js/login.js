document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // llamada a funciones
    if (!validarPassword(password)) {
        mostrarError(errorMessage, "La contraseña debe tener entre 8 y 16 caracteres.");
    } else if (validarCredenciales(username, password)) {
        mostrarCargando(".btn", "Cargando...");
        redireccionar("accesos/menu.html", 1500);
    } else {
        mostrarError(errorMessage, "Usuario o contraseña incorrectos");
    }
});

// validar la longitud
function validarPassword(password) {
    return password.length >= 8 && password.length <= 16;
}

// validar credenciales
function validarCredenciales(username, password) {
    return username === "admin" && password === "12345678";
}

// mostrar errores
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

// mostrar efecto
function mostrarCargando(selectorBoton, texto) {
    document.querySelector(selectorBoton).textContent = texto;
}

// redirigir
function redireccionar(url, tiempo) {
    setTimeout(() => {
        window.location.href = url;
    }, tiempo);
}

function mostrarPassword() {
    document.getElementById("togglePassword").addEventListener("click", function () {
        const passwordInput = document.getElementById("password");
        const icon = this.querySelector("i");

        // Cambiar entre "password" y "text"
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
}

