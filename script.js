// chiedo all'utente di inserire il chilometraggio
let kmNum = prompt("Quanti chilometri vuoi percorrere?");

// calcolo il prezzo del biglietto
let ticketPrice = 0.21 * kmNum;
console.log("Il prezzo del biglietto intero è €", ticketPrice);

// chiedo all'utente di inserire l'età
let userAge = prompt("Quanti anni hai?");

// SE userAge < 18 anni
if (userAge < 18){
  let underagePrice = ticketPrice * 0.8;
  console.log("Il prezzo del tuo biglietto è €", underagePrice.toFixed(2));
}

