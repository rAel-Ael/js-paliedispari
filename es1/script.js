//Palidroma
function isPalindromo(parola) {
    return parola == parola.split('').reverse().join('');
}
const parolaUtente = prompt("inserisci qui la parola:");
if (isPalindromo(parolaUtente)== true) {
    console.log("e' palindroma");
} else {
    console.log("non e' palindroma");
}

