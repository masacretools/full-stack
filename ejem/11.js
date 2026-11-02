const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 11. Generar una secuencia de Fibonacci
// usando programación recursiva

function fibonacci(a, b, contador) {
    if (contador === 10) {
        return;
    }

    console.log(a);

    fibonacci(b, a + b, contador + 1);
}

console.log("----------");
console.log("11. Secuencia Fibonacci");

fibonacci(0, 1, 0);
