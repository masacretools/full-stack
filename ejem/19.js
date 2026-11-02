//19. Imprimir fibonacci
let anterior = 0;
let actual = 1;

console.log("Secuencia de Fibonacci:");

while (actual <= 100) {
    console.log(anterior);

    let siguiente = anterior + actual;
    anterior = actual;
    actual = siguiente;
}

console.log("El siguiente numero supera 100:", actual);