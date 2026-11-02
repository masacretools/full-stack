const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//15. Mostrar unmenu hasta que usuario salga

function preguntar(texto) {
    return new Promise(function(resolve) {
        rl.question(texto, resolve);
    });
}

async function mostrarMenu() {
    let opcion;

    do {
        console.log("\n--- MENU PRINCIPAL ---");
        console.log("1. Saludar");
        console.log("2. Mostrar fecha");
        console.log("3. Salir");

        opcion = (await preguntar("Elige una opcion: ")).trim();

        switch (opcion) {
            case "1":
                console.log("Hola, bienvenido.");
                break;

            case "2":
                console.log("Fecha actual:", new Date().toLocaleDateString());
                break;

            case "3":
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opcion no valida.");
        }
    } while (opcion !== "3");

    rl.close();
}

mostrarMenu();