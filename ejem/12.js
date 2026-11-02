
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 12. Adivinar un numero

let secreto = Math.floor(Math.random() * 10) + 1;

function adivinar() {
    rl.question("Adivina el número del 1 al 10: ", (respuesta) => {
        let intento = Number(respuesta);

        if (intento === secreto) {
            console.log("¡Correcto! Adivinaste el número.");
            rl.close();
        } else {
            console.log("Incorrecto. Intenta nuevamente.");
            adivinar();
        }
    });
}

adivinar();
