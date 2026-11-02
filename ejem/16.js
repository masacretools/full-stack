//16. Sumar los numeros impares entre 1 y 50
let suma = 0;

for (let i = 1; i <= 50 && suma <= 500; i++) {
    if (i % 2 !== 0) {
        suma += i;

        while (suma > 500) {
            console.log("La suma supero 500.");
            console.log("Suma alcanzada:", suma);
            break;
        }
    }
}

console.log("Suma final:", suma);