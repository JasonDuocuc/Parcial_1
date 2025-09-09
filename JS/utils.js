var formularioEsValido = true;

function validarFormularioRegistro() {
    formularioEsValido = true;

    var valorNombreCompleto = document.getElementById('fullName').value;
    var valorEmail = document.getElementById('email').value;
    var valorPassword = document.getElementById('password').value;

    validarNombreCompleto(valorNombreCompleto);
    validarEmail(valorEmail);
    validarPassword(valorPassword);

    if (formularioEsValido) {
        alert('¡Registro completado con éxito!');
        document.getElementById('registrationForm').reset();
    }
}

function validarNombreCompleto(nombre) {
    var elementoError = document.getElementById('nameError');

    if (nombre.trim() === '') {
        elementoError.textContent = 'El nombre completo es obligatorio.';
        elementoError.style.display = 'block';
        formularioEsValido = false;
    } else {
        elementoError.style.display = 'none';
    }
}

function validarEmail(email) {
    var elementoError = document.getElementById('emailError');
    var expresionRegularEmail = /^[a-zA-Z0-9._-]+@(duocuc\.cl|profesor\.duoc\.cl)$/;

    if (!expresionRegularEmail.test(email)) {
        elementoError.textContent = 'Debes ingresar un correo de Duoc UC válido.';
        elementoError.style.display = 'block';
        formularioEsValido = false;
    } else {
        elementoError.style.display = 'none';
    }
}

function validarPassword(password) {
    var elementoError = document.getElementById('passwordError');

    if (password.length < 6) {
        elementoError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        elementoError.style.display = 'block';
        formularioEsValido = false;
    } else {
        elementoError.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const formularioDeRegistro = document.getElementById('registrationForm');

    if (formularioDeRegistro) {
        formularioDeRegistro.addEventListener('submit', function(evento) {
            evento.preventDefault();
            validarFormularioRegistro();
        });
    }
});