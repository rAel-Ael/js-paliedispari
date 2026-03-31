//Palidroma
function isPalindromo(parola) {
    return parola == parola.split('').reverse().join('');
}

const parolaUtente = prompt("inserisci parola:");
if (isPalindromo(parolaUtente)) {
    console.log("e' palindroma");
} else {
    console.log("non e' palindroma");
}

//Pari e Dispari
