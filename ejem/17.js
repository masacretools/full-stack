const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//17. Contador de intentos

function preguntar(texto) {
    return new Promise(function(resolve) {
        rl.question(texto, resolve);
    });
}

async function iniciarSesion() {
    const claveCorrecta = "1234";
    let intentos = 0;
    let acceso = false;

    while (intentos < 3 && !acceso) {
        const clave = await preguntar("Ingresa la contrasena: ");
        intentos++;

        if (clave === claveCorrecta) {
            acceso = true;
            console.log("Acceso permitido.");
        } else {
            console.log("Contrasena incorrecta.");
            console.log("Intentos restantes:", 3 - intentos);
        }
    }

    if (!acceso) {
        console.log("Acceso bloqueado.");
    }

    rl.close();
}

iniciarSesion();