document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (!email.includes('@')) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    // Mostrar modal de ingreso exitoso
    const exitoModal = new bootstrap.Modal(document.getElementById('exitoModal'));
    exitoModal.show();
});

// Recuperación de contraseña
document.getElementById('btnClaveTemporal').addEventListener('click', function () {
    const correo = document.getElementById('recuperarCorreo').value;
    if (!correo || !correo.includes('@')) {
        alert('Ingrese un correo válido.');
        return;
    }
    alert('Se ha enviado una clave temporal a su correo.');
    // Cerrar modal
    bootstrap.Modal.getInstance(document.getElementById('recuperarModal')).hide();
});

// Registro manual
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correoRegistro').value.trim();
    const clave = document.getElementById('claveRegistro').value;

    // Validaciones
    if (!nombres || !apellidos) {
        alert('Ingrese nombres y apellidos.');
        return;
    }
    if (!correo.includes('@')) {
        alert('Ingrese un correo válido.');
        return;
    }
    if (
        clave.length < 8 ||
        !/[A-Z]/.test(clave) ||
        !/[a-z]/.test(clave) ||
        !/[0-9]/.test(clave)
    ) {
        alert('La clave debe tener mínimo 8 caracteres, incluir mayúsculas, minúsculas y un número.');
        return;
    }
    alert('Registro exitoso.');
    bootstrap.Modal.getInstance(document.getElementById('registroModal')).hide();
});
