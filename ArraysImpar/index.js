const numeros = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]

let numerosImpares = numeros.filter(checkImpar);

function checkImpar(numero) {
    return (numero % 2)
}


alert("Numeros Impares: " + numerosImpares)

console.log(numerosImpares)