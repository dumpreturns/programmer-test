const palavras = [
    "arara", "amor", "asa", "longo", "ele", "dinossauro", "esse",
    "peppa", "mamam", "tartaruga", "bandolin", "matam", "desodorante",
    "mundo", "metem", "terra", "agua", "mirim", "fogo", "sopapos"
]

let palavrasPalindromas = palavras.filter(checkPalindromo);

function checkPalindromo(palavra) {
    return palavra == palavra.split('').reverse().join('');
}


alert(palavrasPalindromas)

console.log(palavrasPalindromas)