// chiedo all'utente di inserire il chilometraggio
let kmNum = prompt("Quanti chilometri vuoi percorrere?");

// calcolo il prezzo del biglietto
let ticketPrice = 0.21 * kmNum;
console.log("Il prezzo del biglietto intero è €", ticketPrice);

// chiedo all'utente di inserire l'età
let userAge = prompt("Quanti anni hai?");

// IF userAge < 18 anni
if (userAge < 18){
  let underagePrice = ticketPrice * 0.8;
  console.log("Il prezzo del tuo biglietto è €", underagePrice.toFixed(2));
}

// IF useAge > 65 anni
else if (userAge > 65){
  let seniorPrice = ticketPrice * 0.6;
  console.log("Il prezzo del tuo biglietto è €", seniorPrice.toFixed(2));

}