//Pari e Dispari
const numberUser = parseInt(prompt("inserisci un numero da 1 a 5."));
const scelta = prompt("scegli pari o dispari:").toLowerCase();
function randomGen() {
    return  Math.floor(Math.random() * 5) + 1
}
const numberPc = randomGen();
const somma = numberPc + numberUser;
function risultato(sommaintern) {
    if (sommaintern % 2 == 0) { 
        return "pari";
    } else {
        return "dispari";
    }
}

if (scelta == risultato(somma)) {
    console.log("hai vinto un gelato");
} else {
    console.log("hai perso niente gelato");
}
