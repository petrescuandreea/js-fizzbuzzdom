/*
Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5
*/


const squareContainer = document.getElementById("square-container");
// console.log(squareContainer);


// Creo il ciclo for 
for (let i = 1; i <= 100; i++) {
    // console.log("iterazione numero: ", i , squareContainer.innerHTML);
    
    // se i è multiplo sia di 3 che di 5 stampa "fizzbuzz"
    if ((i % 3 ===0) && (i % 5 ===0)){
        squareContainer.innerHTML += `<div class="square"> fizzbuzz </div>`;
    } else if (i % 3 ===0){
        // se i è multiplo di 3 stampa "fizz"
        squareContainer.innerHTML += `<div class="square"> fizz </div>`;
    } else if (i % 5 ===0){
        // se i è multiplo di 5 stampa "buzz"
        squareContainer.innerHTML += `<div class="square"> buzz </div>`;
    }else {
        squareContainer.innerHTML += `<div class="square"> ${i} </div>`;
    }
};

