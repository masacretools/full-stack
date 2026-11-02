
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 13. Calcular el factorial de un número

rl.question("Ingresa un número entero positivo: ", (respuesta) => {
    let numero = Number(respuesta);

    if (!Number.isInteger(numero) || numero < 0) {
        console.log("Ingresa un número entero positivo válido.");
    } else {
        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }

        console.log("El factorial de " + numero + " es: " + factorial);
    }

    rl.close();
});
