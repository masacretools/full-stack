
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//14. Validar la entrada del usuario

function pedirNumero() {
    rl.question("Ingresa un número mayor que 0: ", (entrada) => {
        let numero = entrada.trim() === "" ? NaN : Number(entrada);

        if (!Number.isFinite(numero) || numero <= 0) {
            console.log("Entrada inválida. Inténtalo nuevamente.\n");
            pedirNumero();
        } else {
            console.log("Número válido: " + numero);
            rl.close();
        }
    });
}

pedirNumero();
