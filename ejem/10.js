//10. Mostrar tabla de multiplicar 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número: ", (respuesta) => {
    let numero = Number(respuesta);

    console.log("\nTabla de multiplicar del " + numero);

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

    rl.close();
});

