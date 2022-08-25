let tentativa = 3, maximo = 10, minimo = 0;
let numeroCorreto = parseInt(Math.floor(Math.random() * (maximo - minimo + 1) + minimo));

do {
    let numeroChute = parseInt(prompt("Diga o numero para adivinhar:"));
    if (numeroChute === numeroCorreto) {
        alert("Acertou");
        break;
    } else {
        alert("Errou");
    }
    tentativa--;
    if ((tentativa >= 1)) {
        alert(`Faltam ${tentativa} tentativas`);
    } else {
        alert(`Ultima tentativa`);
    }
} while (tentativa >= 1);

console.log(`O numero correto é: ${numeroCorreto}`)