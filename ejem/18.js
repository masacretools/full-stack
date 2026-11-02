const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Sumar hasta que el usuario ingrese 0

function preguntar(texto) {
    return new Promise(function(resolve) {
        rl.question(texto, resolve);
    });
}

async function sumarNumeros() {
    let suma = 0;
    let numero;

    while (true) {
        const respuesta = await preguntar("Ingresa un numero (0 para terminar): ");

        if (respuesta.trim() === "" || !Number.isFinite(Number(respuesta))) {
            console.log("Ingresa un numero valido.");
            continue;
        }

        numero = Number(respuesta);

        if (numero === 0) {
            break;
        }

        suma += numero;
    }

    console.log("La suma total es:", suma);
    rl.close();
}

sumarNumeros();